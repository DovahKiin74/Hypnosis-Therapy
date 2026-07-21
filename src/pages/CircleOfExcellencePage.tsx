import { useEffect, useRef, useState } from 'react';
import { CircleOfExcellenceHero } from '../components/CircleOfExcellenceHero';
import { CircleOfExcellenceAbout } from '../components/CircleOfExcellenceAbout';
import { CircleOfExcellenceCTA } from '../components/CircleOfExcellenceCTA';
import { XIcon } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
import { CircleOfExcellenceFaq } from '../components/CircleOfExcellenceFaq';
import { BookSection } from '../components/BookSection';

export function CircleOfExcellencePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCloseWarning, setShowCloseWarning] = useState(false);

  // Function to initialize widgets
    const initWidgets = () => {
    const DEFAULT_AREAS = [
        "Health",
        "Friends",
        "Family",
        "Sig. Other / Romance",
        "Spirituality",
        "Personal Growth",
        "Physical Environment",
        "Fun & Recreation",
        "Business / Career",
        "Money / Finance"
    ];

    const WIDGETS = document.querySelectorAll('.wol-embed');
    if (!WIDGETS.length) return;

    WIDGETS.forEach((host, index) => {
        // Skip if already initialized
        if (host.shadowRoot) return;

        const hostElement = host as HTMLElement;
        const areasAttr = (hostElement.dataset.wolAreas || '').split('|').filter(Boolean);
        const AREAS = areasAttr.length === 10 ? areasAttr : DEFAULT_AREAS;
        const TITLE = hostElement.dataset.wolTitle || 'Wheel of Life';
        const STORAGE_KEY = 'wol-quiz-widget-' + (hostElement.dataset.wolKey || ('default-' + index));

        // Clear previous data on mount
        localStorage.removeItem(STORAGE_KEY);

        const root = host.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
        :host{all:initial}
        *{box-sizing:border-box;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial}
        .card{border:1px solid #e5e7eb;border-radius:16px;padding:16px;max-width:820px;margin:0 auto;background:#fff;box-shadow:0 2px 12px rgba(0,0,0,.06)}
        .title{font-size:20px;font-weight:800;color:#111827}
        .sub{font-size:13px;color:#6b7280;margin-top:4px}
        .progress{position:relative;height:10px;background:#f3f4f6;border-radius:999px;margin:14px 0}
        .bar{position:absolute;left:0;top:0;height:100%;background:#111827;border-radius:999px;width:0%}
        .qwrap{display:grid;gap:12px;margin-top:8px}
        .qlabel{font-weight:700;color:#111827}
        .scale{display:flex;gap:6px;align-items:center}
        .pill{flex:1;display:grid;grid-template-columns:repeat(10,1fr);gap:6px}
        .pill button{padding:10px 0;border:1px solid #e5e7eb;background:#fff;border-radius:10px;cursor:pointer;font-weight:600;transition:all 0.2s}
        .pill button:hover{background:#f3f4f6;transform:translateY(-1px)}
        .pill button.active{background:#111827;color:#fff}
        .hint{font-size:12px;color:#6b7280}
        .nav{display:flex;justify-content:space-between;gap:8px;margin-top:8px}
        .nav .left,.nav .right{display:flex;gap:8px}
        button{appearance:none;border:1px solid #e5e7eb;background:#111827;color:#fff;border-radius:10px;padding:10px 14px;font-weight:700;cursor:pointer;transition:all 0.2s;position:relative;overflow:hidden}
        button:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,0.15)}
        button:active{transform:translateY(0);box-shadow:0 2px 6px rgba(0,0,0,0.1)}
        button.ghost{background:#fff;color:#111827}
        button.ghost:hover{background:#f9fafb}
        button:disabled{opacity:.5;cursor:not-allowed;transform:none !important;box-shadow:none !important}
        .center{display:flex;justify-content:center;align-items:center}
        .results{display:grid;gap:12px}
        canvas{width:100%;height:auto;aspect-ratio:1/1;border-radius:12px;background:conic-gradient(from 0deg,#fafafa,#ffffff)}
        .grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        @media (max-width: 640px){.grid{grid-template-columns:1fr}}
        .list{border:1px dashed #e5e7eb;border-radius:12px;padding:12px}
        .row{display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px dashed #f1f5f9}
        .row:last-child{border-bottom:0}
        .badge{display:inline-block;padding:2px 8px;border-radius:999px;background:#f3f4f6;font-size:11px;color:#111827}
        .kicker{font-size:12px;color:#374151}
        .footer{display:flex;justify-content:flex-end;align-items:center;margin-top:12px;padding-top:12px;}
        .btns{display:flex;gap:8px;flex-wrap:wrap}
        .small{font-size:11px;color:#6b7280}
        .action-buttons{display: flex; justify-self:flex-end;gap:12px;}
        
        /* Ripple Button Styles */
        .ripple-btn {
            display:inline-flex;
            align-items:center;
            gap:8px;
            padding:10px 20px;
            border-radius:10px;
            font-weight:700;
            font-size:14px;
            cursor:pointer;
            transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position:relative;
            overflow:hidden;
            border:none;
            text-decoration:none;
            background:#0951f6;
            color:#fff;
        }
        .ripple-btn:hover {
            transform:translateY(-2px);
            box-shadow:0 6px 20px rgba(9, 81, 246, 0.35);
        }
        .ripple-btn:active {
            transform:translateY(0);
            box-shadow:0 3px 10px rgba(9, 81, 246, 0.25);
        }
        .ripple-btn-dark {
            background:#17362f;
            color:#fff;
        }
        .ripple-btn-dark:hover {
            box-shadow:0 6px 20px rgba(23, 54, 47, 0.35);
        }
        .ripple-btn svg {
            transition:transform 0.3s ease;
        }
        .ripple-btn:hover svg {
            transform:translateX(2px);
        }
        .ripple-btn-dark:hover svg {
            transform:translateX(2px);
        }
        .ripple-effect {
            position:absolute;
            border-radius:50%;
            background:rgba(255,255,255,0.3);
            transform:scale(0);
            animation:ripple 0.6s ease-out;
            pointer-events:none;
        }
        @keyframes ripple {
            to {
            transform:scale(4);
            opacity:0;
            }
        }
        `;
        root.appendChild(style);

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <div class="title">${TITLE}</div>
        <div class="sub">Rate each area from 1 to 10. After you submit, your personalized Wheel appears.</div>
        <div class="progress"><div class="bar"></div></div>
        <div class="view"></div>
        <div class="footer">
            <div class="btns"></div>
        </div>
        `;
        root.appendChild(card);

        const view = card.querySelector('.view') as HTMLElement | null;
        const bar = card.querySelector('.bar') as HTMLElement | null;
        const btns = card.querySelector('.btns') as HTMLElement | null;

        // Ripple effect function
        const createRipple = (e: MouseEvent, element: HTMLElement) => {
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
        element.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
        };

        const load = (): { step: number; scores: number[] } | null => {
        try { 
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        } catch { 
            return null; 
        }
        };
        const persist = (data: { step: number; scores: number[] }) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        let state = load() || { step: 0, scores: Array(10).fill(0) };

        const total = AREAS.length;
        let currentCanvas: HTMLCanvasElement | null = null;

        function render() {
        const isResults = state.step >= total;
        if (bar) {
            bar.style.width = (Math.min(state.step, total) / total * 100).toFixed(1) + '%';
        }
        if (btns) {
            btns.innerHTML = '';
        }
        if (isResults) {
            renderResults();
        } else {
            renderQuestion();
        }
        }

        function renderQuestion() {
        if (!view) return;
        const i = state.step;
        const label = AREAS[i];
        view.innerHTML = '';

        const q = document.createElement('div');
        q.className = 'qwrap';
        q.innerHTML = `
            <div class="qlabel">${i + 1}. ${label}</div>
            <div class="scale">
            <span class="kicker">1</span>
            <div class="pill"></div>
            <span class="kicker">10</span>
            </div>
            <div class="hint">Choose the number that best represents your current satisfaction.</div>
        `;
        view.appendChild(q);

        const pill = q.querySelector('.pill') as HTMLElement | null;
        if (pill) {
            for (let n = 1; n <= 10; n++) {
            const b = document.createElement('button');
            b.textContent = String(n);
            if (state.scores[i] === n) b.classList.add('active');
            b.addEventListener('click', () => {
                state.scores[i] = n;
                persist(state);
                [...pill.children].forEach(el => el.classList.remove('active'));
                b.classList.add('active');
                const nextBtn = view.querySelector('[data-next]') as HTMLButtonElement | null;
                if (nextBtn) nextBtn.disabled = false;
            });
            pill.appendChild(b);
            }
        }

        const left = document.createElement('div');
        left.className = 'left';
        const right = document.createElement('div');
        right.className = 'right';

        const back = document.createElement('button');
        back.className = 'ghost';
        back.textContent = 'Back';
        back.disabled = (i === 0);
        back.addEventListener('click', (e) => {
            createRipple(e, back);
            state.step = Math.max(0, state.step - 1);
            persist(state);
            render();
        });

        const next = document.createElement('button');
        next.setAttribute('data-next', '');
        next.textContent = (i === total - 1 ? 'Submit' : 'Next');
        const hasAnswer = !!state.scores[i];
        next.disabled = !hasAnswer;
        next.addEventListener('click', (e) => {
            if (!state.scores[i]) return;
            createRipple(e, next);
            state.step++;
            persist(state);
            render();
        });

        const nav = document.createElement('div');
        nav.className = 'nav';
        left.appendChild(back);
        right.appendChild(next);
        nav.appendChild(left);
        nav.appendChild(right);
        view.appendChild(nav);
        }

        function renderResults() {
        if (!view || !btns) return;
        view.innerHTML = '';
        const wrap = document.createElement('div');
        wrap.className = 'results';
        wrap.innerHTML = `
            <div class="qlabel">Your Wheel of Life</div>
            <div class="grid">
            <div><canvas width="720" height="720"></canvas></div>
            <div class="list"></div>
            </div>
        `;
        view.appendChild(wrap);

        const canvas = wrap.querySelector('canvas') as HTMLCanvasElement | null;
        const list = wrap.querySelector('.list') as HTMLElement | null;
        
        if (canvas) {
            currentCanvas = canvas;
            const ctx = canvas.getContext('2d');
            if (ctx) {
            drawWheel(canvas, ctx, AREAS, state.scores);
            }
        }

        if (list) {
            const items = AREAS.map((name: string, i: number) => ({ name, score: state.scores[i] || 0 }));
            const sorted = [...items].sort((a, b) => b.score - a.score);
            const highs = sorted.filter(x => x.score === sorted[0].score);
            const lows = sorted.filter(x => x.score === sorted[sorted.length - 1].score);

            items.forEach(({ name, score }) => {
            const row = document.createElement('div');
            row.className = 'row';
            const badge = (highs.find(x => x.name === name) ? '<span class="badge">High</span>' : (lows.find(x => x.name === name) ? '<span class="badge">Low</span>' : ''));
            row.innerHTML = `<span>${name}</span><span>${badge} ${score}/10</span>`;
            list.appendChild(row);
            });
        }

        // Create Download PNG Button with Ripple
        const pngBtn = document.createElement('a');
        pngBtn.className = 'ripple-btn ripple-btn-dark';
        pngBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PNG
        `;
        pngBtn.addEventListener('click', (e) => {
            createRipple(e, pngBtn);
            if (currentCanvas) {
            const a = document.createElement('a');
            a.download = 'circle-of-excellence.png';
            a.href = currentCanvas.toDataURL('image/png');
            a.click();
            }
        });

        // Create Want Guidance Button with Ripple
        const guidanceBtn = document.createElement('a');
        guidanceBtn.className = 'ripple-btn';
        guidanceBtn.href = '/contact';
        guidanceBtn.innerHTML = `
            Need Guidance
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
            </svg>
        `;
        guidanceBtn.addEventListener('click', (e) => {
            createRipple(e, guidanceBtn);
        });

        const btnContainer = document.createElement('div');
        btnContainer.className = 'action-buttons';
        btnContainer.appendChild(pngBtn);
        btnContainer.appendChild(guidanceBtn);
        btns.appendChild(btnContainer);
        }

        function drawBlank(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const W = canvas.width,
            H = canvas.height,
            cx = W / 2,
            cy = H / 2;
        ctx.clearRect(0, 0, W, H);
        const labelMargin = 84;
        const maxR = Math.max(40, Math.min(W, H) / 2 - labelMargin);
        const rings = 10;
        for (let k = 1; k <= rings; k++) {
            ctx.beginPath();
            ctx.arc(cx, cy, maxR * k / rings, 0, Math.PI * 2);
            ctx.strokeStyle = k % 2 ? '#e5e7eb' : '#f3f4f6';
            ctx.stroke();
        }
        const slices = 10,
            step = (Math.PI * 2) / slices;
        for (let i = 0; i < slices; i++) {
            const a = i * step;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + maxR * Math.cos(a), cy + maxR * Math.sin(a));
            ctx.strokeStyle = '#e5e7eb';
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(cx, cy, maxR + 1, 0, Math.PI * 2);
        ctx.strokeStyle = '#d1d5db';
        ctx.stroke();
        }

        function drawWheel(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, labels: string[], scores: number[]) {
        drawBlank(canvas);
        const W = canvas.width,
            H = canvas.height,
            cx = W / 2,
            cy = H / 2;
        const labelMargin = 84;
        const maxR = Math.max(40, Math.min(W, H) / 2 - labelMargin);
        const step = (Math.PI * 2) / 10;
        scores.forEach((score, i) => {
            if (!score) return;
            const start = i * step - Math.PI / 2,
            end = start + step * 0.98;
            const r = (score / 10) * maxR;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, maxR, start, end);
            ctx.closePath();
            ctx.fillStyle = '#eef2ff';
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, r, start, end);
            ctx.closePath();
            ctx.fillStyle = '#111827';
            ctx.globalAlpha = .6;
            ctx.fill();
            ctx.globalAlpha = 1;
        });
        ctx.beginPath();
        ctx.arc(cx, cy, maxR + 1, 0, Math.PI * 2);
        ctx.strokeStyle = '#9ca3af';
        ctx.stroke();
        const fontSize = Math.max(16, Math.round(Math.min(W, H) / 40));
        ctx.fillStyle = '#111827';
        ctx.font = fontSize + 'px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const lblR = maxR + 36;
        labels.forEach((name, i) => {
            const a = (i * step - Math.PI / 2) + step / 2;
            const x = cx + lblR * Math.cos(a),
            y = cy + lblR * Math.sin(a);
            wrapText(ctx, name, x, y, 150, Math.round(fontSize * 0.95));
        });
        }

        function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
        const words = text.split(' ');
        let line = '';
        const lines: string[] = [];
        for (const w of words) {
            const t = line ? line + ' ' + w : w;
            if (ctx.measureText(t).width > maxWidth) {
            lines.push(line);
            line = w;
            } else line = t;
        }
        if (line) lines.push(line);
        const total = (lines.length - 1) * lineHeight;
        lines.forEach((ln, i) => ctx.fillText(ln, x, y - total / 2 + i * lineHeight));
        }

        render();
    });
    };

  useEffect(() => {
    initWidgets();

    const observer = new MutationObserver(() => {
      initWidgets();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(initWidgets, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setShowCloseWarning(true);
  };

  const handleConfirmClose = () => {
    // Clear all widget data
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('wol-quiz-widget-')) {
        localStorage.removeItem(key);
      }
    });
    setIsModalOpen(false);
    setShowCloseWarning(false);
  };

  const handleCancelClose = () => {
    setShowCloseWarning(false);
  };

  return (
    <div className="w-full bg-[#f6f7f5] text-[#0951f6] px-[16px] py-[16px]">
      <div className='mx-auto flex flex-col gap-5 sm:gap-7 max-w-[1600px]'>
        <CircleOfExcellenceHero 
          onOpenModal={() => setIsModalOpen(true)} 
        />
        <CircleOfExcellenceAbout />        
        <CircleOfExcellenceCTA 
          onOpenModal={() => setIsModalOpen(true)} 
        />
        <div className="max-w-4xl mx-auto" ref={containerRef} />
        <BookSection />
        <CircleOfExcellenceFaq />
        <Newsletter />
        <Footer />
      </div>

      {/* Stunning Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          {/* Backdrop with gradient blur */}
          <div className="absolute inset-0 bg-white/70" />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-4xl max-h-[90vh] animate-in fade-in zoom-in duration-300">
            {/* Modal Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-blue-700 px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white">Circle of Excellence</h2>
                    <p className="text-xs text-white/70">Complete the assessment below</p>
                  </div>
                </div>
                
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200 group"
                  aria-label="Close modal"
                >
                  <XIcon size={20} className="text-white/70 group-hover:text-white transition-colors" />
                </button>
              </div>

              {/* Modal Body - Scrollable */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6 sm:p-8">
                <div className="prose prose-sm max-w-none mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm text-blue-800 font-medium">Quick Guide</p>
                        <p className="text-xs text-blue-600">Rate each area from 1-10. Be honest — this is for your eyes only.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Assessment Widget */}
                <div 
                  className="wol-embed" 
                  data-wol-title="Circle of Excellence – Wheel of Life" 
                  data-wol-key="wol-intake-quiz-modal"
                />
              </div>
            </div>
          </div>
        </div>
      )}

        {/* Close Warning Modal */}
        {showCloseWarning && (
            <div 
                className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                onClick={(e) => {
                if (e.target === e.currentTarget) handleCancelClose();
                }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <div className="relative bg-white rounded-2xl max-w-md w-full p-5 py-12 shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Download Your Results First</h3>
                    <p className="text-sm text-gray-600 mb-4">
                    Your assessment data will be deleted when you close this modal. 
                    Please download your Circle of Excellence PNG before closing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <button
                        onClick={handleCancelClose}
                        className="px-5 py-2 text-sm border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                        Continue Assessment
                    </button>
                    <button
                        onClick={handleConfirmClose}
                        className="px-5 py-2 text-sm bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
                    >
                        Close
                    </button>
                    </div>
                </div>
                </div>
            </div>
        )}
    </div>
  );
}