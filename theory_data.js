// theory_data.js - Toàn bộ giáo trình chuyên sâu, tóm tắt cô đọng, công thức và bẫy thi 13 chương Kinh tế Vĩ mô
window.THEORY_DATA = [
  {
    "chapter": 10,
    "title": "Chương 10: Đo lường thu nhập quốc gia (GDP)",
    "slug": "gdp",
    "badge": "Nền tảng vĩ mô",
    "description": "Nghiên cứu bản chất của Tổng sản phẩm quốc nội (GDP), sơ đồ chu chuyển kinh tế vĩ mô, 3 phương pháp tính GDP, phân biệt GDP danh nghĩa - thực tế, chỉ số giảm phát GDP và các chỉ tiêu thu nhập quốc gia.",
    "fullTextbook": [
      {
        "heading": "I. Sơ đồ chu chuyển kinh tế và Bản chất của Thu nhập Quốc gia",
        "content": "<p class=\"leading-relaxed mb-3\">Kinh tế học vĩ mô nghiên cứu toàn bộ nền kinh tế thay vì từng cá nhân hay doanh nghiệp riêng lẻ. Để mô hình hóa dòng chảy của tiền và hàng hóa, các nhà kinh tế sử dụng <strong>Sơ đồ Chu chuyển Kinh tế (Circular-Flow Diagram)</strong>.</p>\n<p class=\"leading-relaxed mb-3\">Một nền kinh tế mở hoàn chỉnh gồm <strong>4 tác nhân chính</strong> giao dịch trên <strong>3 thị trường</strong>:</p>\n<ul class=\"list-disc pl-5 space-y-1.5 mb-3 text-slate-700\">\n  <li><strong>Hộ gia đình (Households):</strong> Sở hữu các yếu tố sản xuất (Lao động, Đất đai, Tư bản, Doanh nhân). Họ cung ứng các yếu tố này cho doanh nghiệp trên <em>Thị trường Yếu tố sản xuất</em> để thu về 4 dòng thu nhập: Tiền công/tiền lương ($W$), Tiền thuê đất/nhà xưởng ($R$), Tiền lãi cho vay vốn ($i$), và Lợi nhuận kinh doanh ($\\Pi$). Hộ gia đình sử dụng thu nhập để: Tiêu dùng hàng hóa dịch vụ ($C$), nộp thuế ròng cho chính phủ ($T = \\text{Thuế gộp} - \\text{Chi chuyển nhượng}$), và gửi phần còn lại vào hệ thống tài chính dưới dạng Tiết kiệm tư nhân ($S_{pr}$).</li>\n  <li><strong>Doanh nghiệp (Firms):</strong> Thuê mua yếu tố sản xuất, kết hợp công nghệ để tạo ra sản phẩm hàng hóa và dịch vụ bán trên <em>Thị trường Hàng hóa & Dịch vụ</em>. Doanh nghiệp cũng vay vốn từ hệ thống tài chính để thực hiện chi tiêu Đầu tư tư nhân ($I$).</li>\n  <li><strong>Chính phủ (Government):</strong> Thu thuế ròng ($T$) và thực hiện Chi mua sắm hàng hóa & dịch vụ công ($G$). Nếu $T > G$, ngân sách thặng dư ($S_{pub} > 0$); nếu $T < G$, ngân sách thâm hụt và chính phủ phải vay vốn từ thị trường tài chính.</li>\n  <li><strong>Khu vực Nước ngoài (Foreign Sector):</strong> Mua hàng xuất khẩu ($EX$) của trong nước và bán hàng nhập khẩu ($IM$) vào thị trường nội địa. Chênh lệch là Xuất khẩu ròng ($NX = EX - IM$).</li>\n</ul>\n<p class=\"leading-relaxed mb-3\"><strong>Đồng nhất thức nền tảng:</strong> Trong bất kỳ nền kinh tế nào, <em>Tổng Thu nhập luôn bằng Tổng Chi tiêu</em>. Mỗi đồng mà một người chi ra để mua sắm hàng hóa chính là một đồng thu nhập mà một chủ thể khác nhận được. Do đó, việc đo lường GDP có thể thực hiện bằng cách cộng tổng chi tiêu hoặc cộng tổng thu nhập của tất cả các chủ thể.</p>"
      },
      {
        "heading": "II. Định nghĩa Chặt chẽ và Phân tích Từng Cấu phần của GDP",
        "content": "<p class=\"leading-relaxed mb-3\"><strong>Tổng sản phẩm quốc nội (Gross Domestic Product - GDP)</strong> là: <em>\"Giá trị thị trường của tất cả hàng hóa và dịch vụ cuối cùng được sản xuất ra trong phạm vi một quốc gia trong một thời kỳ nhất định.\"</em></p>\n<p class=\"leading-relaxed mb-2\">Phân tích chuyên sâu 6 đặc tính cấu thành định nghĩa:</p>\n<div class=\"space-y-2 mb-3\">\n  <div class=\"p-3 bg-slate-50 rounded-lg border border-slate-200\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">1. Giá trị thị trường (Market Value):</strong>\n    <p class=\"text-xs text-slate-600\">GDP không thể cộng số lượng quả táo với số lượng xe hơi. Để quy về cùng đơn vị đo lường, GDP dùng giá thị trường mà người tiêu dùng trả. Những hàng hóa có giá trị thị trường cao hơn sẽ đóng góp tỷ trọng lớn hơn vào GDP.</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 rounded-lg border border-slate-200\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">2. Của tất cả (Of All):</strong>\n    <p class=\"text-xs text-slate-600\">Bao gồm toàn bộ hàng hóa hợp pháp được sản xuất và giao dịch chính thức. <em>Loại trừ:</em> Kinh tế ngầm (buôn lậu, trốn thuế) và các hoạt động tự cung tự cấp không qua thị trường (tự dọn nhà, tự trồng rau ăn, chăm sóc người thân tại gia). Tuy nhiên, dịch vụ nhà ở tự có (chủ nhà tự ở trong nhà của mình) được cơ quan thống kê ước tính giá trị tiền thuê tương đương để cộng vào GDP.</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 rounded-lg border border-slate-200\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">3. Hàng hóa và Dịch vụ (Goods & Services):</strong>\n    <p class=\"text-xs text-slate-600\">Bao gồm cả hàng hóa hữu hình (thực phẩm, xe cộ, máy móc) và dịch vụ phi vật thể (giáo dục, y tế, du lịch, cắt tóc, tư vấn tài chính).</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 rounded-lg border border-slate-200\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">4. Hàng hóa Cuối cùng (Final Goods):</strong>\n    <p class=\"text-xs text-slate-600\">GDP chỉ tính hàng hóa cuối cùng (dành cho người sử dụng sau cùng), loại bỏ hoàn toàn hàng hóa trung gian (nguyên vật liệu được dùng để chế biến ra sản phẩm khác trong kỳ). Nếu tính cả bột mì và bánh mì, giá trị bột mì sẽ bị tính trùng hai lần (Double counting).</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 rounded-lg border border-slate-200\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">5. Được sản xuất ra trong kỳ (Produced):</strong>\n    <p class=\"text-xs text-slate-600\">Chỉ tính sản lượng tạo ra trong khoảng thời gian hiện tại (quý, năm). Việc chuyển nhượng đồ cũ (bán xe máy đã qua sử dụng, bán căn nhà cổ 100 năm tuổi) không tính vào GDP vì không tạo ra sản lượng mới. Tuy nhiên, phí môi giới hay tiền công dịch vụ phát sinh từ việc mua bán đồ cũ ĐƯỢC tính vào GDP.</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 rounded-lg border border-slate-200\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">6. Trong phạm vi một quốc gia (Within a Country):</strong>\n    <p class=\"text-xs text-slate-600\">Đo lường theo ranh giới địa lý lãnh thổ. Sản phẩm do chuyên gia nước ngoài hay tập đoàn đa quốc gia (như Intel, Honda) sản xuất trong biên giới Việt Nam được tính vào GDP Việt Nam.</p>\n  </div>\n</div>"
      },
      {
        "heading": "III. Ba Phương Pháp Đo Lường GDP",
        "content": "<p class=\"leading-relaxed mb-3\">Trên thực tế, cơ quan thống kê quốc gia sử dụng 3 phương pháp độc lập để tính GDP:</p>\n<h4 class=\"font-bold text-slate-900 text-sm mb-1\">1. Phương pháp Chi tiêu (Expenditure Approach)</h4>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Đây là phương pháp phổ biến nhất trong phân tích vĩ mô: $Y = C + I + G + NX$.</p>\n<ul class=\"list-disc pl-5 space-y-1 mb-3 text-xs text-slate-600\">\n  <li><strong>Tiêu dùng cá nhân (C):</strong> Chi mua sắm của hộ gia đình cho hàng tiêu dùng lâu bền, hàng mau hỏng và dịch vụ. <em>Ngoại trừ: Mua nhà ở mới của hộ gia đình không tính vào C mà tính vào Đầu tư (I).</em></li>\n  <li><strong>Đầu tư tư nhân (I):</strong> Tổng chi tiêu cho trang thiết bị vốn, máy móc của doanh nghiệp; chi tiêu xây dựng cấu trúc mới (bao gồm nhà ở mới của hộ gia đình); và chênh lệch hàng tồn kho (sản phẩm sản xuất ra trong năm nhưng chưa bán được xem như doanh nghiệp tự mua lại để tích trữ).</li>\n  <li><strong>Chi tiêu Chính phủ (G):</strong> Chi tiêu của nhà nước mua hàng hóa, dịch vụ và tiền lương công chức. <em>Tuyệt đối loại trừ Chi chuyển nhượng (Transfer payments - Tr)</em> như lương hưu, trợ cấp nghèo, học bổng xã hội vì chính phủ chi trả không đổi lấy hàng hóa mới.</li>\n  <li><strong>Xuất khẩu ròng (NX):</strong> $NX = EX - IM$. Trừ đi nhập khẩu $IM$ vì $IM$ đã được tính gộp trong $C, I, G$ nhưng không phải do nền kinh tế nội địa sản xuất.</li>\n</ul>\n<h4 class=\"font-bold text-slate-900 text-sm mb-1\">2. Phương pháp Thu nhập (Income Approach)</h4>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Cộng toàn bộ các dòng thu nhập phát sinh từ quá trình sản xuất:</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded font-mono text-xs mb-2\">\n  GDP = W + R + i + PR + De + Ti\n</div>\n<p class=\"text-xs text-slate-600 mb-3\">Trong đó: $W$ là tiền lương/tiền công; $R$ là tiền thuê mặt bằng/tài nguyên; $i$ là tiền lãi cho vay; $PR$ là lợi nhuận trước thuế của doanh nghiệp; $De$ là khấu hao tài sản cố định; $Ti$ là thuế gián thu ròng (Thuế gián thu trừ trợ cấp sản xuất).</p>\n<h4 class=\"font-bold text-slate-900 text-sm mb-1\">3. Phương pháp Giá trị Gia tăng (Value-Added Approach)</h4>\n<p class=\"leading-relaxed text-xs text-slate-700\">Giá trị gia tăng ($VA$) của từng đơn vị sản xuất bằng Doanh thu xuất lượng ($GO$) trừ đi Chi phí mua hàng hóa trung gian ($IC$): $VA = GO - IC$. GDP là tổng $VA$ của toàn bộ các mắt xích sản xuất trong chuỗi giá trị.</p>"
      },
      {
        "heading": "IV. GDP Danh Nghĩa, GDP Thực Tế và Chỉ Số Giảm Phát GDP",
        "content": "<p class=\"leading-relaxed mb-3\">Nếu GDP danh nghĩa tăng qua các năm, chúng ta chưa thể kết luận ngay là mức sống hay sản lượng tăng lên, vì có thể chỉ do mức giá tăng (lạm phát). Do đó cần phân biệt:</p>\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3\">\n  <div class=\"p-3 bg-blue-50 border border-blue-200 rounded-xl\">\n    <strong class=\"text-blue-900 block text-xs mb-1\">GDP Danh nghĩa (Nominal GDP):</strong>\n    <p class=\"text-xs text-slate-700\">Giá trị sản lượng tính theo giá hiện hành của năm tính toán: $GDP_n = \\sum (P_t \\times Q_t)$. Phản ánh cả sự thay đổi của lượng ($Q$) và giá ($P$).</p>\n  </div>\n  <div class=\"p-3 bg-emerald-50 border border-emerald-200 rounded-xl\">\n    <strong class=\"text-emerald-900 block text-xs mb-1\">GDP Thực tế (Real GDP):</strong>\n    <p class=\"text-xs text-slate-700\">Giá trị sản lượng tính theo mức giá cố định của một năm gốc (năm cơ sở $0$): $GDP_r = \\sum (P_0 \\times Q_t)$. Do giá $P_0$ cố định, GDP thực tế chỉ phản ánh sự gia tăng về khối lượng vật chất được sản xuất.</p>\n  </div>\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Chỉ số Giảm phát GDP (GDP Deflator):</strong> Thước đo phản ánh mức giá chung của tất cả hàng hóa và dịch vụ sản xuất trong nước:</p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded text-center font-mono text-xs my-2\">\n  $$\\text{GDP Deflator}_t = \\frac{GDP_n}{GDP_r} \\times 100$$\n</div>\n<p class=\"text-xs text-slate-600\">Chỉ số giảm phát ở năm cơ sở luôn bằng đúng 100. Tỷ lệ lạm phát giữa năm $t$ và năm $t-1$ tính theo Deflator là:</p>\n<div class=\"p-2 bg-slate-50 border border-slate-200 rounded text-center font-mono text-xs my-2\">\n  $$\\pi_t = \\frac{\\text{Deflator}_t - \\text{Deflator}_{t-1}}{\\text{Deflator}_{t-1}} \\times 100\\%$$\n</div>"
      },
      {
        "heading": "V. Các Chỉ Tiêu Thu Nhập Quốc Gia Liên Quan & Hạn Chế của GDP",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Hệ thống tài khoản quốc gia (SNA) định nghĩa thêm các chỉ tiêu đo lường thu nhập quan trọng:</p>\n<ul class=\"list-disc pl-5 space-y-1 text-xs text-slate-600 mb-3\">\n  <li><strong>GNP (Gross National Product - Tổng sản phẩm quốc gia):</strong> Đo thu nhập do công dân một nước kiếm được bất kể ở đâu: $GNP = GDP + NFA$ ($NFA$ là thu nhập yếu tố ròng từ nước ngoài = Thu nhập người dân kiếm ở nước ngoài chuyển về trừ thu nhập người nước ngoài kiếm trong nước chuyển đi).</li>\n  <li><strong>NNP (Net National Product - Sản phẩm quốc dân ròng):</strong> $NNP = GNP - De$ (Khấu hao tài sản cố định).</li>\n  <li><strong>NI (National Income - Thu nhập quốc dân):</strong> $NI = NNP - Ti$ (Thuế gián thu ròng). Phản ánh tổng thu nhập kiếm được từ các yếu tố sản xuất của công dân.</li>\n  <li><strong>PI (Personal Income - Thu nhập cá nhân):</strong> Thu nhập thực tế mà các hộ gia đình nhận được: $PI = NI - \\text{Lợi nhuận giữ lại} - \\text{Thuế TNDN} - \\text{Đóng góp BHXH} + \\text{Chi chuyển nhượng Tr} + \\text{Lãi từ chính phủ}$.</li>\n  <li><strong>DI (Disposable Income - Thu nhập khả dụng):</strong> Thu nhập còn lại sau khi nộp thuế trực thu: $DI = PI - \\text{Thuế TNCN} = C + S$.</li>\n</ul>\n<p class=\"leading-relaxed text-xs text-slate-700\"><strong>Những hạn chế của GDP:</strong> Mặc dù GDP bình quân đầu người là thước đo tốt nhất về mức sống vật chất, GDP không đo lường: (1) Kinh tế phi chính thức và hoạt động phi thị trường; (2) Chất lượng môi trường sống và cạn kiệt tài nguyên; (3) Mức độ bình đẳng trong phân phối thu nhập; (4) Thời gian nghỉ ngơi, giải trí và hạnh phúc tinh thần của người dân.</p>"
      }
    ],
    "summaryHighlights": [
      "Quy luật vĩ mô then chốt: Trong toàn nền kinh tế, Tổng thu nhập luôn bằng Tổng chi tiêu.",
      "GDP chỉ tính giá trị hàng hóa cuối cùng, sản xuất trong kỳ hiện tại và trong phạm vi lãnh thổ địa lý.",
      "Phương trình chi tiêu: Y = C + I + G + NX. Mua nhà mới tính vào I, chi chuyển nhượng trợ cấp KHÔNG tính vào G.",
      "GDP thực tế dùng giá năm gốc cố định P0 để đo lường sản lượng thực tế, triệt tiêu ảnh hưởng của lạm phát.",
      "GNP = GDP + NFA (Thu nhập nhân tố ròng từ nước ngoài).",
      "Chỉ số giảm phát GDP Deflator = (GDP danh nghĩa / GDP thực tế) × 100."
    ],
    "keyConcepts": [
      {
        "term": "GDP (Tổng sản phẩm quốc nội)",
        "desc": "Giá trị thị trường của tất cả hàng hóa và dịch vụ cuối cùng được sản xuất trong phạm vi một quốc gia trong một thời kỳ nhất định."
      },
      {
        "term": "Hàng hóa cuối cùng vs. Trung gian",
        "desc": "Hàng cuối cùng dành cho người dùng sau cùng; hàng trung gian dùng làm nguyên liệu đầu vào. GDP chỉ tính hàng cuối cùng."
      },
      {
        "term": "GNP (Tổng sản phẩm quốc gia)",
        "desc": "Tổng thu nhập do công dân một nước tạo ra bất kể ở trong nước hay nước ngoài. GNP = GDP + NFA."
      },
      {
        "term": "Chỉ số giảm phát GDP",
        "desc": "Thước đo mức giá chung của tất cả hàng hóa sản xuất nội địa: Deflator = (Nominal GDP / Real GDP) × 100."
      },
      {
        "term": "Thu nhập khả dụng (DI)",
        "desc": "Thu nhập của hộ gia đình còn lại sau khi nộp thuế thu nhập cá nhân, dùng cho Tiêu dùng C và Tiết kiệm S."
      }
    ],
    "formulas": [
      {
        "name": "Đồng nhất thức chi tiêu",
        "formula": "Y = C + I + G + NX",
        "note": "C: Tiêu dùng cá nhân; I: Đầu tư tư nhân; G: Chi mua sắm chính phủ; NX: Xuất khẩu ròng."
      },
      {
        "name": "GDP danh nghĩa",
        "formula": "GDP_n = \\sum (P_t \\times Q_t)",
        "note": "Tính theo giá hiện hành của năm tính toán."
      },
      {
        "name": "GDP thực tế",
        "formula": "GDP_r = \\sum (P_0 \\times Q_t)",
        "note": "Tính theo giá cố định của năm gốc 0."
      },
      {
        "name": "Chỉ số giảm phát GDP",
        "formula": "Deflator_t = \\frac{GDP_n}{GDP_r} \\times 100",
        "note": "Chỉ số năm gốc luôn bằng đúng 100."
      },
      {
        "name": "Mối quan hệ GDP và GNP",
        "formula": "GNP = GDP + NFA",
        "note": "NFA = Thu nhập người trong nước kiếm ở nước ngoài - Thu nhập người nước ngoài kiếm trong nước."
      },
      {
        "name": "Thu nhập khả dụng",
        "formula": "DI = PI - T_{\\text{cá nhân}} = C + S",
        "note": "Thu nhập dùng để chi tiêu tiêu dùng và tiết kiệm cá nhân."
      }
    ],
    "traps": [
      "Mua nhà ở mới được xếp vào ĐẦU TƯ (I), KHÔNG tính vào Tiêu dùng (C).",
      "Trợ cấp hưu trí, thất nghiệp, học bổng là Chi chuyển nhượng (Transfer payment), KHÔNG tính vào G vì không đổi lấy hàng hóa mới.",
      "Mua cổ phiếu, trái phiếu, vàng, đất đai, nhà cũ KHÔNG tính vào GDP. Chỉ phí môi giới phát sinh trong giao dịch mới tính vào GDP.",
      "Hàng hóa sản xuất ra nhưng chưa bán được trong năm được tính vào Đầu tư (I) dưới dạng biến động tồn kho."
    ],
    "flashcards": [
      {
        "front": "Định nghĩa GDP là gì?",
        "back": "Giá trị thị trường của tất cả hàng hóa và dịch vụ CUỐI CÙNG được sản xuất ra TRONG PHẠM VI MỘT NƯỚC trong MỘT THỜI KỲ NHẤT ĐỊNH."
      },
      {
        "front": "Tại sao hàng hóa trung gian không được tính trực tiếp vào GDP?",
        "back": "Để tránh tính trùng hai lần (Double counting), vì giá trị của hàng trung gian đã nằm trọn trong giá bán của hàng hóa cuối cùng."
      },
      {
        "front": "Một gia đình mua một căn hộ chung cư mới xây thì giao dịch này tính vào đâu trong GDP?",
        "back": "Được tính vào Đầu tư tư nhân (I) - cụ thể là đầu tư cấu trúc nhà ở dân cư."
      },
      {
        "front": "Công thức tính Chỉ số giảm phát GDP?",
        "back": "GDP Deflator = (GDP danh nghĩa / GDP thực tế) × 100."
      },
      {
        "front": "Sự khác biệt cốt lõi giữa GDP và GNP là gì?",
        "back": "GDP đo theo lãnh thổ địa lý nội địa, GNP đo theo quyền sở hữu quốc tịch của công dân."
      }
    ]
  },
  {
    "chapter": 11,
    "title": "Chương 11: Đo lường chi phí sinh hoạt (CPI)",
    "slug": "cpi",
    "badge": "Chỉ số giá",
    "description": "Nghiên cứu bản chất Chỉ số giá tiêu dùng (CPI), quy trình 5 bước tính toán, 3 thiên vị khiến CPI phóng đại lạm phát, so sánh toàn diện CPI và GDP Deflator, và phương trình Fisher.",
    "fullTextbook": [
      {
        "heading": "I. Khái niệm và Ý nghĩa của Chỉ số Giá Tiêu dùng (CPI)",
        "content": "<p class=\"leading-relaxed mb-3\">Nếu như GDP phản ánh tổng sản lượng và thu nhập quốc dân thì <strong>Chỉ số Giá Tiêu dùng (Consumer Price Index - CPI)</strong> là thước đo trực tiếp nhất về <em>chi phí sinh hoạt</em> của người dân. CPI phản ánh mức giá tổng quát của một giỏ hàng hóa và dịch vụ mà một hộ gia đình tiêu dùng điển hình mua sắm định kỳ.</p>\n<p class=\"leading-relaxed mb-3\">Ý nghĩa và ứng dụng thực tiễn của CPI:</p>\n<ul class=\"list-disc pl-5 space-y-1 text-xs text-slate-700 mb-3\">\n  <li>Là chỉ báo chính thức để đo lường tốc độ lạm phát hàng tháng, hàng quý của nền kinh tế.</li>\n  <li>Làm căn cứ để thực hiện <strong>Chỉ số hóa (Indexation)</strong>: Tự động điều chỉnh các khoản thanh toán danh nghĩa theo hợp đồng hoặc luật định (như điều chỉnh tiền lương tối thiểu, lương hưu, học bổng, thuế thu nhập lũy tiến) theo tỷ lệ tăng của chi phí sinh hoạt (COLAs - Cost-of-Living Adjustments) để bảo toàn sức mua thực tế.</li>\n</ul>"
      },
      {
        "heading": "II. Quy trình 5 Bước Chuẩn mực Tính toán CPI",
        "content": "<p class=\"leading-relaxed mb-3\">Cơ quan thống kê nhà nước tính toán chỉ số CPI theo 5 bước tuần tự:</p>\n<ol class=\"list-decimal pl-5 space-y-2 text-xs text-slate-700 mb-3\">\n  <li><strong>Cố định Giỏ hàng (Fix the basket):</strong> Khảo sát hàng nghìn hộ gia đình để lập nên danh mục các mặt hàng thường xuyên mua sắm nhất và gán tỷ trọng cố định $Q_0$ cho từng mặt hàng (như lương thực, nhà ở, y tế, giao thông, giáo dục).</li>\n  <li><strong>Xác định Giá cả (Find the prices):</strong> Thu thập giá bán lẻ định kỳ của tất cả các mặt hàng trong giỏ tại các siêu thị, chợ dân sinh ($P_t$).</li>\n  <li><strong>Tính Chi phí mua Giỏ hàng (Compute basket cost):</strong> Nhân giá từng kỳ với khối lượng cố định năm gốc:\n    $$\\text{Chi phí}_t = \\sum (P_{it} \\times Q_{i0})$$\n  </li>\n  <li><strong>Chọn Năm cơ sở (Năm gốc 0) và Tính CPI:</strong>\n    $$\\text{CPI}_t = \\frac{\\text{Chi phí giỏ hàng năm } t}{\\text{Chi phí giỏ hàng năm gốc } 0} \\times 100$$\n    <em>(Lưu ý: CPI của năm gốc luôn luôn bằng đúng 100).</em>\n  </li>\n  <li><strong>Tính Tỷ lệ Lạm phát (Compute inflation rate):</strong>\n    $$\\pi_t = \\frac{\\text{CPI}_t - \\text{CPI}_{t-1}}{\\text{CPI}_{t-1}} \\times 100\\%$$\n  </li>\n</ol>"
      },
      {
        "heading": "III. Ba Thiên vị Làm CPI Phóng đại Lạm phát (Vấn đề Đo lường)",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Mục đích của CPI là đo lường sự thay đổi của chi phí sinh hoạt. Tuy nhiên, việc sử dụng <em>khối lượng giỏ hàng cố định</em> khiến CPI gặp phải 3 lỗi đo lường cố hữu khiến nó thường <strong>phóng đại (đánh giá quá cao) mức tăng chi phí sinh hoạt thực tế khoảng 0.5% - 1% mỗi năm</strong>:</p>\n<div class=\"space-y-2.5 mb-3\">\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-rose-900 block text-xs mb-0.5\">1. Thiên vị Thay thế (Substitution Bias):</strong>\n    <p class=\"text-xs text-slate-600\">Khi giá cả biến động, không phải mặt hàng nào cũng tăng giá như nhau. Người tiêu dùng sẽ phản ứng linh hoạt bằng cách mua ít mặt hàng tăng giá mạnh và thay thế bằng mặt hàng tương đương có giá rẻ hơn (ví dụ: giá thịt bò tăng phi mã, người dân chuyển sang ăn thịt gà). Tuy nhiên, vì giỏ hàng CPI cố định lượng thịt bò ở năm gốc, công thức tính giả định người dân vẫn mua nhiều thịt bò giá đắt như cũ, từ đó tính ra chi phí sinh hoạt cao hơn thực tế.</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-rose-900 block text-xs mb-0.5\">2. Sự xuất hiện của Hàng hóa Mới (Introduction of New Goods):</strong>\n    <p class=\"text-xs text-slate-600\">Khi hàng hóa mới xuất hiện (điện thoại thông minh, gọi xe công nghệ, dịch vụ xem phim trực tuyến), người tiêu dùng có thêm nhiều sự lựa chọn hữu ích hơn. Điều này làm tăng sức mua thực sự của mỗi đồng tiền. Giỏ hàng cố định của CPI không cập nhật ngay các hàng hóa mới này trong nhiều năm, làm bỏ sót sự cải thiện mức sống.</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-rose-900 block text-xs mb-0.5\">3. Thay đổi Chất lượng Không đo lường được (Unmeasured Quality Change):</strong>\n    <p class=\"text-xs text-slate-600\">Nếu một chiếc xe hơi hay máy tính năm nay tăng giá thêm 5% nhưng chất lượng tăng gấp đôi (an toàn hơn, chạy nhanh hơn, bền hơn), thì chi phí sinh hoạt thực tế trên mỗi đơn vị hữu dụng không hề tăng. Mặc dù chuyên gia thống kê có cố gắng điều chỉnh, việc đo lường lượng hóa chất lượng vô hình là rất khó khăn.</p>\n  </div>\n</div>"
      },
      {
        "heading": "IV. So Sánh Chi Tiết: CPI vs. GDP Deflator",
        "content": "<p class=\"leading-relaxed mb-3 text-xs text-slate-700\">Đây là câu hỏi trọng tâm thường xuyên xuất hiện trong đề thi tốt nghiệp và đại học:</p>\n<div class=\"overflow-x-auto mb-3\">\n  <table class=\"w-full text-xs text-left border border-slate-200 rounded-lg\">\n    <thead class=\"bg-slate-100 text-slate-800 font-bold\">\n      <tr>\n        <th class=\"p-2.5 border-b\">Tiêu chí so sánh</th>\n        <th class=\"p-2.5 border-b text-blue-900\">Chỉ số Giá Tiêu dùng (CPI)</th>\n        <th class=\"p-2.5 border-b text-emerald-900\">Chỉ số Giảm phát GDP (GDP Deflator)</th>\n      </tr>\n    </thead>\n    <tbody class=\"divide-y divide-slate-200 text-slate-700\">\n      <tr>\n        <td class=\"p-2.5 font-semibold\">Phạm vi hàng hóa</td>\n        <td class=\"p-2.5\">Chỉ gồm hàng hóa và dịch vụ do người tiêu dùng mua.</td>\n        <td class=\"p-2.5\">Toàn bộ hàng hóa và dịch vụ sản xuất trong nước.</td>\n      </tr>\n      <tr>\n        <td class=\"p-2.5 font-semibold\">Hàng nhập khẩu</td>\n        <td class=\"p-2.5 text-blue-700 font-medium\">CÓ TÍNH (nếu người tiêu dùng mua, ví dụ xe hơi nhập khẩu, táo Mỹ).</td>\n        <td class=\"p-2.5 text-rose-700 font-medium\">KHÔNG TÍNH (vì không được sản xuất trong nước).</td>\n      </tr>\n      <tr>\n        <td class=\"p-2.5 font-semibold\">Hàng tư bản / Máy móc</td>\n        <td class=\"p-2.5 text-rose-700 font-medium\">KHÔNG TÍNH (máy bay, máy kéo không nằm trong rổ tiêu dùng gia đình).</td>\n        <td class=\"p-2.5 text-blue-700 font-medium\">CÓ TÍNH (nếu do doanh nghiệp nội địa sản xuất ra).</td>\n      </tr>\n      <tr>\n        <td class=\"p-2.5 font-semibold\">Cơ cấu rổ hàng</td>\n        <td class=\"p-2.5\">CỐ ĐỊNH giỏ hàng ở năm gốc (Chỉ số Laspeyres).</td>\n        <td class=\"p-2.5\">THAY ĐỔI theo sản lượng sản xuất thực tế từng năm (Chỉ số Paasche).</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
      },
      {
        "heading": "V. Quy Đổi Tiền Tệ Qua Các Thời Kỳ & Phương Trình Fisher",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Để so sánh một khoản tiền ở năm $T$ trong quá khứ tương đương với bao nhiêu tiền ngày nay, ta sử dụng CPI để khử lạm phát:</p>\n<div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded text-center font-mono text-xs mb-3\">\n  $$\\text{Giá trị theo tiền hôm nay} = \\text{Giá trị năm } T \\times \\frac{\\text{CPI hôm nay}}{\\text{CPI năm } T}$$\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Lãi suất danh nghĩa vs. Lãi suất thực tế (Phương trình Fisher):</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Lãi suất danh nghĩa ($i$) là lãi suất được ngân hàng công bố (chưa tính đến lạm phát). Lãi suất thực tế ($r$) đo lường sự gia tăng sức mua thực sự của khoản tiền gửi hoặc chi phí vay thực sự:</p>\n<div class=\"p-2.5 bg-blue-50/50 border border-blue-200 rounded text-center font-mono text-xs mb-2\">\n  $$r = i - \\pi \\quad \\Longleftrightarrow \\quad i = r + \\pi$$\n</div>\n<p class=\"text-xs text-slate-600 italic\">Chú ý: Khi tỷ lệ lạm phát vượt quá lãi suất danh nghĩa ($\\pi > i$), lãi suất thực tế nhận giá trị ÂM, nghĩa là người gửi tiết kiệm bị mất sức mua sau thời gian gửi tiền.</p>"
      }
    ],
    "summaryHighlights": [
      "CPI đo lường chi phí của giỏ hàng hóa và dịch vụ cố định mà người tiêu dùng điển hình mua sắm.",
      "3 thiên vị khiến CPI phóng đại chi phí sinh hoạt: Thiên vị thay thế, Hàng hóa mới, Thay đổi chất lượng.",
      "Hàng nhập khẩu tiêu dùng tăng giá: Tác động đến CPI, KHÔNG tác động đến GDP Deflator.",
      "Máy bay hoặc thiết bị công nghiệp nội địa tăng giá: Tác động đến GDP Deflator, KHÔNG tác động đến CPI.",
      "Phương trình Fisher: Lãi suất thực = Lãi suất danh nghĩa - Tỷ lệ lạm phát (r = i - π)."
    ],
    "keyConcepts": [
      {
        "term": "Chỉ số CPI",
        "desc": "Thước đo chi phí tổng quát của giỏ hàng hóa và dịch vụ do người tiêu dùng mua."
      },
      {
        "term": "Thiên vị thay thế",
        "desc": "Người tiêu dùng mua hàng rẻ thay thế hàng đắt, nhưng CPI giả định mua lượng hàng cũ nên thổi phồng lạm phát."
      },
      {
        "term": "Chỉ số hóa (Indexation)",
        "desc": "Tự động điều chỉnh các khoản thanh toán bằng tiền theo biến động của CPI để bảo toàn sức mua."
      },
      {
        "term": "Lãi suất thực tế",
        "desc": "Lãi suất đã điều chỉnh theo lạm phát, đo lường sự thay đổi của sức mua thực tế: r = i - π."
      }
    ],
    "formulas": [
      {
        "name": "Công thức tính CPI",
        "formula": "CPI_t = \\frac{\\sum P_{it} Q_{i0}}{\\sum P_{i0} Q_{i0}} \\times 100",
        "note": "Lượng Q0 được giữ cố định ở năm gốc."
      },
      {
        "name": "Tỷ lệ lạm phát",
        "formula": "\\pi_t = \\frac{CPI_t - CPI_{t-1}}{CPI_{t-1}} \\times 100\\%",
        "note": "Tốc độ tăng phần trăm của CPI."
      },
      {
        "name": "Quy đổi giá trị tiền tệ",
        "formula": "\\text{Tiền hôm nay} = \\text{Tiền năm } T \\times \\frac{CPI_{\\text{nay}}}{CPI_T}",
        "note": "Dùng để so sánh sức mua qua các mốc thời gian."
      },
      {
        "name": "Phương trình Fisher",
        "formula": "r = i - \\pi",
        "note": "r: Lãi suất thực tế; i: Lãi suất danh nghĩa; π: Tỷ lệ lạm phát."
      }
    ],
    "traps": [
      "Hàng tiêu dùng nhập khẩu (như táo Mỹ, xe hơi Đức) tăng giá: Có ảnh hưởng đến CPI của Việt Nam, nhưng KHÔNG ảnh hưởng đến GDP Deflator của Việt Nam.",
      "Hàng tư bản máy móc sản xuất trong nước tăng giá: Có ảnh hưởng đến GDP Deflator, nhưng KHÔNG ảnh hưởng đến CPI.",
      "CPI luôn có xu hướng PHÓNG ĐẠI (đánh giá quá cao) mức tăng chi phí sinh hoạt vì bỏ qua hành vi người dân chuyển sang mua hàng thay thế rẻ hơn.",
      "Lãi suất thực tế có thể ÂM khi lạm phát cao hơn lãi suất danh nghĩa."
    ],
    "flashcards": [
      {
        "front": "3 thiên vị lớn làm chỉ số CPI phóng đại lạm phát là gì?",
        "back": "1. Thiên vị thay thế; 2. Giới thiệu hàng hóa mới; 3. Thay đổi chất lượng không đo lường được."
      },
      {
        "front": "Giá máy bay Boeing sản xuất tại Mỹ tăng ảnh hưởng đến chỉ số nào của Mỹ?",
        "back": "Làm tăng GDP Deflator của Mỹ, KHÔNG ảnh hưởng CPI Mỹ vì máy bay không nằm trong giỏ tiêu dùng của dân."
      },
      {
        "front": "Nếu CPI năm trước là 120 và năm nay là 132, tỷ lệ lạm phát là bao nhiêu?",
        "back": "π = (132 - 120)/120 × 100% = 10%."
      },
      {
        "front": "Phương trình Fisher phát biểu mối quan hệ nào?",
        "back": "Lãi suất thực = Lãi suất danh nghĩa - Tỷ lệ lạm phát (r = i - π)."
      }
    ]
  },
  {
    "chapter": 12,
    "title": "Chương 12: Sản xuất và tăng trưởng",
    "slug": "growth",
    "badge": "Tăng trưởng dài hạn",
    "description": "Nghiên cứu các yếu tố quyết định năng suất và mức sống của quốc gia trong dài hạn, hàm sản xuất tổng hợp, lợi suất giảm dần của tư bản, hiệu ứng đuổi kịp và các chính sách thúc đẩy tăng trưởng.",
    "fullTextbook": [
      {
        "heading": "I. Năng suất: Nhân Tố Quyết Định Mức Sống Quốc Gia",
        "content": "<p class=\"leading-relaxed mb-3\">Tại sao một số quốc gia (như Mỹ, Nhật Bản, Đức) lại có mức sống cao gấp hàng chục lần so với các nước nghèo ở châu Phi hay Nam Á? Câu trả lời cốt lõi của kinh tế học vĩ mô nằm ở một từ duy nhất: <strong>NĂNG SUẤT (Productivity)</strong>.</p>\n<p class=\"leading-relaxed mb-3\"><strong>Năng suất</strong> là số lượng hàng hóa và dịch vụ được sản xuất ra từ mỗi đơn vị lao động: $\\text{Năng suất} = Y / L$. Mức sống của một quốc gia hoàn toàn phụ thuộc vào năng lực sản xuất của quốc gia đó. Nếu công nhân tạo ra nhiều sản lượng hơn trong mỗi giờ làm việc, nền kinh tế sẽ có nhiều hàng hóa để tiêu dùng hơn và thu nhập bình quân của người dân sẽ cao hơn.</p>"
      },
      {
        "heading": "II. 4 Nhân Tố Quyết Định Năng Suất Lao Động",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Năng suất lao động của một công nhân phụ thuộc vào 4 nguồn vốn và tài nguyên hỗ trợ:</p>\n<div class=\"space-y-2.5 mb-3\">\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">1. Vốn Thể chất trên mỗi Lao động (Physical Capital per Worker - K/L):</strong>\n    <p class=\"text-xs text-slate-600\">Trang thiết bị máy móc, công cụ, nhà xưởng được sử dụng để sản xuất. Một công nhân làm mộc có cưa máy hiện đại sẽ cưa được nhiều gỗ hơn gấp mười lần người thợ chỉ dùng cưa tay.</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">2. Vốn Nhân lực trên mỗi Lao động (Human Capital per Worker - H/L):</strong>\n    <p class=\"text-xs text-slate-600\">Kiến thức, kỹ năng, trình độ học vấn, kinh nghiệm và sức khỏe tích lũy của người lao động thông qua trường lớp, đào tạo nghề và chăm sóc y tế.</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">3. Tài nguyên Thiên nhiên trên mỗi Lao động (Natural Resources per Worker - N/L):</strong>\n    <p class=\"text-xs text-slate-600\">Đầu vào do thiên nhiên ban tặng như đất đai màu mỡ, mỏ khoáng sản, dầu khí, nguồn nước. Tài nguyên dồi dào có thể giúp một nước giàu có (như các nước Vùng Vịnh), nhưng <em>không phải điều kiện bắt buộc</em> (ví dụ: Nhật Bản rất nghèo tài nguyên nhưng vẫn giàu nhờ vốn nhân lực và công nghệ cao).</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">4. Tri thức Công nghệ (Technological Knowledge - A):</strong>\n    <p class=\"text-xs text-slate-600\">Sự hiểu biết của toàn xã hội về các phương thức tốt nhất để biến các đầu vào thành đầu ra sản phẩm. <em>Phân biệt giữa Tri thức công nghệ và Vốn nhân lực:</em> Tri thức công nghệ là cuốn sách giáo khoa chứa đựng kiến thức của nhân loại; vốn nhân lực là lượng thời gian và nỗ lực mà người lao động dành ra để đọc và hiểu cuốn sách đó.</p>\n  </div>\n</div>"
      },
      {
        "heading": "III. Hàm Sản Xuất Tổng Hợp và Hiệu Ứng Đuổi Kịp (Catch-up Effect)",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Các nhà kinh tế mô tả quan hệ sản xuất bằng <strong>Hàm sản xuất có lợi suất không đổi theo quy mô (Constant Returns to Scale)</strong>:</p>\n<div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded text-center font-mono text-xs mb-2\">\n  $$Y = A \\cdot F(L, K, H, N)$$\n</div>\n<p class=\"text-xs text-slate-600 mb-2\">Chia cả hai vế cho $L$, ta có hàm năng suất trên mỗi công nhân:</p>\n<div class=\"p-2.5 bg-blue-50/50 border border-blue-200 rounded text-center font-mono text-xs mb-3\">\n  $$\\frac{Y}{L} = A \\cdot F\\left(1, \\frac{K}{L}, \\frac{H}{L}, \\frac{N}{L}\\right)$$\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Quy luật Lợi suất Giảm dần của Tư bản (Diminishing Marginal Returns):</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Khi lượng tư bản $K$ tăng lên, sản lượng tăng thêm từ một đơn vị tư bản bổ sung sẽ giảm dần. Nếu một công nhân chỉ có 1 chiếc máy tính, việc cấp thêm chiếc thứ 2 giúp tăng năng suất đáng kể. Nhưng nếu cấp đến chiếc máy tính thứ 5, chiếc máy thêm vào hầu như không làm tăng sản lượng bao nhiêu.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Hiệu ứng Đuổi kịp (Catch-up Effect):</strong></p>\n<p class=\"text-xs text-slate-600\">Do lợi suất giảm dần của tư bản, các quốc gia nghèo ban đầu (vốn trang bị tư bản còn rất thấp) sẽ có năng suất cận biên của vốn rất cao. Chỉ cần một khoản đầu tư nhỏ ban đầu cũng tạo ra tốc độ tăng trưởng GDP bứt phá rất nhanh. Ngược lại, các nước giàu đã có lượng tư bản khổng lồ nên tốc độ tăng trưởng từ việc tích lũy tư bản chậm hơn. Nhờ đó, các nước nghèo có tiềm năng đuổi kịp mức sống của các nước giàu nếu có chính sách kinh tế đúng đắn.</p>"
      },
      {
        "heading": "IV. Các Chính Sách của Chính Phủ Thúc Đẩy Tăng Trưởng",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Chính phủ có thể áp dụng các chính sách vĩ mô dài hạn để thúc đẩy tăng trưởng năng suất:</p>\n<ul class=\"list-disc pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li><strong>Khuyến khích Tiết kiệm và Đầu tư:</strong> Muốn có thêm tư bản trong tương lai thì hôm nay xã hội phải tiêu dùng ít đi và tiết kiệm nhiều hơn.</li>\n  <li><strong>Thu hút Đầu tư Nước ngoài:</strong> Đầu tư trực tiếp nước ngoài ($FDI$ - nhà máy do nước ngoài sở hữu và điều hành như Samsung, Toyota) và Đầu tư gián tiếp nước ngoài ($FPI$ - người nước ngoài mua cổ phiếu, trái phiếu). Đầu tư nước ngoài mang lại vốn tư bản và chuyển giao công nghệ quản lý tiên tiến.</li>\n  <li><strong>Đầu tư vào Giáo dục và Y tế (Vốn nhân lực):</strong> Giáo dục tạo ra <em>ngoại ứng tích cực (positive externality)</em> vì người có học thức cao sẽ sáng tạo ra ý tưởng mới làm lợi cho cả xã hội. Sức khỏe dinh dưỡng tốt giúp người lao động làm việc năng suất hơn.</li>\n  <li><strong>Bảo vệ Quyền Sở hữu Tài sản và Ổn định Chính trị:</strong> Thị trường chỉ vận hành hiệu quả khi quyền sở hữu được tòa án bảo vệ nghiêm minh. Tham nhũng, bất ổn chính trị và nguy cơ bị quốc hữu hóa tài sản sẽ triệt tiêu mọi động lực đầu tư dài hạn.</li>\n  <li><strong>Chính sách Thương mại Hướng ngoại (Free Trade):</strong> Thương mại tự do hoạt động giống như một công nghệ mới: Cho phép một nước xuất khẩu hàng hóa mình có lợi thế để đổi lấy hàng hóa thế giới sản xuất hiệu quả hơn, mở rộng thị trường và tăng phúc lợi.</li>\n  <li><strong>Nghiên cứu và Phát triển (R&D):</strong> Tri thức công nghệ là một <em>hàng hóa công (public good)</em>. Chính phủ tài trợ kinh phí nghiên cứu cơ bản và cấp bằng phát minh sáng chế (Patents) để khuyến khích sáng tạo đột phá.</li>\n</ul>"
      }
    ],
    "summaryHighlights": [
      "Năng suất lao động (Y/L) là nhân tố quyết định cốt lõi mức sống của một quốc gia trong dài hạn.",
      "4 nguồn lực của năng suất: Vốn thể chất (K/L), Vốn nhân lực (H/L), Tài nguyên (N/L), và Tri thức công nghệ (A).",
      "Tư bản có lợi suất giảm dần: Tích lũy tư bản không thể duy trì tăng trưởng vô hạn.",
      "Hiệu ứng đuổi kịp (Catch-up effect): Nước nghèo có xu hướng tăng trưởng nhanh hơn nước giàu nhờ năng suất cận biên của tư bản ban đầu rất cao.",
      "Động lực tăng trưởng bền vững lâu dài duy nhất là Tiến bộ Công nghệ (A)."
    ],
    "keyConcepts": [
      {
        "term": "Năng suất (Productivity)",
        "desc": "Số lượng hàng hóa và dịch vụ được tạo ra từ mỗi đơn vị lao động: Y/L."
      },
      {
        "term": "Hiệu ứng đuổi kịp",
        "desc": "Hiện tượng các nước nghèo ban đầu đạt tốc độ tăng trưởng cao hơn các nước giàu khi được trang bị thêm tư bản."
      },
      {
        "term": "Lợi suất giảm dần của tư bản",
        "desc": "Quy luật sản lượng gia tăng thêm từ mỗi đơn vị tư bản bổ sung sẽ giảm dần khi trữ lượng tư bản ngày càng lớn."
      },
      {
        "term": "FDI vs. FPI",
        "desc": "FDI là đầu tư trực tiếp vào cơ sở sản xuất; FPI là đầu tư gián tiếp vào tài sản tài chính như cổ phiếu, trái phiếu."
      }
    ],
    "formulas": [
      {
        "name": "Hàm sản xuất tổng quát",
        "formula": "Y = A \\cdot F(L, K, H, N)",
        "note": "Y: Sản lượng; A: Công nghệ; L: Lao động; K: Tư bản; H: Vốn nhân lực; N: Tài nguyên."
      },
      {
        "name": "Hàm năng suất trên mỗi lao động",
        "formula": "\\frac{Y}{L} = A \\cdot F\\left(1, \\frac{K}{L}, \\frac{H}{L}, \\frac{N}{L}\\right)",
        "note": "Hàm phụ thuộc vào mức trang bị tư bản và nhân lực trên mỗi công nhân."
      },
      {
        "name": "Quy tắc 70",
        "formula": "\\text{Năm tăng gấp đôi} \\approx \\frac{70}{g \\text{ (\\%)} }",
        "note": "Nếu tăng trưởng g = 7%/năm thì sau 70/7 = 10 năm GDP sẽ tăng gấp đôi."
      }
    ],
    "traps": [
      "Tài nguyên thiên nhiên phong phú KHÔNG PHẢI điều kiện bắt buộc để giàu có (Ví dụ: Nhật Bản ít tài nguyên nhưng rất phát triển).",
      "Chính sách thương mại hướng nội (bảo hộ thuế quan, hạn ngạch) kìm hãm tăng trưởng. Các nước áp dụng chính sách hướng ngoại (tự do thương mại) đạt tăng trưởng cao hơn nhiều.",
      "Tích lũy tư bản vật chất không thể tạo ra tăng trưởng vĩnh viễn do Lợi suất giảm dần; chỉ có Đổi mới sáng tạo Công nghệ (A) mới duy trì tăng trưởng dài hạn."
    ],
    "flashcards": [
      {
        "front": "Nhân tố then chốt quyết định mức sống của một quốc gia trong dài hạn?",
        "back": "Năng suất lao động (Productivity - Y/L)."
      },
      {
        "front": "Hiệu ứng đuổi kịp (Catch-up effect) phát biểu điều gì?",
        "back": "Các nước nghèo ban đầu có xu hướng tăng trưởng nhanh hơn các nước giàu khi bắt đầu tích lũy tư bản vì năng suất cận biên ban đầu rất cao."
      },
      {
        "front": "FDI khác FPI ở điểm nào?",
        "back": "FDI là đầu tư sở hữu và trực tiếp quản lý cơ sở sản xuất; FPI là đầu tư tài chính gián tiếp (mua cổ phiếu, trái phiếu)."
      },
      {
        "front": "Theo quy tắc 70, nếu nền kinh tế tăng trưởng 5%/năm thì sau bao lâu quy mô GDP tăng gấp đôi?",
        "back": "70 / 5 = 14 năm."
      }
    ]
  },
  {
    "chapter": 13,
    "title": "Chương 13: Tiết kiệm, đầu tư và hệ thống tài chính",
    "slug": "financial-system",
    "badge": "Thị trường vốn vay",
    "modelId": "loanable-funds",
    "description": "Nghiên cứu cấu trúc hệ thống tài chính, đồng nhất thức tiết kiệm và đầu tư trong nền kinh tế đóng, mô hình Thị trường vốn vay cân bằng và hiện tượng lấn át đầu tư tư nhân (Crowding-out).",
    "fullTextbook": [
      {
        "heading": "I. Cấu Trúc của Hệ Thống Tài Chính",
        "content": "<p class=\"leading-relaxed mb-3\"><strong>Hệ thống tài chính (Financial System)</strong> là nhóm các định chế trong nền kinh tế giúp kết nối các khoản tiết kiệm của người này với các kế hoạch đầu tư của người khác. Hệ thống này gồm 2 bộ phận chính:</p>\n<h4 class=\"font-bold text-slate-900 text-sm mb-1\">1. Thị trường Tài chính (Financial Markets)</h4>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Nơi người tiết kiệm trực tiếp cung ứng vốn cho người đi vay:</p>\n<ul class=\"list-disc pl-5 space-y-1 mb-3 text-xs text-slate-600\">\n  <li><strong>Thị trường Trái phiếu (Bond Market):</strong> Trái phiếu là giấy chứng nhận nợ ghi rõ nghĩa vụ của người vay đối với người nắm giữ trái phiếu (tiền gốc và lãi suất coupon cố định định kỳ). Trái phiếu có thời hạn đáo hạn, rủi ro tín dụng và quy chế thuế khác nhau. Người nắm giữ trái phiếu là <em>chủ nợ</em> của công ty.</li>\n  <li><strong>Thị trường Cổ phiếu (Stock Market):</strong> Cổ phiếu đại diện cho <em>quyền sở hữu</em> một phần của công ty và quyền hưởng lợi nhuận (cổ tức). Cổ phiếu có lợi nhuận kỳ vọng cao hơn nhưng cũng mang rủi ro thua lỗ cao hơn trái phiếu. Khi công ty phá sản, chủ nợ trái phiếu được ưu tiên thanh toán trước cổ đông sở hữu cổ phiếu.</li>\n</ul>\n<h4 class=\"font-bold text-slate-900 text-sm mb-1\">2. Các Trung gian Tài chính (Financial Intermediaries)</h4>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Các định chế giúp người tiết kiệm cung ứng vốn <em>gián tiếp</em> cho người đi vay:</p>\n<ul class=\"list-disc pl-5 space-y-1 text-xs text-slate-600 mb-3\">\n  <li><strong>Ngân hàng Thương mại:</strong> Nhận tiền gửi từ người tiết kiệm và đem cho các doanh nghiệp, cá nhân vay lại. Ngân hàng đóng vai trò trung gian thanh toán và tạo tiền.</li>\n  <li><strong>Quỹ tương hỗ (Mutual Funds):</strong> Định chế bán cổ phần ra công chúng và dùng số tiền thu được để mua một danh mục đa dạng hóa các loại cổ phiếu và trái phiếu, giúp các nhà đầu tư nhỏ lẻ chia nhỏ rủi ro.</li>\n</ul>"
      },
      {
        "heading": "II. Đồng Nhất Thức Tiết Kiệm và Đầu Tư trong Nền Kinh Tế Đóng",
        "content": "<p class=\"leading-relaxed mb-3\">Xét một nền kinh tế đóng (không có thương mại quốc tế, $NX = 0$). Đồng nhất thức tài khoản quốc gia:</p>\n<div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded text-center font-mono text-xs mb-2\">\n  $$Y = C + I + G \\quad \\Longrightarrow \\quad I = Y - C - G$$\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Vế phải chính là lượng sản lượng còn lại sau khi trừ tiêu dùng của dân và mua sắm của chính phủ, được định nghĩa là <strong>Tiết kiệm Quốc gia (National Saving - S)</strong>. Do đó:</p>\n<div class=\"p-2.5 bg-emerald-50 border border-emerald-200 rounded text-center font-mono text-xs mb-3\">\n  $$S = I$$\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Phân rã Tiết kiệm Quốc gia:</strong> Thêm và bớt thuế ròng $T$ vào phương trình:</p>\n<div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded text-center font-mono text-xs mb-3\">\n  $$S = (Y - T - C) + (T - G) = S_{\\text{tư nhân}} + S_{\\text{chính phủ}}$$\n</div>\n<ul class=\"list-disc pl-5 space-y-1 text-xs text-slate-600 mb-3\">\n  <li><strong>Tiết kiệm Tư nhân ($S_{pr} = Y - T - C$):</strong> Phần thu nhập còn lại của hộ gia đình sau khi nộp thuế và chi trả tiêu dùng.</li>\n  <li><strong>Tiết kiệm Chính phủ ($S_{pub} = T - G$):</strong> Phần doanh thu thuế của chính phủ còn lại sau khi chi tiêu. Nếu $T > G$: Thặng dư ngân sách; nếu $T < G$: Thâm hụt ngân sách ($S_{pub} < 0$).</li>\n</ul>"
      },
      {
        "heading": "III. Mô Hình Thị Trường Vốn Vay Cân Bằng",
        "content": "<p class=\"leading-relaxed mb-3 text-xs text-slate-700\">Thị trường vốn vay phối hợp cung tiết kiệm và cầu đầu tư thông qua <strong>Lãi suất thực tế ($r$)</strong>:</p>\n<ul class=\"list-disc pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li><strong>Cung Vốn vay (Supply):</strong> Đến từ Tiết kiệm quốc gia ($S$). Khi lãi suất thực tế $r$ tăng, lợi nhuận của việc tiết kiệm cao hơn, khuyến khích người dân tiêu dùng ít đi để tiết kiệm nhiều hơn $\\rightarrow$ Đường Cung vốn vay có độ dốc DƯƠNG (dốc lên).</li>\n  <li><strong>Cầu Vốn vay (Demand):</strong> Đến từ các doanh nghiệp và cá nhân muốn vay tiền để Đầu tư ($I$) mua sắm máy móc, xây nhà mới. Khi lãi suất thực tế tăng, chi phí vay vốn đắt đỏ hơn, làm giảm số lượng dự án đầu tư có lãi $\\rightarrow$ Đường Cầu vốn vay có độ dốc ÂM (dốc xuống).</li>\n  <li><strong>Cân bằng:</strong> Điểm giao nhau giữa Cung và Cầu vốn vay xác định Lãi suất thực cân bằng $r^*$ và Lượng vốn vay cân bằng $Q^*$.</li>\n</ul>\n<div class=\"my-6\" data-inline-model=\"loanable-funds\"></div>"
      },
      {
        "heading": "IV. Phân Tích Các Chính Sách và Hiện Tượng Lấn Át (Crowding-out)",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Hãy cùng xem xét 3 chính sách kinh tế điển hình ảnh hưởng đến thị trường vốn vay:</p>\n<div class=\"space-y-2.5 mb-3\">\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-emerald-900 block text-xs mb-0.5\">1. Chính sách Khuyến khích Tiết kiệm (Giảm thuế thu nhập tiền gửi/lãi vay):</strong>\n    <p class=\"text-xs text-slate-600\">Làm tăng động lực tiết kiệm của dân cư $\\rightarrow$ Đường Cung vốn vay $S$ dịch chuyển sang PHẢI. Kết quả: Lãi suất thực $r$ giảm xuống, lượng vốn vay và đầu tư $I$ tăng lên.</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">2. Chính sách Khuyến khích Đầu tư (Tín dụng thuế đầu tư - Investment Tax Credit):</strong>\n    <p class=\"text-xs text-slate-600\">Doanh nghiệp được khấu trừ thuế khi mua sắm máy móc mới $\\rightarrow$ Cầu vốn vay $I$ dịch chuyển sang PHẢI. Kết quả: Cả lãi suất thực $r$ và lượng vốn vay cân bằng $Q$ đều TĂNG LÊN.</p>\n  </div>\n  <div class=\"p-3 bg-rose-50 border border-rose-200 rounded-lg\">\n    <strong class=\"text-rose-900 block text-xs mb-0.5\">3. Thâm hụt Ngân sách Chính phủ và Hiện tượng Lấn át (Crowding-out Effect):</strong>\n    <p class=\"text-xs text-slate-600\">Khi chính phủ chi tiêu vượt thu ($G > T$), tiết kiệm chính phủ âm ($S_{pub} < 0$), làm giảm tiết kiệm quốc gia $S$ $\\rightarrow$ <strong>Đường Cung vốn vay dịch chuyển sang TRÁI</strong>. Kết quả: Lãi suất thực $r$ bị đẩy TĂNG LÊN, làm lượng vốn vay giảm. Lãi suất cao kìm hãm và lấn át chi tiêu đầu tư tư nhân. Sự sụt giảm đầu tư tư nhân do chính phủ vay nợ bù thâm hụt gọi là <strong>Hiện tượng lấn át (Crowding-out)</strong>.</p>\n  </div>\n</div>"
      }
    ],
    "summaryHighlights": [
      "Hệ thống tài chính kết nối tiết kiệm (S) với đầu tư (I).",
      "Đồng nhất thức nền kinh tế đóng: S = I = S_tư nhân + S_chính phủ.",
      "Tiết kiệm tư nhân S_pr = Y - T - C; Tiết kiệm chính phủ S_pub = T - G.",
      "Thị trường vốn vay: Lãi suất thực r điều chỉnh cân bằng Cung tiết kiệm (dốc lên) và Cầu đầu tư (dốc xuống).",
      "Hiện tượng lấn át (Crowding-out): Chính phủ thâm hụt ngân sách làm cung vốn vay dịch trái, đẩy lãi suất tăng và giảm đầu tư tư nhân."
    ],
    "keyConcepts": [
      {
        "term": "Hệ thống tài chính",
        "desc": "Các định chế kết nối tiết kiệm của người này với đầu tư của người khác."
      },
      {
        "term": "Tiết kiệm quốc gia (S)",
        "desc": "Tổng thu nhập còn lại sau khi trừ tiêu dùng và chi tiêu chính phủ: S = Y - C - G = S_tư nhân + S_chính phủ."
      },
      {
        "term": "Hiện tượng lấn át (Crowding-out)",
        "desc": "Sự suy giảm đầu tư tư nhân do chính phủ vay mượn thâm hụt ngân sách đẩy lãi suất tăng cao."
      },
      {
        "term": "Thị trường vốn vay",
        "desc": "Mô hình xác định lãi suất thực tế cân bằng dựa trên cung tiết kiệm và cầu đầu tư."
      }
    ],
    "formulas": [
      {
        "name": "Đồng nhất thức kinh tế đóng",
        "formula": "S = I",
        "note": "Tổng tiết kiệm quốc gia luôn bằng tổng đầu tư trong nền kinh tế đóng."
      },
      {
        "name": "Phân rã Tiết kiệm",
        "formula": "S = (Y - T - C) + (T - G)",
        "note": "Gồm Tiết kiệm tư nhân và Tiết kiệm công."
      },
      {
        "name": "Cân bằng thị trường vốn vay",
        "formula": "S(r) = I(r)",
        "note": "Cung S đồng biến với r; Cầu I nghịch biến với r."
      }
    ],
    "traps": [
      "Trong kinh tế học vĩ mô, mua cổ phiếu, trái phiếu hoặc gửi tiết kiệm là TIẾT KIỆM (Saving), KHÔNG PHẢI Đầu tư (Investment).",
      "Thâm hụt ngân sách làm DỊCH CHUYỂN ĐƯỜNG CUNG VỐN VAY SANG TRÁI, KHÔNG PHẢI dịch chuyển đường cầu.",
      "Tín dụng thuế đầu tư làm DỊCH CHUYỂN ĐƯỜNG CẦU VỐN VAY SANG PHẢI."
    ],
    "flashcards": [
      {
        "front": "Trong kinh tế vĩ mô, hành động mua cổ phiếu được xếp vào loại nào?",
        "back": "Tiết kiệm cá nhân (Saving), KHÔNG PHẢI là đầu tư kinh tế."
      },
      {
        "front": "Khi chính phủ bị thâm hụt ngân sách, đường nào trên thị trường vốn vay dịch chuyển?",
        "back": "Đường CUNG vốn vay dịch sang TRÁI, làm lãi suất tăng và lấn át đầu tư tư nhân."
      },
      {
        "front": "Hiện tượng lấn át (Crowding out) phát biểu điều gì?",
        "back": "Sự sụt giảm đầu tư của khu vực tư nhân do chính phủ vay nợ bù đắp thâm hụt ngân sách làm tăng lãi suất thực."
      },
      {
        "front": "Công thức tính tiết kiệm tư nhân và tiết kiệm công?",
        "back": "S_tư nhân = Y - T - C; S_công = T - G. Tổng S = Y - C - G."
      }
    ]
  },
  {
    "chapter": 14,
    "title": "Chương 14: Các công cụ tài chính cơ bản",
    "slug": "finance-tools",
    "badge": "Quản trị rủi ro",
    "description": "Nghiên cứu giá trị tiền tệ theo thời gian (PV & FV), quy tắc 70, quản trị rủi ro và tâm lý e ngại rủi ro, nguyên lý đa dạng hóa danh mục đầu tư, và giả thuyết thị trường hiệu quả (EMH).",
    "fullTextbook": [
      {
        "heading": "I. Giá Trị Tiền Tệ Theo Thời Gian (Time Value of Money)",
        "content": "<p class=\"leading-relaxed mb-3\">Một nguyên lý cơ bản nhất của tài chính là: <em>\"Một đồng nhận được ngày hôm nay có giá trị cao hơn một đồng nhận được trong tương lai.\"</em> Lý do là đồng tiền nhận được hôm nay có thể đem gửi tiết kiệm để sinh lãi theo thời gian.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Các công thức nền tảng:</p>\n<ul class=\"list-disc pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li><strong>Giá trị Tương lai (Future Value - FV):</strong> Số tiền tích lũy được sau $N$ năm với lãi suất kép $r$:\n    $$FV = PV \\times (1 + r)^N$$\n  </li>\n  <li><strong>Giá trị Hiện tại (Present Value - PV):</strong> Số tiền ngày hôm nay cần có để tạo ra số tiền $FV$ sau $N$ năm:\n    $$PV = \\frac{FV}{(1 + r)^N}$$\n    <em>Ý nghĩa:</em> Lãi suất $r$ càng cao thì giá trị hiện tại của một khoản tiền nhận được trong tương lai càng nhỏ. Các doanh nghiệp sử dụng $PV$ để thẩm định dự án đầu tư: Nếu $PV$ của dòng tiền thu nhập tương lai lớn hơn chi phí bỏ ra ban đầu, dự án đáng giá để đầu tư.\n  </li>\n  <li><strong>Quy tắc 70 (Rule of 70):</strong> Nếu một đại lượng tăng trưởng với tốc độ $x\\%/\\text{năm}$, thì nó sẽ tăng gấp đôi quy mô sau xấp xỉ $70 / x$ năm. Ví dụ gửi tiền với lãi suất 7%/năm thì sau $70 / 7 = 10$ năm tài sản sẽ tăng gấp đôi.</li>\n</ul>"
      },
      {
        "heading": "II. Quản Trị Rủi Ro và Tâm Lý E Ngại Rủi Ro (Risk Aversion)",
        "content": "<p class=\"leading-relaxed mb-3\">Hầu hết mọi người trong xã hội đều <strong>e ngại rủi ro (Risk Averse)</strong>: Họ không thích sự bấp bênh và nỗi đau khi mất đi một khoản của cải thường lớn hơn niềm vui khi nhận thêm cùng một khoản của cải đó.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Hàm Hữu dụng (Utility Function):</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Tính e ngại rủi ro được mô tả bằng hàm hữu dụng có <em>độ dốc giảm dần (Lợi ích cận biên của của cải giảm dần)</em>. Khi của cải tăng lên, mỗi đồng tiền tăng thêm mang lại mức thỏa mãn ít hơn đồng tiền trước đó.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Hai Vấn đề Lớn của Thị trường Bảo hiểm:</strong></p>\n<div class=\"space-y-2 mb-3\">\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-rose-900 block text-xs mb-0.5\">1. Lựa chọn Bất lợi (Adverse Selection):</strong>\n    <p class=\"text-xs text-slate-600\">Người có nguy cơ rủi ro cao (người ốm yếu, lái xe ẩu) có xu hướng muốn mua bảo hiểm nhiều hơn người ít rủi ro, khiến công ty bảo hiểm gặp bất lợi về thông tin.</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-rose-900 block text-xs mb-0.5\">2. Rủi ro Đạo đức (Moral Hazard):</strong>\n    <p class=\"text-xs text-slate-600\">Sau khi đã mua bảo hiểm bảo vệ toàn diện, người mua có xu hướng hành xử bất cẩn hơn (không khóa cửa cẩn thận, không giữ gìn sức khỏe) vì tổn thất đã có bảo hiểm chi trả.</p>\n  </div>\n</div>"
      },
      {
        "heading": "III. Đa Dạng Hóa Danh Mục Đầu Tư (Diversification)",
        "content": "<p class=\"leading-relaxed mb-3\">Nguyên tắc vàng của đầu tư tài chính là: <em>\"Không bao giờ bỏ tất cả trứng vào một giỏ.\"</em> <strong>Đa dạng hóa</strong> là việc phân bổ vốn vào nhiều loại tài sản khác nhau không có mối tương quan hoàn hảo.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Phân biệt 2 loại rủi ro trên thị trường tài chính:</p>\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3\">\n  <div class=\"p-3 bg-emerald-50 border border-emerald-200 rounded-xl\">\n    <strong class=\"text-emerald-900 block text-xs mb-1\">Rủi ro Đặc thù (Idiosyncratic Risk):</strong>\n    <p class=\"text-xs text-slate-600\">Rủi ro chỉ ảnh hưởng đến một công ty hoặc một ngành kinh doanh cụ thể (cháy kho hàng, CEO từ chức). Đa dạng hóa danh mục có thể <strong>LOẠI BỎ HOÀN TOÀN</strong> rủi ro đặc thù.</p>\n  </div>\n  <div class=\"p-3 bg-rose-50 border border-rose-200 rounded-xl\">\n    <strong class=\"text-rose-900 block text-xs mb-1\">Rủi ro Thị trường (Market / Systematic Risk):</strong>\n    <p class=\"text-xs text-slate-600\">Rủi ro ảnh hưởng đến toàn bộ các công ty trong nền kinh tế (khủng hoảng tài chính, suy thoái kinh tế, dịch bệnh). Đa dạng hóa <strong>KHÔNG THỂ LOẠI BỎ</strong> được rủi ro thị trường.</p>\n  </div>\n</div>"
      },
      {
        "heading": "IV. Định Giá Tài Sản và Giả Thuyết Thị Trường Hiệu Quả (EMH)",
        "content": "<p class=\"leading-relaxed mb-3 text-xs text-slate-700\">Để quyết định mua cổ phiếu, nhà đầu tư thực hiện <strong>Phân tích Cơ bản (Fundamental Analysis)</strong>: Nghiên cứu báo cáo tài chính, bảng cân đối kế toán, lợi thế cạnh tranh và triển vọng kinh doanh tương lai để ước tính Giá trị nội tại (Intrinsic Value). Nếu Giá trị nội tại lớn hơn Giá thị trường, cổ phiếu đang bị định giá thấp (nên mua).</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Giả thuyết Thị trường Hiệu quả (Efficient Market Hypothesis - EMH):</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Thuyết EMH phát biểu rằng giá cả chứng khoán phản ánh tất cả các thông tin được công khai. Tại mọi thời điểm, cổ phiếu luôn được định giá hợp lý trên thị trường. Hàm ý quan trọng của EMH:</p>\n<ul class=\"list-disc pl-5 space-y-1 text-xs text-slate-600 mb-3\">\n  <li>Giá cổ phiếu biến động theo <strong>\"Bước đi ngẫu nhiên\" (Random Walk)</strong>: Những tin tức trong tương lai là không thể dự báo trước, do đó biến động giá cổ phiếu cũng không thể đoán trước một cách có hệ thống.</li>\n  <li>Không ai có thể liên tục đánh bại thị trường trong dài hạn nếu chỉ dựa vào phân tích thông tin công khai. Lựa chọn tối ưu cho nhà đầu tư cá nhân là mua các <em>Quỹ chỉ số thụ động (Index Funds)</em> có chi phí quản lý thấp thay vì thuê các chuyên gia quản lý quỹ chủ động đắt đỏ.</li>\n</ul>"
      }
    ],
    "summaryHighlights": [
      "Giá trị tiền tệ theo thời gian: Đồng tiền hôm nay luôn giá trị hơn đồng tiền ngày mai (PV = FV / (1+r)^N).",
      "Quy tắc 70: Thời gian nhân đôi tài sản xấp xỉ bằng 70 chia cho tốc độ tăng trưởng phần trăm.",
      "Người e ngại rủi ro có hàm hữu dụng lồi lên trên với độ dốc giảm dần.",
      "Đa dạng hóa danh mục loại bỏ được Rủi ro đặc thù, nhưng KHÔNG loại bỏ được Rủi ro thị trường.",
      "Giả thuyết thị trường hiệu quả (EMH): Giá cổ phiếu phản ánh đầy đủ thông tin công khai và di chuyển theo bước đi ngẫu nhiên."
    ],
    "keyConcepts": [
      {
        "term": "Giá trị hiện tại (PV)",
        "desc": "Số tiền ngày hôm nay cần có để tạo ra một khoản tiền tương lai với mức lãi suất cho trước: PV = FV / (1+r)^N."
      },
      {
        "term": "E ngại rủi ro",
        "desc": "Tâm lý con người sợ rủi ro, nỗi đau mất của cải lớn hơn niềm vui khi nhận thêm cùng lượng của cải đó."
      },
      {
        "term": "Rủi ro đặc thù vs. Thị trường",
        "desc": "Rủi ro đặc thù của riêng công ty có thể triệt tiêu bằng đa dạng hóa; rủi ro thị trường ảnh hưởng toàn hệ thống không thể loại trừ."
      },
      {
        "term": "Thị trường hiệu quả (EMH)",
        "desc": "Lý thuyết cho rằng giá tài sản tài chính phản ánh đầy đủ mọi thông tin công khai trên thị trường."
      }
    ],
    "formulas": [
      {
        "name": "Giá trị hiện tại",
        "formula": "PV = \\frac{FV}{(1 + r)^N}",
        "note": "r: Lãi suất chiết khấu; N: Số năm."
      },
      {
        "name": "Giá trị tương lai với lãi kép",
        "formula": "FV = PV \\times (1 + r)^N",
        "note": "Tiền lãi sinh ra từ cả gốc và lãi tích lũy."
      },
      {
        "name": "Quy tắc 70",
        "formula": "\\text{Năm nhân đôi} \\approx \\frac{70}{r \\text{ (\\%)} }",
        "note": "Tính nhanh thời gian tăng gấp đôi quy mô tài sản."
      }
    ],
    "traps": [
      "Đa dạng hóa danh mục đầu tư chỉ loại bỏ được Rủi ro đặc thù, KHÔNG BAO GIỜ loại bỏ được 100% rủi ro vì vẫn còn Rủi ro thị trường.",
      "Lãi suất chiết khấu càng cao thì Giá trị hiện tại PV của một khoản tiền nhận được trong tương lai CÀNG NHỎ.",
      "Theo giả thuyết thị trường hiệu quả (EMH), các quỹ đầu tư chủ động không thể liên tục mang lại lợi nhuận vượt trội so với quỹ chỉ số thụ động."
    ],
    "flashcards": [
      {
        "front": "Công thức tính giá trị hiện tại PV của số tiền FV sau N năm?",
        "back": "PV = FV / (1 + r)^N."
      },
      {
        "front": "Đa dạng hóa danh mục đầu tư loại bỏ được loại rủi ro nào?",
        "back": "Loại bỏ RỦI RO ĐẶC THÙ (Idiosyncratic risk), KHÔNG loại bỏ được RỦI RO THỊ TRƯỜNG (Market risk)."
      },
      {
        "front": "Hàm hữu dụng của người e ngại rủi ro có đặc điểm gì?",
        "back": "Độ dốc giảm dần (Lợi ích cận biên của của cải giảm dần)."
      },
      {
        "front": "Giả thuyết thị trường hiệu quả (EMH) hàm ý gì về biến động giá cổ phiếu?",
        "back": "Giá cổ phiếu phản ánh đầy đủ thông tin và biến động theo 'Bước đi ngẫu nhiên' (Random Walk)."
      }
    ]
  },
  {
    "chapter": 15,
    "title": "Chương 15: Thất nghiệp",
    "slug": "unemployment",
    "badge": "Thị trường lao động",
    "description": "Nghiên cứu cách đo lường thị trường lao động, thất nghiệp tự nhiên và thất nghiệp chu kỳ, thất nghiệp cọ xát và chính sách tìm việc, thất nghiệp cơ cấu và 3 nguyên nhân khiến tiền lương cứng nhắc.",
    "fullTextbook": [
      {
        "heading": "I. Đo Lường Thị Trường Lao Động và Tỷ Lệ Thất Nghiệp",
        "content": "<p class=\"leading-relaxed mb-3\">Mất việc làm là một trong những biến cố tiêu cực nhất đối với đời sống của một cá nhân, làm sụt giảm thu nhập và tổn thương tinh thần. Để đo lường sức khỏe thị trường việc làm, cơ quan thống kê phân chia <strong>Dân số trưởng thành (từ 15 hoặc 16 tuổi trở lên)</strong> thành 3 nhóm độc lập:</p>\n<ul class=\"list-disc pl-5 space-y-1.5 mb-3 text-slate-700\">\n  <li><strong>Có việc làm (Employed - E):</strong> Những người làm việc có trả công (toàn thời gian hoặc bán thời gian), hoặc tự làm kinh doanh gia đình, hoặc tạm thời nghỉ ốm, nghỉ phép.</li>\n  <li><strong>Thất nghiệp (Unemployed - U):</strong> Những người <em>không có việc làm</em>, <em>sẵn sàng làm việc</em> và <em>đang tích cực tìm kiếm việc làm</em> trong 4 tuần gần nhất, hoặc đang chờ được gọi đi làm lại sau khi bị tạm đình chỉ.</li>\n  <li><strong>Ngoài lực lượng lao động (Not in Labor Force):</strong> Những người không có việc và cũng KHÔNG tìm việc (học sinh sinh viên đi học toàn thời gian, người nội trợ gia đình, người về hưu, người tàn tật).</li>\n</ul>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Các chỉ số thống kê then chốt:</p>\n<div class=\"space-y-2 mb-3\">\n  <div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded font-mono text-xs\">\n    $$\\text{Lực lượng Lao động (LF)} = E + U$$\n  </div>\n  <div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded font-mono text-xs\">\n    $$\\text{Tỷ lệ Thất nghiệp (u)} = \\frac{U}{LF} \\times 100\\% = \\frac{U}{E + U} \\times 100\\%$$\n  </div>\n  <div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded font-mono text-xs\">\n    $$\\text{Tỷ lệ Tham gia Lực lượng Lao động (LFPR)} = \\frac{LF}{\\text{Dân số trưởng thành}} \\times 100\\%$$\n  </div>\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Người Lao Động Nản Chí (Discouraged Workers) và Hạn chế của Tỷ lệ Thất nghiệp:</strong></p>\n<p class=\"text-xs text-slate-600\">Một người thất nghiệp sau nhiều tháng tìm việc tuyệt vọng có thể từ bỏ ý định tìm việc. Khi ngừng tìm việc, người này <em>bị chuyển từ nhóm Thất nghiệp (U) sang nhóm Ngoài lực lượng lao động</em>. Điều trớ trêu là: Hành động này làm giảm cả $U$ và $LF$, dẫn đến <strong>Tỷ lệ thất nghiệp công bố bị giảm xuống</strong>, khiến bức tranh thị trường lao động trông có vẻ tốt hơn nhưng thực tế lại đang tồi tệ đi.</p>"
      },
      {
        "heading": "II. Thất Nghiệp Tự Nhiên vs. Thất Nghiệp Chu Kỳ",
        "content": "<p class=\"leading-relaxed mb-3\">Trong dài hạn, tỷ lệ thất nghiệp không bao giờ giảm về 0%. Các nhà kinh tế chia thất nghiệp thành 2 nhóm lớn:</p>\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3\">\n  <div class=\"p-3 bg-blue-50 border border-blue-200 rounded-xl\">\n    <strong class=\"text-blue-900 block text-xs mb-1\">Tỷ lệ Thất nghiệp Tự nhiên (Natural Rate of Unemployment - $u_n$):</strong>\n    <p class=\"text-xs text-slate-700\">Mức thất nghiệp bình thường mà nền kinh tế luôn duy trì trong dài hạn, ngay cả khi kinh tế thịnh vượng. Đây là trạng thái cân bằng dài hạn của thị trường lao động (thường dao động từ 4% - 6% tùy quốc gia).</p>\n  </div>\n  <div class=\"p-3 bg-rose-50 border border-rose-200 rounded-xl\">\n    <strong class=\"text-rose-900 block text-xs mb-1\">Thất nghiệp Chu kỳ (Cyclical Unemployment):</strong>\n    <p class=\"text-xs text-slate-700\">Sự biến động chệch khỏi mức tự nhiên gắn liền với các chu kỳ kinh doanh ngắn hạn. Khi suy thoái kinh tế, thất nghiệp chu kỳ tăng cao ($u > u_n$); khi kinh tế tăng trưởng nóng, thất nghiệp chu kỳ giảm xuống ($u < u_n$).</p>\n  </div>\n</div>"
      },
      {
        "heading": "III. Thất Nghiệp Cọ Xát và Chính Sách Tìm Việc",
        "content": "<p class=\"leading-relaxed mb-3\"><strong>Thất nghiệp Cọ xát (Frictional Unemployment)</strong> phát sinh do người lao động cần thời gian để tìm kiếm công việc phù hợp nhất với kỹ năng, năng lực và sở thích của mình. Người lao động không phải ai cũng giống nhau và công việc cũng rất đa dạng.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Các yếu tố chi phối thất nghiệp cọ xát:</p>\n<ul class=\"list-disc pl-5 space-y-1 text-xs text-slate-600 mb-3\">\n  <li><strong>Sự dịch chuyển khu vực (Sectoral Shifts):</strong> Khi thị hiếu tiêu dùng thay đổi (ví dụ: chuyển từ dùng xe xăng sang xe điện), ngành xe xăng sa thải nhân công trong khi ngành xe điện cần tuyển người. Những người mất việc cần thời gian để đào tạo lại và chuyển đổi ngành nghề.</li>\n  <li><strong>Chính sách công:</strong> Các trung tâm giới thiệu việc làm và chương trình đào tạo nghề của chính phủ giúp giảm thất nghiệp cọ xát bằng cách kết nối thông tin nhanh hơn.</li>\n  <li><strong>Bảo hiểm Thất nghiệp (Unemployment Insurance - UI):</strong> Mặc dù giúp bảo vệ người lao động khỏi sự sụt giảm thu nhập đột ngột, bảo hiểm thất nghiệp vô tình <em>làm tăng thất nghiệp cọ xát</em> vì nó giảm bớt áp lực phải vội vàng chấp nhận ngay một công việc đầu tiên tìm thấy.</li>\n</ul>"
      },
      {
        "heading": "IV. Thất Nghiệp Cơ Cấu và Ba Nguyên Nhân Gây Cứng Nhắc Tiền Lương",
        "content": "<p class=\"leading-relaxed mb-3\"><strong>Thất nghiệp Cơ cấu (Structural Unemployment)</strong> xảy ra khi số lượng người tìm việc nhiều hơn số lượng việc làm hiện có trên thị trường. Nguyên nhân cốt lõi là <em>tiền lương thực tế bị giữ ở mức cao hơn mức tiền lương cân bằng thị trường</em>. Có 3 nguyên nhân giải thích hiện tượng này:</p>\n<div class=\"space-y-2.5 mb-3\">\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-purple-900 block text-xs mb-0.5\">1. Luật Tiền lương Tối thiểu (Minimum-Wage Laws):</strong>\n    <p class=\"text-xs text-slate-600\">Khi chính phủ áp mức lương sàn cao hơn mức cân bằng thị trường tự do, lượng cung lao động vượt quá lượng cầu lao động $\\rightarrow$ gây dư thừa lao động (thất nghiệp). Luật này ảnh hưởng rõ nhất đến nhóm lao động trẻ tuổi, thiếu kinh nghiệm và chưa có bằng cấp.</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-purple-900 block text-xs mb-0.5\">2. Công đoàn và Thương lượng Tập thể (Unions):</strong>\n    <p class=\"text-xs text-slate-600\">Công đoàn hoạt nghiệp như một tập đoàn độc quyền bán sức lao động. Nhờ thương lượng tập thể, công đoàn đẩy mức lương của công nhân có việc (Insiders) cao hơn 10 - 20% so với thị trường tự do. Hậu quả là doanh nghiệp cắt giảm số lượng tuyển dụng, khiến những người không thuộc công đoàn (Outsiders) rơi vào cảnh thất nghiệp.</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-purple-900 block text-xs mb-0.5\">3. Lý thuyết Tiền lương Hiệu quả (Efficiency Wages):</strong>\n    <p class=\"text-xs text-slate-600\">Khác với hai nguyên nhân trên do ngoại lực ép buộc, ở đây <em>doanh nghiệp tự nguyện chủ động trả lương cao hơn mức cân bằng</em> vì lương cao đem lại 4 lợi ích lớn: (a) Cải thiện sức khỏe và dinh dưỡng công nhân; (b) Giảm chi phí tuyển dụng và thay thế nhân viên (nhân viên ít bỏ việc hơn); (c) Nâng cao nỗ lực làm việc của nhân viên (sợ bị đuổi việc); (d) Thu hút ứng viên có phẩm chất tốt nhất.</p>\n  </div>\n</div>"
      }
    ],
    "summaryHighlights": [
      "Dân số trưởng thành = Có việc làm (E) + Thất nghiệp (U) + Ngoài lực lượng lao động.",
      "Tỷ lệ thất nghiệp u = U / (E + U) × 100%.",
      "Người lao động nản chí (từ bỏ tìm việc) bị loại khỏi lực lượng lao động, làm giảm tỷ lệ thất nghiệp thống kê.",
      "Thất nghiệp tự nhiên là mức thất nghiệp dài hạn; thất nghiệp chu kỳ là biến động ngắn hạn theo chu kỳ kinh tế.",
      "Thất nghiệp cọ xát do thời gian tìm việc phù hợp; thất nghiệp cơ cấu do tiền lương bị giữ cao hơn mức cân bằng.",
      "3 nguyên nhân gây thất nghiệp cơ cấu: Luật lương tối thiểu, Sức mạnh công đoàn, và Lý thuyết lương hiệu quả."
    ],
    "keyConcepts": [
      {
        "term": "Lực lượng lao động (LF)",
        "desc": "Tổng số người có việc làm cộng với số người thất nghiệp: LF = E + U."
      },
      {
        "term": "Tỷ lệ thất nghiệp",
        "desc": "Tỷ lệ phần trăm của lực lượng lao động không có việc làm: u = (U / LF) × 100%."
      },
      {
        "term": "Lao động nản chí",
        "desc": "Người muốn làm việc nhưng đã ngừng tìm việc vì thất vọng, được xếp vào nhóm ngoài lực lượng lao động."
      },
      {
        "term": "Thất nghiệp cọ xát",
        "desc": "Thất nghiệp phát sinh trong quá trình người lao động tìm kiếm công việc phù hợp nhất."
      },
      {
        "term": "Tiền lương hiệu quả",
        "desc": "Mức lương cao hơn điểm cân bằng do doanh nghiệp chủ động chi trả để tăng năng suất và giữ chân nhân viên."
      }
    ],
    "formulas": [
      {
        "name": "Lực lượng lao động",
        "formula": "LF = E + U",
        "note": "E: Số người có việc làm; U: Số người thất nghiệp."
      },
      {
        "name": "Tỷ lệ thất nghiệp",
        "formula": "u = \\frac{U}{LF} \\times 100\\%",
        "note": "Tỷ lệ phần trăm người thất nghiệp trong lực lượng lao động."
      },
      {
        "name": "Tỷ lệ tham gia lực lượng lao động",
        "formula": "\\text{LFPR} = \\frac{LF}{\\text{Dân số trưởng thành}} \\times 100\\%",
        "note": "Mức độ huy động nguồn lực lao động của quốc gia."
      }
    ],
    "traps": [
      "Người nội trợ, sinh viên đại học toàn thời gian, người nghỉ hưu thuộc nhóm NGOÀI LỰC LƯỢNG LAO ĐỘNG, KHÔNG PHẢI người thất nghiệp.",
      "Khi người thất nghiệp nản chí ngừng tìm việc, TỶ LỆ THẤT NGHIỆP GIẢM XUỐNG mặc dù thị trường việc làm xấu đi.",
      "Tiền lương tối thiểu chủ yếu gây thất nghiệp cho đối tượng lao động trẻ tuổi, tay nghề thấp; ít ảnh hưởng đến lao động có chuyên môn cao."
    ],
    "flashcards": [
      {
        "front": "Công thức tính tỷ lệ thất nghiệp của một quốc gia?",
        "back": "u = (Số người thất nghiệp / Lực lượng lao động) × 100% = U / (E + U) × 100%."
      },
      {
        "front": "Người lao động nản chí (Discouraged workers) được phân loại vào nhóm nào?",
        "back": "Nhóm NGOÀI LỰC LƯỢNG LAO ĐỘNG (Not in labor force)."
      },
      {
        "front": "Thất nghiệp cọ xát khác gì Thất nghiệp cơ cấu?",
        "back": "Cọ xát do thời gian tìm việc thích hợp (ngắn hạn). Cơ cấu do mức lương cứng nhắc cao hơn cân bằng làm thiếu việc làm (dài hạn)."
      },
      {
        "front": "Tại sao doanh nghiệp tự nguyện trả tiền lương hiệu quả cao hơn mức cân bằng?",
        "back": "Để nâng cao nỗ lực công nhân, giảm chi phí thay thế nhân viên, cải thiện sức khỏe và thu hút nhân tài."
      }
    ]
  },
  {
    "chapter": 16,
    "title": "Chương 16: Hệ thống tiền tệ",
    "slug": "monetary-system",
    "badge": "Hệ thống ngân hàng",
    "modelId": "money-market",
    "description": "Nghiên cứu bản chất của tiền tệ, 3 chức năng cốt lõi, tiền hàng hóa vs. tiền pháp định, khối tiền M1 và M2, hệ thống ngân hàng dự trữ một phần, quá trình tạo tiền, số nhân tiền kM và các công cụ kiểm soát cung tiền của NHTW.",
    "fullTextbook": [
      {
        "heading": "I. Khái Niệm, 3 Chức Năng Cốt Lõi và Các Hình Thức của Tiền",
        "content": "<p class=\"leading-relaxed mb-3\">Nếu không có tiền, nền kinh tế buộc phải vận hành theo cơ chế <strong>trao đổi hàng đổi hàng (Barter economy)</strong>. Cơ chế này đòi hỏi <em>sự trùng hợp kép về nhu cầu (Double coincidence of wants)</em> — bạn phải tìm được người có thứ bạn cần và người đó cũng muốn thứ bạn có. Tiền ra đời giải quyết triệt để rào cản này.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Ba Chức năng Cốt lõi của Tiền:</strong></p>\n<ul class=\"list-disc pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li><strong>1. Phương tiện trao đổi (Medium of Exchange):</strong> Một vật phẩm mà người mua đưa cho người bán khi muốn mua hàng hóa và dịch vụ.</li>\n  <li><strong>2. Đơn vị tính toán (Unit of Account):</strong> Thước đo tiêu chuẩn để niêm yết giá cả và ghi nhận các khoản nợ.</li>\n  <li><strong>3. Phương tiện lưu trữ giá trị (Store of Value):</strong> Phương tiện cho phép chuyển sức mua từ hiện tại sang tương lai. Trong đó, tiền mặt là tài sản có <strong>tính thanh khoản (Liquidity)</strong> cao nhất, nhưng tiền tệ có nhược điểm là bị xói mòn giá trị khi có lạm phát.</li>\n</ul>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Hai Hình thức của Tiền:</strong></p>\n<ul class=\"list-disc pl-5 space-y-1 text-xs text-slate-600 mb-3\">\n  <li><strong>Tiền Hàng hóa (Commodity Money):</strong> Tiền có giá trị nội tại (dù không làm tiền thì bản thân vật đó vẫn có giá trị sử dụng khác), ví dụ vàng, bạc, thuốc lá trong trại giam.</li>\n  <li><strong>Tiền Pháp định (Fiat Money):</strong> Tiền không có giá trị nội tại, được thiết lập và lưu hành dựa trên luật định và sắc lệnh của chính phủ (tiền giấy VND, USD). Giá trị của nó phụ thuộc vào niềm tin của công chúng vào nhà nước phát hành.</li>\n</ul>"
      },
      {
        "heading": "II. Đo Lường Khối Tiền trong Nền Kinh Tế (M1 và M2)",
        "content": "<p class=\"leading-relaxed mb-3 text-xs text-slate-700\">Khối lượng tiền lưu hành trong nền kinh tế được phân chia thành các cấp độ thanh khoản:</p>\n<ul class=\"list-disc pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li><strong>Khối tiền M1 (Tiền giao dịch hẹp):</strong> Gồm các tài sản có tính thanh khoản tức thì: Tiền mặt lưu thông ngoài hệ thống ngân hàng ($C$) + Tiền gửi không kỳ hạn (tiền gửi thanh toán có thể viết séc hoặc chuyển khoản app tức thì).</li>\n  <li><strong>Khối tiền M2 (Tiền mở rộng):</strong> Bao gồm toàn bộ $M1$ cộng với các tài sản có tính thanh khoản kém hơn một chút: Tiền gửi tiết kiệm có kỳ hạn, các quỹ thị trường tiền tệ bán lẻ.</li>\n</ul>"
      },
      {
        "heading": "III. Ngân Hàng Dự Trữ Một Phần và Quá Trình Tạo Tiền",
        "content": "<p class=\"leading-relaxed mb-3 text-xs text-slate-700\">Nếu các ngân hàng giữ lại 100% tiền gửi làm dự trữ trong két, ngân hàng không làm thay đổi cung tiền. Nhưng trong thực tế, các ngân hàng vận hành theo hệ thống <strong>Ngân hàng Dự trữ Một phần (Fractional-Reserve Banking)</strong>: Họ chỉ giữ lại một tỷ lệ dự trữ ($R$) và đem phần còn lại cho vay ra nền kinh tế.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Bảng cân đối kế toán T-Account của Ngân hàng:</strong></p>\n<div class=\"p-3 bg-slate-50 border border-slate-200 rounded text-xs mb-3\">\n  <div class=\"grid grid-cols-2 gap-4\">\n    <div><strong>TÀI SẢN NỢ (Liabilities):</strong> Tiền gửi của khách hàng (D)</div>\n    <div><strong>TÀI SẢN CÓ (Assets):</strong> Tiền dự trữ (R) + Khoản cho vay (Loans)</div>\n  </div>\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Cơ chế Tạo Tiền của Hệ thống Ngân hàng:</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Giả sử bạn gửi 100 triệu vào Ngân hàng 1 với tỷ lệ dự trữ bắt buộc $R = 10\\%$. Ngân hàng 1 giữ lại 10 triệu dự trữ và đem 90 triệu cho người khác vay. Người đi vay dùng 90 triệu mua hàng và số tiền này được người bán đem gửi vào Ngân hàng 2. Ngân hàng 2 giữ lại 9 triệu và cho vay tiếp 81 triệu. Quá trình này tiếp diễn trong toàn bộ hệ thống ngân hàng.</p>\n<p class=\"text-xs text-slate-600 mb-2\"><strong>Lưu ý quan trọng:</strong> Hệ thống ngân hàng <em>tạo ra thanh khoản / tạo ra tiền (MS tăng)</em>, nhưng <em>KHÔNG tạo ra của cải vật chất mới</em> (vì người vay có thêm tiền mặt nhưng đồng thời gánh một khoản nợ tương đương).</p>"
      },
      {
        "heading": "IV. Số Nhân Tiền kM và Các Công Cụ Điều Hành của NHTW",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Cơ sở Tiền tệ (High-powered Money - H):</strong> Lượng tiền trực tiếp do NHTW phát hành: $H = C + R$ ($C$: tiền mặt ngoài ngân hàng, $R$: tiền dự trữ tại ngân hàng).</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Số nhân tiền (Money Multiplier - $k_M$):</strong> Lượng cung tiền được tạo ra từ mỗi đồng cơ sở tiền tệ: $MS = k_M \\times H$.</p>\n<div class=\"p-2.5 bg-blue-50/50 border border-blue-200 rounded text-center font-mono text-xs mb-3\">\n  $$k_M = \\frac{c + 1}{c + r}$$\n  <span class=\"block text-[11px] text-slate-500 mt-1\">Trong đó: $c = C/D$ (tỷ lệ tiền mặt/tiền gửi của dân); $r = R/D$ (tỷ lệ dự trữ thực tế của ngân hàng).</span>\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>4 Công Cụ Kiểm Soát Cung Tiền của Ngân hàng Trung ương (NHTW):</strong></p>\n<ol class=\"list-decimal pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li><strong>Nghiệp vụ Thị trường Mở (Open-Market Operations - OMO):</strong> Công cụ được sử dụng thường xuyên nhất. Để TĂNG cung tiền, NHTW <em>MUA trái phiếu chính phủ</em> từ công chúng/ngân hàng, bơm tiền mặt ra lưu thông. Để GIẢM cung tiền, NHTW <em>BÁN trái phiếu</em> hút tiền về.</li>\n  <li><strong>Tỷ lệ Dự trữ Bắt buộc (Reserve Requirements):</strong> Quy định lượng dự trữ tối thiểu ngân hàng phải giữ lại. Tăng tỷ lệ dự trữ làm giảm số nhân tiền $k_M$ và giảm cung tiền $MS$.</li>\n  <li><strong>Lãi suất Tái cấp vốn / Lãi suất Chiết khấu (Discount Rate):</strong> Lãi suất mà NHTW áp dụng khi cho các NHTM vay cứu cánh thanh khoản. Giảm lãi suất chiết khấu khuyến khích NHTM vay nhiều hơn, làm tăng cơ sở tiền và tăng cung tiền.</li>\n  <li><strong>Trả lãi cho Tiền gửi Dự trữ (Interest on Reserves):</strong> Tăng lãi suất dự trữ khuyến khích ngân hàng giữ nhiều tiền dự trữ hơn trong két, làm giảm số tiền đem cho vay $\\rightarrow$ giảm cung tiền.</li>\n</ol>\n<div class=\"my-6\" data-inline-model=\"money-market\"></div>"
      }
    ],
    "summaryHighlights": [
      "3 chức năng cốt lõi của tiền: Phương tiện trao đổi, Đơn vị tính toán, và Phương tiện cất trữ giá trị.",
      "Khối tiền M1 = Tiền mặt lưu thông ngoài ngân hàng + Tiền gửi thanh toán không kỳ hạn.",
      "Quá trình cho vay của hệ thống ngân hàng dự trữ một phần tạo ra cung tiền mới nhưng không tạo ra của cải.",
      "Cơ sở tiền tệ H = C + R; Cung tiền MS = kM × H.",
      "Số nhân tiền tổng quát kM = (c + 1) / (c + r).",
      "NHTW Mua trái phiếu chính phủ trên OMO làm TĂNG cung tiền MS, đẩy lãi suất GIẢM XUỐNG."
    ],
    "keyConcepts": [
      {
        "term": "Tiền pháp định (Fiat Money)",
        "desc": "Tiền không có giá trị nội tại, lưu hành nhờ pháp luật và niềm tin của công chúng vào chính phủ phát hành."
      },
      {
        "term": "Khối tiền M1",
        "desc": "Thước đo tiền hẹp có tính thanh khoản cao nhất gồm tiền mặt và tiền gửi thanh toán."
      },
      {
        "term": "Cơ sở tiền tệ (H)",
        "desc": "Tổng lượng tiền do NHTW phát hành gồm tiền mặt ngoài ngân hàng và tiền dự trữ trong ngân hàng."
      },
      {
        "term": "Nghiệp vụ OMO",
        "desc": "NHTW mua hoặc bán trái phiếu chính phủ trên thị trường mở để kiểm soát lượng tiền cung ứng."
      },
      {
        "term": "Số nhân tiền (kM)",
        "desc": "Hệ số khuếch đại cho biết cung tiền MS sẽ tăng bao nhiêu đơn vị khi cơ sở tiền tệ H tăng 1 đơn vị."
      }
    ],
    "formulas": [
      {
        "name": "Số nhân tiền đơn giản",
        "formula": "k = \\frac{1}{R}",
        "note": "Khi công chúng không giữ tiền mặt (c = 0)."
      },
      {
        "name": "Số nhân tiền tổng quát",
        "formula": "k_M = \\frac{c + 1}{c + r}",
        "note": "c: Tỷ lệ tiền mặt/tiền gửi; r: Tỷ lệ dự trữ thực tế."
      },
      {
        "name": "Mối quan hệ MS và H",
        "formula": "MS = k_M \\times H = k_M \\times (C + R)",
        "note": "H: Cơ sở tiền tệ; MS: Khối lượng cung tiền."
      }
    ],
    "traps": [
      "Hệ thống ngân hàng cho vay tạo ra TIỀN (tăng thanh khoản MS), nhưng KHÔNG TẠO RA CỦA CẢI vì người vay đồng thời phát sinh khoản nợ tương đương.",
      "NHTW MUA trái phiếu chính phủ là hành động BƠM TIỀN vào lưu thông, làm cung tiền MS TĂNG và lãi suất GIẢM.",
      "NHTW không thể kiểm soát 100% cung tiền vì không kiểm soát được lượng tiền mặt người dân muốn giữ (c) và lượng dự trữ tùy ý của ngân hàng (e)."
    ],
    "flashcards": [
      {
        "front": "3 chức năng cơ bản của tiền tệ là gì?",
        "back": "1. Phương tiện trao đổi; 2. Đơn vị tính toán; 3. Phương tiện lưu trữ giá trị."
      },
      {
        "front": "NHTW Mua trái phiếu chính phủ trên thị trường mở OMO có tác động gì?",
        "back": "Bơm tiền mặt vào nền kinh tế $\\rightarrow$ Cung tiền MS TĂNG LÊN $\\rightarrow$ Lãi suất GIẢM XUỐNG."
      },
      {
        "front": "Công thức số nhân tiền kM tổng quát?",
        "back": "kM = (c + 1) / (c + r), trong đó c = C/D và r = R/D."
      },
      {
        "front": "Khối tiền M1 bao gồm những gì?",
        "back": "Tiền mặt ngoài hệ thống ngân hàng (C) + Tiền gửi thanh toán không kỳ hạn (D)."
      }
    ]
  },
  {
    "chapter": 17,
    "title": "Chương 17: Tăng trưởng tiền và lạm phát",
    "slug": "inflation",
    "badge": "Lý thuyết tiền tệ",
    "description": "Nghiên cứu nguyên nhân của lạm phát trong dài hạn dựa trên Thuyết số lượng tiền tệ, tính trung lập của tiền và sự phân đôi cổ điển, phương trình số lượng MV=PY, thuế lạm phát, hiệu ứng Fisher và các chi phí xã hội của lạm phát.",
    "fullTextbook": [
      {
        "heading": "I. Giá Trị của Tiền và Cân Bằng Cung Cầu Tiền Tệ trong Dài Hạn",
        "content": "<p class=\"leading-relaxed mb-3\">Khi lạm phát xảy ra, người ta thường nghĩ là giá cả của hàng hóa đắt lên. Nhưng bản chất sâu xa của kinh tế học là: <em>Lạm phát phản ánh sự sụt giảm giá trị của đồng tiền</em>.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Nếu $P$ là mức giá chung của một rổ hàng hóa, thì <strong>Giá trị của tiền (Value of Money)</strong> là $1 / P$. Nó cho biết một đồng tiền mua được bao nhiêu đơn vị hàng hóa. Khi mức giá $P$ tăng gấp đôi, giá trị của mỗi đồng tiền bị giảm đi một nửa.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Thị trường Tiền tệ trong Dài hạn:</strong></p>\n<ul class=\"list-disc pl-5 space-y-1 text-xs text-slate-600 mb-3\">\n  <li><strong>Cung tiền (Money Supply - MS):</strong> Do NHTW hoàn toàn quyết định, là một đường thẳng đứng trên đồ thị.</li>\n  <li><strong>Cầu tiền (Money Demand - MD):</strong> Phản ánh nhu cầu nắm giữ tiền mặt của người dân để chi tiêu. Mức giá $P$ càng cao (giá trị tiền $1/P$ càng thấp), người dân càng cần nhiều tiền mặt hơn để mua cùng một giỏ hàng $\\rightarrow$ Đường Cầu tiền $MD$ có độ dốc âm theo giá trị của tiền $1/P$.</li>\n  <li>Trong dài hạn, mức giá chung $P$ sẽ tự do điều chỉnh để đưa thị trường tiền tệ về trạng thái cân bằng $MS = MD$.</li>\n</ul>"
      },
      {
        "heading": "II. Sự Phân Đôi Cổ Điển và Tính Trung Lập của Tiền (Monetary Neutrality)",
        "content": "<p class=\"leading-relaxed mb-3\">Các nhà kinh tế học cổ điển (như David Hume) đưa ra nguyên lý <strong>Sự Phân Đôi Cổ Điển (Classical Dichotomy)</strong>: Chia các biến số kinh tế thành hai nhóm riêng biệt:</p>\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3\">\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-xl\">\n    <strong class=\"text-slate-900 block text-xs mb-1\">1. Biến Danh nghĩa (Nominal Variables):</strong>\n    <p class=\"text-xs text-slate-600\">Các biến được đo bằng đơn vị tiền tệ (ví dụ: GDP danh nghĩa, mức giá $P$, tiền lương danh nghĩa $W$, lãi suất danh nghĩa $i$).</p>\n  </div>\n  <div class=\"p-3 bg-emerald-50 border border-emerald-200 rounded-xl\">\n    <strong class=\"text-emerald-900 block text-xs mb-1\">2. Biến Thực tế (Real Variables):</strong>\n    <p class=\"text-xs text-slate-600\">Các biến được đo bằng đơn vị vật chất hoặc số lượng (ví dụ: GDP thực tế $Y$, tiền lương thực tế $W/P$, lãi suất thực tế $r$, việc làm $L$).</p>\n  </div>\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Tính Trung Lập của Tiền (Monetary Neutrality):</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Học thuyết này khẳng định: <em>Trong dài hạn, sự thay đổi của cung tiền chỉ làm thay đổi các biến danh nghĩa mà KHÔNG HỀ làm thay đổi các biến thực tế</em>. Nếu NHTW in tiền gấp đôi qua đêm, giá cả và tiền lương danh nghĩa sẽ tăng gấp đôi, nhưng số lượng máy móc, số lượng lao động và năng lực sản xuất thực tế ($Y$) của nền kinh tế vẫn hoàn toàn không đổi.</p>"
      },
      {
        "heading": "III. Tốc Độ Lưu Thông Tiền và Phương Trình Số Lượng (MV = PY)",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Tốc độ Lưu thông Tiền (Velocity of Money - V):</strong> Số lần trung bình mà một tờ tiền đổi chủ trong một năm để mua sắm hàng hóa cuối cùng:</p>\n<div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded text-center font-mono text-xs mb-3\">\n  $$V = \\frac{P \\times Y}{M}$$\n  <span class=\"block text-[11px] text-slate-500 mt-1\">Trong đó: $P \\times Y$ là GDP danh nghĩa; $M$ là khối lượng cung tiền.</span>\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Viết lại, ta có <strong>Phương trình Số lượng (Quantity Equation)</strong> kinh điển:</p>\n<div class=\"p-2.5 bg-blue-50/50 border border-blue-200 rounded text-center font-mono text-xs mb-3\">\n  $$M \\times V = P \\times Y$$\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Logic cốt lõi của Thuyết Số Lượng Tiền Tệ:</strong></p>\n<ol class=\"list-decimal pl-5 space-y-1 text-xs text-slate-600 mb-3\">\n  <li>Tốc độ quay của tiền $V$ tương đối ổn định theo thời gian.</li>\n  <li>Sản lượng thực tế $Y$ trong dài hạn do công nghệ và các yếu tố sản xuất quyết định, không phụ thuộc vào tiền.</li>\n  <li>Do đó, khi NHTW tăng cung tiền $M$, nó dẫn trực tiếp và cân xứng đến sự gia tăng của mức giá $P$.</li>\n  <li><strong>Kết luận:</strong> <em>Lạm phát luôn luôn và ở mọi nơi là một hiện tượng tiền tệ (Milton Friedman).</em></li>\n</ol>"
      },
      {
        "heading": "IV. Thuế Lạm Phát, Hiệu Ứng Fisher và 6 Chi Phí của Lạm Phát",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Thuế Lạm Phát (Inflation Tax):</strong> Khi chính phủ in tiền để chi tiêu thay vì thu thuế trực tiếp, họ làm xói mòn sức mua của toàn bộ lượng tiền đang nằm trong ví của dân. Đây thực chất là một sắc thuế đánh vào những người nắm giữ tiền mặt.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Hiệu Ứng Fisher Toàn Diện:</strong> Trong dài hạn, do lãi suất thực $r$ ổn định, sự gia tăng tốc độ tăng tiền sẽ đẩy lãi suất danh nghĩa $i$ tăng đúng bằng tỷ lệ lạm phát: $i = r + \\pi$.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>6 Chi Phí Xã Hội Nặng Nề của Lạm Phát:</strong></p>\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-2 text-xs mb-3\">\n  <div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded\"><strong>1. Chi phí giày da (Shoeleather costs):</strong> Người dân tốn công sức đi lại rút tiền nhiều lần để tránh giữ tiền mặt mất giá.</div>\n  <div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded\"><strong>2. Chi phí thực đơn (Menu costs):</strong> Chi phí doanh nghiệp phải bỏ ra để in lại bảng giá, phần mềm định giá.</div>\n  <div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded\"><strong>3. Biến dạng giá tương đối:</strong> Giá các mặt hàng thay đổi không đồng bộ làm sai lệch tín hiệu thị trường.</div>\n  <div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded\"><strong>4. Biến dạng thuế:</strong> Lạm phát thổi phồng lãi vốn danh nghĩa khiến nhà đầu tư bị đánh thuế nặng hơn dù sức mua không tăng.</div>\n  <div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded\"><strong>5. Nhầm lẫn và bất tiện:</strong> Tiền tệ mất vai trò là thước đo ổn định cho các hợp đồng kế toán dài hạn.</div>\n  <div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded\"><strong>6. Tái phân phối của cải ngẫu nhiên:</strong> Khi lạm phát cao hơn dự kiến, <em>người đi vay được lợi và người cho vay bị thiệt</em>.</div>\n</div>"
      }
    ],
    "summaryHighlights": [
      "Giá trị của tiền là 1/P; khi mức giá P tăng thì giá trị của tiền sụt giảm.",
      "Tính trung lập của tiền: Trong dài hạn, in thêm tiền chỉ làm tăng giá cả danh nghĩa, KHÔNG làm tăng GDP thực tế.",
      "Phương trình số lượng: M × V = P × Y. Vì V và Y ổn định, tốc độ tăng tiền quyết định tỷ lệ lạm phát.",
      "Hiệu ứng Fisher: Lãi suất danh nghĩa điều chỉnh 1 - 1 theo tỷ lệ lạm phát dự tính trong dài hạn (i = r + π).",
      "Khi lạm phát thực tế cao hơn lạm phát dự tính ban đầu: Người đi vay ĐƯỢC LỢI, người cho vay BỊ THIỆT."
    ],
    "keyConcepts": [
      {
        "term": "Thuyết số lượng tiền tệ",
        "desc": "Lý thuyết cho rằng khối lượng tiền sẵn có quyết định mức giá, và tốc độ tăng cung tiền quyết định lạm phát."
      },
      {
        "term": "Tính trung lập của tiền",
        "desc": "Nguyên lý khẳng định sự thay đổi lượng tiền không ảnh hưởng đến các biến số thực tế trong dài hạn."
      },
      {
        "term": "Thuế lạm phát",
        "desc": "Doanh thu mà chính phủ thu được bằng cách in tiền, làm xói mòn sức mua của người nắm giữ tiền mặt."
      },
      {
        "term": "Hiệu ứng Fisher",
        "desc": "Sự điều chỉnh tỷ lệ 1 - 1 giữa lãi suất danh nghĩa và tỷ lệ lạm phát trong dài hạn: i = r + π."
      }
    ],
    "formulas": [
      {
        "name": "Phương trình số lượng",
        "formula": "M \\times V = P \\times Y",
        "note": "M: Cung tiền; V: Vòng quay tiền; P: Mức giá; Y: GDP thực tế."
      },
      {
        "name": "Phương trình dạng phần trăm",
        "formula": "\\pi \\approx \\%\\Delta M - \\%\\Delta Y",
        "note": "Lạm phát bằng tốc độ tăng tiền trừ tốc độ tăng trưởng sản lượng (vì %ΔV ≈ 0)."
      },
      {
        "name": "Hiệu ứng Fisher",
        "formula": "i = r + \\pi^e",
        "note": "Lãi suất danh nghĩa bằng lãi suất thực tế cộng lạm phát kỳ vọng."
      }
    ],
    "traps": [
      "Trong dài hạn, in tiền KHÔNG THỂ làm tăng sản lượng thực tế Y hay tạo ra sự giàu có (Tính trung lập của tiền).",
      "Khi lạm phát thực tế cao hơn dự kiến: NGƯỜI ĐI VAY ĐƯỢC LỢI vì họ trả nợ bằng những đồng tiền có giá trị thực thấp hơn.",
      "Siêu lạm phát luôn luôn bắt nguồn từ việc CHÍNH PHỦ IN TIỀN QUÁ NHIỀU để trang trải các khoản thâm hụt chi tiêu công."
    ],
    "flashcards": [
      {
        "front": "Phương trình số lượng tiền tệ được viết thế nào?",
        "back": "M × V = P × Y (Cung tiền × Vòng quay = Mức giá × Sản lượng thực)."
      },
      {
        "front": "Tính trung lập của tiền (Monetary Neutrality) áp dụng trong thời gian nào?",
        "back": "Chỉ áp dụng trong DÀI HẠN. Trong ngắn hạn, tiền có tác động đến việc làm và sản lượng."
      },
      {
        "front": "Khi lạm phát bất ngờ tăng vọt cao hơn dự tính, ai được lợi giữa người đi vay và người cho vay?",
        "back": "NGƯỜI ĐI VAY ĐƯỢC LỢI vì giá trị thực của món nợ danh nghĩa đã bị suy giảm."
      },
      {
        "front": "Chi phí thực đơn (Menu costs) của lạm phát là gì?",
        "back": "Chi phí phát sinh khi doanh nghiệp phải liên tục in ấn, thông báo và niêm yết lại giá bán mới."
      }
    ]
  },
  {
    "chapter": 18,
    "title": "Chương 18: Kinh tế vĩ mô nền kinh tế mở: Khái niệm cơ bản",
    "slug": "open-economy-basics",
    "badge": "Kinh tế mở",
    "description": "Nghiên cứu các giao dịch quốc tế về hàng hóa và tài chính, xuất khẩu ròng NX, dòng vốn ra ròng NCO, đồng nhất thức then chốt NCO = NX và S = I + NCO, tỷ giá hối đoái danh nghĩa và thực tế, thuyết ngang giá sức mua (PPP).",
    "fullTextbook": [
      {
        "heading": "I. Các Dòng Chu Chuyển Quốc Tế: Hàng Hóa và Tài Chính",
        "content": "<p class=\"leading-relaxed mb-3\">Một nền kinh tế mở tương tác với các quốc gia khác trên thế giới theo hai kênh chính: (1) Mua bán hàng hóa và dịch vụ trên thị trường thế giới; (2) Mua bán tài sản tài chính trên thị trường vốn toàn cầu.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>1. Dòng chu chuyển Hàng hóa: Xuất khẩu Ròng (NX)</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\"><strong>Xuất khẩu ròng (Net Exports - NX)</strong> hay Cán cân thương mại bằng Giá trị hàng xuất khẩu ($EX$) trừ Giá trị hàng nhập khẩu ($IM$): $NX = EX - IM$.</p>\n<ul class=\"list-disc pl-5 space-y-1 text-xs text-slate-600 mb-3\">\n  <li>Nếu $NX > 0$: Thặng dư thương mại (Xuất siêu - bán ra thế giới nhiều hơn mua về).</li>\n  <li>Nếu $NX < 0$: Thâm hụt thương mại (Nhập siêu - mua về nhiều hơn bán ra).</li>\n  <li>Nếu $NX = 0$: Cán cân thương mại cân bằng.</li>\n</ul>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>2. Dòng chu chuyển Tài chính: Dòng Vốn Ra Ròng (NCO)</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\"><strong>Dòng vốn ra ròng (Net Capital Outflow - NCO)</strong> (trước đây gọi là Đầu tư nước ngoài ròng) bằng Lượng mua tài sản nước ngoài của cư dân trong nước trừ Lượng mua tài sản trong nước của người nước ngoài: $NCO = \\text{Dòng vốn ra} - \\text{Dòng vốn vào}$.</p>\n<ul class=\"list-disc pl-5 space-y-1 text-xs text-slate-600 mb-3\">\n  <li>Nếu $NCO > 0$: Vốn ròng chảy ra nước ngoài (trong nước đang cho nước ngoài vay vốn ròng).</li>\n  <li>Nếu $NCO < 0$: Vốn ròng chảy vào trong nước (trong nước đang đi vay nợ nước ngoài ròng).</li>\n</ul>"
      },
      {
        "heading": "II. Đồng Nhất Thức Cốt Lõi: NCO = NX và S = I + NCO",
        "content": "<p class=\"leading-relaxed mb-3\">Một nguyên lý kế toán vĩ mô vô cùng quan trọng: <strong>Dòng vốn ra ròng luôn luôn bằng Xuất khẩu ròng trong mọi thời kỳ</strong>:</p>\n<div class=\"p-2.5 bg-blue-50/50 border border-blue-200 rounded text-center font-mono text-xs mb-3\">\n  $$NCO = NX$$\n</div>\n<p class=\"text-xs text-slate-600 mb-3\"><em>Trực giác kinh tế:</em> Mỗi giao dịch thương mại quốc tế đều kéo theo một giao dịch tài sản đối ứng. Ví dụ, một công ty Việt Nam xuất khẩu cá tra sang Mỹ thu về 1 triệu USD ($NX$ tăng 1 triệu USD). Công ty có thể dùng 1 triệu USD đó để: (1) Mua cổ phiếu Apple của Mỹ; hoặc (2) Gửi tiết kiệm vào ngân hàng Mỹ; hoặc (3) Đổi lấy tiền VND từ một nhà đầu tư khác muốn mua tài sản nước ngoài. Dù trường hợp nào, lượng tài sản nước ngoài nắm giữ cũng tăng đúng 1 triệu USD ($NCO$ tăng 1 triệu USD).</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Đồng nhất thức Tiết kiệm và Đầu tư trong Nền kinh tế Mở:</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Xuất phát từ phương trình $Y = C + I + G + NX$, ta có $Y - C - G = I + NX$. Vì $S = Y - C - G$ và $NX = NCO$, ta có:</p>\n<div class=\"p-2.5 bg-emerald-50 border border-emerald-200 rounded text-center font-mono text-xs mb-3\">\n  $$S = I + NCO = I + NX$$\n</div>\n<p class=\"text-xs text-slate-600\"><em>Ý nghĩa:</em> Tiết kiệm quốc gia ($S$) được phân bổ để tài trợ cho hai mục đích: Đầu tư tích lũy tư bản nội địa ($I$) và Tích lũy tài sản ròng ở nước ngoài ($NCO$).</p>"
      },
      {
        "heading": "III. Tỷ Giá Hối Đoái Danh Nghĩa và Tỷ Giá Hối Đoái Thực Tế",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>1. Tỷ giá Hối đoái Danh nghĩa (e - Nominal Exchange Rate):</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Tỷ lệ mà một người có thể đổi tiền tệ của quốc gia này lấy tiền tệ của quốc gia khác (ví dụ: $e = 25.000\\text{ VND}/\\text{USD}$). Khi đồng tiền có giá hơn (cần ít tiền hơn để đổi 1 ngoại tệ), đồng tiền đó được gọi là <em>Lên giá (Appreciation)</em>. Ngược lại là <em>Mất giá (Depreciation)</em>.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>2. Tỷ giá Hối đoái Thực tế (ε - Real Exchange Rate):</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Tỷ lệ mà một người có thể đổi <em>hàng hóa và dịch vụ</em> của một nước lấy hàng hóa và dịch vụ của nước khác. Đây là thước đo then chốt quyết định <strong>năng lực cạnh tranh quốc tế</strong>:</p>\n<div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded text-center font-mono text-xs mb-3\">\n  $$\\epsilon = \\frac{e \\times P}{P^*}$$\n  <span class=\"block text-[11px] text-slate-500 mt-1\">Trong đó: $e$ là tỷ giá danh nghĩa (ngoại tệ/nội tệ); $P$ là mức giá trong nước; $P^*$ là mức giá nước ngoài.</span>\n</div>\n<p class=\"text-xs text-slate-600\">Khi tỷ giá thực tế $\\epsilon$ giảm xuống (đồng nội tệ rẻ đi về mặt hàng hóa), hàng trong nước trở nên rẻ hơn so với hàng ngoại quốc $\\rightarrow$ Xuất khẩu $EX$ tăng, Nhập khẩu $IM$ giảm $\\rightarrow$ <strong>Xuất khẩu ròng NX tăng lên</strong>.</p>"
      },
      {
        "heading": "IV. Thuyết Ngang Giá Sức Mua (Purchasing-Power Parity - PPP)",
        "content": "<p class=\"leading-relaxed mb-3\"><strong>Thuyết Ngang giá Sức mua (PPP)</strong> dựa trên <em>Quy luật một giá (Law of One Price)</em>: Một đơn vị của bất kỳ đồng tiền nào cũng phải có sức mua như nhau ở mọi quốc gia.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Hàm ý toán học của thuyết PPP:</p>\n<div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded text-center font-mono text-xs mb-3\">\n  $$\\epsilon = 1 \\quad \\Longrightarrow \\quad e = \\frac{P^*}{P}$$\n</div>\n<p class=\"text-xs text-slate-600 mb-2\">Dưới dạng tỷ lệ phần trăm thay đổi:</p>\n<div class=\"p-2.5 bg-blue-50/50 border border-blue-200 rounded text-center font-mono text-xs mb-3\">\n  $$\\%\\Delta e = \\pi^* - \\pi$$\n</div>\n<p class=\"text-xs text-slate-600 mb-3\"><em>Kết luận của PPP:</em> Tỷ giá hối đoái danh nghĩa giữa hai đồng tiền phụ thuộc vào mức giá ở hai nước đó. Nếu Việt Nam có tỷ lệ lạm phát cao hơn Mỹ ($\\pi > \\pi^*$), đồng tiền VND tất yếu phải <strong>mất giá (giảm giá)</strong> so với USD theo thời gian để bù đắp chênh lệch lạm phát.</p>\n<p class=\"leading-relaxed text-xs text-slate-700\"><em>Hạn chế của PPP trong thực tế:</em> (1) Nhiều loại hàng hóa và dịch vụ không thể giao thương quốc tế (như cắt tóc, thuê nhà); (2) Hàng hóa sản xuất ở các nước khác nhau không thay thế hoàn hảo cho nhau (thị hiếu người dùng).</p>"
      }
    ],
    "summaryHighlights": [
      "Xuất khẩu ròng NX = EX - IM đo lường cán cân thương mại hàng hóa.",
      "Dòng vốn ra ròng NCO = Mua tài sản ngoại - Người ngoại mua tài sản nội.",
      "Đồng nhất thức then chốt: NCO = NX và S = I + NCO = I + NX.",
      "Tỷ giá thực tế ε = (e × P) / P* đo lường năng lực cạnh tranh hàng hóa.",
      "Thuyết PPP hàm ý ε = 1; quốc gia có lạm phát cao hơn sẽ có đồng tiền mất giá tương ứng."
    ],
    "keyConcepts": [
      {
        "term": "Xuất khẩu ròng (NX)",
        "desc": "Giá trị xuất khẩu trừ giá trị nhập khẩu, còn gọi là cán cân thương mại."
      },
      {
        "term": "Dòng vốn ra ròng (NCO)",
        "desc": "Chênh lệch giữa việc mua tài sản nước ngoài của cư dân nội địa và việc mua tài sản nội địa của người nước ngoài."
      },
      {
        "term": "Tỷ giá hối đoái thực tế (ε)",
        "desc": "Tỷ lệ trao đổi hàng hóa giữa hai quốc gia: ε = (e × P) / P*."
      },
      {
        "term": "Thuyết ngang giá sức mua (PPP)",
        "desc": "Lý thuyết cho rằng một đơn vị tiền tệ phải có sức mua tương đương ở mọi quốc gia."
      }
    ],
    "formulas": [
      {
        "name": "Đồng nhất thức NCO và NX",
        "formula": "NCO = NX",
        "note": "Dòng vốn ra ròng luôn cân bằng hoàn hảo với Xuất khẩu ròng."
      },
      {
        "name": "Tiết kiệm nền kinh tế mở",
        "formula": "S = I + NCO = I + NX",
        "note": "Tiết kiệm tài trợ cho Đầu tư trong nước và Đầu tư nước ngoài."
      },
      {
        "name": "Tỷ giá hối đoái thực tế",
        "formula": "\\epsilon = \\frac{e \\times P}{P^*}",
        "note": "e: Tỷ giá danh nghĩa; P: Giá trong nước; P*: Giá nước ngoài."
      },
      {
        "name": "Tỷ giá danh nghĩa theo PPP",
        "formula": "e = \\frac{P^*}{P}",
        "note": "Tỷ giá cân bằng ngang giá sức mua."
      }
    ],
    "traps": [
      "Khi đồng nội tệ lên giá (Appreciation), hàng trong nước trở nên đắt đỏ hơn với người nước ngoài $\\rightarrow$ Xuất khẩu EX giảm, Nhập khẩu IM tăng $\\rightarrow$ Xuất khẩu ròng NX GIẢM.",
      "Một nước có tiết kiệm thấp hơn đầu tư (S < I) thì tất yếu sẽ có NCO < 0 và NX < 0 (nhập siêu, thâm hụt thương mại).",
      "Thuyết PPP không phải lúc nào cũng đúng chính xác trong ngắn hạn do chi phí vận chuyển và hàng hóa dịch vụ không thể thương mại quốc tế."
    ],
    "flashcards": [
      {
        "front": "Đồng nhất thức liên kết giữa cán cân hàng hóa và cán cân tài chính quốc tế?",
        "back": "NCO = NX (Dòng vốn ra ròng = Xuất khẩu ròng)."
      },
      {
        "front": "Công thức tính tỷ giá hối đoái thực tế (ε)?",
        "back": "ε = (e × P) / P*, trong đó e là tỷ giá danh nghĩa, P là mức giá nội địa, P* là mức giá nước ngoài."
      },
      {
        "front": "Theo thuyết PPP, nếu Việt Nam có lạm phát 6% và Mỹ có lạm phát 2%, tỷ giá VND/USD sẽ biến động thế nào?",
        "back": "Đồng VND sẽ mất giá khoảng 4% so với đồng USD."
      },
      {
        "front": "Khi một công ty Nhật Bản xây dựng nhà máy lắp ráp xe hơi tại Việt Nam, giao dịch này ảnh hưởng đến NCO của Nhật Bản thế nào?",
        "back": "Làm TĂNG NCO của Nhật Bản (mua tài sản nước ngoài - FDI)."
      }
    ]
  },
  {
    "chapter": 19,
    "title": "Chương 19: Lý thuyết kinh tế vĩ mô của nền kinh tế mở",
    "slug": "open-economy-theory",
    "badge": "Mô hình cân bằng mở",
    "modelId": "open-economy",
    "description": "Xây dựng mô hình cân bằng đồng thời trên hai thị trường: Thị trường Vốn vay và Thị trường Ngoại hối kết nối qua biến số NCO, phân tích hiện tượng thâm hụt kép, chính sách thương mại và tháo chạy vốn.",
    "fullTextbook": [
      {
        "heading": "I. Cấu Trúc Mô Hình Hai Thị Trường Đồng Thời",
        "content": "<p class=\"leading-relaxed mb-3\">Ở Chương 18, chúng ta đã làm quen với các khái niệm kinh tế mở. Chương 19 kết nối tất cả các biến số trên thành một <strong>Mô hình Cân bằng Vĩ mô Hoàn chỉnh</strong> gồm hai thị trường liên kết chặt chẽ:</p>\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3\">\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-xl\">\n    <strong class=\"text-blue-900 block text-xs mb-1\">1. Thị trường Vốn vay (Loanable Funds Market):</strong>\n    <p class=\"text-xs text-slate-700 mb-1\">Điều phối cung cầu vốn của quốc gia:</p>\n    <ul class=\"list-disc pl-4 space-y-1 text-xs text-slate-600\">\n      <li><strong>Cung vốn ($S$):</strong> Đến từ Tiết kiệm quốc gia ($S = Y - C - G$).</li>\n      <li><strong>Cầu vốn ($I + NCO$):</strong> Đến từ Đầu tư nội địa ($I$) và Dòng vốn ra ròng ($NCO$).</li>\n      <li><strong>Lãi suất thực tế ($r$):</strong> Tự do điều chỉnh để cân bằng: $S = I + NCO$. Cả $I$ và $NCO$ đều nghịch biến với lãi suất thực $r$.</li>\n    </ul>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-xl\">\n    <strong class=\"text-emerald-900 block text-xs mb-1\">2. Thị trường Ngoại hối (Foreign-Currency Exchange):</strong>\n    <p class=\"text-xs text-slate-700 mb-1\">Điều phối cung cầu tiền tệ quốc tế:</p>\n    <ul class=\"list-disc pl-4 space-y-1 text-xs text-slate-600\">\n      <li><strong>Cung nội tệ:</strong> Đến từ Dòng vốn ra ròng ($NCO$ - người trong nước muốn đổi nội tệ sang ngoại tệ để mua tài sản nước ngoài). Cung này thẳng đứng theo tỷ giá thực $\\epsilon$.</li>\n      <li><strong>Cầu nội tệ:</strong> Đến từ Xuất khẩu ròng ($NX$ - người nước ngoài cần nội tệ để mua hàng xuất khẩu). Cầu này nghịch biến với tỷ giá thực $\\epsilon$.</li>\n      <li><strong>Tỷ giá hối đoái thực tế ($\\epsilon$):</strong> Điều chỉnh để cân bằng: $NCO = NX$.</li>\n    </ul>\n  </div>\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Mắt xích kết nối: Dòng vốn ra ròng (NCO)</strong></p>\n<p class=\"text-xs text-slate-600\">NCO là cầu nối then chốt giữa hai thị trường. Lãi suất thực $r$ được xác lập trên thị trường vốn vay sẽ quyết định độ lớn của $NCO$; sau đó $NCO$ đóng vai trò là lượng Cung trên thị trường ngoại hối để quyết định tỷ giá thực $\\epsilon$.</p>"
      },
      {
        "heading": "II. Phân Tích Hiện Tượng 'Thâm Hụt Kép' (Twin Deficits)",
        "content": "<p class=\"leading-relaxed mb-3 text-xs text-slate-700\">Khi chính phủ bị <strong>Thâm hụt ngân sách ($G > T$)</strong>, cơ chế lan truyền diễn ra theo 4 bước tuần tự:</p>\n<ol class=\"list-decimal pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li>Tiết kiệm chính phủ âm ($S_{pub} < 0$) làm Tiết kiệm quốc gia $S$ giảm $\\rightarrow$ <strong>Đường Cung vốn vay dịch chuyển sang TRÁI</strong>.</li>\n  <li>Trên thị trường vốn vay, lãi suất thực tế trong nước bị đẩy <strong>TĂNG LÊN (r↑)</strong>.</li>\n  <li>Lãi suất trong nước cao khuyến khích nhà đầu tư giữ tiền ở lại trong nước và thu hút vốn ngoại, làm <strong>Dòng vốn ra ròng GIẢM XUỐNG (NCO↓)</strong> và đầu tư trong nước $I$ bị lấn át.</li>\n  <li>Trên thị trường ngoại hối, $NCO$ giảm làm đường Cung nội tệ dịch sang TRÁI $\\rightarrow$ <strong>Đồng nội tệ LÊN GIÁ ($\\epsilon$ tăng)</strong>. Hàng hóa trong nước trở nên đắt đỏ hơn đối với người nước ngoài, làm Xuất khẩu ròng $NX$ sụt giảm nghiêm trọng (thâm hụt thương mại).</li>\n</ol>\n<p class=\"p-2.5 bg-rose-50 border border-rose-200 rounded text-xs text-rose-950 font-medium\">\n  <strong>Kết luận:</strong> Thâm hụt ngân sách của chính phủ kéo theo Thâm hụt cán cân thương mại. Đây chính là hiện tượng <em>\"Thâm hụt kép\" (Twin Deficits)</em> nổi tiếng trong lịch sử kinh tế Mỹ và nhiều quốc gia.\n</p>\n<div class=\"my-6\" data-inline-model=\"open-economy\"></div>"
      },
      {
        "heading": "III. Tác Động Của Chính Sách Thương Mại (Thuế Quan và Hạn Ngạch)",
        "content": "<p class=\"leading-relaxed mb-3\">Chính sách bảo hộ thương mại (đánh thuế nhập khẩu hoặc hạn ngạch nhập khẩu) thường được các chính trị gia quảng bá là giải pháp để bảo vệ việc làm trong nước và giảm thâm hụt thương mại. Tuy nhiên, lý thuyết kinh tế vĩ mô chứng minh kết quả hoàn toàn trái ngược:</p>\n<ul class=\"list-disc pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li>Khi áp thuế quan lên hàng nhập khẩu, tại mỗi mức tỷ giá, lượng nhập khẩu $IM$ giảm làm Xuất khẩu ròng $NX = EX - IM$ tăng lên $\\rightarrow$ <strong>Đường Cầu nội tệ $NX$ trên thị trường ngoại hối dịch sang PHẢI</strong>.</li>\n  <li>Tuy nhiên, thuế quan <em>không hề tác động đến Tiết kiệm ($S$) hay Đầu tư ($I$)</em> trên thị trường vốn vay. Do đó, lãi suất thực $r$ không đổi, và <strong>Dòng vốn ra ròng $NCO$ hoàn toàn không đổi</strong>.</li>\n  <li>Vì đường Cung $NCO$ trên thị trường ngoại hối cố định, sự gia tăng của cầu nội tệ chỉ đơn thuần đẩy <strong>Tỷ giá thực tế LÊN GIÁ MẠNH ($\\epsilon$ tăng)</strong>.</li>\n  <li>Đồng tiền lên giá làm hàng xuất khẩu của trong nước trở nên quá đắt đỏ và sụt giảm đúng bằng lượng hàng nhập khẩu bị cắt giảm bởi thuế quan!</li>\n</ul>\n<p class=\"p-2.5 bg-blue-50 border border-blue-200 rounded text-xs text-blue-950 font-medium\">\n  <strong>Kết luận bất ngờ:</strong> Chính sách bảo hộ thương mại <em>KHÔNG HỀ LÀM THAY ĐỔI CÁN CÂN THƯƠNG MẠI RÒNG ($NX$)</em>! Nó chỉ bóp méo cơ cấu thương mại (làm giảm cả xuất khẩu lẫn nhập khẩu) và làm giảm hiệu quả phân bổ nguồn lực toàn cầu. Cán cân $NX$ chỉ thay đổi khi Tiết kiệm ($S$) hoặc Đầu tư ($I$) thay đổi vì $NX = S - I$.\n</p>"
      },
      {
        "heading": "IV. Hiện Tượng Tháo Chạy Vốn (Capital Flight) và Khủng Hoảng Niềm Tin",
        "content": "<p class=\"leading-relaxed mb-3\"><strong>Tháo chạy vốn (Capital Flight)</strong> là sự sụt giảm đột ngột và quy mô lớn trong nhu cầu nắm giữ tài sản của một quốc gia do bất ổn chính trị hoặc nguy cơ vỡ nợ (như tại Mexico năm 1994, Khủng hoảng châu Á 1997, hay Argentina 2001):</p>\n<ol class=\"list-decimal pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li>Các nhà đầu tư hoảng loạn bán tháo tài sản nội địa để chuyển vốn ra nước ngoài $\\rightarrow$ <strong>Đường $NCO$ dịch chuyển mạnh sang PHẢI</strong>.</li>\n  <li>Trên thị trường vốn vay: Cầu vốn ($I + NCO$) tăng vọt trong khi cung tiết kiệm không đổi $\\rightarrow$ <strong>Lãi suất thực tế $r$ tăng cao phi mã</strong>. Lãi suất cao kìm hãm đầu tư nội địa và đẩy nền kinh tế vào đình trệ.</li>\n  <li>Trên thị trường ngoại hối: Nhu cầu đổi tiền nội tệ sang ngoại tệ tăng ồ ạt làm Cung nội tệ dịch mạnh sang phải $\\rightarrow$ <strong>Đồng nội tệ MẤT GIÁ NGHIÊM TRỌNG ($\\epsilon$ sụt giảm sâu)</strong>.</li>\n</ol>\n<p class=\"text-xs text-slate-600\">Mặc dù đồng tiền mất giá giúp thúc đẩy xuất khẩu ròng $NX$ trong ngắn hạn, nhưng cái giá phải trả là sự sụp đổ của hệ thống ngân hàng và lạm phát nhập khẩu bùng nổ.</p>"
      }
    ],
    "summaryHighlights": [
      "Mô hình kinh tế mở gồm 2 thị trường: Thị trường Vốn vay (xác định r) và Thị trường Ngoại hối (xác định ε), kết nối qua NCO.",
      "Thâm hụt ngân sách chính phủ làm giảm S, đẩy lãi suất r tăng, giảm NCO, làm đồng tiền lên giá và gây thâm hụt thương mại (Thâm hụt kép).",
      "Chính sách thuế quan / hạn ngạch nhập khẩu KHÔNG làm thay đổi Xuất khẩu ròng NX, vì đồng tiền lên giá sẽ triệt tiêu lợi thế ban đầu.",
      "Cán cân thương mại NX chỉ phụ thuộc vào Tiết kiệm và Đầu tư: NX = S - I.",
      "Tháo chạy vốn (Capital flight) làm NCO tăng vọt: Đẩy lãi suất r trong nước tăng cao và làm đồng nội tệ mất giá sâu sắc."
    ],
    "keyConcepts": [
      {
        "term": "Thâm hụt kép (Twin Deficits)",
        "desc": "Mối quan hệ đồng thời giữa thâm hụt ngân sách chính phủ và thâm hụt cán cân thương mại."
      },
      {
        "term": "Tháo chạy vốn (Capital Flight)",
        "desc": "Sự dịch chuyển vốn quy mô lớn và đột ngột ra nước ngoài do nhà đầu tư lo ngại bất ổn chính trị hoặc tài chính."
      },
      {
        "term": "Chính sách thương mại",
        "desc": "Các can thiệp trực tiếp của chính phủ như thuế quan, hạn ngạch nhằm vào khối lượng hàng hóa xuất nhập khẩu."
      }
    ],
    "formulas": [
      {
        "name": "Cân bằng thị trường vốn vay mở",
        "formula": "S(r) = I(r) + NCO(r)",
        "note": "Cung tiết kiệm bằng Cầu đầu tư nội địa cộng Dòng vốn ra ròng."
      },
      {
        "name": "Cân bằng thị trường ngoại hối",
        "formula": "NCO(r) = NX(\\epsilon)",
        "note": "Cung nội tệ (NCO) bằng Cầu nội tệ (NX)."
      }
    ],
    "traps": [
      "Chính sách bảo hộ thuế quan KHÔNG LÀM TĂNG Xuất khẩu ròng NX, nó chỉ làm đồng nội tệ lên giá và làm giảm cả xuất khẩu lẫn nhập khẩu.",
      "Cán cân thương mại NX được quyết định bởi S và I (NX = S - I), KHÔNG PHẢI bởi chính sách thương mại.",
      "Trong hiện tượng tháo chạy vốn, lãi suất trong nước TĂNG CAO trong khi giá trị đồng nội tệ BỊ SỤT GIẢM MẠNH."
    ],
    "flashcards": [
      {
        "front": "Hiện tượng 'Thâm hụt kép' (Twin Deficits) là gì?",
        "back": "Thâm hụt ngân sách chính phủ kéo theo Thâm hụt thương mại quốc tế (T - G < 0 kéo theo NX < 0)."
      },
      {
        "front": "Chính sách hạn ngạch nhập khẩu có làm tăng Xuất khẩu ròng NX trong dài hạn không?",
        "back": "KHÔNG. Đồng nội tệ lên giá sẽ triệt tiêu tác động bảo hộ, làm giảm xuất khẩu đúng bằng lượng nhập khẩu bị cắt giảm."
      },
      {
        "front": "Biến số nào kết nối Thị trường Vốn vay và Thị trường Ngoại hối?",
        "back": "DÒNG VỐN RA RÒNG (NCO - Net Capital Outflow)."
      },
      {
        "front": "Khi có hiện tượng tháo chạy vốn (Capital flight), lãi suất và tỷ giá biến động ra sao?",
        "back": "Lãi suất trong nước TĂNG VỌT, đồng thời đồng nội tệ BỊ MẤT GIÁ NGHIÊM TRỌNG."
      }
    ]
  },
  {
    "chapter": 20,
    "title": "Chương 20: Biến động kinh tế ngắn hạn & Mô hình AD - AS",
    "slug": "ad-as",
    "badge": "Mô hình cốt lõi",
    "modelId": "ad-as",
    "description": "Nghiên cứu 3 đặc trưng của biến động kinh tế, sự sụp đổ của tính trung lập của tiền trong ngắn hạn, mô hình Tổng cầu (AD) và Tổng cung (AS), các cú sốc cung/cầu và cơ chế tự điều chỉnh dài hạn.",
    "fullTextbook": [
      {
        "heading": "I. Ba Đặc Trưng Của Biến Động Kinh Tế và Góc Nhìn Ngắn Hạn",
        "content": "<p class=\"leading-relaxed mb-3\">Trong các chương trước (từ Chương 10 đến Chương 19), chúng ta nghiên cứu nền kinh tế trong <strong>dài hạn</strong>: Sản lượng do công nghệ và nguồn lực quyết định, tiền có tính trung lập. Tuy nhiên, trong thực tế, các nền kinh tế luôn trải qua những đợt thăng trầm trồi sụt bất thường gọi là <strong>Chu kỳ kinh doanh (Business Cycle)</strong>.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Ba Đặc Trưng Cốt Lõi của Biến Động Kinh Tế:</strong></p>\n<ol class=\"list-decimal pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li><strong>Biến động kinh tế bất thường và không thể dự báo chính xác:</strong> Các đợt suy thoái (Recessions) diễn ra không theo chu kỳ cố định nào và không có một mô hình nào dự báo chính xác thời điểm xảy ra.</li>\n  <li><strong>Hầu hết các đại lượng kinh tế vĩ mô cùng dao động với nhau:</strong> Khi sản lượng GDP thực tế giảm thì thu nhập, chi tiêu tiêu dùng, đầu tư doanh nghiệp, lợi nhuận và doanh số bán lẻ đều cùng giảm sút (trong đó chi tiêu Đầu tư $I$ luôn là biến số dao động mạnh nhất).</li>\n  <li><strong>Khi sản lượng giảm thì tỷ lệ thất nghiệp tăng lên:</strong> Các doanh nghiệp cắt giảm sản lượng sẽ sa thải công nhân hoặc ngừng tuyển dụng mới, đẩy thất nghiệp chu kỳ tăng cao.</li>\n</ol>\n<p class=\"p-2.5 bg-amber-50 border border-amber-200 rounded text-xs text-amber-950 font-medium\">\n  <strong>Bước ngoặt tư duy:</strong> Trong ngắn hạn, <em>Tính trung lập của tiền không còn đúng nữa</em>! Giá cả và tiền lương danh nghĩa không điều chỉnh tức thì, sự thay đổi cung tiền hay chi tiêu sẽ làm thay đổi sản lượng thực tế $Y$ và việc làm.\n</p>"
      },
      {
        "heading": "II. Đường Tổng Cầu (Aggregate Demand - AD) và 3 Lý Do Dốc Xuống",
        "content": "<p class=\"leading-relaxed mb-3\"><strong>Đường Tổng cầu (AD)</strong> biểu diễn mối quan hệ giữa mức giá chung ($P$) và tổng lượng hàng hóa dịch vụ mà các hộ gia đình, doanh nghiệp, chính phủ và khách hàng quốc tế muốn mua sắm ($Y = C + I + G + NX$).</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Tại sao đường AD lại có <strong>độ dốc âm (dốc xuống)</strong>? Có 3 lý do kinh tế học kinh điển:</p>\n<div class=\"space-y-2.5 mb-3\">\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">1. Hiệu ứng Của cải của Pigou (Price & Consumption - C):</strong>\n    <p class=\"text-xs text-slate-600\">Khi mức giá $P$ giảm, sức mua của lượng tiền mặt mà người tiêu dùng nắm giữ tăng lên $\\rightarrow$ Người dân cảm thấy mình giàu có hơn $\\rightarrow$ Họ tăng chi tiêu tiêu dùng ($C$ tăng).</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">2. Hiệu ứng Lãi suất của Keynes (Price & Investment - I):</strong>\n    <p class=\"text-xs text-slate-600\">Khi mức giá $P$ giảm, người dân cần ít tiền mặt hơn cho chi tiêu hàng ngày. Họ gửi tiền thừa vào ngân hàng hoặc mua trái phiếu $\\rightarrow$ Cung vốn tăng đẩy lãi suất thực $r$ giảm xuống $\\rightarrow$ Lãi suất vay rẻ kích thích doanh nghiệp vay mua máy móc và hộ gia đình vay mua nhà ($I$ tăng).</p>\n  </div>\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">3. Hiệu ứng Tỷ giá Hối đoái của Mundell-Fleming (Price & Net Exports - NX):</strong>\n    <p class=\"text-xs text-slate-600\">Khi $P$ giảm kéo lãi suất $r$ giảm, các nhà đầu tư chuyển vốn ra nước ngoài tìm lợi tức cao hơn $\\rightarrow$ Cung nội tệ tăng làm đồng tiền giảm giá $\\rightarrow$ Hàng hóa trong nước rẻ hơn so với hàng ngoại $\\rightarrow$ Kích thích xuất khẩu, hạn chế nhập khẩu ($NX$ tăng).</p>\n  </div>\n</div>\n<p class=\"leading-relaxed text-xs text-slate-700\"><strong>Các yếu tố làm Dịch chuyển Đường AD:</strong> Bất kỳ biến cố nào làm tăng $C, I, G, NX$ tại một mức giá cho trước (chính phủ tăng chi tiêu $G$, cắt giảm thuế $T$, NHTW bơm tiền tăng $MS$, hoặc kinh tế nước ngoài tăng trưởng) đều làm <strong>đường AD dịch sang PHẢI</strong>.</p>"
      },
      {
        "heading": "III. Đường Tổng Cung Dài Hạn (LRAS) và Tổng Cung Ngắn Hạn (SRAS)",
        "content": "<p class=\"leading-relaxed mb-3 text-xs text-slate-700\">Tổng cung phản ánh lượng hàng hóa mà các doanh nghiệp lựa chọn sản xuất và bán ra ở mỗi mức giá. Cần phân biệt rõ hai đường:</p>\n<h4 class=\"font-bold text-slate-900 text-sm mb-1\">1. Đường Tổng cung Dài hạn (LRAS - Long-Run Aggregate Supply)</h4>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Trong dài hạn, sản lượng của nền kinh tế chỉ phụ thuộc vào các yếu tố sản xuất thực tế: lượng lao động, vốn tư bản, tài nguyên và công nghệ sẵn có. Mức giá danh nghĩa $P$ không ảnh hưởng đến năng lực sản xuất thực tế. Do đó, <strong>Đường LRAS hoàn toàn THẲNG ĐỨNG</strong> tại mức sản lượng tự nhiên ($Y_N$ - Sản lượng tiềm năng).</p>\n<h4 class=\"font-bold text-slate-900 text-sm mb-1\">2. Đường Tổng cung Ngắn hạn (SRAS - Short-Run Aggregate Supply)</h4>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\">Trong ngắn hạn, <strong>đường SRAS dốc lên</strong> (sản lượng thực tế $Y$ chệch khỏi $Y_N$ khi mức giá thực tế $P$ chệch khỏi mức giá kỳ vọng $P_e$): $Y = Y_N + a(P - P_e)$. Có 3 lý thuyết giải thích hiện tượng này:</p>\n<ul class=\"list-disc pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li><strong>Lý thuyết Tiền lương Kết dính (Sticky-Wage Theory):</strong> Tiền lương danh nghĩa được cố định bởi các hợp đồng lao động dài hạn. Khi $P$ tăng cao hơn kỳ vọng trong khi lương chưa kịp tăng, chi phí lao động thực tế ($W/P$) giảm xuống $\\rightarrow$ Doanh nghiệp có lãi nhiều hơn nên thuê thêm công nhân và tăng sản lượng.</li>\n  <li><strong>Lý thuyết Giá cả Kết dính (Sticky-Price Theory):</strong> Do có chi phí thực đơn (menu costs), một số doanh nghiệp chậm trễ điều chỉnh giá khi nền kinh tế biến động. Khi mức giá chung tăng, sản phẩm của các doanh nghiệp chậm đổi giá trở nên tương đối rẻ, khách hàng đổ xô đến mua $\\rightarrow$ Doanh nghiệp tăng sản xuất.</li>\n  <li><strong>Lý thuyết Nhận thức Sai lầm (Misperceptions Theory):</strong> Khi mức giá chung của nền kinh tế tăng lên, người sản xuất tưởng nhầm rằng chỉ có giá sản phẩm của riêng mình tăng lên (giá tương đối tăng), từ đó hồ hởi đẩy mạnh sản xuất.</li>\n</ul>\n<div class=\"my-6\" data-inline-model=\"ad-as\"></div>"
      },
      {
        "heading": "IV. Phân Tích Các Cú Sốc và Cơ Chế Tự Điều Chỉnh Dài Hạn",
        "content": "<p class=\"leading-relaxed mb-3 text-xs text-slate-700\">Mô hình AD - AS cho phép phân tích hai loại cú sốc lớn của nền kinh tế:</p>\n<div class=\"space-y-2.5 mb-3\">\n  <div class=\"p-3 bg-slate-50 border border-slate-200 rounded-lg\">\n    <strong class=\"text-blue-900 block text-xs mb-0.5\">1. Cú Sốc Tổng Cầu Tiêu Cực (AD dịch trái):</strong>\n    <p class=\"text-xs text-slate-600 mb-1\">Do bi quan, người tiêu dùng và doanh nghiệp thắt chặt chi tiêu $\\rightarrow$ Đường AD dịch sang trái. Trong ngắn hạn: Nền kinh tế rơi vào suy thoái với <strong>cả Sản lượng Y và Mức giá P đều giảm</strong>, thất nghiệp tăng cao.</p>\n    <p class=\"text-xs text-slate-600\"><em>Cơ chế tự điều chỉnh dài hạn:</em> Thất nghiệp cao khiến người lao động chấp nhận giảm tiền lương danh nghĩa. Tiền lương rẻ làm giảm chi phí sản xuất $\\rightarrow$ <strong>Đường SRAS dịch chuyển sang PHẢI</strong> $\\rightarrow$ Đưa sản lượng trở về mức tự nhiên $Y_N$ nhưng với mức giá vĩnh viễn thấp hơn.</p>\n  </div>\n  <div class=\"p-3 bg-rose-50 border border-rose-200 rounded-lg\">\n    <strong class=\"text-rose-900 block text-xs mb-0.5\">2. Cú Sốc Tổng Cung Bất Lợi và Hiện tượng Lạm phát Đình đốn (Stagflation):</strong>\n    <p class=\"text-xs text-slate-600 mb-1\">Giá dầu mỏ hoặc nguyên liệu thế giới tăng vọt làm chi phí sản xuất toàn xã hội đội lên $\\rightarrow$ <strong>Đường SRAS dịch chuyển sang TRÁI</strong>.</p>\n    <p class=\"text-xs text-slate-600\">Kết quả ngắn hạn: <strong>Mức giá P TĂNG nhưng Sản lượng Y GIẢM</strong>. Đây chính là hiện tượng <strong>Lạm phát Đình đốn (Stagflation)</strong> cực kỳ nan giải: Nếu chính phủ kích cầu (AD dịch phải) để cứu sản lượng thì lạm phát sẽ bùng nổ tồi tệ hơn; nếu thắt chặt để kìm lạm phát thì suy thoái càng sâu sắc.</p>\n  </div>\n</div>"
      }
    ],
    "summaryHighlights": [
      "3 đặc trưng biến động ngắn hạn: Bất thường, các biến dao động cùng nhau, sản lượng giảm thì thất nghiệp tăng.",
      "Trong ngắn hạn, tiền không có tính trung lập do tiền lương và giá cả kết dính.",
      "Đường AD dốc xuống do 3 hiệu ứng: Của cải (Pigou), Lãi suất (Keynes), Tỷ giá (Mundell-Fleming).",
      "Đường LRAS thẳng đứng tại sản lượng tự nhiên Y_N; Đường SRAS dốc lên trong ngắn hạn.",
      "Cú sốc cung bất lợi (giá dầu tăng) làm SRAS dịch trái gây ra Lạm phát đình đốn (Stagflation).",
      "Cơ chế tự điều chỉnh dài hạn diễn ra thông qua sự thay đổi của kỳ vọng giá và tiền lương làm dịch chuyển SRAS."
    ],
    "keyConcepts": [
      {
        "term": "Đường Tổng cầu (AD)",
        "desc": "Đường biểu diễn tổng lượng hàng hóa và dịch vụ được yêu cầu ở mỗi mức giá chung."
      },
      {
        "term": "Sản lượng tự nhiên (YN)",
        "desc": "Mức sản lượng mà nền kinh tế đạt được trong dài hạn khi thất nghiệp ở mức tự nhiên."
      },
      {
        "term": "Lạm phát đình đốn (Stagflation)",
        "desc": "Thời kỳ kinh tế rơi vào suy thoái (sản lượng giảm) đi kèm với mức giá gia tăng (lạm phát)."
      },
      {
        "term": "Tiền lương kết dính",
        "desc": "Lý thuyết cho rằng tiền lương danh nghĩa chậm điều chỉnh theo thay đổi của giá cả do hợp đồng dài hạn."
      }
    ],
    "formulas": [
      {
        "name": "Phương trình đường SRAS",
        "formula": "Y = Y_N + a(P - P_e)",
        "note": "Y: Sản lượng; YN: Sản lượng tự nhiên; P: Mức giá thực tế; Pe: Mức giá kỳ vọng."
      },
      {
        "name": "Cân bằng dài hạn",
        "formula": "Y = Y_N \\quad \\text{và} \\quad P = P_e",
        "note": "Giao điểm của AD, SRAS và LRAS."
      }
    ],
    "traps": [
      "Đường Tổng cung dài hạn LRAS thẳng đứng chứng minh rằng các chính sách điều tiết tổng cầu KHÔNG THỂ làm tăng sản lượng vượt mức tự nhiên trong dài hạn.",
      "Cú sốc cung bất lợi (SRAS dịch trái) làm P TĂNG và Y GIẢM (Lạm phát đình đốn).",
      "Khi nền kinh tế tự điều chỉnh từ ngắn hạn về dài hạn, ĐƯỜNG SRAS LÀ ĐƯỜNG DỊCH CHUYỂN (thông qua điều chỉnh tiền lương danh nghĩa W), đường AD không tự dịch chuyển."
    ],
    "flashcards": [
      {
        "front": "3 nguyên nhân làm đường Tổng cầu (AD) dốc xuống?",
        "back": "1. Hiệu ứng của cải (Pigou); 2. Hiệu ứng lãi suất (Keynes); 3. Hiệu ứng tỷ giá (Mundell-Fleming)."
      },
      {
        "front": "Tại sao đường Tổng cung dài hạn (LRAS) có hình dạng thẳng đứng?",
        "back": "Vì trong dài hạn, tiền có tính trung lập: Sản lượng phụ thuộc vào công nghệ và nguồn lực thực tế, không phụ thuộc vào mức giá P."
      },
      {
        "front": "Hiện tượng Lạm phát đình đốn (Stagflation) là gì và do nguyên nhân nào?",
        "back": "Là tình trạng Sản lượng giảm (suy thoái) đi kèm Mức giá tăng (lạm phát), do CÚ SỐC TỔNG CUNG BẤT LỢI (SRAS dịch trái, ví dụ giá dầu tăng vọt)."
      },
      {
        "front": "Cơ chế tự điều chỉnh của nền kinh tế từ ngắn hạn về dài hạn diễn ra qua biến số nào?",
        "back": "Thông qua sự điều chỉnh của Mức giá kỳ vọng (Pe) và Tiền lương danh nghĩa (W) làm dịch chuyển đường SRAS."
      }
    ]
  },
  {
    "chapter": 21,
    "title": "Chương 21: Tác động của chính sách tài khóa & tiền tệ lên Tổng cầu",
    "slug": "policy-impact",
    "badge": "Chính sách bình ổn",
    "modelId": "is-lm",
    "description": "Nghiên cứu cơ chế truyền dẫn chính sách tiền tệ qua Lý thuyết ưa thích thanh khoản, tác động của chính sách tài khóa, hiệu ứng số nhân chi tiêu, hiệu ứng lấn át và các chất ổn định tự động.",
    "fullTextbook": [
      {
        "heading": "I. Lý Thuyết Ưa Thích Thanh Khoản và Chính Sách Tiền Tệ",
        "content": "<p class=\"leading-relaxed mb-3\">Trong cuốn sách kinh điển năm 1936, John Maynard Keynes đã phát triển <strong>Lý thuyết Ưa thích Thanh khoản (Theory of Liquidity Preference)</strong> để giải thích các yếu tố quyết định lãi suất trong ngắn hạn:</p>\n<ul class=\"list-disc pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li><strong>Cung tiền ($MS$):</strong> Do NHTW cố định độc lập với lãi suất $\\rightarrow$ Là đường thẳng đứng.</li>\n  <li><strong>Cầu tiền ($MD$):</strong> Phản ánh mong muốn nắm giữ tài sản thanh khoản (tiền mặt) thay vì tài sản sinh lãi (trái phiếu). Khi lãi suất $r$ tăng, chi phí cơ hội của việc giữ tiền mặt tăng lên $\\rightarrow$ Người dân giảm giữ tiền mặt và mua nhiều trái phiếu hơn $\\rightarrow$ Đường Cầu tiền $MD$ có độ dốc âm theo lãi suất $r$.</li>\n  <li><strong>Cân bằng:</strong> Lãi suất cân bằng $r^*$ xác lập tại điểm giao thoa $MS = MD$.</li>\n</ul>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Cơ Chế Truyền Dẫn của Chính Sách Tiền Tệ:</strong></p>\n<p class=\"text-xs text-slate-600\">Khi NHTW muốn kích cầu kinh tế trong suy thoái, họ thực hiện <em>Chính sách Tiền tệ Mở rộng</em>: Mua trái phiếu OMO $\\rightarrow$ Cung tiền $MS$ dịch sang phải $\\rightarrow$ Lãi suất $r$ giảm xuống $\\rightarrow$ Lãi suất rẻ kích thích chi tiêu Đầu tư ($I$) và Tiêu dùng ($C$) $\\rightarrow$ <strong>Đường Tổng cầu AD dịch chuyển sang PHẢI</strong>.</p>"
      },
      {
        "heading": "II. Chính Sách Tài Khóa và Hiệu Ứng Số Nhân Chi Tiêu (Multiplier Effect)",
        "content": "<p class=\"leading-relaxed mb-3\"><strong>Chính sách Tài khóa (Fiscal Policy)</strong> là các quyết định của chính phủ về Mua sắm hàng hóa dịch vụ ($G$) và Thuế ($T$). Khi chính phủ tăng chi tiêu $G$ thêm 100 tỷ đồng, đường AD không chỉ dịch chuyển đúng 100 tỷ, mà dịch chuyển một lượng lớn hơn rất nhiều. Hiện tượng này gọi là <strong>Hiệu ứng Số nhân (Multiplier Effect)</strong>.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Cơ chế Lan truyền:</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Chính phủ chi 100 tỷ xây đường $\\rightarrow$ Thu nhập của các nhà thầu và công nhân tăng 100 tỷ. Họ sẽ đem một phần thu nhập này đi tiêu dùng ($C$). Phần thu nhập được dùng cho tiêu dùng gọi là <strong>Khuynh hướng Tiêu dùng Cận biên (Marginal Propensity to Consume - MPC)</strong>. Ví dụ nếu $MPC = 0.8$, họ sẽ tiêu dùng thêm 80 tỷ. 80 tỷ này trở thành thu nhập cho các tiểu thương, và những người này lại tiêu tiếp $80 \\times 0.8 = 64$ tỷ...</p>\n<div class=\"p-2.5 bg-blue-50/50 border border-blue-200 rounded text-center font-mono text-xs mb-3\">\n  $$\\text{Số nhân Chi tiêu} = \\frac{1}{1 - MPC} = \\frac{1}{MPS}$$\n  <span class=\"block text-[11px] text-slate-500 mt-1\">Ví dụ: Nếu $MPC = 0.8$, Số nhân $= 1 / (1 - 0.8) = 5$. Chi tiêu chính phủ tăng 100 tỷ sẽ làm Tổng cầu AD dịch chuyển thêm $100 \\times 5 = 500$ tỷ đồng!</span>\n</div>"
      },
      {
        "heading": "III. Hiệu Ứng Lấn Át Đầu Tư Tư Nhân (Crowding-out Effect)",
        "content": "<p class=\"leading-relaxed mb-3\">Trong khi hiệu ứng số nhân khuếch đại tác động của chính sách tài khóa, thì có một lực cản ngược chiều làm suy giảm tác động đó: <strong>Hiệu ứng Lấn át (Crowding-out Effect)</strong>:</p>\n<ol class=\"list-decimal pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li>Chính phủ tăng chi tiêu $G$ làm gia tăng tổng sản lượng và thu nhập quốc dân $Y$.</li>\n  <li>Thu nhập tăng làm các hộ gia đình có nhu cầu giao dịch nhiều hơn $\\rightarrow$ <strong>Cầu tiền $MD$ trên thị trường tiền tệ tăng lên (MD dịch phải)</strong>.</li>\n  <li>Vì Cung tiền $MS$ của NHTW không đổi, sự gia tăng của cầu tiền sẽ <strong>đẩy Lãi suất cân bằng $r$ TĂNG LÊN</strong>.</li>\n  <li>Lãi suất cao làm tăng chi phí vay mượn, khiến các doanh nghiệp cắt giảm các dự án Đầu tư tư nhân ($I$) và hộ gia đình hạn chế mua nhà.</li>\n</ol>\n<p class=\"p-2.5 bg-amber-50 border border-amber-200 rounded text-xs text-amber-950 font-medium\">\n  <strong>Kết luận:</strong> Hiệu ứng lấn át làm giảm bớt mức gia tăng ban đầu của Tổng cầu. Mức dịch chuyển thực tế cuối cùng của đường AD là kết quả giằng co giữa <em>Độ lớn của Hiệu ứng Số nhân</em> và <em>Mức độ Lấn át đầu tư</em>.\n</p>\n<div class=\"my-6\" data-inline-model=\"is-lm\"></div>"
      },
      {
        "heading": "IV. Thay Đổi Thuế và Các Chất Ổn Định Tự Động (Automatic Stabilizers)",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Tác động của Việc Cắt Giảm Thuế:</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Cắt giảm thuế $T$ làm tăng thu nhập khả dụng ($DI = Y - T$) của hộ gia đình $\\rightarrow$ Kích thích tiêu dùng $C$ và dịch chuyển AD sang phải. Tuy nhiên, <em>Số nhân thuế luôn nhỏ hơn Số nhân chi tiêu</em>: $\\text{Tax Multiplier} = -MPC / (1 - MPC)$ vì người dân luôn tiết kiệm lại một phần số tiền được giảm thuế thay vì tiêu dùng toàn bộ.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Các Chất Ổn Định Tự Động (Automatic Stabilizers):</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Những cơ chế tài khóa tự động kích thích tổng cầu khi kinh tế suy thoái mà không đòi hỏi chính phủ phải mất thời gian thông qua bất kỳ đạo luật mới nào:</p>\n<ul class=\"list-disc pl-5 space-y-1 text-xs text-slate-600 mb-3\">\n  <li><strong>Hệ thống Thuế Thu nhập Lũy tiến:</strong> Khi kinh tế suy thoái, thu nhập giảm, người dân tự động rơi vào khung thuế thấp hơn $\\rightarrow$ Thuế phải nộp giảm tự nhiên, giúp nâng đỡ sức mua.</li>\n  <li><strong>Hệ thống Trợ cấp Thất nghiệp và Phúc lợi Xã hội:</strong> Khi suy thoái, số người mất việc nộp đơn xin trợ cấp tăng lên $\\rightarrow$ Chi chuyển nhượng của nhà nước tự động bơm thêm thu nhập vào tay người nghèo, ngăn chặn đà rơi tự do của tổng cầu.</li>\n</ul>"
      }
    ],
    "summaryHighlights": [
      "Lý thuyết ưa thích thanh khoản: Trong ngắn hạn, lãi suất điều chỉnh để cân bằng cung cầu tiền tệ.",
      "NHTW nới lỏng tiền tệ (tăng MS) làm lãi suất giảm, kích thích I và dịch chuyển AD sang phải.",
      "Hiệu ứng số nhân chi tiêu: Multiplier = 1 / (1 - MPC). Tăng chi tiêu G làm dịch chuyển AD một lượng lớn hơn nhiều.",
      "Hiệu ứng lấn át: G tăng làm thu nhập tăng, kéo cầu tiền MD tăng, đẩy lãi suất tăng và kìm hãm đầu tư tư nhân I.",
      "Chất ổn định tự động (Thuế lũy tiến và Trợ cấp thất nghiệp) tự động làm êm chu kỳ kinh doanh."
    ],
    "keyConcepts": [
      {
        "term": "Lý thuyết ưa thích thanh khoản",
        "desc": "Lý thuyết của Keynes cho rằng lãi suất điều chỉnh để cân bằng cung cầu tiền tệ trong ngắn hạn."
      },
      {
        "term": "Khuynh hướng tiêu dùng cận biên (MPC)",
        "desc": "Tỷ lệ thu nhập tăng thêm mà hộ gia đình sử dụng cho tiêu dùng thay vì tiết kiệm: 0 < MPC < 1."
      },
      {
        "term": "Hiệu ứng số nhân",
        "desc": "Sự dịch chuyển bổ sung của tổng cầu phát sinh khi một chính sách tài khóa mở rộng làm tăng thu nhập và kích thích tiêu dùng."
      },
      {
        "term": "Chất ổn định tự động",
        "desc": "Các công cụ tài khóa tự kích cầu khi kinh tế suy thoái mà không cần chính phủ ban hành luật mới."
      }
    ],
    "formulas": [
      {
        "name": "Số nhân chi tiêu chính phủ",
        "formula": "\\text{Multiplier} = \\frac{1}{1 - MPC} = \\frac{1}{MPS}",
        "note": "Tổng mức dịch chuyển AD = Multiplier × ΔG."
      },
      {
        "name": "Số nhân thuế",
        "formula": "\\text{Tax Multiplier} = \\frac{-MPC}{1 - MPC}",
        "note": "Số nhân thuế có độ lớn nhỏ hơn số nhân chi tiêu 1 đơn vị."
      },
      {
        "name": "Mối quan hệ MPC và MPS",
        "formula": "MPC + MPS = 1",
        "note": "Tổng khuynh hướng tiêu dùng và tiết kiệm cận biên luôn bằng 1."
      }
    ],
    "traps": [
      "Hiệu ứng số nhân làm TĂNG tác động của chi tiêu chính phủ lên AD, nhưng Hiệu ứng lấn át lại làm GIẢM BỚT tác động đó.",
      "Cắt giảm thuế có tác động kích cầu nhỏ hơn việc tăng chi tiêu chính phủ trực tiếp có cùng quy mô (vì người dân tiết kiệm một phần tiền thuế giảm).",
      "Bẫy thanh khoản (Liquidity trap): Khi lãi suất đã chạm mốc 0%, chính sách tiền tệ truyền thống hết tác dụng kích cầu."
    ],
    "flashcards": [
      {
        "front": "Nếu MPC = 0.75, số nhân chi tiêu của chính phủ bằng bao nhiêu?",
        "back": "Multiplier = 1 / (1 - 0.75) = 1 / 0.25 = 4."
      },
      {
        "front": "Hiệu ứng lấn át (Crowding-out effect) diễn ra theo trình tự nào?",
        "back": "G tăng $\\rightarrow$ Thu nhập Y tăng $\\rightarrow$ Cầu tiền MD tăng $\\rightarrow$ Lãi suất r tăng $\\rightarrow$ Đầu tư tư nhân I giảm."
      },
      {
        "front": "Nêu 2 ví dụ điển hình về Chất ổn định tự động?",
        "back": "1. Hệ thống thuế thu nhập lũy tiến; 2. Hệ thống bảo hiểm và trợ cấp thất nghiệp."
      },
      {
        "front": "Chính sách tiền tệ nới lỏng dịch chuyển đường AD theo hướng nào?",
        "back": "Dịch chuyển đường AD sang PHẢI (bằng cách giảm lãi suất r, kích thích đầu tư I)."
      }
    ]
  },
  {
    "chapter": 22,
    "title": "Chương 22: Đánh đổi ngắn hạn giữa Lạm phát và Thất nghiệp (Đường Phillips)",
    "slug": "phillips-curve",
    "badge": "Đường Phillips",
    "modelId": "phillips-curve",
    "description": "Nghiên cứu nguồn gốc đường cong Phillips, sự đánh đổi ngắn hạn giữa lạm phát và thất nghiệp, đường Phillips dài hạn thẳng đứng, vai trò của lạm phát kỳ vọng, cú sốc cung, và chi phí giảm lạm phát (tỷ lệ hy sinh).",
    "fullTextbook": [
      {
        "heading": "I. Nguồn Gốc và Ý Nghĩa của Đường Cong Phillips Ngắn Hạn (SRPC)",
        "content": "<p class=\"leading-relaxed mb-3\">Năm 1958, nhà kinh tế học A.W. Phillips công bố một công trình nghiên cứu lịch sử tại Vương quốc Anh, chỉ ra mối quan hệ nghịch biến chặt chẽ giữa <strong>Tỷ lệ thất nghiệp ($u$)</strong> và <strong>Tỷ lệ lạm phát ($\\pi$)</strong>. Mối quan hệ đánh đổi này được gọi là <strong>Đường cong Phillips (Phillips Curve)</strong>.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Mối liên hệ mật thiết với Mô hình AD - AS:</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Đường cong Phillips thực chất là hình ảnh phản chiếu của mô hình Tổng cầu - Tổng cung (AD - AS) trong ngắn hạn:</p>\n<ul class=\"list-disc pl-5 space-y-1 text-xs text-slate-600 mb-3\">\n  <li>Khi các nhà hoạch định chính sách bơm tiền hoặc tăng chi tiêu công làm <strong>Tổng cầu AD tăng mạnh (dịch phải)</strong> $\\rightarrow$ Sản lượng thực tế $Y$ tăng lên, các doanh nghiệp tuyển thêm nhiều lao động khiến <em>Tỷ lệ thất nghiệp giảm xuống</em>.</li>\n  <li>Đồng thời, áp lực cầu lớn đẩy <em>Mức giá và Tỷ lệ lạm phát tăng cao</em>.</li>\n  <li>Do đó, trong ngắn hạn, xã hội đối mặt với một <strong>sự đánh đổi</strong>: Muốn thất nghiệp thấp thì phải chấp nhận lạm phát cao; muốn kiềm chế lạm phát thì phải chấp nhận thất nghiệp gia tăng.</li>\n</ul>"
      },
      {
        "heading": "II. Đường Phillips Dài Hạn (LRPC) và Vai Trò của Lạm Phát Kỳ Vọng",
        "content": "<p class=\"leading-relaxed mb-3\">Năm 1968, hai nhà kinh tế học Milton Friedman và Edmund Phelps đã đưa ra dự báo táo bạo: <em>Sự đánh đổi này chỉ tồn tại trong ngắn hạn; về dài hạn, không hề có sự đánh đổi giữa lạm phát và thất nghiệp</em>.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Đường Phillips Dài hạn (LRPC - Long-Run Phillips Curve):</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Trong dài hạn, thất nghiệp luôn quay trở về <strong>Tỷ lệ thất nghiệp tự nhiên ($u_n$)</strong>, bất kể mức cung tiền hay tỷ lệ lạm phát là bao nhiêu (Tính trung lập của tiền). Do đó, <strong>Đường LRPC hoàn toàn THẲNG ĐỨNG</strong> tại mức $u_n$.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Phương trình Đường Phillips Ngắn hạn Hiện đại:</strong></p>\n<div class=\"p-2.5 bg-blue-50/50 border border-blue-200 rounded text-center font-mono text-xs mb-3\">\n  $$\\pi = \\pi^e - \\beta(u - u_n) + \\nu$$\n  <span class=\"block text-[11px] text-slate-500 mt-1\">Trong đó: $\\pi$ là lạm phát thực tế; $\\pi^e$ là Lạm phát kỳ vọng; $\\beta > 0$ là hệ số phản ứng; $u$ là thất nghiệp; $u_n$ là thất nghiệp tự nhiên; $\\nu$ là cú sốc cung.</span>\n</div>\n<p class=\"text-xs text-slate-600\">Khi NHTW cố gắng dùng chính sách tiền tệ để ghìm thất nghiệp dưới mức tự nhiên trong thời gian dài, người dân sẽ điều chỉnh tăng lạm phát kỳ vọng $\\pi^e$. Lạm phát kỳ vọng tăng làm <strong>toàn bộ đường SRPC dịch chuyển lên trên</strong> $\\rightarrow$ Thất nghiệp lại quay về $u_n$, nhưng nền kinh tế phải gánh chịu mức lạm phát vĩnh viễn cao hơn!</p>\n<div class=\"my-6\" data-inline-model=\"phillips-curve\"></div>"
      },
      {
        "heading": "III. Cú Sốc Tổng Cung và Sự Dịch Chuyển Đường Phillips",
        "content": "<p class=\"leading-relaxed mb-3\">Vào thập niên 1970, các đợt khủng hoảng dầu mỏ OPEC làm giá dầu thế giới tăng vọt gấp 4 lần. Biến cố này giáng một đòn chí mạng vào lý thuyết đường Phillips truyền thống:</p>\n<ul class=\"list-disc pl-5 space-y-1.5 text-xs text-slate-600 mb-3\">\n  <li>Trong mô hình AD - AS: Chi phí sản xuất tăng vọt làm <strong>Đường SRAS dịch chuyển sang TRÁI</strong>.</li>\n  <li>Trong mô hình Phillips: Cú sốc cung bất lợi làm <strong>toàn bộ đường SRPC DỊCH CHUYỂN SANG PHẢI / LÊN TRÊN</strong>.</li>\n  <li>Hậu quả: Nền kinh tế đồng thời trải qua cả <em>Lạm phát tăng cao</em> VÀ <em>Thất nghiệp tăng vọt</em> (Lạm phát đình đốn - Stagflation), phá vỡ mối quan hệ đánh đổi nghịch biến thông thường.</li>\n</ul>"
      },
      {
        "heading": "IV. Chi Phí Giảm Lạm Phát, Tỷ Lệ Hy Sinh và Kỳ Vọng Hợp Lý",
        "content": "<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Quá trình Giảm Lạm Phát (Disinflation):</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Để dập tắt lạm phát, NHTW phải theo đuổi chính sách tiền tệ thắt chặt, kéo giảm tổng cầu. Điểm cân bằng di chuyển xuống dưới dọc theo đường SRPC, làm sản lượng sụt giảm và thất nghiệp tăng cao trong một thời gian.</p>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Tỷ Lệ Hy Sinh (Sacrifice Ratio):</strong></p>\n<p class=\"text-xs text-slate-600 mb-2\">Số phần trăm GDP hàng năm bị mất đi để giảm được 1 điểm phần trăm tỷ lệ lạm phát:</p>\n<div class=\"p-2.5 bg-slate-50 border border-slate-200 rounded text-center font-mono text-xs mb-3\">\n  $$\\text{Tỷ lệ Hy sinh} = \\frac{\\% \\text{ Sản lượng GDP sụt giảm}}{\\% \\text{ Tỷ lệ Lạm phát giảm bớt}}$$\n  <span class=\"block text-[11px] text-slate-500 mt-1\">Các ước tính lịch sử kinh tế Mỹ cho thấy tỷ lệ hy sinh thường từ 3% đến 5% GDP cho mỗi 1% lạm phát được kiềm chế.</span>\n</div>\n<p class=\"leading-relaxed mb-2 text-xs text-slate-700\"><strong>Lý Thuyết Kỳ Vọng Hợp Lý (Rational Expectations - Robert Lucas):</strong></p>\n<p class=\"text-xs text-slate-600\">Robert Lucas và Thomas Sargent lập luận rằng: Nếu chính phủ và NHTW có cam kết chống lạm phát <em>đầy uy tín (Credibility)</em>, người dân sẽ lập tức điều chỉnh giảm kỳ vọng lạm phát $\\pi^e$ ngay tức khắc mà không cần chờ đợi thực tế. Khi $\\pi^e$ giảm nhanh, đường SRPC sẽ dịch chuyển xuống dưới ngay lập tức, cho phép <strong>giảm lạm phát với chi phí hy sinh bằng 0</strong>!</p>"
      }
    ],
    "summaryHighlights": [
      "Đường Phillips ngắn hạn (SRPC) biểu diễn sự đánh đổi giữa lạm phát và thất nghiệp do biến động của tổng cầu.",
      "Đường Phillips dài hạn (LRPC) hoàn toàn thẳng đứng tại tỷ lệ thất nghiệp tự nhiên u_n.",
      "Lạm phát kỳ vọng π^e quyết định vị trí của đường SRPC; kỳ vọng tăng làm SRPC dịch chuyển lên trên.",
      "Cú sốc cung bất lợi (giá dầu tăng) làm đường SRPC dịch sang phải, tạo ra lạm phát đình đốn.",
      "Tỷ lệ hy sinh đo lường lượng GDP bị mất đi để giảm 1% lạm phát.",
      "Lý thuyết kỳ vọng hợp lý chứng minh: Cam kết chống lạm phát có uy tín giúp giảm tỷ lệ hy sinh xuống mức tối thiểu."
    ],
    "keyConcepts": [
      {
        "term": "Đường cong Phillips (SRPC)",
        "desc": "Mối quan hệ đánh đổi nghịch biến trong ngắn hạn giữa tỷ lệ lạm phát và tỷ lệ thất nghiệp."
      },
      {
        "term": "Đường Phillips dài hạn (LRPC)",
        "desc": "Đường thẳng đứng tại tỷ lệ thất nghiệp tự nhiên, chứng minh tiền có tính trung lập trong dài hạn."
      },
      {
        "term": "Giảm lạm phát (Disinflation)",
        "desc": "Thời kỳ tốc độ tăng giá chậm lại (lạm phát giảm nhưng vẫn dương), khác với Giảm phát (Deflation - mức giá giảm)."
      },
      {
        "term": "Tỷ lệ hy sinh",
        "desc": "Số điểm phần trăm sản lượng hàng năm bị mất đi để giảm 1 điểm phần trăm tỷ lệ lạm phát."
      }
    ],
    "formulas": [
      {
        "name": "Phương trình đường Phillips",
        "formula": "\\pi = \\pi^e - \\beta(u - u_n) + \\nu",
        "note": "π: Lạm phát; πe: Lạm phát kỳ vọng; u: Thất nghiệp; un: Thất nghiệp tự nhiên; ν: Cú sốc cung."
      },
      {
        "name": "Tỷ lệ hy sinh",
        "formula": "\\text{Sacrifice Ratio} = \\frac{\\% \\Delta Y}{\\% \\Delta \\pi}",
        "note": "Cái giá phải trả bằng sản lượng để kiểm soát lạm phát."
      }
    ],
    "traps": [
      "Giảm lạm phát (Disinflation) KHÔNG PHẢI là Giảm phát (Deflation). Disinflation là lạm phát giảm từ 10% xuống 3% (giá vẫn tăng nhưng chậm lại); Deflation là lạm phát âm.",
      "Chính sách tiền tệ nới lỏng chỉ ghìm được thất nghiệp dưới mức tự nhiên TRONG NGẮN HẠN. Trong dài hạn, lạm phát kỳ vọng tăng sẽ kéo thất nghiệp về u_n nhưng với lạm phát cao.",
      "Di chuyển DỌC theo SRPC do TỔNG CẦU (AD) thay đổi. Dịch chuyển TOÀN BỘ ĐƯỜNG SRPC do LẠM PHÁT KỲ VỌNG hoặc CÚ SỐC CUNG thay đổi."
    ],
    "flashcards": [
      {
        "front": "Đường Phillips dài hạn (LRPC) có hình dạng gì và tại sao?",
        "back": "THẲNG ĐỨNG tại tỷ lệ thất nghiệp tự nhiên (u_n), vì trong dài hạn lạm phát không ảnh hưởng đến thị trường lao động."
      },
      {
        "front": "Sự khác biệt giữa Giảm lạm phát (Disinflation) và Giảm phát (Deflation)?",
        "back": "Disinflation: Tỷ lệ lạm phát giảm bớt nhưng vẫn dương (giá tăng chậm lại). Deflation: Mức giá chung thực sự giảm sút (lạm phát âm)."
      },
      {
        "front": "Tỷ lệ hy sinh (Sacrifice ratio) đo lường điều gì?",
        "back": "Số phần trăm GDP bị mất đi trong một năm để giảm được 1 điểm phần trăm tỷ lệ lạm phát."
      },
      {
        "front": "Khi có một cú sốc cung bất lợi (giá dầu tăng), đường SRPC dịch chuyển thế nào?",
        "back": "Đường SRPC DỊCH SANG PHẢI / LÊN TRÊN (tạo ra cả lạm phát cao hơn và thất nghiệp cao hơn)."
      }
    ]
  }
];
