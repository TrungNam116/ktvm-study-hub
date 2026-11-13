// app.js - Trung tâm điều khiển toàn bộ ứng dụng Ôn tập Kinh tế Vĩ mô

// Global State
const AppState = {
  activeTab: 'theory', // 'theory', 'models', 'quiz', 'exam', 'mistakes', 'flashcards'
  currentChapter: 10,
  searchQuery: '',
  
  // Storage
  userAnswers: {},     // { [qId]: selectedOpt }
  flaggedQuestions: new Set(), // Set of qIds
  incorrectQuestions: new Set(), // Set of qIds
  examHistory: [],

  // Chapter Quiz filter
  quizFilter: 'all', // 'all', 'unanswered', 'correct', 'incorrect', 'flagged'
  quizPage: 1,
  pageSize: 20,

  // Exam state
  examActive: false,
  examQuestions: [],
  examAnswers: {},
  examTimerInterval: null,
  examRemainingSeconds: 0,
  examTotalSeconds: 0,

  // Flashcards state
  fcChapter: 10,
  fcIndex: 0,
  fcFlipped: false,

  // Active Model State
  activeModel: 'ad-as',
  modelStates: {
    'ad-as': { deltaAD: 0, deltaSRAS: 0, deltaLRAS: 0 },
    'money-market': { deltaMS: 0, deltaMD: 0 },
    'is-lm': { deltaIS: 0, deltaLM: 0 },
    'phillips-curve': { deltaExpInf: 0, deltaAD: 0 },
    'loanable-funds': { deltaS: 0, deltaI: 0 },
    'open-economy': { deltaS: 0, deltaNX: 0, deltaFlight: 0 }
  },

  // Highlighting & Personal Notes
  highlights: {}, // { [chapter]: [ { id, text, color, note, createdAt } ] }
  chapterNotes: {}, // { [chapter]: string }
  activeSelection: null, // { range, text }
  selectedHighlightId: null
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  setupNavigation();
  setupSearch();
  setupModelControls();
  setupHighlightListener();
  renderApp();
});

// LocalStorage helpers
function loadFromLocalStorage() {
  try {
    const savedAns = localStorage.getItem('ktvm_user_answers');
    if (savedAns) AppState.userAnswers = JSON.parse(savedAns);

    const savedFlags = localStorage.getItem('ktvm_flagged');
    if (savedFlags) AppState.flaggedQuestions = new Set(JSON.parse(savedFlags));

    const savedMistakes = localStorage.getItem('ktvm_mistakes');
    if (savedMistakes) AppState.incorrectQuestions = new Set(JSON.parse(savedMistakes));

    const savedExams = localStorage.getItem('ktvm_exam_history');
    if (savedExams) AppState.examHistory = JSON.parse(savedExams);

    const savedHL = localStorage.getItem('ktvm_highlights');
    if (savedHL) AppState.highlights = JSON.parse(savedHL);

    const savedNotes = localStorage.getItem('ktvm_chapter_notes');
    if (savedNotes) AppState.chapterNotes = JSON.parse(savedNotes);
  } catch (e) {
    console.error('Lỗi khi đọc LocalStorage:', e);
  }
}

function saveToLocalStorage() {
  try {
    localStorage.setItem('ktvm_user_answers', JSON.stringify(AppState.userAnswers));
    localStorage.setItem('ktvm_flagged', JSON.stringify(Array.from(AppState.flaggedQuestions)));
    localStorage.setItem('ktvm_mistakes', JSON.stringify(Array.from(AppState.incorrectQuestions)));
    localStorage.setItem('ktvm_exam_history', JSON.stringify(AppState.examHistory));
    localStorage.setItem('ktvm_highlights', JSON.stringify(AppState.highlights));
    localStorage.setItem('ktvm_chapter_notes', JSON.stringify(AppState.chapterNotes));
  } catch (e) {
    console.error('Lỗi khi lưu LocalStorage:', e);
  }
}

function saveHighlightsToLocalStorage() {
  try {
    localStorage.setItem('ktvm_highlights', JSON.stringify(AppState.highlights));
    localStorage.setItem('ktvm_chapter_notes', JSON.stringify(AppState.chapterNotes));
  } catch (e) {
    console.error('Lỗi khi lưu highlights:', e);
  }
}

// Navigation Setup
function setupNavigation() {
  document.querySelectorAll('[data-nav-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.getAttribute('data-nav-tab');
      switchTab(tab);
    });
  });
}

function switchTab(tab) {
  AppState.activeTab = tab;
  document.querySelectorAll('[data-nav-tab]').forEach(btn => {
    const isCurrent = btn.getAttribute('data-nav-tab') === tab;
    btn.classList.toggle('nav-active', isCurrent);
  });

  document.querySelectorAll('.tab-content-panel').forEach(panel => {
    panel.classList.toggle('hidden', panel.id !== `tab-${tab}`);
  });

  renderApp();
}

function renderApp() {
  renderStatsHeader();
  renderChapterSelector();

  switch (AppState.activeTab) {
    case 'theory':
      renderTheoryTab();
      break;
    case 'models':
      renderModelsTab();
      break;
    case 'quiz':
      renderQuizTab();
      break;
    case 'exam':
      renderExamTab();
      break;
    case 'mistakes':
      renderMistakesTab();
      break;
    case 'flashcards':
      renderFlashcardsTab();
      break;
  }

  // Render KaTeX formulas if available
  if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
      ],
      throwOnError: false
    });
  }
}

// Top Stats Header
function renderStatsHeader() {
  const totalQuestions = window.QUIZ_DATA ? window.QUIZ_DATA.length : 1924;
  const answeredCount = Object.keys(AppState.userAnswers).length;
  let correctCount = 0;
  
  if (window.QUIZ_DATA) {
    window.QUIZ_DATA.forEach(q => {
      if (AppState.userAnswers[q.id] && AppState.userAnswers[q.id].toLowerCase() === q.answer.toLowerCase()) {
        correctCount++;
      }
    });
  }

  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  const statTotal = document.getElementById('stat-total-q');
  const statAnswered = document.getElementById('stat-answered-q');
  const statAccuracy = document.getElementById('stat-accuracy');
  const statMistakes = document.getElementById('stat-mistakes-count');
  const statFlags = document.getElementById('stat-flagged-count');

  if (statTotal) statTotal.textContent = totalQuestions.toLocaleString();
  if (statAnswered) statAnswered.textContent = answeredCount.toLocaleString();
  if (statAccuracy) statAccuracy.textContent = `${accuracy}% (${correctCount}/${answeredCount})`;
  if (statMistakes) statMistakes.textContent = AppState.incorrectQuestions.size.toLocaleString();
  if (statFlags) statFlags.textContent = AppState.flaggedQuestions.size.toLocaleString();
}

// Chapter Selector Bar
function renderChapterSelector() {
  const container = document.getElementById('chapter-selector-bar');
  if (!container || !window.THEORY_DATA) return;

  container.innerHTML = window.THEORY_DATA.map(ch => {
    const isSelected = ch.chapter === AppState.currentChapter;
    return `
      <button 
        onclick="selectChapter(${ch.chapter})" 
        class="px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
          isSelected 
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
        }">
        Chương ${ch.chapter}
      </button>
    `;
  }).join('');
}

function selectChapter(ch) {
  AppState.currentChapter = ch;
  AppState.quizPage = 1;
  AppState.fcChapter = ch;
  AppState.fcIndex = 0;
  AppState.fcFlipped = false;
  renderApp();
}

// -------------------------------------------------------------
// 1. THEORY TAB
// -------------------------------------------------------------
function renderTheoryTab() {
  const container = document.getElementById('theory-content');
  if (!container || !window.THEORY_DATA) return;

  const chData = window.THEORY_DATA.find(c => c.chapter === AppState.currentChapter) || window.THEORY_DATA[0];

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Chapter Header Card -->
      <div class="bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 text-white p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden">
        <div class="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="flex flex-wrap items-center justify-between gap-4 relative z-10">
          <div>
            <span class="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              ${chData.badge}
            </span>
            <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight">${chData.title}</h2>
            <p class="text-blue-100 mt-2 text-sm max-w-2xl leading-relaxed">${chData.description}</p>
          </div>
          ${chData.modelId ? `
            <div class="flex items-center gap-2">
              <button onclick="scrollToInlineModel('${chData.modelId}')" class="flex items-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-xl font-bold text-xs md:text-sm shadow-md transition-all transform hover:-translate-y-0.5">
                <span>📈 Cuộn đến đồ thị trong bài ↓</span>
              </button>
              <button onclick="goToModel('${chData.modelId}')" title="Mở tab đồ thị độc lập" class="flex items-center gap-1.5 px-3 py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-xl font-semibold text-xs transition-colors">
                <span>Tab đồ thị ↗</span>
              </button>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- PHẦN 1: BÀI GIẢNG CHUYÊN SÂU TOÀN BỘ CHƯƠNG (GIÁO TRÌNH CHUẨN SÁCH GIÁO KHOA) -->
      <div class="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div class="w-2.5 h-8 bg-blue-600 rounded-full"></div>
          <div>
            <h3 class="text-lg md:text-xl font-extrabold text-slate-900">PHẦN 1: BÀI GIẢNG TOÀN VĂN & CHUYÊN SÂU TOÀN CHƯƠNG</h3>
            <p class="text-xs text-slate-500 mt-0.5">Nội dung học tập chuyên sâu đầy đủ như sách giáo khoa - Đọc kỹ toàn bộ trước khi xem tóm tắt</p>
          </div>
        </div>

        ${chData.fullTextbook && chData.fullTextbook.length > 0 ? chData.fullTextbook.map((sec, idx) => `
          <div class="border-b border-slate-100 last:border-b-0 pb-6 last:pb-0">
            <h4 class="text-base font-extrabold text-blue-950 flex items-center gap-2 mb-3">
              <span class="w-6 h-6 rounded-md bg-blue-50 text-blue-700 text-xs flex items-center justify-center font-bold flex-shrink-0 border border-blue-200/60">${idx + 1}</span>
              <span>${sec.heading}</span>
            </h4>
            <div class="text-slate-700 text-sm leading-relaxed space-y-3">
              ${sec.content}
            </div>
          </div>
        `).join('') : '<p class="text-xs text-slate-400">Đang cập nhật nội dung giáo trình...</p>'}
      </div>

      <!-- PHẦN 2: TỔNG KẾT BÀI HỌC & KIẾN THỨC CÔ ĐỌNG CẦN NHỚ -->
      ${chData.summaryHighlights && chData.summaryHighlights.length > 0 ? `
        <div class="bg-gradient-to-br from-indigo-50/70 to-blue-50/70 p-6 rounded-2xl border border-indigo-200/80 shadow-sm">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">📌</span>
            <h3 class="text-base md:text-lg font-bold text-indigo-950">PHẦN 2: TỔNG KẾT BÀI HỌC & KIẾN THỨC CÔ ĐỌNG SAU BUỔI HỌC</h3>
          </div>
          <p class="text-xs text-indigo-800/80 mb-3">Những điểm chốt quan trọng nhất cần ghi nhớ để chuẩn bị thi:</p>
          <ul class="space-y-2">
            ${chData.summaryHighlights.map(pt => `
              <li class="flex items-start gap-2.5 text-xs md:text-sm text-slate-800">
                <span class="text-indigo-600 font-bold mt-0.5">✓</span>
                <span class="leading-relaxed font-medium">${pt}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- PHẦN 3: CÁC THUẬT NGỮ & KHÁI NIỆM THEN CHỐT -->
      <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-2.5 h-6 bg-blue-600 rounded-full"></div>
          <h3 class="text-base md:text-lg font-bold text-slate-900">PHẦN 3: CÁC KHÁI NIỆM & THUẬT NGỮ THEN CHỐT</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${chData.keyConcepts.map(c => `
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/60 hover:border-blue-300 transition-colors">
              <h4 class="font-bold text-blue-900 text-sm mb-1">${c.term}</h4>
              <p class="text-xs text-slate-600 leading-relaxed">${c.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- PHẦN 4: HỆ THỐNG CÔNG THỨC & PHƯƠNG PHÁP TÍNH TOÁN -->
      <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-2.5 h-6 bg-emerald-600 rounded-full"></div>
          <h3 class="text-base md:text-lg font-bold text-slate-900">PHẦN 4: HỆ THỐNG CÔNG THỨC & TÍNH TOÁN</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${chData.formulas.map(f => `
            <div class="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 flex flex-col justify-between">
              <div>
                <span class="text-xs font-semibold text-emerald-800 uppercase tracking-wide block mb-1">${f.name}</span>
                <div class="text-center py-3 text-emerald-950 font-mono text-base bg-white/80 rounded-lg border border-emerald-200/60 my-2 shadow-xs">
                  $$${f.formula}$$
                </div>
              </div>
              <p class="text-xs text-slate-500 mt-2 italic">${f.note}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- PHẦN 5: CÁC BẪY TRẮC NGHIỆM ĐIỂN HÌNH -->
      <div class="bg-gradient-to-br from-rose-50 to-amber-50 p-6 rounded-2xl border border-rose-200/80 shadow-sm">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xl">⚠️</span>
          <h3 class="text-base md:text-lg font-bold text-rose-900">PHẦN 5: CÁC BẪY TRẮC NGHIỆM HAY GẶP (CỰC KỲ QUAN TRỌNG)</h3>
        </div>
        <ul class="space-y-2.5">
          ${chData.traps.map(t => `
            <li class="flex items-start gap-2.5 text-xs md:text-sm text-slate-800">
              <span class="text-rose-500 font-bold mt-0.5">•</span>
              <span class="leading-relaxed">${t}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- PHẦN 6: SỔ TAY GHI CHÚ CÁ NHÂN CỦA TÔI CHO CHƯƠNG NÀY -->
      <div class="bg-white p-6 md:p-8 rounded-2xl border border-blue-200 shadow-sm space-y-4">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">✍️</span>
            <div>
              <h3 class="text-base md:text-lg font-bold text-slate-900">SỔ TAY GHI CHÚ CÁ NHÂN CHO CHƯƠNG ${chData.chapter}</h3>
              <p class="text-xs text-slate-500">Mọi ghi chú bạn gõ ở đây sẽ được tự động lưu vào máy của bạn</p>
            </div>
          </div>
          <span class="text-xs text-emerald-600 font-semibold">✓ Tự động lưu</span>
        </div>
        <textarea 
          id="page-chapter-note" 
          rows="5" 
          oninput="handleAutoSaveChapterNote(this.value)"
          placeholder="Nhập ghi chú cá nhân, tóm tắt bài học, công thức cần nhớ cho chương này..." 
          class="w-full text-sm p-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none leading-relaxed transition-all"
        >${AppState.chapterNotes[chData.chapter] || ''}</textarea>
        
        <div class="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>💡 Mẹo: Bạn có thể <strong>bôi đen bất kỳ đoạn văn bản nào</strong> trong bài đọc để highlight 3 màu (Vàng, Xanh lá, Cam) và gắn ghi chú!</span>
          <button onclick="toggleNotesDrawer()" class="text-blue-600 font-bold hover:underline">Mở danh sách Highlight & Ghi chú →</button>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button onclick="goToPracticeChapter(${chData.chapter})" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md transition-all">
          Làm ngay bộ câu hỏi trắc nghiệm Chương ${chData.chapter} →
        </button>
        <button onclick="goToFlashcards(${chData.chapter})" class="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-sm transition-all">
          Lật thẻ Flashcard Chương ${chData.chapter}
        </button>
      </div>
    </div>
  `;

  // Mount inline interactive models directly inside the textbook sections
  mountInlineModels();

  // Restore and bind highlights for this chapter immediately
  restoreChapterHighlights(chData.chapter);
}


function scrollToInlineModel(modelId) {
  const target = document.querySelector(`[data-inline-model="${modelId}"]`) || document.getElementById(`canvas-inline-${modelId}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.classList.add('ring-4', 'ring-amber-400');
    setTimeout(() => {
      target.classList.remove('ring-4', 'ring-amber-400');
    }, 1800);
  } else {
    goToModel(modelId);
  }
}

function goToModel(modelId) {
  AppState.activeModel = modelId;
  switchTab('models');
}

function goToPracticeChapter(ch) {
  AppState.currentChapter = ch;
  AppState.quizFilter = 'all';
  AppState.quizPage = 1;
  switchTab('quiz');
}

function goToFlashcards(ch) {
  AppState.fcChapter = ch;
  AppState.fcIndex = 0;
  AppState.fcFlipped = false;
  switchTab('flashcards');
}

// -------------------------------------------------------------
// 2. INTERACTIVE MODELS TAB
// -------------------------------------------------------------
function renderModelsTab() {
  const container = document.getElementById('models-content');
  if (!container) return;

  const modelsList = [
    { id: 'ad-as', name: 'Mô hình AD - AS', chapter: 'Chương 20', desc: 'Phân tích biến động ngắn hạn, cú sốc cung, cú sốc cầu và tự điều chỉnh dài hạn' },
    { id: 'money-market', name: 'Thị trường Tiền tệ & Lãi suất', chapter: 'Chương 16 & 21', desc: 'NHTW điều hành cung tiền MS, biến động cầu tiền MD và xác định lãi suất r' },
    { id: 'is-lm', name: 'Mô hình IS - LM', chapter: 'Chương 21', desc: 'Cân bằng đồng thời thị trường hàng hóa & tiền tệ, chính sách tài khóa & tiền tệ, hiện tượng lấn át' },
    { id: 'phillips-curve', name: 'Đường cong Phillips', chapter: 'Chương 22', desc: 'Đánh đổi ngắn hạn giữa lạm phát & thất nghiệp, vai trò của lạm phát kỳ vọng và cú sốc cung' },
    { id: 'loanable-funds', name: 'Thị trường Vốn vay', chapter: 'Chương 13', desc: 'Tiết kiệm, đầu tư, thâm hụt ngân sách chính phủ và hiện tượng lấn át đầu tư tư nhân' },
    { id: 'open-economy', name: 'Nền kinh tế Mở & Ngoại hối', chapter: 'Chương 18 & 19', desc: 'Mô hình 2 thị trường: Vốn vay & Ngoại hối, Thâm hụt kép, Chính sách thương mại & Tháo chạy vốn' }
  ];

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Model Picker Pills -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        ${modelsList.map(m => `
          <button 
            onclick="switchModel('${m.id}')" 
            class="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
              AppState.activeModel === m.id
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }">
            <span>${m.name}</span>
            <span class="ml-1 opacity-75 font-normal">(${m.chapter})</span>
          </button>
        `).join('')}
      </div>

      <!-- Active Model Sandbox -->
      <div id="model-sandbox-card" class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        ${renderActiveModelLayout(AppState.activeModel)}
      </div>
    </div>
  `;

  // Render the canvas after DOM injection
  setTimeout(() => {
    drawActiveModel();
  }, 50);
}

function switchModel(modelId) {
  AppState.activeModel = modelId;
  renderModelsTab();
}

function renderActiveModelLayout(modelId) {
  switch (modelId) {
    case 'ad-as':
      return `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2">
            <div class="flex items-center justify-between mb-3">
              <div>
                <h3 class="font-extrabold text-slate-900 text-lg">Mô hình Tổng cung - Tổng cầu (AD - AS)</h3>
                <p class="text-xs text-slate-500">Mô hình phân tích dao động kinh tế ngắn hạn và dài hạn</p>
              </div>
              <button onclick="resetModelState('ad-as')" class="text-xs text-slate-500 hover:text-blue-600 font-medium">↺ Đặt lại đồ thị</button>
            </div>
            <div class="bg-slate-50 rounded-xl p-3 border border-slate-200/80 flex justify-center">
              <canvas id="canvas-model" width="620" height="420" class="w-full max-w-[620px] h-auto"></canvas>
            </div>
          </div>

          <!-- Controls & Explanations -->
          <div class="space-y-4">
            <h4 class="font-bold text-sm text-slate-800">Kịch bản Chính sách & Cú sốc:</h4>
            <div class="grid grid-cols-1 gap-2">
              <button onclick="applyADASScenario('fiscal_exp')" class="p-2.5 text-left rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-xs font-semibold text-blue-900 transition-colors">
                🏛️ Tài khóa mở rộng (G↑ hoặc T↓)
              </button>
              <button onclick="applyADASScenario('monetary_exp')" class="p-2.5 text-left rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold text-emerald-900 transition-colors">
                💵 Tiền tệ mở rộng (NHTW tăng MS)
              </button>
              <button onclick="applyADASScenario('oil_shock')" class="p-2.5 text-left rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-xs font-semibold text-rose-900 transition-colors">
                🛢️ Cú sốc cung bất lợi (Giá dầu tăng vọt)
              </button>
              <button onclick="applyADASScenario('long_run_adjust')" class="p-2.5 text-left rounded-lg bg-purple-50 hover:bg-purple-100 border border-purple-200 text-xs font-semibold text-purple-900 transition-colors">
                ⏳ Tự điều chỉnh dài hạn qua tiền lương W
              </button>
            </div>

            <!-- Manual Sliders -->
            <div class="pt-3 border-t border-slate-200 space-y-3">
              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Dịch chuyển Tổng cầu (AD):</span>
                  <span id="label-ad-shift" class="text-blue-600">0</span>
                </div>
                <input type="range" min="-50" max="50" value="${AppState.modelStates['ad-as'].deltaAD}" id="slider-ad" oninput="updateADShift(this.value)" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600">
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Dịch chuyển Tổng cung ngắn hạn (SRAS):</span>
                  <span id="label-sras-shift" class="text-rose-600">0</span>
                </div>
                <input type="range" min="-50" max="50" value="${AppState.modelStates['ad-as'].deltaSRAS}" id="slider-sras" oninput="updateSRASShift(this.value)" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600">
              </div>
            </div>

            <!-- Dynamic explanation box -->
            <div id="model-explanation-box" class="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              ${getADASExplanation()}
            </div>
          </div>
        </div>
      `;

    case 'money-market':
      return `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2">
            <div class="flex items-center justify-between mb-3">
              <div>
                <h3 class="font-extrabold text-slate-900 text-lg">Thị trường Tiền tệ & Lãi suất Cân bằng</h3>
                <p class="text-xs text-slate-500">Lý thuyết ưa thích thanh khoản của Keynes</p>
              </div>
              <button onclick="resetModelState('money-market')" class="text-xs text-slate-500 hover:text-blue-600 font-medium">↺ Đặt lại</button>
            </div>
            <div class="bg-slate-50 rounded-xl p-3 border border-slate-200/80 flex justify-center">
              <canvas id="canvas-model" width="620" height="420" class="w-full max-w-[620px] h-auto"></canvas>
            </div>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-sm text-slate-800">Hành động của NHTW & Nền kinh tế:</h4>
            <div class="grid grid-cols-1 gap-2">
              <button onclick="applyMoneyScenario('omo_buy')" class="p-2.5 text-left rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-200 text-xs font-semibold text-sky-900 transition-colors">
                🏦 NHTW Mua trái phiếu chính phủ (OMO Mua)
              </button>
              <button onclick="applyMoneyScenario('omo_sell')" class="p-2.5 text-left rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-xs font-semibold text-amber-900 transition-colors">
                📉 NHTW Bán trái phiếu / Tăng lãi suất chiết khấu
              </button>
              <button onclick="applyMoneyScenario('price_surge')" class="p-2.5 text-left rounded-lg bg-purple-50 hover:bg-purple-100 border border-purple-200 text-xs font-semibold text-purple-900 transition-colors">
                📈 Mức giá P hoặc Sản lượng Y tăng → Cầu tiền MD↑
              </button>
            </div>
            <div class="pt-3 border-t border-slate-200 space-y-3">
              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Cung tiền NHTW (MS):</span>
                  <span id="label-ms-shift" class="text-sky-600">${AppState.modelStates['money-market'].deltaMS}</span>
                </div>
                <input type="range" min="-50" max="50" value="${AppState.modelStates['money-market'].deltaMS}" oninput="updateMSShift(this.value)" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600">
              </div>
              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Cầu tiền (MD):</span>
                  <span id="label-md-shift" class="text-purple-600">${AppState.modelStates['money-market'].deltaMD}</span>
                </div>
                <input type="range" min="-50" max="50" value="${AppState.modelStates['money-market'].deltaMD}" oninput="updateMDShift(this.value)" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600">
              </div>
            </div>
            <div id="model-explanation-box" class="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              ${getMoneyExplanation()}
            </div>
          </div>
        </div>
      `;

    case 'is-lm':
      return `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2">
            <div class="flex items-center justify-between mb-3">
              <div>
                <h3 class="font-extrabold text-slate-900 text-lg">Mô hình IS - LM</h3>
                <p class="text-xs text-slate-500">Cân bằng đồng thời thị trường hàng hóa (IS) và thị trường tiền tệ (LM)</p>
              </div>
              <button onclick="resetModelState('is-lm')" class="text-xs text-slate-500 hover:text-blue-600 font-medium">↺ Đặt lại</button>
            </div>
            <div class="bg-slate-50 rounded-xl p-3 border border-slate-200/80 flex justify-center">
              <canvas id="canvas-model" width="620" height="420" class="w-full max-w-[620px] h-auto"></canvas>
            </div>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-sm text-slate-800">Kịch bản phối hợp chính sách:</h4>
            <div class="grid grid-cols-1 gap-2">
              <button onclick="applyISLMScenario('fiscal_exp')" class="p-2.5 text-left rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-xs font-semibold text-blue-900 transition-colors">
                🏛️ Tài khóa mở rộng (IS dịch phải → Y↑, r↑: Lấn át)
              </button>
              <button onclick="applyISLMScenario('monetary_exp')" class="p-2.5 text-left rounded-lg bg-orange-50 hover:bg-orange-100 border border-orange-200 text-xs font-semibold text-orange-900 transition-colors">
                💵 Tiền tệ mở rộng (LM dịch phải → Y↑, r↓)
              </button>
              <button onclick="applyISLMScenario('policy_mix')" class="p-2.5 text-left rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold text-emerald-900 transition-colors">
                🤝 Phối hợp Tài khóa + Tiền tệ (Y tăng mạnh, r ổn định)
              </button>
            </div>
            <div class="pt-3 border-t border-slate-200 space-y-3">
              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Đường IS (Thị trường hàng hóa):</span>
                  <span id="label-is-shift" class="text-blue-600">${AppState.modelStates['is-lm'].deltaIS}</span>
                </div>
                <input type="range" min="-50" max="50" value="${AppState.modelStates['is-lm'].deltaIS}" oninput="updateISShift(this.value)" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600">
              </div>
              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Đường LM (Thị trường tiền tệ):</span>
                  <span id="label-lm-shift" class="text-orange-600">${AppState.modelStates['is-lm'].deltaLM}</span>
                </div>
                <input type="range" min="-50" max="50" value="${AppState.modelStates['is-lm'].deltaLM}" oninput="updateLMShift(this.value)" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600">
              </div>
            </div>
            <div id="model-explanation-box" class="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              ${getISLMExplanation()}
            </div>
          </div>
        </div>
      `;

    case 'phillips-curve':
      return `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2">
            <div class="flex items-center justify-between mb-3">
              <div>
                <h3 class="font-extrabold text-slate-900 text-lg">Đường cong Phillips</h3>
                <p class="text-xs text-slate-500">Mối quan hệ đánh đổi giữa Lạm phát (π) và Thất nghiệp (u)</p>
              </div>
              <button onclick="resetModelState('phillips-curve')" class="text-xs text-slate-500 hover:text-blue-600 font-medium">↺ Đặt lại</button>
            </div>
            <div class="bg-slate-50 rounded-xl p-3 border border-slate-200/80 flex justify-center">
              <canvas id="canvas-model" width="620" height="420" class="w-full max-w-[620px] h-auto"></canvas>
            </div>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-sm text-slate-800">Các tình huống thực tế:</h4>
            <div class="grid grid-cols-1 gap-2">
              <button onclick="applyPhillipsScenario('ad_boom')" class="p-2.5 text-left rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-xs font-semibold text-indigo-900 transition-colors">
                🚀 Bùng nổ Tổng cầu AD (u↓, π↑: Đi lên dọc SRPC)
              </button>
              <button onclick="applyPhillipsScenario('supply_shock')" class="p-2.5 text-left rounded-lg bg-pink-50 hover:bg-pink-100 border border-pink-200 text-xs font-semibold text-pink-900 transition-colors">
                💥 Cú sốc cung bất lợi (SRPC dịch lên/phải)
              </button>
              <button onclick="applyPhillipsScenario('disinflation')" class="p-2.5 text-left rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold text-emerald-900 transition-colors">
                📉 Giảm lạm phát thành công (Kỳ vọng π^e giảm)
              </button>
            </div>
            <div class="pt-3 border-t border-slate-200 space-y-3">
              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Biến động Tổng cầu (Di chuyển dọc SRPC):</span>
                  <span id="label-phil-ad" class="text-indigo-600">${AppState.modelStates['phillips-curve'].deltaAD}</span>
                </div>
                <input type="range" min="-50" max="50" value="${AppState.modelStates['phillips-curve'].deltaAD}" oninput="updatePhilAD(this.value)" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600">
              </div>
              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Lạm phát kỳ vọng π^e (Dịch chuyển SRPC):</span>
                  <span id="label-phil-exp" class="text-pink-600">${AppState.modelStates['phillips-curve'].deltaExpInf}</span>
                </div>
                <input type="range" min="-50" max="50" value="${AppState.modelStates['phillips-curve'].deltaExpInf}" oninput="updatePhilExp(this.value)" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-pink-600">
              </div>
            </div>
            <div id="model-explanation-box" class="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              ${getPhillipsExplanation()}
            </div>
          </div>
        </div>
      `;

    case 'loanable-funds':
      return `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2">
            <div class="flex items-center justify-between mb-3">
              <div>
                <h3 class="font-extrabold text-slate-900 text-lg">Thị trường Vốn vay (Chương 13)</h3>
                <p class="text-xs text-slate-500">Cung tiết kiệm (S) và Cầu đầu tư (I) quyết định lãi suất thực r</p>
              </div>
              <button onclick="resetModelState('loanable-funds')" class="text-xs text-slate-500 hover:text-blue-600 font-medium">↺ Đặt lại</button>
            </div>
            <div class="bg-slate-50 rounded-xl p-3 border border-slate-200/80 flex justify-center">
              <canvas id="canvas-model" width="620" height="420" class="w-full max-w-[620px] h-auto"></canvas>
            </div>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-sm text-slate-800">Chính sách của Chính phủ:</h4>
            <div class="grid grid-cols-1 gap-2">
              <button onclick="applyLoanScenario('budget_deficit')" class="p-2.5 text-left rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-xs font-semibold text-rose-900 transition-colors">
                💸 Thâm hụt ngân sách (S dịch trái → r↑, I lấn át)
              </button>
              <button onclick="applyLoanScenario('save_incentive')" class="p-2.5 text-left rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold text-emerald-900 transition-colors">
                💰 Khuyến khích tiết kiệm (S dịch phải → r↓, Q↑)
              </button>
              <button onclick="applyLoanScenario('invest_credit')" class="p-2.5 text-left rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-xs font-semibold text-blue-900 transition-colors">
                🏗️ Tín dụng thuế đầu tư (Cầu I dịch phải → r↑, Q↑)
              </button>
            </div>
            <div class="pt-3 border-t border-slate-200 space-y-3">
              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Cung tiết kiệm (S):</span>
                  <span id="label-loan-s" class="text-emerald-600">${AppState.modelStates['loanable-funds'].deltaS}</span>
                </div>
                <input type="range" min="-50" max="50" value="${AppState.modelStates['loanable-funds'].deltaS}" oninput="updateLoanS(this.value)" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600">
              </div>
              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Cầu đầu tư (I):</span>
                  <span id="label-loan-i" class="text-blue-600">${AppState.modelStates['loanable-funds'].deltaI}</span>
                </div>
                <input type="range" min="-50" max="50" value="${AppState.modelStates['loanable-funds'].deltaI}" oninput="updateLoanI(this.value)" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600">
              </div>
            </div>
            <div id="model-explanation-box" class="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              ${getLoanExplanation()}
            </div>
          </div>
        </div>
      `;

    case 'open-economy':
      return `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2">
            <div class="flex items-center justify-between mb-3">
              <div>
                <h3 class="font-extrabold text-slate-900 text-lg">Mô hình Nền kinh tế Mở (Chương 18 & 19)</h3>
                <p class="text-xs text-slate-500">Cân bằng đồng thời: Thị trường Vốn vay (trái) & Thị trường Ngoại hối (phải)</p>
              </div>
              <button onclick="resetModelState('open-economy')" class="text-xs text-slate-500 hover:text-blue-600 font-medium">↺ Đặt lại</button>
            </div>
            <div class="bg-slate-50 rounded-xl p-3 border border-slate-200/80 flex justify-center">
              <canvas id="canvas-model" width="620" height="420" class="w-full max-w-[620px] h-auto"></canvas>
            </div>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-sm text-slate-800">Các biến cố vĩ mô nền kinh tế mở:</h4>
            <div class="grid grid-cols-1 gap-2">
              <button onclick="applyOpenScenario('twin_deficits')" class="p-2.5 text-left rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-xs font-semibold text-rose-900 transition-colors">
                📉 Thâm hụt kép (Twin Deficits: Thâm hụt CP → Nhập siêu)
              </button>
              <button onclick="applyOpenScenario('trade_policy')" class="p-2.5 text-left rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-xs font-semibold text-indigo-900 transition-colors">
                🛡️ Chính sách thuế quan/Hạn ngạch nhập khẩu
              </button>
              <button onclick="applyOpenScenario('capital_flight')" class="p-2.5 text-left rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-xs font-semibold text-amber-900 transition-colors">
                🚨 Tháo chạy vốn (Capital Flight: Bất ổn chính trị)
              </button>
            </div>
            <div class="pt-3 border-t border-slate-200 space-y-3">
              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Tiết kiệm quốc gia (S):</span>
                  <span id="label-open-s" class="text-emerald-600">${AppState.modelStates['open-economy'].deltaS}</span>
                </div>
                <input type="range" min="-50" max="50" value="${AppState.modelStates['open-economy'].deltaS}" oninput="updateOpenS(this.value)" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600">
              </div>
              <div>
                <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Dòng vốn tháo chạy (NCO):</span>
                  <span id="label-open-flight" class="text-amber-600">${AppState.modelStates['open-economy'].deltaFlight}</span>
                </div>
                <input type="range" min="0" max="50" value="${AppState.modelStates['open-economy'].deltaFlight}" oninput="updateOpenFlight(this.value)" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600">
              </div>
            </div>
            <div id="model-explanation-box" class="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              ${getOpenExplanation()}
            </div>
          </div>
        </div>
      `;
  }
}

function drawModel(modelId) {
  if (!window.MacroModels) return;
  const state = AppState.modelStates[modelId];
  const targets = ['canvas-model', `canvas-inline-${modelId}`];

  targets.forEach(canvasId => {
    const el = document.getElementById(canvasId);
    if (!el) return;
    switch (modelId) {
      case 'ad-as':
        window.MacroModels.renderADAS(canvasId, state);
        break;
      case 'money-market':
        window.MacroModels.renderMoneyMarket(canvasId, state);
        break;
      case 'is-lm':
        window.MacroModels.renderISLM(canvasId, state);
        break;
      case 'phillips-curve':
        window.MacroModels.renderPhillips(canvasId, state);
        break;
      case 'loanable-funds':
        window.MacroModels.renderLoanableFunds(canvasId, state);
        break;
      case 'open-economy':
        window.MacroModels.renderOpenEconomy(canvasId, state);
        break;
    }
  });
}

function drawActiveModel() {
  drawModel(AppState.activeModel);
}

// Sliders and Scenario Handlers
function setupModelControls() {}

function resetModelState(modelId) {
  if (modelId === 'ad-as') AppState.modelStates['ad-as'] = { deltaAD: 0, deltaSRAS: 0, deltaLRAS: 0 };
  if (modelId === 'money-market') AppState.modelStates['money-market'] = { deltaMS: 0, deltaMD: 0 };
  if (modelId === 'is-lm') AppState.modelStates['is-lm'] = { deltaIS: 0, deltaLM: 0 };
  if (modelId === 'phillips-curve') AppState.modelStates['phillips-curve'] = { deltaExpInf: 0, deltaAD: 0 };
  if (modelId === 'loanable-funds') AppState.modelStates['loanable-funds'] = { deltaS: 0, deltaI: 0 };
  if (modelId === 'open-economy') AppState.modelStates['open-economy'] = { deltaS: 0, deltaNX: 0, deltaFlight: 0 };
  renderModelsTab();
}

// AD-AS functions
function updateADShift(val) {
  AppState.modelStates['ad-as'].deltaAD = parseInt(val);
  const lbl1 = document.getElementById('label-ad-shift');
  if (lbl1) lbl1.textContent = val;
  const lbl2 = document.getElementById('label-inline-ad-shift');
  if (lbl2) lbl2.textContent = val;
  drawModel('ad-as');
  updateExpBox(getADASExplanation(), 'ad-as');
}
function updateSRASShift(val) {
  AppState.modelStates['ad-as'].deltaSRAS = parseInt(val);
  const lbl1 = document.getElementById('label-sras-shift');
  if (lbl1) lbl1.textContent = val;
  const lbl2 = document.getElementById('label-inline-sras-shift');
  if (lbl2) lbl2.textContent = val;
  drawModel('ad-as');
  updateExpBox(getADASExplanation(), 'ad-as');
}
function applyADASScenario(type) {
  if (type === 'fiscal_exp' || type === 'monetary_exp') {
    AppState.modelStates['ad-as'].deltaAD = 35;
    AppState.modelStates['ad-as'].deltaSRAS = 0;
  } else if (type === 'oil_shock') {
    AppState.modelStates['ad-as'].deltaAD = 0;
    AppState.modelStates['ad-as'].deltaSRAS = -35;
  } else if (type === 'long_run_adjust') {
    AppState.modelStates['ad-as'].deltaAD = 35;
    AppState.modelStates['ad-as'].deltaSRAS = -35;
  }
  syncModelSliders('ad-as');
  drawModel('ad-as');
  updateExpBox(getADASExplanation(), 'ad-as');
  if (AppState.activeTab === 'models') renderModelsTab();
}
function getADASExplanation() {
  const { deltaAD, deltaSRAS } = AppState.modelStates['ad-as'];
  if (deltaAD === 0 && deltaSRAS === 0) {
    return `<strong>Trạng thái ban đầu:</strong> Nền kinh tế đang ở điểm cân bằng dài hạn E₀ (Giao điểm giữa AD, SRAS và LRAS). Sản lượng thực tế bằng sản lượng tự nhiên Y = Y_N, mức giá ổn định ở P₀.`;
  }
  if (deltaAD > 0 && deltaSRAS === 0) {
    return `<strong>Tổng cầu tăng (AD dịch phải):</strong><br>• Ngắn hạn: Sản lượng thực tế tăng (Y₁ > Y_N) và mức giá tăng (P₁ > P₀). Thất nghiệp giảm xuống dưới mức tự nhiên.<br>• Cơ chế: Chi tiêu chính phủ tăng, giảm thuế, hoặc NHTW bơm tiền làm tăng chi tiêu tiêu dùng và đầu tư.`;
  }
  if (deltaAD < 0 && deltaSRAS === 0) {
    return `<strong>Tổng cầu suy giảm (AD dịch trái):</strong><br>• Ngắn hạn: Cả sản lượng Y và mức giá P đều giảm. Nền kinh tế rơi vào <em>suy thoái</em>, tỷ lệ thất nghiệp tăng cao.`;
  }
  if (deltaSRAS < 0 && deltaAD === 0) {
    return `<strong>Cú sốc Tổng cung bất lợi (SRAS dịch trái):</strong><br>• Hiện tượng <strong>Lạm phát đình đốn (Stagflation)</strong>: Mức giá P TĂNG nhưng Sản lượng Y GIẢM.<br>• Nguyên nhân: Giá nguyên liệu, năng lượng (dầu mỏ) tăng vọt làm chi phí sản xuất biên của toàn bộ doanh nghiệp đội lên.`;
  }
  if (deltaAD > 0 && deltaSRAS < 0) {
    return `<strong>Điều chỉnh tự động trong dài hạn:</strong><br>Khi sản lượng tăng nóng trong ngắn hạn, thị trường lao động căng thẳng đẩy tiền lương danh nghĩa tăng lên. Chi phí tiền lương cao làm đường SRAS dịch sang trái, đưa sản lượng trở lại mức tự nhiên Y_N nhưng mức giá vĩnh viễn ở mức cao mới P₂.`;
  }
  return `Đang hiển thị tác động phối hợp giữa các cú sốc cung và cầu.`;
}

// Money Market functions
function updateMSShift(val) {
  AppState.modelStates['money-market'].deltaMS = parseInt(val);
  const lbl1 = document.getElementById('label-ms-shift');
  if (lbl1) lbl1.textContent = val;
  const lbl2 = document.getElementById('label-inline-ms-shift');
  if (lbl2) lbl2.textContent = val;
  drawModel('money-market');
  updateExpBox(getMoneyExplanation(), 'money-market');
}
function updateMDShift(val) {
  AppState.modelStates['money-market'].deltaMD = parseInt(val);
  const lbl1 = document.getElementById('label-md-shift');
  if (lbl1) lbl1.textContent = val;
  const lbl2 = document.getElementById('label-inline-md-shift');
  if (lbl2) lbl2.textContent = val;
  drawModel('money-market');
  updateExpBox(getMoneyExplanation(), 'money-market');
}
function applyMoneyScenario(type) {
  if (type === 'omo_buy') {
    AppState.modelStates['money-market'].deltaMS = 35;
    AppState.modelStates['money-market'].deltaMD = 0;
  } else if (type === 'omo_sell') {
    AppState.modelStates['money-market'].deltaMS = -35;
    AppState.modelStates['money-market'].deltaMD = 0;
  } else if (type === 'price_surge') {
    AppState.modelStates['money-market'].deltaMS = 0;
    AppState.modelStates['money-market'].deltaMD = 35;
  }
  syncModelSliders('money-market');
  drawModel('money-market');
  updateExpBox(getMoneyExplanation(), 'money-market');
  if (AppState.activeTab === 'models') renderModelsTab();
}
function getMoneyExplanation() {
  const { deltaMS, deltaMD } = AppState.modelStates['money-market'];
  if (deltaMS > 0) {
    return `<strong>NHTW Mở rộng Cung tiền (MS dịch phải):</strong><br>• Lãi suất cân bằng r GIẢM XUỐNG (từ r₀ xuống r₁).<br>• Cơ chế lan truyền: Lãi suất vay rẻ hơn kích thích doanh nghiệp vay đầu tư (I↑) và hộ gia đình vay mua sắm (C↑), đẩy Tổng cầu AD dịch sang phải.`;
  }
  if (deltaMS < 0) {
    return `<strong>NHTW Thắt chặt Cung tiền (MS dịch trái):</strong><br>• Lãi suất cân bằng r TĂNG LÊN.<br>• Cơ chế: Vay vốn đắt đỏ kìm hãm đầu tư và tiêu dùng, kéo giảm áp lực lạm phát trên thị trường.`;
  }
  if (deltaMD > 0) {
    return `<strong>Cầu tiền tăng (MD dịch lên):</strong><br>• Do mức giá P tăng hoặc Thu nhập quốc dân Y tăng → Nhu cầu giữ tiền mặt cho giao dịch tăng vọt.<br>• Lãi suất cân bằng r bị đẩy tăng cao.`;
  }
  return `Trạng thái cân bằng thị trường tiền tệ tại giao điểm MS = MD xác định lãi suất danh nghĩa và thực tế trong ngắn hạn.`;
}

// IS-LM functions
function updateISShift(val) {
  AppState.modelStates['is-lm'].deltaIS = parseInt(val);
  const lbl1 = document.getElementById('label-is-shift');
  if (lbl1) lbl1.textContent = val;
  const lbl2 = document.getElementById('label-inline-is-shift');
  if (lbl2) lbl2.textContent = val;
  drawModel('is-lm');
  updateExpBox(getISLMExplanation(), 'is-lm');
}
function updateLMShift(val) {
  AppState.modelStates['is-lm'].deltaLM = parseInt(val);
  const lbl1 = document.getElementById('label-lm-shift');
  if (lbl1) lbl1.textContent = val;
  const lbl2 = document.getElementById('label-inline-lm-shift');
  if (lbl2) lbl2.textContent = val;
  drawModel('is-lm');
  updateExpBox(getISLMExplanation(), 'is-lm');
}
function applyISLMScenario(type) {
  if (type === 'fiscal_exp') {
    AppState.modelStates['is-lm'].deltaIS = 35;
    AppState.modelStates['is-lm'].deltaLM = 0;
  } else if (type === 'monetary_exp') {
    AppState.modelStates['is-lm'].deltaIS = 0;
    AppState.modelStates['is-lm'].deltaLM = 35;
  } else if (type === 'policy_mix') {
    AppState.modelStates['is-lm'].deltaIS = 35;
    AppState.modelStates['is-lm'].deltaLM = 35;
  }
  syncModelSliders('is-lm');
  drawModel('is-lm');
  updateExpBox(getISLMExplanation(), 'is-lm');
  if (AppState.activeTab === 'models') renderModelsTab();
}
function getISLMExplanation() {
  const { deltaIS, deltaLM } = AppState.modelStates['is-lm'];
  if (deltaIS > 0 && deltaLM === 0) {
    return `<strong>Tài khóa mở rộng (IS dịch phải):</strong><br>• Chi tiêu chính phủ G tăng hoặc Thuế T giảm → Kích thích sản lượng Y tăng.<br>• Thu nhập tăng làm cầu tiền tăng, đẩy lãi suất r tăng (từ r₀ lên r₁). Lãi suất cao dẫn đến <strong>Hiệu ứng lấn át (Crowding-out)</strong>, làm kìm hãm một phần đầu tư tư nhân.`;
  }
  if (deltaIS === 0 && deltaLM > 0) {
    return `<strong>Tiền tệ mở rộng (LM dịch phải):</strong><br>• Cung tiền tăng làm giảm lãi suất r (từ r₀ xuống r₁).<br>• Lãi suất thấp kích thích đầu tư tư nhân, làm sản lượng Y tăng từ Y₀ lên Y₁.`;
  }
  if (deltaIS > 0 && deltaLM > 0) {
    return `<strong>Phối hợp chính sách hoàn hảo (Policy Mix):</strong><br>• Chính phủ tăng chi tiêu công (IS dịch phải) đồng thời NHTW bơm tiền hỗ trợ thanh khoản (LM dịch phải).<br>• Kết quả: Sản lượng Y tăng vọt mà lãi suất r vẫn được giữ ổn định, triệt tiêu hoàn toàn hiệu ứng lấn át!`;
  }
  return `Mô hình IS-LM tích hợp thị trường hàng hóa (IS) và tiền tệ (LM), giải thích tương tác giữa chính sách tài khóa và tiền tệ.`;
}

// Phillips functions
function updatePhilAD(val) {
  AppState.modelStates['phillips-curve'].deltaAD = parseInt(val);
  const lbl1 = document.getElementById('label-phil-ad');
  if (lbl1) lbl1.textContent = val;
  const lbl2 = document.getElementById('label-inline-phil-ad');
  if (lbl2) lbl2.textContent = val;
  drawModel('phillips-curve');
  updateExpBox(getPhillipsExplanation(), 'phillips-curve');
}
function updatePhilExp(val) {
  AppState.modelStates['phillips-curve'].deltaExpInf = parseInt(val);
  const lbl1 = document.getElementById('label-phil-exp');
  if (lbl1) lbl1.textContent = val;
  const lbl2 = document.getElementById('label-inline-phil-exp');
  if (lbl2) lbl2.textContent = val;
  drawModel('phillips-curve');
  updateExpBox(getPhillipsExplanation(), 'phillips-curve');
}
function applyPhillipsScenario(type) {
  if (type === 'ad_boom') {
    AppState.modelStates['phillips-curve'].deltaAD = 35;
    AppState.modelStates['phillips-curve'].deltaExpInf = 0;
  } else if (type === 'supply_shock') {
    AppState.modelStates['phillips-curve'].deltaAD = 0;
    AppState.modelStates['phillips-curve'].deltaExpInf = 35;
  } else if (type === 'disinflation') {
    AppState.modelStates['phillips-curve'].deltaAD = 0;
    AppState.modelStates['phillips-curve'].deltaExpInf = -35;
  }
  syncModelSliders('phillips-curve');
  drawModel('phillips-curve');
  updateExpBox(getPhillipsExplanation(), 'phillips-curve');
  if (AppState.activeTab === 'models') renderModelsTab();
}
function getPhillipsExplanation() {
  const { deltaAD, deltaExpInf } = AppState.modelStates['phillips-curve'];
  if (deltaAD > 0) {
    return `<strong>Bùng nổ Tổng cầu AD:</strong><br>• Điểm cân bằng di chuyển DỌC theo đường SRPC (từ A lên B): Tỷ lệ thất nghiệp giảm xuống (u < u_n), nhưng tỷ lệ lạm phát π tăng cao. Đây là sự đánh đổi trong ngắn hạn.`;
  }
  if (deltaExpInf > 0) {
    return `<strong>Cú sốc cung hoặc Lạm phát kỳ vọng tăng:</strong><br>• Toàn bộ đường SRPC DỊCH CHUYỂN SANG PHẢI / LÊN TRÊN.<br>• Tại mỗi mức thất nghiệp, tỷ lệ lạm phát đều cao hơn. Nền kinh tế đối mặt với tình thế nan giải lạm phát đình đốn.`;
  }
  if (deltaExpInf < 0) {
    return `<strong>Kiềm chế Lạm phát (Disinflation):</strong><br>• Khi NHTW kiên quyết cam kết và xây dựng uy tín chống lạm phát, lạm phát kỳ vọng π^e giảm xuống, kéo toàn bộ đường SRPC dịch chuyển xuống dưới!`;
  }
  return `Đường Phillips minh họa sự đánh đổi trong ngắn hạn giữa lạm phát và thất nghiệp, và sự thẳng đứng tại tỷ lệ tự nhiên u_n trong dài hạn (LRPC).`;
}

// Loanable funds functions
function updateLoanS(val) {
  AppState.modelStates['loanable-funds'].deltaS = parseInt(val);
  const lbl1 = document.getElementById('label-loan-s');
  if (lbl1) lbl1.textContent = val;
  const lbl2 = document.getElementById('label-inline-loan-s');
  if (lbl2) lbl2.textContent = val;
  drawModel('loanable-funds');
  updateExpBox(getLoanExplanation(), 'loanable-funds');
}
function updateLoanI(val) {
  AppState.modelStates['loanable-funds'].deltaI = parseInt(val);
  const lbl1 = document.getElementById('label-loan-i');
  if (lbl1) lbl1.textContent = val;
  const lbl2 = document.getElementById('label-inline-loan-i');
  if (lbl2) lbl2.textContent = val;
  drawModel('loanable-funds');
  updateExpBox(getLoanExplanation(), 'loanable-funds');
}
function applyLoanScenario(type) {
  if (type === 'budget_deficit') {
    AppState.modelStates['loanable-funds'].deltaS = -35;
    AppState.modelStates['loanable-funds'].deltaI = 0;
  } else if (type === 'save_incentive') {
    AppState.modelStates['loanable-funds'].deltaS = 35;
    AppState.modelStates['loanable-funds'].deltaI = 0;
  } else if (type === 'invest_credit') {
    AppState.modelStates['loanable-funds'].deltaS = 0;
    AppState.modelStates['loanable-funds'].deltaI = 35;
  }
  syncModelSliders('loanable-funds');
  drawModel('loanable-funds');
  updateExpBox(getLoanExplanation(), 'loanable-funds');
  if (AppState.activeTab === 'models') renderModelsTab();
}
function getLoanExplanation() {
  const { deltaS, deltaI } = AppState.modelStates['loanable-funds'];
  if (deltaS < 0) {
    return `<strong>Thâm hụt ngân sách chính phủ (S_pub < 0):</strong><br>• Cung tiết kiệm quốc gia S dịch sang TRÁI.<br>• Lãi suất thực r TĂNG, lượng vốn vay cân bằng GIẢM. Lãi suất cao lấn át (crowd out) các dự án đầu tư tư nhân, làm giảm tích lũy tư bản dài hạn.`;
  }
  if (deltaS > 0) {
    return `<strong>Chính sách khuyến khích tiết kiệm (Ưu đãi thuế):</strong><br>• Cung tiết kiệm S dịch sang PHẢI.<br>• Lãi suất thực r GIẢM XUỐNG, lượng vốn vay tăng lên, thúc đẩy đầu tư máy móc nhà xưởng.`;
  }
  if (deltaI > 0) {
    return `<strong>Tín dụng thuế đầu tư (Cầu I dịch phải):</strong><br>• Doanh nghiệp muốn vay nhiều hơn tại mỗi mức lãi suất.<br>• Cả lãi suất thực r và lượng vốn vay cân bằng Q đều TĂNG LÊN.`;
  }
  return `Thị trường vốn vay điều phối tiết kiệm và đầu tư trong nền kinh tế, quyết định lãi suất thực tế r.`;
}

// Open Economy functions
function updateOpenS(val) {
  AppState.modelStates['open-economy'].deltaS = parseInt(val);
  const lbl1 = document.getElementById('label-open-s');
  if (lbl1) lbl1.textContent = val;
  const lbl2 = document.getElementById('label-inline-open-s');
  if (lbl2) lbl2.textContent = val;
  drawModel('open-economy');
  updateExpBox(getOpenExplanation(), 'open-economy');
}
function updateOpenFlight(val) {
  AppState.modelStates['open-economy'].deltaFlight = parseInt(val);
  const lbl1 = document.getElementById('label-open-flight');
  if (lbl1) lbl1.textContent = val;
  const lbl2 = document.getElementById('label-inline-open-flight');
  if (lbl2) lbl2.textContent = val;
  drawModel('open-economy');
  updateExpBox(getOpenExplanation(), 'open-economy');
}
function applyOpenScenario(type) {
  if (type === 'twin_deficits') {
    AppState.modelStates['open-economy'].deltaS = -35;
    AppState.modelStates['open-economy'].deltaNX = 0;
    AppState.modelStates['open-economy'].deltaFlight = 0;
  } else if (type === 'trade_policy') {
    AppState.modelStates['open-economy'].deltaS = 0;
    AppState.modelStates['open-economy'].deltaNX = 35;
    AppState.modelStates['open-economy'].deltaFlight = 0;
  } else if (type === 'capital_flight') {
    AppState.modelStates['open-economy'].deltaS = 0;
    AppState.modelStates['open-economy'].deltaNX = 0;
    AppState.modelStates['open-economy'].deltaFlight = 40;
  }
  syncModelSliders('open-economy');
  drawModel('open-economy');
  updateExpBox(getOpenExplanation(), 'open-economy');
  if (AppState.activeTab === 'models') renderModelsTab();
}

function syncModelSliders(modelId) {
  const state = AppState.modelStates[modelId];
  if (modelId === 'ad-as') {
    const s1 = document.getElementById('slider-ad'); if (s1) s1.value = state.deltaAD;
    const s2 = document.getElementById('slider-sras'); if (s2) s2.value = state.deltaSRAS;
    const l1 = document.getElementById('label-ad-shift'); if (l1) l1.textContent = state.deltaAD;
    const l2 = document.getElementById('label-sras-shift'); if (l2) l2.textContent = state.deltaSRAS;
    const il1 = document.getElementById('label-inline-ad-shift'); if (il1) il1.textContent = state.deltaAD;
    const il2 = document.getElementById('label-inline-sras-shift'); if (il2) il2.textContent = state.deltaSRAS;
    const is1 = document.getElementById('slider-inline-ad'); if (is1) is1.value = state.deltaAD;
    const is2 = document.getElementById('slider-inline-sras'); if (is2) is2.value = state.deltaSRAS;
  } else if (modelId === 'money-market') {
    const is1 = document.getElementById('slider-inline-ms'); if (is1) is1.value = state.deltaMS;
    const is2 = document.getElementById('slider-inline-md'); if (is2) is2.value = state.deltaMD;
    const il1 = document.getElementById('label-inline-ms-shift'); if (il1) il1.textContent = state.deltaMS;
    const il2 = document.getElementById('label-inline-md-shift'); if (il2) il2.textContent = state.deltaMD;
  } else if (modelId === 'is-lm') {
    const is1 = document.getElementById('slider-inline-is'); if (is1) is1.value = state.deltaIS;
    const is2 = document.getElementById('slider-inline-lm'); if (is2) is2.value = state.deltaLM;
    const il1 = document.getElementById('label-inline-is-shift'); if (il1) il1.textContent = state.deltaIS;
    const il2 = document.getElementById('label-inline-lm-shift'); if (il2) il2.textContent = state.deltaLM;
  } else if (modelId === 'phillips-curve') {
    const is1 = document.getElementById('slider-inline-phil-ad'); if (is1) is1.value = state.deltaAD;
    const is2 = document.getElementById('slider-inline-phil-exp'); if (is2) is2.value = state.deltaExpInf;
    const il1 = document.getElementById('label-inline-phil-ad'); if (il1) il1.textContent = state.deltaAD;
    const il2 = document.getElementById('label-inline-phil-exp'); if (il2) il2.textContent = state.deltaExpInf;
  } else if (modelId === 'loanable-funds') {
    const is1 = document.getElementById('slider-inline-loan-s'); if (is1) is1.value = state.deltaS;
    const is2 = document.getElementById('slider-inline-loan-i'); if (is2) is2.value = state.deltaI;
    const il1 = document.getElementById('label-inline-loan-s'); if (il1) il1.textContent = state.deltaS;
    const il2 = document.getElementById('label-inline-loan-i'); if (il2) il2.textContent = state.deltaI;
  } else if (modelId === 'open-economy') {
    const is1 = document.getElementById('slider-inline-open-s'); if (is1) is1.value = state.deltaS;
    const is2 = document.getElementById('slider-inline-open-flight'); if (is2) is2.value = state.deltaFlight;
    const il1 = document.getElementById('label-inline-open-s'); if (il1) il1.textContent = state.deltaS;
    const il2 = document.getElementById('label-inline-open-flight'); if (il2) il2.textContent = state.deltaFlight;
  }
}
function getOpenExplanation() {
  const { deltaS, deltaNX, deltaFlight } = AppState.modelStates['open-economy'];
  if (deltaFlight > 0) {
    return `<strong>Tháo chạy vốn (Capital Flight - Khủng hoảng niềm tin):</strong><br>• Dòng vốn tháo chạy ra nước ngoài (NCO tăng mạnh).<br>• Trên thị trường vốn vay: Cầu vốn (I+NCO) tăng vọt đẩy <strong>lãi suất thực r tăng cao</strong>.<br>• Trên thị trường ngoại hối: Cung nội tệ tăng ồ ạt làm <strong>đồng nội tệ mất giá nghiêm trọng</strong> (ε giảm sâu), kích thích xuất khẩu ròng NX.`;
  }
  if (deltaS < 0) {
    return `<strong>Hiện tượng 'Thâm hụt kép' (Twin Deficits):</strong><br>• Chính phủ thâm hụt ngân sách (S giảm) → Lãi suất r tăng → Dòng vốn ra ròng NCO giảm.<br>• NCO giảm làm cung nội tệ trên thị trường ngoại hối giảm → <strong>Đồng nội tệ lên giá (ε tăng)</strong> → Hàng trong nước đắt đỏ, xuất khẩu ròng NX giảm (Thâm hụt thương mại).`;
  }
  if (deltaNX > 0) {
    return `<strong>Chính sách hạn ngạch / Thuế quan nhập khẩu:</strong><br>• Đường cầu NX dịch sang phải trên thị trường ngoại hối.<br>• Kết quả: <strong>Đồng nội tệ lên giá</strong> (ε tăng) triệt tiêu hoàn toàn tác động bảo hộ! <em>Xuất khẩu ròng NX cuối cùng không hề thay đổi</em> (vì NX = S - I mà S và I không đổi).`;
  }
  return `Mô hình kinh tế mở kết nối Thị trường Vốn vay (quyết định lãi suất r) và Thị trường Ngoại hối (quyết định tỷ giá thực ε) thông qua biến số then chốt NCO.`;
}

function updateExpBox(html, modelId) {
  const box = document.getElementById('model-explanation-box');
  if (box) box.innerHTML = html;

  const targetId = modelId || AppState.activeModel;
  const inlineBox = document.getElementById(`model-inline-explanation-${targetId}`);
  if (inlineBox) inlineBox.innerHTML = html;
}

// -------------------------------------------------------------
// 3. QUIZ PRACTICE TAB (CHƯƠNG 10 - 21)
// -------------------------------------------------------------
function renderQuizTab() {
  const container = document.getElementById('quiz-content');
  if (!container || !window.QUIZ_DATA) return;

  const currentChQuestions = window.QUIZ_DATA.filter(q => q.chapter === AppState.currentChapter);

  // Apply filter
  let filtered = currentChQuestions.filter(q => {
    const userAns = AppState.userAnswers[q.id];
    const isAnswered = !!userAns;
    const isCorrect = isAnswered && userAns.toLowerCase() === q.answer.toLowerCase();
    const isIncorrect = isAnswered && !isCorrect;
    const isFlagged = AppState.flaggedQuestions.has(q.id);

    if (AppState.quizFilter === 'unanswered') return !isAnswered;
    if (AppState.quizFilter === 'correct') return isCorrect;
    if (AppState.quizFilter === 'incorrect') return isIncorrect;
    if (AppState.quizFilter === 'flagged') return isFlagged;
    return true;
  });

  // Search filter
  if (AppState.searchQuery.trim()) {
    const query = AppState.searchQuery.toLowerCase();
    filtered = filtered.filter(q => 
      q.question.toLowerCase().includes(query) ||
      Object.values(q.options).some(opt => opt.toLowerCase().includes(query))
    );
  }

  // Pagination
  const totalPages = Math.ceil(filtered.length / AppState.pageSize) || 1;
  if (AppState.quizPage > totalPages) AppState.quizPage = 1;
  const startIdx = (AppState.quizPage - 1) * AppState.pageSize;
  const pageQuestions = filtered.slice(startIdx, startIdx + AppState.pageSize);

  const answeredCount = currentChQuestions.filter(q => AppState.userAnswers[q.id]).length;

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Quiz Header & Filters -->
      <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-bold text-slate-900">
            Ngân hàng câu hỏi: Chương ${AppState.currentChapter}
          </h2>
          <p class="text-xs text-slate-500 mt-1">
            Tổng cộng: <strong class="text-slate-800">${currentChQuestions.length}</strong> câu | Đã làm: <strong class="text-blue-600">${answeredCount}</strong> | Hiển thị: <strong class="text-slate-800">${filtered.length}</strong> câu
          </p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex items-center gap-1.5 flex-wrap">
          <button onclick="setQuizFilter('all')" class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${AppState.quizFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
            Tất cả (${currentChQuestions.length})
          </button>
          <button onclick="setQuizFilter('unanswered')" class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${AppState.quizFilter === 'unanswered' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
            Chưa làm
          </button>
          <button onclick="setQuizFilter('incorrect')" class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${AppState.quizFilter === 'incorrect' ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
            Làm sai
          </button>
          <button onclick="setQuizFilter('flagged')" class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${AppState.quizFilter === 'flagged' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
            Đã gắn cờ ⭐
          </button>
        </div>
      </div>

      <!-- Question Cards List -->
      <div class="space-y-4">
        ${pageQuestions.length === 0 ? `
          <div class="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
            <span class="text-4xl block mb-2">🔍</span>
            <p class="text-slate-500 text-sm">Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại.</p>
            <button onclick="setQuizFilter('all')" class="mt-3 text-xs text-blue-600 font-semibold hover:underline">Xem tất cả câu hỏi của chương</button>
          </div>
        ` : pageQuestions.map(q => renderQuestionCard(q)).join('')}
      </div>

      <!-- Pagination Footer -->
      ${totalPages > 1 ? `
        <div class="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm text-xs">
          <button 
            onclick="changeQuizPage(${AppState.quizPage - 1})" 
            ${AppState.quizPage === 1 ? 'disabled class="opacity-40 cursor-not-allowed"' : 'class="hover:text-blue-600 font-bold"'}
          >
            ← Trang trước
          </button>
          <span class="text-slate-500 font-medium">Trang ${AppState.quizPage} / ${totalPages}</span>
          <button 
            onclick="changeQuizPage(${AppState.quizPage + 1})" 
            ${AppState.quizPage === totalPages ? 'disabled class="opacity-40 cursor-not-allowed"' : 'class="hover:text-blue-600 font-bold"'}
          >
            Trang tiếp →
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function renderQuestionCard(q) {
  const userAns = AppState.userAnswers[q.id];
  const isFlagged = AppState.flaggedQuestions.has(q.id);
  const isAnswered = !!userAns;
  const isCorrect = isAnswered && userAns.toLowerCase() === q.answer.toLowerCase();

  return `
    <div id="q-card-${q.id}" class="bg-white p-5 rounded-2xl border transition-all ${
      !isAnswered 
        ? 'border-slate-200/80 hover:border-slate-300' 
        : isCorrect 
          ? 'border-emerald-300 bg-emerald-50/20' 
          : 'border-rose-300 bg-rose-50/20'
    }">
      <!-- Top meta -->
      <div class="flex items-center justify-between gap-2 mb-3">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">
            Câu ${q.qNum}
          </span>
          <span class="text-[11px] text-slate-400 font-mono">ID: ${q.id}</span>
        </div>

        <div class="flex items-center gap-2">
          ${isAnswered ? `
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
              ${isCorrect ? '✓ Đúng' : '✗ Sai'}
            </span>
          ` : ''}
          <button 
            onclick="toggleFlagQuestion('${q.id}')" 
            title="Gắn cờ để ôn lại sau"
            class="p-1.5 rounded-lg hover:bg-slate-100 transition-colors ${isFlagged ? 'text-amber-500' : 'text-slate-300 hover:text-slate-500'}"
          >
            ${isFlagged ? '⭐' : '☆'}
          </button>
        </div>
      </div>

      <!-- Question Text -->
      <p class="text-sm md:text-base font-semibold text-slate-800 leading-relaxed mb-4">
        ${q.question}
      </p>

      <!-- Options -->
      <div class="grid grid-cols-1 gap-2.5">
        ${['a', 'b', 'c', 'd'].map(optKey => {
          const optText = q.options[optKey];
          if (!optText) return '';

          const isSelected = userAns && userAns.toLowerCase() === optKey;
          const isTargetCorrect = q.answer && q.answer.toLowerCase() === optKey;

          let btnClass = "border-slate-200/80 hover:bg-slate-50 text-slate-700";
          let badgeClass = "bg-slate-100 text-slate-600 border-slate-200";

          if (isAnswered) {
            if (isTargetCorrect) {
              btnClass = "border-emerald-500 bg-emerald-50 text-emerald-950 font-medium";
              badgeClass = "bg-emerald-600 text-white border-emerald-600";
            } else if (isSelected && !isTargetCorrect) {
              btnClass = "border-rose-500 bg-rose-50 text-rose-950 line-through opacity-85";
              badgeClass = "bg-rose-600 text-white border-rose-600";
            }
          }

          return `
            <button 
              onclick="handleSelectAnswer('${q.id}', '${optKey}')"
              class="w-full p-3 rounded-xl border text-left flex items-start gap-3 transition-all ${btnClass}"
            >
              <span class="w-6 h-6 rounded-lg border flex items-center justify-center font-bold text-xs uppercase flex-shrink-0 mt-0.5 ${badgeClass}">
                ${optKey}
              </span>
              <span class="text-xs md:text-sm leading-relaxed">${optText}</span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- Explanation / Key reveal -->
      ${isAnswered ? `
        <div class="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
          <div class="text-slate-600">
            Đáp án chuẩn: <strong class="text-emerald-700 uppercase font-bold text-sm">${q.answer}</strong>
          </div>
          <button onclick="handleResetAnswer('${q.id}')" class="text-slate-400 hover:text-slate-600">
            Làm lại câu này
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function handleSelectAnswer(qId, selectedOpt) {
  AppState.userAnswers[qId] = selectedOpt;
  
  const q = window.QUIZ_DATA.find(item => item.id === qId);
  if (q) {
    if (selectedOpt.toLowerCase() === q.answer.toLowerCase()) {
      AppState.incorrectQuestions.delete(qId);
    } else {
      AppState.incorrectQuestions.add(qId);
    }
  }

  saveToLocalStorage();
  renderStatsHeader();
  
  // Re-render specific card
  const cardElem = document.getElementById(`q-card-${qId}`);
  if (cardElem && q) {
    cardElem.outerHTML = renderQuestionCard(q);
  }
}

function handleResetAnswer(qId) {
  delete AppState.userAnswers[qId];
  AppState.incorrectQuestions.delete(qId);
  saveToLocalStorage();
  renderStatsHeader();
  
  const q = window.QUIZ_DATA.find(item => item.id === qId);
  const cardElem = document.getElementById(`q-card-${qId}`);
  if (cardElem && q) {
    cardElem.outerHTML = renderQuestionCard(q);
  }
}

function toggleFlagQuestion(qId) {
  if (AppState.flaggedQuestions.has(qId)) {
    AppState.flaggedQuestions.delete(qId);
  } else {
    AppState.flaggedQuestions.add(qId);
  }
  saveToLocalStorage();
  renderStatsHeader();

  const q = window.QUIZ_DATA.find(item => item.id === qId);
  const cardElem = document.getElementById(`q-card-${qId}`);
  if (cardElem && q) {
    cardElem.outerHTML = renderQuestionCard(q);
  }
}

function setQuizFilter(filter) {
  AppState.quizFilter = filter;
  AppState.quizPage = 1;
  renderQuizTab();
}

function changeQuizPage(page) {
  AppState.quizPage = page;
  renderQuizTab();
  window.scrollTo({ top: 300, behavior: 'smooth' });
}

// -------------------------------------------------------------
// 4. EXAM SIMULATOR TAB (THI THỬ TÍNH GIỜ TỔNG HỢP)
// -------------------------------------------------------------
function renderExamTab() {
  const container = document.getElementById('exam-content');
  if (!container) return;

  if (!AppState.examActive) {
    // Setup exam screen
    container.innerHTML = `
      <div class="max-w-2xl mx-auto space-y-6">
        <div class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-center">
          <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
            ⏱️
          </div>
          <h2 class="text-2xl font-extrabold text-slate-900 mb-2">Phòng Thi Thử Tổng Hợp Tính Giờ</h2>
          <p class="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Hệ thống sẽ lấy ngẫu nhiên câu hỏi phân bổ đều từ toàn bộ 12 chương (Chương 10 đến Chương 21) để mô phỏng một đề thi thật.
          </p>

          <div class="grid grid-cols-3 gap-4 my-8 text-left">
            <label class="p-4 rounded-xl border border-slate-200 cursor-pointer hover:border-blue-500 transition-all flex flex-col justify-between">
              <input type="radio" name="exam-qcount" value="20" checked class="accent-blue-600">
              <div class="mt-3">
                <span class="block text-base font-bold text-slate-800">20 Câu</span>
                <span class="text-xs text-slate-400">Thời gian: 25 phút</span>
              </div>
            </label>

            <label class="p-4 rounded-xl border border-slate-200 cursor-pointer hover:border-blue-500 transition-all flex flex-col justify-between">
              <input type="radio" name="exam-qcount" value="40" class="accent-blue-600">
              <div class="mt-3">
                <span class="block text-base font-bold text-slate-800">40 Câu (Đề chuẩn)</span>
                <span class="text-xs text-slate-400">Thời gian: 50 phút</span>
              </div>
            </label>

            <label class="p-4 rounded-xl border border-slate-200 cursor-pointer hover:border-blue-500 transition-all flex flex-col justify-between">
              <input type="radio" name="exam-qcount" value="60" class="accent-blue-600">
              <div class="mt-3">
                <span class="block text-base font-bold text-slate-800">60 Câu (Toàn diện)</span>
                <span class="text-xs text-slate-400">Thời gian: 75 phút</span>
              </div>
            </label>
          </div>

          <button onclick="startExamSession()" class="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25 transition-all">
            BẮT ĐẦU LÀM BÀI THI →
          </button>
        </div>

        <!-- Recent exam history -->
        ${AppState.examHistory.length > 0 ? `
          <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <h3 class="font-bold text-sm text-slate-800 mb-3">Lịch sử các lần thi thử gần đây:</h3>
            <div class="space-y-2">
              ${AppState.examHistory.slice(-5).reverse().map((h, i) => `
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between text-xs">
                  <div>
                    <span class="font-bold text-slate-800">${h.date}</span>
                    <span class="text-slate-400 ml-2">(${h.totalQ} câu)</span>
                  </div>
                  <div class="font-bold text-sm ${h.score >= 8 ? 'text-emerald-600' : h.score >= 5 ? 'text-amber-600' : 'text-rose-600'}">
                    ${h.score.toFixed(1)} / 10 điểm (${h.correctCount}/${h.totalQ} câu đúng)
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  } else {
    // Active Exam Running
    renderActiveExamInterface(container);
  }
}

function startExamSession() {
  const countRadio = document.querySelector('input[name="exam-qcount"]:checked');
  const count = countRadio ? parseInt(countRadio.value) : 40;
  const timeMinutes = count === 20 ? 25 : count === 40 ? 50 : 75;

  // Pick balanced random questions from chapters 10-21
  const selected = [];
  const chapters = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  const perChapter = Math.ceil(count / chapters.length);

  chapters.forEach(ch => {
    const chQuestions = window.QUIZ_DATA.filter(q => q.chapter === ch);
    const shuffled = [...chQuestions].sort(() => 0.5 - Math.random());
    selected.push(...shuffled.slice(0, perChapter));
  });

  AppState.examQuestions = selected.slice(0, count).sort(() => 0.5 - Math.random());
  AppState.examAnswers = {};
  AppState.examActive = true;
  AppState.examRemainingSeconds = timeMinutes * 60;
  AppState.examTotalSeconds = timeMinutes * 60;

  // Start countdown timer
  if (AppState.examTimerInterval) clearInterval(AppState.examTimerInterval);
  AppState.examTimerInterval = setInterval(() => {
    AppState.examRemainingSeconds--;
    updateExamTimerDisplay();
    if (AppState.examRemainingSeconds <= 0) {
      clearInterval(AppState.examTimerInterval);
      submitExamSession(true);
    }
  }, 1000);

  renderExamTab();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateExamTimerDisplay() {
  const timerElem = document.getElementById('exam-countdown-timer');
  if (!timerElem) return;

  const mins = Math.floor(AppState.examRemainingSeconds / 60);
  const secs = AppState.examRemainingSeconds % 60;
  timerElem.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  
  if (AppState.examRemainingSeconds < 300) {
    timerElem.classList.add('text-rose-600', 'animate-pulse');
  }
}

function renderActiveExamInterface(container) {
  const answeredCount = Object.keys(AppState.examAnswers).length;
  const totalCount = AppState.examQuestions.length;

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Fixed Sticky Exam Status Bar -->
      <div class="sticky top-4 z-40 bg-slate-900 text-white p-4 rounded-2xl shadow-xl flex items-center justify-between">
        <div>
          <span class="text-xs text-slate-400 block">Đang thi thử</span>
          <span class="text-sm font-bold">Đã làm: <span class="text-emerald-400">${answeredCount}</span> / ${totalCount} câu</span>
        </div>

        <div class="flex items-center gap-4">
          <div class="text-right">
            <span class="text-xs text-slate-400 block">Thời gian còn lại</span>
            <span id="exam-countdown-timer" class="font-mono text-xl font-extrabold text-amber-400">--:--</span>
          </div>

          <button onclick="confirmSubmitExam()" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-all">
            NỘP BÀI THI ✓
          </button>
        </div>
      </div>

      <!-- Questions List -->
      <div class="space-y-4">
        ${AppState.examQuestions.map((q, idx) => `
          <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <div class="flex items-center justify-between mb-3 text-xs">
              <span class="font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg">
                Câu ${idx + 1} (${q.chapterTitle.split(':')[0]})
              </span>
            </div>

            <p class="text-sm md:text-base font-semibold text-slate-800 mb-4 leading-relaxed">
              ${q.question}
            </p>

            <div class="grid grid-cols-1 gap-2">
              ${['a', 'b', 'c', 'd'].map(optKey => {
                const optText = q.options[optKey];
                if (!optText) return '';
                const isChecked = AppState.examAnswers[q.id] === optKey;

                return `
                  <label class="p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${isChecked ? 'border-blue-600 bg-blue-50/40 text-blue-950 font-medium' : 'border-slate-200/80 hover:bg-slate-50 text-slate-700'}">
                    <input 
                      type="radio" 
                      name="exam-q-${q.id}" 
                      value="${optKey}"
                      ${isChecked ? 'checked' : ''}
                      onchange="handleExamSelect('${q.id}', '${optKey}')"
                      class="mt-1 accent-blue-600"
                    >
                    <span class="w-5 h-5 rounded border flex items-center justify-center font-bold text-xs uppercase flex-shrink-0 mt-0.5 ${isChecked ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-100 text-slate-500 border-slate-200'}">
                      ${optKey}
                    </span>
                    <span class="text-xs md:text-sm leading-relaxed">${optText}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="text-center pt-6">
        <button onclick="confirmSubmitExam()" class="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all">
          HOÀN THÀNH VÀ NỘP BÀI THI →
        </button>
      </div>
    </div>
  `;

  updateExamTimerDisplay();
}

function handleExamSelect(qId, optKey) {
  AppState.examAnswers[qId] = optKey;
  // Update sticky header count without re-rendering everything
  const container = document.getElementById('exam-content');
  if (container) {
    const answeredCount = Object.keys(AppState.examAnswers).length;
    const countElem = container.querySelector('.text-emerald-400');
    if (countElem) countElem.textContent = answeredCount;
  }
}

function confirmSubmitExam() {
  const answeredCount = Object.keys(AppState.examAnswers).length;
  const totalCount = AppState.examQuestions.length;
  if (answeredCount < totalCount) {
    if (!confirm(`Bạn mới trả lời ${answeredCount}/${totalCount} câu. Bạn có chắc chắn muốn nộp bài sớm không?`)) {
      return;
    }
  }
  submitExamSession(false);
}

function submitExamSession(isTimeout = false) {
  if (AppState.examTimerInterval) clearInterval(AppState.examTimerInterval);
  AppState.examActive = false;

  let correctCount = 0;
  const chapterBreakdown = {};

  AppState.examQuestions.forEach(q => {
    const userOpt = AppState.examAnswers[q.id];
    const isCorrect = userOpt && userOpt.toLowerCase() === q.answer.toLowerCase();
    
    // Save to global user answers so it syncs stats
    if (userOpt) {
      AppState.userAnswers[q.id] = userOpt;
      if (!isCorrect) AppState.incorrectQuestions.add(q.id);
      else AppState.incorrectQuestions.delete(q.id);
    }

    if (isCorrect) correctCount++;

    const ch = q.chapter;
    if (!chapterBreakdown[ch]) chapterBreakdown[ch] = { correct: 0, total: 0 };
    chapterBreakdown[ch].total++;
    if (isCorrect) chapterBreakdown[ch].correct++;
  });

  const totalQ = AppState.examQuestions.length;
  const score = (correctCount / totalQ) * 10;

  const examRecord = {
    date: new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    score: score,
    correctCount: correctCount,
    totalQ: totalQ,
    chapterBreakdown: chapterBreakdown
  };

  AppState.examHistory.push(examRecord);
  saveToLocalStorage();
  renderStatsHeader();

  // Show Exam Results
  showExamResultModal(examRecord, AppState.examQuestions, AppState.examAnswers);
}

function showExamResultModal(record, questions, answers) {
  const container = document.getElementById('exam-content');
  if (!container) return;

  container.innerHTML = `
    <div class="max-w-3xl mx-auto space-y-6">
      <div class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-lg text-center">
        <span class="text-5xl block mb-2">${record.score >= 8 ? '🎉' : record.score >= 5 ? '👍' : '💪'}</span>
        <h2 class="text-2xl font-extrabold text-slate-900">Kết Quả Bài Thi Thử</h2>
        <p class="text-xs text-slate-400 mt-1">${record.date}</p>

        <div class="my-6 py-6 px-8 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border border-blue-200 inline-block">
          <div class="text-5xl font-black text-blue-700 font-mono">${record.score.toFixed(1)} <span class="text-2xl font-bold text-slate-400">/ 10</span></div>
          <div class="text-sm font-semibold text-slate-600 mt-2">Đúng ${record.correctCount} / ${record.totalQ} câu hỏi (${Math.round((record.correctCount/record.totalQ)*100)}%)</div>
        </div>

        <!-- Breakdown by chapter -->
        <div class="text-left mt-6 pt-6 border-t border-slate-200">
          <h4 class="font-bold text-sm text-slate-800 mb-3">Đánh giá theo từng chương:</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            ${Object.entries(record.chapterBreakdown).map(([ch, stat]) => {
              const pct = Math.round((stat.correct / stat.total) * 100);
              return `
                <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span class="font-semibold text-slate-700">Chương ${ch}:</span>
                  <span class="font-bold ${pct >= 75 ? 'text-emerald-600' : pct >= 50 ? 'text-amber-600' : 'text-rose-600'}">
                    ${stat.correct}/${stat.total} câu (${pct}%)
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="flex items-center justify-center gap-3 mt-8">
          <button onclick="renderExamTab()" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-md">
            Làm bài thi khác ↻
          </button>
        </div>
      </div>

      <!-- Detailed Review of this exam -->
      <div class="space-y-4">
        <h3 class="font-extrabold text-lg text-slate-900">Chi tiết bài thi & Đáp án:</h3>
        ${questions.map((q, idx) => {
          const userOpt = answers[q.id];
          const isCorrect = userOpt && userOpt.toLowerCase() === q.answer.toLowerCase();
          return `
            <div class="bg-white p-5 rounded-2xl border ${isCorrect ? 'border-emerald-300' : 'border-rose-300'}">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold ${isCorrect ? 'text-emerald-700 bg-emerald-50' : 'text-rose-700 bg-rose-50'} px-2.5 py-1 rounded-lg">
                  Câu ${idx + 1} - ${isCorrect ? '✓ Đúng' : '✗ Sai'}
                </span>
                <span class="text-xs text-slate-400">${q.chapterTitle.split(':')[0]}</span>
              </div>
              <p class="text-sm font-semibold text-slate-800 mb-3">${q.question}</p>
              <div class="space-y-1.5 text-xs">
                ${['a', 'b', 'c', 'd'].map(optKey => {
                  const optText = q.options[optKey];
                  if (!optText) return '';
                  const isUser = userOpt === optKey;
                  const isAns = q.answer.toLowerCase() === optKey;
                  let cls = "text-slate-600";
                  if (isAns) cls = "text-emerald-700 font-bold bg-emerald-50 p-1.5 rounded";
                  else if (isUser && !isAns) cls = "text-rose-700 line-through bg-rose-50 p-1.5 rounded";
                  return `<div class="${cls}"><strong class="uppercase">${optKey}.</strong> ${optText}</div>`;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// 5. MISTAKES & FLAGGED NOTEBOOK
// -------------------------------------------------------------
function renderMistakesTab() {
  const container = document.getElementById('mistakes-content');
  if (!container || !window.QUIZ_DATA) return;

  const mistakeQuestions = window.QUIZ_DATA.filter(q => AppState.incorrectQuestions.has(q.id));
  const flaggedQuestions = window.QUIZ_DATA.filter(q => AppState.flaggedQuestions.has(q.id));

  container.innerHTML = `
    <div class="space-y-6">
      <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-bold text-slate-900">Sổ Tay Câu Hỏi Cần Ôn Lại</h2>
          <p class="text-xs text-slate-500 mt-1">
            Tổng cộng: <strong class="text-rose-600">${mistakeQuestions.length}</strong> câu đã từng làm sai | <strong class="text-amber-500">${flaggedQuestions.length}</strong> câu đã gắn cờ
          </p>
        </div>
      </div>

      <!-- Mistakes section -->
      <div class="space-y-4">
        <h3 class="text-base font-bold text-rose-900 flex items-center gap-2">
          <span>❌ Các câu hỏi làm sai (${mistakeQuestions.length})</span>
        </h3>
        ${mistakeQuestions.length === 0 ? `
          <div class="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-400">
            Tuyệt vời! Hiện tại bạn không có câu nào bị đánh dấu làm sai.
          </div>
        ` : mistakeQuestions.map(q => renderQuestionCard(q)).join('')}
      </div>

      <!-- Flagged section -->
      <div class="space-y-4 pt-6 border-t border-slate-200">
        <h3 class="text-base font-bold text-amber-900 flex items-center gap-2">
          <span>⭐ Các câu hỏi đã gắn cờ đánh dấu (${flaggedQuestions.length})</span>
        </h3>
        ${flaggedQuestions.length === 0 ? `
          <div class="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-400">
            Bạn chưa gắn cờ câu hỏi nào. Khi làm bài, bấm vào ngôi sao để lưu lại câu khó nhé!
          </div>
        ` : flaggedQuestions.map(q => renderQuestionCard(q)).join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// 6. FLASHCARDS TAB
// -------------------------------------------------------------
function renderFlashcardsTab() {
  const container = document.getElementById('flashcards-content');
  if (!container || !window.THEORY_DATA) return;

  const chData = window.THEORY_DATA.find(c => c.chapter === AppState.fcChapter) || window.THEORY_DATA[0];
  const cards = chData.flashcards || [];

  if (AppState.fcIndex >= cards.length) AppState.fcIndex = 0;
  const currCard = cards[AppState.fcIndex] || { front: 'Chưa có thẻ', back: 'Chưa có nội dung' };

  container.innerHTML = `
    <div class="max-w-xl mx-auto space-y-6">
      <div class="text-center">
        <h2 class="text-xl font-bold text-slate-900">Flashcard Ôn Nhanh Thuật Ngữ & Công Thức</h2>
        <p class="text-xs text-slate-500 mt-1">${chData.title}</p>
        <span class="inline-block mt-2 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
          Thẻ ${AppState.fcIndex + 1} / ${cards.length}
        </span>
      </div>

      <!-- Flashcard 3D Card -->
      <div 
        onclick="flipCurrentFlashcard()" 
        class="w-full min-h-[260px] bg-white p-8 rounded-3xl border-2 cursor-pointer shadow-lg transition-all transform hover:-translate-y-1 flex flex-col items-center justify-center text-center select-none ${
          AppState.fcFlipped ? 'border-indigo-400 bg-indigo-50/20' : 'border-blue-400'
        }"
      >
        <span class="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-4 block">
          ${AppState.fcFlipped ? '💡 ĐÁP ÁN / GIẢI THÍCH' : '❓ CÂU HỎI / KHÁI NIỆM'}
        </span>
        <p class="text-base md:text-lg font-bold text-slate-800 leading-relaxed max-w-md">
          ${AppState.fcFlipped ? currCard.back : currCard.front}
        </p>
        <span class="text-[11px] text-slate-400 mt-6 block">
          (Nhấp vào thẻ để lật mặt ${AppState.fcFlipped ? 'trước' : 'sau'})
        </span>
      </div>

      <!-- Controls -->
      <div class="flex items-center justify-between gap-4">
        <button 
          onclick="prevFlashcard()" 
          class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-all"
        >
          ← Thẻ trước
        </button>

        <button 
          onclick="flipCurrentFlashcard()" 
          class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md transition-all"
        >
          Lật Thẻ 🔄
        </button>

        <button 
          onclick="nextFlashcard()" 
          class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-all"
        >
          Thẻ tiếp →
        </button>
      </div>
    </div>
  `;
}

function flipCurrentFlashcard() {
  AppState.fcFlipped = !AppState.fcFlipped;
  renderFlashcardsTab();
}

function nextFlashcard() {
  const chData = window.THEORY_DATA.find(c => c.chapter === AppState.fcChapter) || window.THEORY_DATA[0];
  const cards = chData.flashcards || [];
  AppState.fcIndex = (AppState.fcIndex + 1) % cards.length;
  AppState.fcFlipped = false;
  renderFlashcardsTab();
}

function prevFlashcard() {
  const chData = window.THEORY_DATA.find(c => c.chapter === AppState.fcChapter) || window.THEORY_DATA[0];
  const cards = chData.flashcards || [];
  AppState.fcIndex = (AppState.fcIndex - 1 + cards.length) % cards.length;
  AppState.fcFlipped = false;
  renderFlashcardsTab();
}

// -------------------------------------------------------------
// SEARCH FUNCTIONALITY
// -------------------------------------------------------------
function setupSearch() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    AppState.searchQuery = e.target.value;
    if (AppState.activeTab !== 'quiz') {
      switchTab('quiz');
    } else {
      AppState.quizPage = 1;
      renderQuizTab();
    }
  });
}


// =============================================================
// HIGHLIGHT & NOTE-TAKING ENGINE (VÀNG, XANH LÁ, CAM & GHI CHÚ)
// =============================================================

function setupHighlightListener() {
  document.addEventListener('mouseup', handleTextSelection);
  document.addEventListener('touchend', handleTextSelection);

  // Close toolbar if clicked outside
  document.addEventListener('mousedown', (e) => {
    const toolbar = document.getElementById('highlight-floating-toolbar');
    if (!toolbar) return;
    if (!toolbar.contains(e.target) && !e.target.closest('.user-highlight')) {
      hideHighlightToolbar();
    }
  });
}

function handleTextSelection(e) {
  if (e.target.closest('#highlight-floating-toolbar') || 
      e.target.closest('#note-modal-backdrop') || 
      e.target.closest('#notes-drawer-panel') ||
      e.target.closest('#btn-floating-notes')) {
    return;
  }

  // Check if clicked directly on an existing highlight
  const existingHl = e.target.closest('.user-highlight');
  if (existingHl) {
    const hlId = existingHl.getAttribute('data-hl-id');
    const rect = existingHl.getBoundingClientRect();
    showHighlightToolbarForExisting(rect, hlId);
    return;
  }

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
    return;
  }

  const selectedText = selection.toString().trim();
  if (selectedText.length < 2) {
    return;
  }

  const range = selection.getRangeAt(0);
  const theoryContainer = document.getElementById('theory-content');
  if (!theoryContainer || !theoryContainer.contains(range.commonAncestorContainer)) {
    return;
  }

  const rect = range.getBoundingClientRect();
  showHighlightToolbar(rect, range, selectedText);
}

function showHighlightToolbar(rect, range, text) {
  const toolbar = document.getElementById('highlight-floating-toolbar');
  if (!toolbar) return;

  AppState.activeSelection = {
    range: range.cloneRange(),
    text: text
  };
  AppState.selectedHighlightId = null;

  const delBtn = document.getElementById('btn-toolbar-delete');
  if (delBtn) delBtn.classList.add('hidden');

  toolbar.style.display = 'flex';
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;

  const top = rect.top + scrollY;
  const left = rect.left + scrollX + rect.width / 2;

  toolbar.style.top = `${top}px`;
  toolbar.style.left = `${left}px`;
}

function showHighlightToolbarForExisting(rect, hlId) {
  const toolbar = document.getElementById('highlight-floating-toolbar');
  if (!toolbar) return;

  AppState.activeSelection = null;
  AppState.selectedHighlightId = hlId;

  const delBtn = document.getElementById('btn-toolbar-delete');
  if (delBtn) delBtn.classList.remove('hidden');

  toolbar.style.display = 'flex';
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;

  const top = rect.top + scrollY;
  const left = rect.left + scrollX + rect.width / 2;

  toolbar.style.top = `${top}px`;
  toolbar.style.left = `${left}px`;
}

function hideHighlightToolbar() {
  const toolbar = document.getElementById('highlight-floating-toolbar');
  if (toolbar) toolbar.style.display = 'none';
  AppState.activeSelection = null;
  AppState.selectedHighlightId = null;
}

function handleToolbarColor(color) {
  const ch = AppState.currentChapter;
  if (!AppState.highlights[ch]) AppState.highlights[ch] = [];

  if (AppState.activeSelection) {
    const { text } = AppState.activeSelection;
    const hlId = 'hl_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    const hlObj = {
      id: hlId,
      text: text,
      color: color,
      note: '',
      createdAt: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    AppState.highlights[ch].push(hlObj);
    saveHighlightsToLocalStorage();

    window.getSelection()?.removeAllRanges();
    AppState.activeSelection = null;

    const container = document.getElementById('theory-content');
    if (container) {
      applyMultiNodeHighlight(container, hlObj);
    }

    updateHighlightsUI();
    hideHighlightToolbar();
  } else if (AppState.selectedHighlightId) {
    const hlId = AppState.selectedHighlightId;
    const existingMarks = document.querySelectorAll(`.user-highlight[data-hl-id="${hlId}"]`);
    existingMarks.forEach(m => {
      m.classList.remove('highlight-yellow', 'highlight-green', 'highlight-orange');
      m.classList.add(`highlight-${color}`);
      m.setAttribute('data-color', color);
    });

    const hlObj = AppState.highlights[ch]?.find(h => h.id === hlId);
    if (hlObj) {
      hlObj.color = color;
      saveHighlightsToLocalStorage();
      updateHighlightsUI();
    }
    hideHighlightToolbar();
  }
}

function handleToolbarAddNote() {
  const ch = AppState.currentChapter;
  let quoteText = '';
  let existingNote = '';

  if (AppState.activeSelection) {
    handleToolbarColor('yellow');
    const list = AppState.highlights[ch];
    if (list && list.length > 0) {
      AppState.selectedHighlightId = list[list.length - 1].id;
    }
  }

  const hlId = AppState.selectedHighlightId;
  const hlObj = AppState.highlights[ch]?.find(h => h.id === hlId);
  if (hlObj) {
    quoteText = hlObj.text;
    existingNote = hlObj.note || '';
  }

  const modal = document.getElementById('note-modal-backdrop');
  const quoteElem = document.getElementById('note-modal-quote');
  const inputElem = document.getElementById('note-modal-input');

  if (modal && quoteElem && inputElem) {
    quoteElem.textContent = `"${quoteText}"`;
    inputElem.value = existingNote;
    modal.classList.remove('hidden');
    inputElem.focus();
  }
  hideHighlightToolbar();
}

function closeNoteModal() {
  const modal = document.getElementById('note-modal-backdrop');
  if (modal) modal.classList.add('hidden');
}

function saveNoteModal() {
  const ch = AppState.currentChapter;
  const hlId = AppState.selectedHighlightId;
  const inputElem = document.getElementById('note-modal-input');
  const noteText = inputElem ? inputElem.value.trim() : '';

  const hlObj = AppState.highlights[ch]?.find(h => h.id === hlId);
  if (hlObj) {
    hlObj.note = noteText;
    const marks = document.querySelectorAll(`.user-highlight[data-hl-id="${hlId}"]`);
    marks.forEach(m => {
      m.setAttribute('data-has-note', noteText ? 'true' : 'false');
    });
    saveHighlightsToLocalStorage();
    updateHighlightsUI();
  }

  closeNoteModal();
}

function handleToolbarDelete() {
  const ch = AppState.currentChapter;
  const hlId = AppState.selectedHighlightId;
  if (!hlId) return;

  const marks = document.querySelectorAll(`.user-highlight[data-hl-id="${hlId}"]`);
  marks.forEach(mark => {
    const parent = mark.parentNode;
    if (parent) {
      while (mark.firstChild) {
        parent.insertBefore(mark.firstChild, mark);
      }
      parent.removeChild(mark);
    }
  });

  if (AppState.highlights[ch]) {
    AppState.highlights[ch] = AppState.highlights[ch].filter(h => h.id !== hlId);
    saveHighlightsToLocalStorage();
    updateHighlightsUI();
  }

  hideHighlightToolbar();
}

function handleDeleteHighlightFromModal() {
  handleToolbarDelete();
  closeNoteModal();
}

function restoreChapterHighlights(chapter) {
  const container = document.getElementById('theory-content');
  if (!container || !AppState.highlights[chapter]) {
    updateHighlightsUI();
    return;
  }

  const list = AppState.highlights[chapter];
  if (list.length === 0) {
    updateHighlightsUI();
    return;
  }

  list.forEach(hl => {
    applyMultiNodeHighlight(container, hl);
  });

  updateHighlightsUI();
}

// ROBUST MULTI-NODE HIGHLIGHT RESTORATION ENGINE
function applyMultiNodeHighlight(root, hl) {
  if (!hl.text || hl.text.length < 2) return;
  if (root.querySelector(`.user-highlight[data-hl-id="${hl.id}"]`)) return;

  // 1. Walk visible text nodes inside theory container
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      if (!node.nodeValue) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (['SCRIPT', 'STYLE'].includes(parent.tagName) || parent.closest('.katex') || parent.closest('.user-highlight')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const textNodes = [];
  let fullText = '';
  const nodeCharMap = [];

  let n;
  while ((n = walker.nextNode())) {
    textNodes.push(n);
    const val = n.nodeValue;
    for (let i = 0; i < val.length; i++) {
      nodeCharMap.push({ node: n, offset: i });
    }
    fullText += val;
  }

  // 2. Find occurrence of hl.text
  let matchIdx = fullText.indexOf(hl.text);
  let matchLen = hl.text.length;

  if (matchIdx === -1) {
    const normTarget = hl.text.replace(/\s+/g, ' ').trim();
    const words = normTarget.split(' ').map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).filter(Boolean);
    if (words.length > 0) {
      try {
        const regex = new RegExp(words.join('\\s+'));
        const m = regex.exec(fullText);
        if (m) {
          matchIdx = m.index;
          matchLen = m[0].length;
        }
      } catch (e) {}
    }
  }

  if (matchIdx === -1 || !nodeCharMap[matchIdx] || !nodeCharMap[matchIdx + matchLen - 1]) return;

  const startEntry = nodeCharMap[matchIdx];
  const endEntry = nodeCharMap[matchIdx + matchLen - 1];

  const startNodeIdx = textNodes.indexOf(startEntry.node);
  const endNodeIdx = textNodes.indexOf(endEntry.node);
  if (startNodeIdx === -1 || endNodeIdx === -1 || startNodeIdx > endNodeIdx) return;

  const attachEvents = (mark) => {
    mark.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const r = mark.getBoundingClientRect();
      showHighlightToolbarForExisting(r, hl.id);
    });
  };

  if (startNodeIdx === endNodeIdx) {
    try {
      const range = document.createRange();
      range.setStart(startEntry.node, startEntry.offset);
      range.setEnd(startEntry.node, endEntry.offset + 1);

      const mark = document.createElement('mark');
      mark.className = `user-highlight highlight-${hl.color}`;
      mark.setAttribute('data-hl-id', hl.id);
      mark.setAttribute('data-color', hl.color);
      if (hl.note) mark.setAttribute('data-has-note', 'true');

      range.surroundContents(mark);
      attachEvents(mark);
    } catch (e) {}
  } else {
    // Multi-node highlight (spanning across strong, em, etc.)
    for (let i = startNodeIdx; i <= endNodeIdx; i++) {
      const cur = textNodes[i];
      let from = (i === startNodeIdx) ? startEntry.offset : 0;
      let to = (i === endNodeIdx) ? (endEntry.offset + 1) : cur.nodeValue.length;

      if (from >= to) continue;

      try {
        const range = document.createRange();
        range.setStart(cur, from);
        range.setEnd(cur, to);

        const mark = document.createElement('mark');
        mark.className = `user-highlight highlight-${hl.color}`;
        mark.setAttribute('data-hl-id', hl.id);
        mark.setAttribute('data-color', hl.color);
        if (hl.note) mark.setAttribute('data-has-note', 'true');

        range.surroundContents(mark);
        attachEvents(mark);
      } catch (e) {}
    }
  }
}

function updateHighlightsUI() {
  const ch = AppState.currentChapter;
  const list = AppState.highlights[ch] || [];

  const floatCount = document.getElementById('floating-notes-count');
  if (floatCount) floatCount.textContent = list.length;

  const drawerHlCount = document.getElementById('drawer-highlights-count');
  if (drawerHlCount) drawerHlCount.textContent = list.length;

  const drawerTitle = document.getElementById('drawer-chapter-title');
  if (drawerTitle) {
    const curTitle = window.THEORY_DATA?.find(c => c.chapter === ch)?.title || `Chương ${ch}`;
    drawerTitle.textContent = curTitle;
  }

  const drawerList = document.getElementById('drawer-highlights-list');
  if (drawerList) {
    if (list.length === 0) {
      drawerList.innerHTML = `<p class="text-xs text-slate-400 italic">Chưa có đoạn bôi đậm nào trong chương này. Hãy bôi đen chữ trên bài đọc để highlight nhé!</p>`;
    } else {
      drawerList.innerHTML = list.map(hl => {
        const colorName = hl.color === 'yellow' ? 'Vàng' : hl.color === 'green' ? 'Xanh lá' : 'Cam';
        const colorBg = hl.color === 'yellow' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : hl.color === 'green' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-orange-100 text-orange-800 border-orange-300';
        return `
          <div class="p-3 rounded-xl border border-slate-200/80 bg-slate-50 space-y-1.5 hover:border-slate-300 transition-colors">
            <div class="flex items-center justify-between text-[11px]">
              <span class="px-2 py-0.5 rounded border text-[10px] font-bold ${colorBg}">
                ${colorName}
              </span>
              <div class="flex items-center gap-1.5">
                <button onclick="openNoteForHighlight('${hl.id}')" class="text-blue-600 hover:text-blue-800 font-medium">
                  ${hl.note ? 'Sửa ghi chú 📝' : '+ Thêm ghi chú'}
                </button>
                <button onclick="deleteHighlightById('${hl.id}')" class="text-rose-500 hover:text-rose-700 ml-1">🗑️</button>
              </div>
            </div>
            <p class="text-xs text-slate-800 italic leading-relaxed line-clamp-3">
              "${hl.text}"
            </p>
            ${hl.note ? `
              <div class="p-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-medium mt-1">
                <strong class="text-blue-900 block text-[11px] mb-0.5">Ghi chú của bạn:</strong>
                ${hl.note}
              </div>
            ` : ''}
          </div>
        `;
      }).join('');
    }
  }

  const drawerTextarea = document.getElementById('chapter-freeform-note');
  if (drawerTextarea) drawerTextarea.value = AppState.chapterNotes[ch] || '';

  const pageTextarea = document.getElementById('page-chapter-note');
  if (pageTextarea) pageTextarea.value = AppState.chapterNotes[ch] || '';
}

function toggleNotesDrawer() {
  const drawerPanel = document.getElementById('notes-drawer-panel');
  const drawerBackdrop = document.getElementById('notes-drawer-backdrop');
  if (!drawerPanel || !drawerBackdrop) return;

  const isOpen = !drawerPanel.classList.contains('translate-x-full');
  if (isOpen) {
    drawerPanel.classList.add('translate-x-full');
    drawerBackdrop.classList.add('hidden');
  } else {
    updateHighlightsUI();
    drawerPanel.classList.remove('translate-x-full');
    drawerBackdrop.classList.remove('hidden');
  }
}

function handleAutoSaveChapterNote(val) {
  const ch = AppState.currentChapter;
  AppState.chapterNotes[ch] = val;
  saveHighlightsToLocalStorage();

  const drawerTextarea = document.getElementById('chapter-freeform-note');
  if (drawerTextarea && drawerTextarea.value !== val) drawerTextarea.value = val;

  const pageTextarea = document.getElementById('page-chapter-note');
  if (pageTextarea && pageTextarea.value !== val) pageTextarea.value = val;

  const ind = document.getElementById('note-autosave-indicator');
  if (ind) {
    ind.textContent = '✓ Đã lưu tự động';
    ind.classList.remove('text-slate-400');
    ind.classList.add('text-emerald-600');
  }
}

function copyAllChapterNotes() {
  const ch = AppState.currentChapter;
  const chTitle = window.THEORY_DATA?.find(c => c.chapter === ch)?.title || `Chương ${ch}`;
  const freeform = AppState.chapterNotes[ch] || '';
  const list = AppState.highlights[ch] || [];

  let md = `# Ghi chú & Trích đoạn ôn tập - ${chTitle}\n\n`;
  if (freeform.trim()) {
    md += `## Ghi chú tổng hợp cá nhân:\n${freeform}\n\n`;
  }
  if (list.length > 0) {
    md += `## Các đoạn trích đã highlight (${list.length}):\n`;
    list.forEach((hl, idx) => {
      md += `\n### ${idx + 1}. [Màu: ${hl.color}] "${hl.text}"\n`;
      if (hl.note) {
        md += `> **Ghi chú:** ${hl.note}\n`;
      }
    });
  }

  navigator.clipboard.writeText(md).then(() => {
    alert('Đã sao chép toàn bộ ghi chú và trích dẫn của chương vào Clipboard!');
  }).catch(() => {
    alert('Vui lòng cấp quyền Clipboard để sao chép!');
  });
}

function openNoteForHighlight(hlId) {
  AppState.selectedHighlightId = hlId;
  AppState.activeSelection = null;
  handleToolbarAddNote();
}

function deleteHighlightById(hlId) {
  AppState.selectedHighlightId = hlId;
  handleToolbarDelete();
}


// =============================================================
// INLINE INTERACTIVE MODELS IN TEXTBOOK SECTIONS
// =============================================================

function mountInlineModels() {
  const placeholders = document.querySelectorAll('[data-inline-model]');
  placeholders.forEach(el => {
    const modelId = el.getAttribute('data-inline-model');
    el.innerHTML = getInlineModelCardHTML(modelId);
    setTimeout(() => {
      drawModel(modelId);
    }, 40);
  });
}

function getInlineModelCardHTML(modelId) {
  const modelNames = {
    'ad-as': 'Mô Hình Tổng Cung - Tổng Cầu (AD - AS)',
    'money-market': 'Thị Trường Tiền Tệ & Lãi Suất Cân Bằng (Keynes)',
    'is-lm': 'Mô Hình IS - LM (Thị Trường Hàng Hóa & Tiền Tệ)',
    'phillips-curve': 'Đường Cong Phillips (Lạm Phát & Thất Nghiệp)',
    'loanable-funds': 'Thị Trường Vốn Vay (Tiết Kiệm & Đầu Tư)',
    'open-economy': 'Hai Thị Trường Kinh Tế Mở (Vốn Vay & Ngoại Hối)'
  };

  const name = modelNames[modelId] || 'Mô hình kinh tế vĩ mô';

  return `
    <div class="bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/20 p-5 md:p-6 rounded-2xl border-2 border-blue-200/90 shadow-sm space-y-4 my-6">
      <div class="flex items-center justify-between border-b border-slate-200/70 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-xs">
            📈
          </div>
          <div>
            <h4 class="font-extrabold text-slate-900 text-sm md:text-base">${name}</h4>
            <p class="text-[11px] text-slate-500">Mô hình tương tác trực tiếp trong bài đọc - Thử nghiệm chính sách & cú sốc ngay tại đây</p>
          </div>
        </div>
        <button onclick="resetModelState('${modelId}')" class="text-xs text-slate-500 hover:text-blue-600 font-semibold px-2 py-1 rounded hover:bg-slate-200/60 transition-colors">
          ↺ Đặt lại đồ thị
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div class="lg:col-span-7 bg-white rounded-xl p-2.5 border border-slate-200 shadow-xs flex justify-center">
          <canvas id="canvas-inline-${modelId}" width="620" height="400" class="w-full max-w-[620px] h-auto"></canvas>
        </div>

        <div class="lg:col-span-5 space-y-3">
          ${renderInlineControls(modelId)}
        </div>
      </div>
    </div>
  `;
}

function renderInlineControls(modelId) {
  const state = AppState.modelStates[modelId] || {};
  switch (modelId) {
    case 'ad-as':
      return `
        <div class="space-y-3">
          <label class="block text-xs font-bold text-slate-800 uppercase tracking-wider">Kịch bản nhanh:</label>
          <div class="grid grid-cols-2 gap-1.5 text-xs">
            <button onclick="applyADASScenario('fiscal_exp')" class="p-2 text-left rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 font-semibold transition-colors">
              🏛️ Tài khóa mở (G↑)
            </button>
            <button onclick="applyADASScenario('monetary_exp')" class="p-2 text-left rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-semibold transition-colors">
              💵 Tiền tệ mở (MS↑)
            </button>
            <button onclick="applyADASScenario('oil_shock')" class="p-2 text-left rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-900 font-semibold transition-colors">
              🛢️ Sốc cung (Dầu↑)
            </button>
            <button onclick="applyADASScenario('long_run_adjust')" class="p-2 text-left rounded-lg bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 font-semibold transition-colors">
              ⏳ Tự chỉnh dài hạn
            </button>
          </div>

          <div class="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Dịch chuyển Tổng cầu (AD):</span>
                <span id="label-inline-ad-shift" class="text-blue-600">${state.deltaAD || 0}</span>
              </div>
              <input type="range" min="-50" max="50" value="${state.deltaAD || 0}" id="slider-inline-ad" oninput="updateADShift(this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600">
            </div>
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Dịch chuyển Tổng cung ngắn (SRAS):</span>
                <span id="label-inline-sras-shift" class="text-rose-600">${state.deltaSRAS || 0}</span>
              </div>
              <input type="range" min="-50" max="50" value="${state.deltaSRAS || 0}" id="slider-inline-sras" oninput="updateSRASShift(this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600">
            </div>
          </div>

          <div id="model-inline-explanation-ad-as" class="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-xs">
            ${getADASExplanation()}
          </div>
        </div>
      `;

    case 'loanable-funds':
      return `
        <div class="space-y-3">
          <label class="block text-xs font-bold text-slate-800 uppercase tracking-wider">Chính sách của Chính phủ:</label>
          <div class="grid grid-cols-1 gap-1.5 text-xs">
            <button onclick="applyLoanScenario('budget_deficit')" class="p-2 text-left rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-900 font-semibold transition-colors">
              💸 Thâm hụt ngân sách (S dịch trái → r↑, I lấn át)
            </button>
            <button onclick="applyLoanScenario('save_incentive')" class="p-2 text-left rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-semibold transition-colors">
              💰 Khuyến khích tiết kiệm (S dịch phải → r↓, Q↑)
            </button>
            <button onclick="applyLoanScenario('invest_credit')" class="p-2 text-left rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 font-semibold transition-colors">
              🏗️ Tín dụng thuế đầu tư (Cầu I dịch phải → r↑, Q↑)
            </button>
          </div>

          <div class="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Cung tiết kiệm (S):</span>
                <span id="label-inline-loan-s" class="text-emerald-600">${state.deltaS || 0}</span>
              </div>
              <input type="range" min="-50" max="50" value="${state.deltaS || 0}" id="slider-inline-loan-s" oninput="updateLoanS(this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600">
            </div>
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Cầu đầu tư (I):</span>
                <span id="label-inline-loan-i" class="text-blue-600">${state.deltaI || 0}</span>
              </div>
              <input type="range" min="-50" max="50" value="${state.deltaI || 0}" id="slider-inline-loan-i" oninput="updateLoanI(this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600">
            </div>
          </div>

          <div id="model-inline-explanation-loanable-funds" class="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-xs">
            ${getLoanExplanation()}
          </div>
        </div>
      `;

    case 'money-market':
      return `
        <div class="space-y-3">
          <label class="block text-xs font-bold text-slate-800 uppercase tracking-wider">Hành động của NHTW:</label>
          <div class="grid grid-cols-1 gap-1.5 text-xs">
            <button onclick="applyMoneyScenario('omo_buy')" class="p-2 text-left rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-900 font-semibold transition-colors">
              🏦 NHTW Mua trái phiếu OMO (MS↑ → r↓)
            </button>
            <button onclick="applyMoneyScenario('omo_sell')" class="p-2 text-left rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-semibold transition-colors">
              📉 NHTW Bán trái phiếu OMO (MS↓ → r↑)
            </button>
            <button onclick="applyMoneyScenario('price_surge')" class="p-2 text-left rounded-lg bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 font-semibold transition-colors">
              📈 Mức giá P / Thu nhập Y tăng → Cầu tiền MD↑
            </button>
          </div>

          <div class="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Cung tiền NHTW (MS):</span>
                <span id="label-inline-ms-shift" class="text-sky-600">${state.deltaMS || 0}</span>
              </div>
              <input type="range" min="-50" max="50" value="${state.deltaMS || 0}" id="slider-inline-ms" oninput="updateMSShift(this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600">
            </div>
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Cầu tiền (MD):</span>
                <span id="label-inline-md-shift" class="text-purple-600">${state.deltaMD || 0}</span>
              </div>
              <input type="range" min="-50" max="50" value="${state.deltaMD || 0}" id="slider-inline-md" oninput="updateMDShift(this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600">
            </div>
          </div>

          <div id="model-inline-explanation-money-market" class="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-xs">
            ${getMoneyExplanation()}
          </div>
        </div>
      `;

    case 'open-economy':
      return `
        <div class="space-y-3">
          <label class="block text-xs font-bold text-slate-800 uppercase tracking-wider">Biến cố nền kinh tế mở:</label>
          <div class="grid grid-cols-1 gap-1.5 text-xs">
            <button onclick="applyOpenScenario('twin_deficits')" class="p-2 text-left rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-900 font-semibold transition-colors">
              📉 Thâm hụt kép (Twin Deficits: Thâm hụt CP → Nhập siêu)
            </button>
            <button onclick="applyOpenScenario('trade_policy')" class="p-2 text-left rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-900 font-semibold transition-colors">
              🛡️ Chính sách thuế quan/Hạn ngạch nhập khẩu
            </button>
            <button onclick="applyOpenScenario('capital_flight')" class="p-2 text-left rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-semibold transition-colors">
              🚨 Tháo chạy vốn (Capital Flight: Bất ổn chính trị)
            </button>
          </div>

          <div class="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Tiết kiệm quốc gia (S):</span>
                <span id="label-inline-open-s" class="text-emerald-600">${state.deltaS || 0}</span>
              </div>
              <input type="range" min="-50" max="50" value="${state.deltaS || 0}" id="slider-inline-open-s" oninput="updateOpenS(this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600">
            </div>
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Dòng vốn tháo chạy (NCO):</span>
                <span id="label-inline-open-flight" class="text-amber-600">${state.deltaFlight || 0}</span>
              </div>
              <input type="range" min="0" max="50" value="${state.deltaFlight || 0}" id="slider-inline-open-flight" oninput="updateOpenFlight(this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600">
            </div>
          </div>

          <div id="model-inline-explanation-open-economy" class="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-xs">
            ${getOpenExplanation()}
          </div>
        </div>
      `;

    case 'is-lm':
      return `
        <div class="space-y-3">
          <label class="block text-xs font-bold text-slate-800 uppercase tracking-wider">Phối hợp chính sách:</label>
          <div class="grid grid-cols-1 gap-1.5 text-xs">
            <button onclick="applyISLMScenario('fiscal_exp')" class="p-2 text-left rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 font-semibold transition-colors">
              🏛️ Tài khóa mở rộng (IS dịch phải → Y↑, r↑: Lấn át)
            </button>
            <button onclick="applyISLMScenario('monetary_exp')" class="p-2 text-left rounded-lg bg-orange-50 hover:bg-orange-100 border border-orange-200 text-orange-900 font-semibold transition-colors">
              💵 Tiền tệ mở rộng (LM dịch phải → Y↑, r↓)
            </button>
            <button onclick="applyISLMScenario('policy_mix')" class="p-2 text-left rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-semibold transition-colors">
              🤝 Phối hợp Tài khóa + Tiền tệ (Y tăng mạnh, r ổn định)
            </button>
          </div>

          <div class="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Đường IS (Thị trường hàng hóa):</span>
                <span id="label-inline-is-shift" class="text-blue-600">${state.deltaIS || 0}</span>
              </div>
              <input type="range" min="-50" max="50" value="${state.deltaIS || 0}" id="slider-inline-is" oninput="updateISShift(this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600">
            </div>
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Đường LM (Thị trường tiền tệ):</span>
                <span id="label-inline-lm-shift" class="text-orange-600">${state.deltaLM || 0}</span>
              </div>
              <input type="range" min="-50" max="50" value="${state.deltaLM || 0}" id="slider-inline-lm" oninput="updateLMShift(this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600">
            </div>
          </div>

          <div id="model-inline-explanation-is-lm" class="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-xs">
            ${getISLMExplanation()}
          </div>
        </div>
      `;

    case 'phillips-curve':
      return `
        <div class="space-y-3">
          <label class="block text-xs font-bold text-slate-800 uppercase tracking-wider">Tình huống thực tế:</label>
          <div class="grid grid-cols-1 gap-1.5 text-xs">
            <button onclick="applyPhillipsScenario('ad_boom')" class="p-2 text-left rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-900 font-semibold transition-colors">
              🚀 Bùng nổ Tổng cầu AD (u↓, π↑: Đi lên dọc SRPC)
            </button>
            <button onclick="applyPhillipsScenario('supply_shock')" class="p-2 text-left rounded-lg bg-pink-50 hover:bg-pink-100 border border-pink-200 text-pink-900 font-semibold transition-colors">
              💥 Cú sốc cung bất lợi (SRPC dịch lên/phải)
            </button>
            <button onclick="applyPhillipsScenario('disinflation')" class="p-2 text-left rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-semibold transition-colors">
              📉 Giảm lạm phát thành công (Kỳ vọng π^e giảm)
            </button>
          </div>

          <div class="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Biến động Tổng cầu (Dọc SRPC):</span>
                <span id="label-inline-phil-ad" class="text-indigo-600">${state.deltaAD || 0}</span>
              </div>
              <input type="range" min="-50" max="50" value="${state.deltaAD || 0}" id="slider-inline-phil-ad" oninput="updatePhilAD(this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600">
            </div>
            <div>
              <div class="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Lạm phát kỳ vọng π^e (Dịch SRPC):</span>
                <span id="label-inline-phil-exp" class="text-pink-600">${state.deltaExpInf || 0}</span>
              </div>
              <input type="range" min="-50" max="50" value="${state.deltaExpInf || 0}" id="slider-inline-phil-exp" oninput="updatePhilExp(this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-pink-600">
            </div>
          </div>

          <div id="model-inline-explanation-phillips-curve" class="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-xs">
            ${getPhillipsExplanation()}
          </div>
        </div>
      `;

    default:
      return '';
  }
}


// Multi-device Notes & Highlights Sync
function exportAllNotes() {
  const data = {
    notes: JSON.parse(localStorage.getItem('ktvm_chapter_notes') || '{}'),
    highlights: JSON.parse(localStorage.getItem('ktvm_highlights') || '{}'),
    exportedAt: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ktvm_notes_backup_' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importNotesFromFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.notes) localStorage.setItem('ktvm_chapter_notes', JSON.stringify(data.notes));
      if (data.highlights) localStorage.setItem('ktvm_highlights', JSON.stringify(data.highlights));
      alert('✓ Đã nạp ghi chú và highlight thành công!');
      location.reload();
    } catch (err) {
      alert('File không hợp lệ hoặc bị lỗi định dạng!');
    }
  };
  reader.readAsText(file);
}
