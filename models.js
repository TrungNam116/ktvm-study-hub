// models.js - Bộ 6 mô hình kinh tế vĩ mô tương tác trực quan cao cấp
// Hỗ trợ hiển thị trên Canvas độ nét cao, điều khiển bằng thanh trượt hoặc các kịch bản chính sách sẵn có

const MacroModels = {
  // 1. MÔ HÌNH AD - AS (TỔNG CUNG - TỔNG CẦU)
  renderADAS(canvasId, state = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Reset transform & clear
    ctx.clearRect(0, 0, width, height);

    // Padding & dimensions
    const padL = 70, padR = 40, padT = 40, padB = 60;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;

    // Parameters from state:
    // deltaAD: -50 to +50 (default 0)
    // deltaSRAS: -50 to +50 (default 0)
    // deltaLRAS: -30 to +30 (default 0)
    const dAD = state.deltaAD || 0;
    const dSRAS = state.deltaSRAS || 0;
    const dLRAS = state.deltaLRAS || 0;

    // Coordinate conversion
    const originX = padL;
    const originY = height - padB;

    // Draw Axes
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(originX, padT);
    ctx.lineTo(originX, originY);
    ctx.lineTo(width - padR, originY);
    ctx.stroke();

    // Axis Arrows
    drawArrow(ctx, originX, originY, originX, padT - 10);
    drawArrow(ctx, originX, originY, width - padR + 10, originY);

    // Axis Labels
    ctx.font = 'bold 15px system-ui, sans-serif';
    ctx.fillStyle = '#1e293b';
    ctx.fillText('Mức giá (P)', originX - 60, padT + 5);
    ctx.fillText('Sản lượng thực tế (Y)', width - padR - 70, originY + 40);

    // Grid lines subtle
    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 4; i++) {
      let gy = originY - (plotH / 5) * i;
      ctx.beginPath(); ctx.moveTo(originX, gy); ctx.lineTo(width - padR, gy); ctx.stroke();
      let gx = originX + (plotW / 5) * i;
      ctx.beginPath(); ctx.moveTo(gx, originY); ctx.lineTo(gx, padT); ctx.stroke();
    }

    // Base Curves coordinates
    // LRAS: Vertical line at Y_N
    const ynX_base = originX + plotW * 0.5;
    const ynX_new = ynX_base + dLRAS * 2;

    // LRAS line
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#059669'; // Emerald
    ctx.beginPath();
    ctx.moveTo(ynX_new, originY);
    ctx.lineTo(ynX_new, padT + 20);
    ctx.stroke();
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText('LRAS', ynX_new - 18, padT + 12);
    ctx.fillText('Y_N', ynX_new - 10, originY + 22);

    // Initial AD: P = 100 - (Y - 50) => slope down
    // Initial SRAS: P = 20 + (Y - 50) => slope up
    // Base curves (dashed grey if shifted)
    const hasShift = (dAD !== 0 || dSRAS !== 0);
    if (hasShift) {
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#cbd5e1';
      // Base AD0
      ctx.beginPath();
      ctx.moveTo(originX + plotW * 0.1, originY - plotH * 0.85);
      ctx.lineTo(originX + plotW * 0.9, originY - plotH * 0.15);
      ctx.stroke();
      // Base SRAS0
      ctx.beginPath();
      ctx.moveTo(originX + plotW * 0.1, originY - plotH * 0.15);
      ctx.lineTo(originX + plotW * 0.9, originY - plotH * 0.85);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Shifted AD: offset horizontally or vertically
    // dAD shifts right/up
    const adOffsetX = (dAD / 50) * (plotW * 0.22);
    const srasOffsetX = (dSRAS / 50) * (plotW * 0.22);

    // Current AD
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#2563eb'; // Blue
    ctx.beginPath();
    ctx.moveTo(originX + plotW * 0.1 + adOffsetX, originY - plotH * 0.85);
    ctx.lineTo(originX + plotW * 0.9 + adOffsetX, originY - plotH * 0.15);
    ctx.stroke();
    ctx.fillStyle = '#2563eb';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(dAD !== 0 ? 'AD₁' : 'AD', originX + plotW * 0.9 + adOffsetX - 15, originY - plotH * 0.12);

    // Current SRAS
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#dc2626'; // Red
    ctx.beginPath();
    ctx.moveTo(originX + plotW * 0.1 + srasOffsetX, originY - plotH * 0.15);
    ctx.lineTo(originX + plotW * 0.9 + srasOffsetX, originY - plotH * 0.85);
    ctx.stroke();
    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(dSRAS !== 0 ? 'SRAS₁' : 'SRAS', originX + plotW * 0.9 + srasOffsetX - 25, originY - plotH * 0.88);

    // Calculate Equilibrium Point (Intersection of AD and SRAS)
    // Midpoint base is (originX + plotW * 0.5, originY - plotH * 0.5)
    // adOffsetX moves AD right by dx -> intersection moves right dx/2, up dx/2 (P increases)
    // srasOffsetX moves SRAS right by sx -> intersection moves right sx/2, down sx/2 (P decreases)
    const eqX = originX + plotW * 0.5 + (adOffsetX + srasOffsetX) / 2;
    const eqY = originY - plotH * 0.5 - (adOffsetX - srasOffsetX) / 2;

    // Draw Equilibrium 0 (Base) if shifted
    if (hasShift) {
      const bX = originX + plotW * 0.5;
      const bY = originY - plotH * 0.5;
      drawPoint(ctx, bX, bY, '#94a3b8', 'E₀');
      drawDashedProject(ctx, originX, originY, bX, bY, 'P₀', 'Y₀', '#94a3b8');
    }

    // Draw Current Equilibrium E1
    const ptLabel = hasShift ? 'E₁' : 'E₀';
    drawPoint(ctx, eqX, eqY, '#f59e0b', ptLabel);
    drawDashedProject(ctx, originX, originY, eqX, eqY, hasShift ? 'P₁' : 'P', hasShift ? 'Y₁' : 'Y', '#f59e0b');

    // Direction arrow if shifted
    if (dAD !== 0) {
      drawCurveShiftArrow(ctx, originX + plotW * 0.5, originY - plotH * 0.5, adOffsetX, 0, '#2563eb');
    }
    if (dSRAS !== 0) {
      drawCurveShiftArrow(ctx, originX + plotW * 0.5, originY - plotH * 0.5, srasOffsetX, 0, '#dc2626');
    }
  },

  // 2. MÔ HÌNH THỊ TRƯỜNG TIỀN TỆ (MS - MD & LÃI SUẤT)
  renderMoneyMarket(canvasId, state = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const padL = 70, padR = 40, padT = 40, padB = 60;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;

    const dMS = state.deltaMS || 0; // -50 to +50
    const dMD = state.deltaMD || 0; // -50 to +50

    const originX = padL;
    const originY = height - padB;

    // Axes
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(originX, padT);
    ctx.lineTo(originX, originY);
    ctx.lineTo(width - padR, originY);
    ctx.stroke();

    drawArrow(ctx, originX, originY, originX, padT - 10);
    drawArrow(ctx, originX, originY, width - padR + 10, originY);

    ctx.font = 'bold 15px system-ui, sans-serif';
    ctx.fillStyle = '#1e293b';
    ctx.fillText('Lãi suất (r)', originX - 65, padT + 5);
    ctx.fillText('Lượng tiền (M)', width - padR - 60, originY + 40);

    // Initial MS is vertical line at 50%
    const baseMsX = originX + plotW * 0.5;
    const msOffsetX = (dMS / 50) * (plotW * 0.25);
    const currMsX = baseMsX + msOffsetX;

    // Base MS if shifted
    if (dMS !== 0) {
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#cbd5e1';
      ctx.beginPath(); ctx.moveTo(baseMsX, originY); ctx.lineTo(baseMsX, padT + 20); ctx.stroke();
      ctx.setLineDash([]);
    }

    // Current MS (Vertical)
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#0284c7'; // Sky blue
    ctx.beginPath();
    ctx.moveTo(currMsX, originY);
    ctx.lineTo(currMsX, padT + 20);
    ctx.stroke();
    ctx.fillStyle = '#0284c7';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(dMS !== 0 ? 'MS₁' : 'MS', currMsX - 15, padT + 12);

    // MD Curve (Downward sloping)
    const mdOffsetY = (dMD / 50) * (plotH * 0.2);
    // Base MD if shifted
    if (dMD !== 0) {
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#cbd5e1';
      ctx.beginPath();
      ctx.moveTo(originX + plotW * 0.1, originY - plotH * 0.85);
      ctx.lineTo(originX + plotW * 0.9, originY - plotH * 0.15);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Current MD
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#7c3aed'; // Purple
    ctx.beginPath();
    ctx.moveTo(originX + plotW * 0.1, originY - plotH * 0.85 - mdOffsetY);
    ctx.lineTo(originX + plotW * 0.9, originY - plotH * 0.15 - mdOffsetY);
    ctx.stroke();
    ctx.fillStyle = '#7c3aed';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(dMD !== 0 ? 'MD₁' : 'MD', originX + plotW * 0.9 - 15, originY - plotH * 0.12 - mdOffsetY);

    // Equilibrium calculation
    // Base eq: (baseMsX, originY - plotH * 0.5)
    // Moving MS right by msOffsetX reduces eq r by: (msOffsetX / plotW) * plotH * 0.875
    // Moving MD up by mdOffsetY increases eq r by mdOffsetY
    const slope = (plotH * 0.7) / (plotW * 0.8);
    const eqX = currMsX;
    const baseEqY = originY - plotH * 0.5;
    const eqY = baseEqY - mdOffsetY + (msOffsetX * slope);

    if (dMS !== 0 || dMD !== 0) {
      drawPoint(ctx, baseMsX, baseEqY, '#94a3b8', 'E₀');
      drawDashedProject(ctx, originX, originY, baseMsX, baseEqY, 'r₀', 'M₀', '#94a3b8');
    }

    drawPoint(ctx, eqX, eqY, '#ea580c', (dMS !== 0 || dMD !== 0) ? 'E₁' : 'E₀');
    drawDashedProject(ctx, originX, originY, eqX, eqY, (dMS !== 0 || dMD !== 0) ? 'r₁' : 'r*', (dMS !== 0 || dMD !== 0) ? 'M₁' : 'M*', '#ea580c');
  },

  // 3. MÔ HÌNH IS - LM (CÂN BẰNG THỊ TRƯỜNG HÀNG HÓA & TIỀN TỆ)
  renderISLM(canvasId, state = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const padL = 70, padR = 40, padT = 40, padB = 60;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;

    const dIS = state.deltaIS || 0; // -50 to +50 (Fiscal policy G, T)
    const dLM = state.deltaLM || 0; // -50 to +50 (Monetary policy MS)

    const originX = padL;
    const originY = height - padB;

    // Axes
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(originX, padT);
    ctx.lineTo(originX, originY);
    ctx.lineTo(width - padR, originY);
    ctx.stroke();

    drawArrow(ctx, originX, originY, originX, padT - 10);
    drawArrow(ctx, originX, originY, width - padR + 10, originY);

    ctx.font = 'bold 15px system-ui, sans-serif';
    ctx.fillStyle = '#1e293b';
    ctx.fillText('Lãi suất (r)', originX - 65, padT + 5);
    ctx.fillText('Sản lượng (Y)', width - padR - 60, originY + 40);

    const isOffsetX = (dIS / 50) * (plotW * 0.22);
    const lmOffsetX = (dLM / 50) * (plotW * 0.22);

    // Initial IS (Downward sloping) & LM (Upward sloping)
    if (dIS !== 0 || dLM !== 0) {
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#cbd5e1';
      // Base IS0
      ctx.beginPath();
      ctx.moveTo(originX + plotW * 0.1, originY - plotH * 0.85);
      ctx.lineTo(originX + plotW * 0.9, originY - plotH * 0.15);
      ctx.stroke();
      // Base LM0
      ctx.beginPath();
      ctx.moveTo(originX + plotW * 0.1, originY - plotH * 0.15);
      ctx.lineTo(originX + plotW * 0.9, originY - plotH * 0.85);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Current IS (Blue)
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#2563eb';
    ctx.beginPath();
    ctx.moveTo(originX + plotW * 0.1 + isOffsetX, originY - plotH * 0.85);
    ctx.lineTo(originX + plotW * 0.9 + isOffsetX, originY - plotH * 0.15);
    ctx.stroke();
    ctx.fillStyle = '#2563eb';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(dIS !== 0 ? 'IS₁' : 'IS', originX + plotW * 0.9 + isOffsetX - 15, originY - plotH * 0.12);

    // Current LM (Orange)
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#ea580c';
    ctx.beginPath();
    ctx.moveTo(originX + plotW * 0.1 + lmOffsetX, originY - plotH * 0.15);
    ctx.lineTo(originX + plotW * 0.9 + lmOffsetX, originY - plotH * 0.85);
    ctx.stroke();
    ctx.fillStyle = '#ea580c';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(dLM !== 0 ? 'LM₁' : 'LM', originX + plotW * 0.9 + lmOffsetX - 15, originY - plotH * 0.88);

    // Intersection
    const eqX = originX + plotW * 0.5 + (isOffsetX + lmOffsetX) / 2;
    const eqY = originY - plotH * 0.5 - (isOffsetX - lmOffsetX) / 2;

    if (dIS !== 0 || dLM !== 0) {
      const bX = originX + plotW * 0.5;
      const bY = originY - plotH * 0.5;
      drawPoint(ctx, bX, bY, '#94a3b8', 'E₀');
      drawDashedProject(ctx, originX, originY, bX, bY, 'r₀', 'Y₀', '#94a3b8');
    }

    drawPoint(ctx, eqX, eqY, '#10b981', (dIS !== 0 || dLM !== 0) ? 'E₁' : 'E₀');
    drawDashedProject(ctx, originX, originY, eqX, eqY, (dIS !== 0 || dLM !== 0) ? 'r₁' : 'r*', (dIS !== 0 || dLM !== 0) ? 'Y₁' : 'Y*', '#10b981');
  },

  // 4. MÔ HÌNH ĐƯỜNG CONG PHILLIPS (LẠM PHÁT & THẤT NGHIỆP)
  renderPhillips(canvasId, state = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const padL = 70, padR = 40, padT = 40, padB = 60;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;

    const dExpInf = state.deltaExpInf || 0; // -50 to +50 (Shifts SRPC up/down)
    const dAD = state.deltaAD || 0; // -50 to +50 (Moves along SRPC)

    const originX = padL;
    const originY = height - padB;

    // Axes
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(originX, padT);
    ctx.lineTo(originX, originY);
    ctx.lineTo(width - padR, originY);
    ctx.stroke();

    drawArrow(ctx, originX, originY, originX, padT - 10);
    drawArrow(ctx, originX, originY, width - padR + 10, originY);

    ctx.font = 'bold 15px system-ui, sans-serif';
    ctx.fillStyle = '#1e293b';
    ctx.fillText('Lạm phát (π)', originX - 65, padT + 5);
    ctx.fillText('Tỷ lệ thất nghiệp (u)', width - padR - 90, originY + 40);

    // LRPC (Vertical line at un = 50%)
    const unX = originX + plotW * 0.45;
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#059669'; // Emerald
    ctx.beginPath();
    ctx.moveTo(unX, originY);
    ctx.lineTo(unX, padT + 20);
    ctx.stroke();
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('LRPC', unX - 20, padT + 12);
    ctx.fillText('u_n (Tự nhiên)', unX - 35, originY + 22);

    // Base SRPC if shifted
    if (dExpInf !== 0) {
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#cbd5e1';
      ctx.beginPath();
      ctx.moveTo(originX + plotW * 0.15, originY - plotH * 0.85);
      ctx.quadraticCurveTo(unX, originY - plotH * 0.45, originX + plotW * 0.85, originY - plotH * 0.15);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Current SRPC (Shifted vertically by expected inflation or supply shock)
    const srpcOffsetY = (dExpInf / 50) * (plotH * 0.25);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#db2777'; // Pink/Rose
    ctx.beginPath();
    ctx.moveTo(originX + plotW * 0.15, originY - plotH * 0.85 - srpcOffsetY);
    ctx.quadraticCurveTo(unX, originY - plotH * 0.45 - srpcOffsetY, originX + plotW * 0.85, originY - plotH * 0.15 - srpcOffsetY);
    ctx.stroke();
    ctx.fillStyle = '#db2777';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(dExpInf !== 0 ? 'SRPC₁' : 'SRPC', originX + plotW * 0.85 - 20, originY - plotH * 0.12 - srpcOffsetY);

    // Movement along SRPC due to AD:
    // AD increases -> output Y increases -> unemployment u decreases -> inflation pi increases
    // dAD > 0 moves left & up
    const adShiftU = -(dAD / 50) * (plotW * 0.2);
    const adShiftPi = (dAD / 50) * (plotH * 0.25);

    const currX = unX + adShiftU;
    const currY = originY - plotH * 0.45 - srpcOffsetY - adShiftPi;

    // Base point
    if (dExpInf !== 0 || dAD !== 0) {
      drawPoint(ctx, unX, originY - plotH * 0.45, '#94a3b8', 'A');
      drawDashedProject(ctx, originX, originY, unX, originY - plotH * 0.45, 'π₀', 'u_n', '#94a3b8');
    }

    drawPoint(ctx, currX, currY, '#4f46e5', (dExpInf !== 0 || dAD !== 0) ? 'B' : 'A');
    drawDashedProject(ctx, originX, originY, currX, currY, (dExpInf !== 0 || dAD !== 0) ? 'π₁' : 'π*', (dExpInf !== 0 || dAD !== 0) ? 'u₁' : 'u*', '#4f46e5');
  },

  // 5. MÔ HÌNH THỊ TRƯỜNG VỐN VAY (CHƯƠNG 13)
  renderLoanableFunds(canvasId, state = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const padL = 70, padR = 40, padT = 40, padB = 60;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;

    const dS = state.deltaS || 0; // -50 to +50 (Saving supply shift, e.g. budget deficit shifts left)
    const dI = state.deltaI || 0; // -50 to +50 (Investment demand shift, e.g. investment tax credit shifts right)

    const originX = padL;
    const originY = height - padB;

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(originX, padT);
    ctx.lineTo(originX, originY);
    ctx.lineTo(width - padR, originY);
    ctx.stroke();

    drawArrow(ctx, originX, originY, originX, padT - 10);
    drawArrow(ctx, originX, originY, width - padR + 10, originY);

    ctx.font = 'bold 15px system-ui, sans-serif';
    ctx.fillStyle = '#1e293b';
    ctx.fillText('Lãi suất thực (r)', originX - 65, padT + 5);
    ctx.fillText('Vốn vay (Q)', width - padR - 60, originY + 40);

    const sOffsetX = (dS / 50) * (plotW * 0.22);
    const iOffsetX = (dI / 50) * (plotW * 0.22);

    if (dS !== 0 || dI !== 0) {
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#cbd5e1';
      // Supply S0
      ctx.beginPath();
      ctx.moveTo(originX + plotW * 0.1, originY - plotH * 0.15);
      ctx.lineTo(originX + plotW * 0.9, originY - plotH * 0.85);
      ctx.stroke();
      // Demand I0
      ctx.beginPath();
      ctx.moveTo(originX + plotW * 0.1, originY - plotH * 0.85);
      ctx.lineTo(originX + plotW * 0.9, originY - plotH * 0.15);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Current Supply S (Green)
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#10b981';
    ctx.beginPath();
    ctx.moveTo(originX + plotW * 0.1 + sOffsetX, originY - plotH * 0.15);
    ctx.lineTo(originX + plotW * 0.9 + sOffsetX, originY - plotH * 0.85);
    ctx.stroke();
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(dS !== 0 ? 'S₁ (Cung vốn)' : 'S (Cung vốn)', originX + plotW * 0.9 + sOffsetX - 30, originY - plotH * 0.88);

    // Current Demand I (Blue)
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#2563eb';
    ctx.beginPath();
    ctx.moveTo(originX + plotW * 0.1 + iOffsetX, originY - plotH * 0.85);
    ctx.lineTo(originX + plotW * 0.9 + iOffsetX, originY - plotH * 0.15);
    ctx.stroke();
    ctx.fillStyle = '#2563eb';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(dI !== 0 ? 'D₁ (Cầu vốn)' : 'D (Cầu vốn)', originX + plotW * 0.9 + iOffsetX - 25, originY - plotH * 0.12);

    // Intersection
    const eqX = originX + plotW * 0.5 + (sOffsetX + iOffsetX) / 2;
    const eqY = originY - plotH * 0.5 + (sOffsetX - iOffsetX) / 2;

    if (dS !== 0 || dI !== 0) {
      const bX = originX + plotW * 0.5;
      const bY = originY - plotH * 0.5;
      drawPoint(ctx, bX, bY, '#94a3b8', 'E₀');
      drawDashedProject(ctx, originX, originY, bX, bY, 'r₀', 'Q₀', '#94a3b8');
    }

    drawPoint(ctx, eqX, eqY, '#f59e0b', (dS !== 0 || dI !== 0) ? 'E₁' : 'E₀');
    drawDashedProject(ctx, originX, originY, eqX, eqY, (dS !== 0 || dI !== 0) ? 'r₁' : 'r*', (dS !== 0 || dI !== 0) ? 'Q₁' : 'Q*', '#f59e0b');
  },

  // 6. MÔ HÌNH NỀN KINH TẾ MỞ & THỊ TRƯỜNG NGOẠI HỐI (CHƯƠNG 19)
  renderOpenEconomy(canvasId, state = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // We draw two side-by-side panels:
    // Panel 1 (Left): Thị trường vốn vay (S = I + NCO => r)
    // Panel 2 (Right): Thị trường Ngoại hối (NCO = NX => epsilon)
    const pad = 45;
    const panelW = (width - pad * 3) / 2;
    const panelH = height - pad * 2 - 20;

    const dS = state.deltaS || 0; // Budget deficit shifts S left
    const dNX = state.deltaNX || 0; // Trade policy shifts NX right
    const dFlight = state.deltaFlight || 0; // Capital flight shifts NCO right

    // Left Panel: Loanable Funds Market
    drawLoanableFundsSubPanel(ctx, pad, pad + 20, panelW, panelH, dS, dFlight);

    // Right Panel: Foreign Exchange Market
    drawForexSubPanel(ctx, pad * 2 + panelW, pad + 20, panelW, panelH, dS, dNX, dFlight);
  }
};

// HELPER CANVAS FUNCTIONS
function drawArrow(ctx, x1, y1, x2, y2) {
  const headlen = 8;
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - headlen * Math.cos(angle - Math.PI / 6), y2 - headlen * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(x2 - headlen * Math.cos(angle + Math.PI / 6), y2 - headlen * Math.sin(angle + Math.PI / 6));
  ctx.fillStyle = ctx.strokeStyle;
  ctx.fill();
}

function drawPoint(ctx, x, y, color, label) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.font = 'bold 13px system-ui, sans-serif';
  ctx.fillStyle = color;
  ctx.fillText(label, x + 8, y - 8);
  ctx.restore();
}

function drawDashedProject(ctx, originX, originY, x, y, labelY, labelX, color) {
  ctx.save();
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2;

  // Project to Y axis
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(originX, y);
  ctx.stroke();

  // Project to X axis
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, originY);
  ctx.stroke();

  // Draw labels
  ctx.font = 'bold 12px system-ui, sans-serif';
  ctx.fillStyle = color;
  ctx.fillText(labelY, originX - 25, y + 4);
  ctx.fillText(labelX, x - 8, originY + 18);
  ctx.restore();
}

function drawCurveShiftArrow(ctx, cx, cy, dx, dy, color) {
  if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  const startX = cx;
  const startY = cy;
  const endX = cx + (dx > 0 ? 30 : -30);
  const endY = cy;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  drawArrow(ctx, startX, startY, endX, endY);
  ctx.restore();
}

function drawLoanableFundsSubPanel(ctx, ox, oy, pw, ph, dS, dFlight) {
  // Local origin
  const originX = ox + 35;
  const originY = oy + ph - 25;
  const w = pw - 45;
  const h = ph - 40;

  // Axis
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = '#64748b';
  ctx.beginPath();
  ctx.moveTo(originX, oy); ctx.lineTo(originX, originY); ctx.lineTo(originX + w, originY);
  ctx.stroke();
  drawArrow(ctx, originX, originY, originX, oy - 8);
  drawArrow(ctx, originX, originY, originX + w + 8, originY);

  ctx.font = 'bold 12px sans-serif';
  ctx.fillStyle = '#1e293b';
  ctx.fillText('Lãi suất r', originX - 30, oy - 2);
  ctx.fillText('Vốn vay S, I+NCO', originX + w - 80, originY + 18);
  ctx.fillStyle = '#64748b';
  ctx.fillText('Thị trường Vốn vay', originX + 10, oy + 15);

  const sShift = (dS / 50) * (w * 0.2);
  const dShift = (dFlight / 50) * (w * 0.2);

  // S line (Supply)
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#10b981';
  ctx.beginPath();
  ctx.moveTo(originX + w * 0.1 + sShift, originY - h * 0.15);
  ctx.lineTo(originX + w * 0.9 + sShift, originY - h * 0.85);
  ctx.stroke();

  // Demand line (I + NCO)
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#2563eb';
  ctx.beginPath();
  ctx.moveTo(originX + w * 0.1 + dShift, originY - h * 0.85);
  ctx.lineTo(originX + w * 0.9 + dShift, originY - h * 0.15);
  ctx.stroke();

  // Eq
  const eqX = originX + w * 0.5 + (sShift + dShift) / 2;
  const eqY = originY - h * 0.5 + (sShift - dShift) / 2;
  drawPoint(ctx, eqX, eqY, '#ea580c', 'r*');
}

function drawForexSubPanel(ctx, ox, oy, pw, ph, dS, dNX, dFlight) {
  const originX = ox + 35;
  const originY = oy + ph - 25;
  const w = pw - 45;
  const h = ph - 40;

  ctx.lineWidth = 1.5;
  ctx.strokeStyle = '#64748b';
  ctx.beginPath();
  ctx.moveTo(originX, oy); ctx.lineTo(originX, originY); ctx.lineTo(originX + w, originY);
  ctx.stroke();
  drawArrow(ctx, originX, originY, originX, oy - 8);
  drawArrow(ctx, originX, originY, originX + w + 8, originY);

  ctx.font = 'bold 12px sans-serif';
  ctx.fillStyle = '#1e293b';
  ctx.fillText('Tỷ giá thực ε', originX - 30, oy - 2);
  ctx.fillText('Lượng nội tệ (NX)', originX + w - 80, originY + 18);
  ctx.fillStyle = '#64748b';
  ctx.fillText('Thị trường Ngoại hối', originX + 10, oy + 15);

  // Supply of dollars/currency is NCO (vertical line)
  // When budget deficit happens (dS < 0) -> r increases -> NCO decreases -> NCO shifts left
  // When capital flight happens (dFlight > 0) -> NCO shifts right
  const ncoShift = (-dS / 50) * (w * 0.18) + (dFlight / 50) * (w * 0.25);
  const ncoX = originX + w * 0.5 + ncoShift;

  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#0284c7';
  ctx.beginPath();
  ctx.moveTo(ncoX, originY);
  ctx.lineTo(ncoX, oy + 20);
  ctx.stroke();
  ctx.fillStyle = '#0284c7';
  ctx.fillText('NCO (Cung)', ncoX - 25, oy + 12);

  // Demand for dollars is NX (downward sloping)
  // Trade policy (tariff) shifts NX right
  const nxShift = (dNX / 50) * (w * 0.2);
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#db2777';
  ctx.beginPath();
  ctx.moveTo(originX + w * 0.15 + nxShift, originY - h * 0.85);
  ctx.lineTo(originX + w * 0.85 + nxShift, originY - h * 0.15);
  ctx.stroke();
  ctx.fillStyle = '#db2777';
  ctx.fillText('NX (Cầu)', originX + w * 0.85 + nxShift - 20, originY - h * 0.12);

  // Eq
  const slope = (h * 0.7) / (w * 0.7);
  const eqY = (originY - h * 0.5) - (nxShift * slope) + (ncoShift * slope);
  drawPoint(ctx, ncoX, eqY, '#f59e0b', 'ε*');
}

window.MacroModels = MacroModels;
