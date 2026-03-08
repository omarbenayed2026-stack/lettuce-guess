/* =========================================
   Lettuce Guess — Alive UI (Dark/Light)
   ========================================= */

:root {
  --bg: #0b0e14;
  --panel: rgba(255, 255, 255, 0.06);
  --panel2: rgba(255, 255, 255, 0.08);
  --text: #e9eef8;
  --muted: rgba(233, 238, 248, 0.7);
  --border: rgba(255, 255, 255, 0.12);
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.45);

  --primary: #7c5cff;
  --primary2: #a78bfa;
  --danger: #ff5470;
  --warn: #f7c948;
  --ok: #2fe08b;
  --info: #5cc8ff;

  --radius: 18px;
  --radius2: 14px;
}

body.theme-light {
  --bg: #f7f8fb;
  --panel: rgba(0, 0, 0, 0.05);
  --panel2: rgba(0, 0, 0, 0.07);
  --text: #0e1220;
  --muted: rgba(14, 18, 32, 0.65);
  --border: rgba(0, 0, 0, 0.12);
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.16);
}

* { box-sizing: border-box; }

html, body { height: 100%; }

body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: radial-gradient(1200px 800px at 20% 0%, rgba(124, 92, 255, 0.18), transparent 60%),
              radial-gradient(900px 700px at 80% 20%, rgba(92, 200, 255, 0.14), transparent 55%),
              var(--bg);
  color: var(--text);
}

body[dir="rtl"] {
  font-family: "Tajawal", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}

.container {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
  padding: 28px 0 110px;
}

.hidden { display: none !important; }

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  backdrop-filter: blur(14px);
  background: rgba(0, 0, 0, 0.25);
  z-index: 20;
}

body.theme-light .topbar {
  background: rgba(255, 255, 255, 0.6);
}

.brand__name {
  font-weight: 900;
  letter-spacing: 0.2px;
  font-size: 18px;
}
.brand__pill {
  margin-top: 4px;
  font-size: 12px;
  color: var(--muted);
  border: 1px solid var(--border);
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
}

.topbar__right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.select {
  padding: 10px 12px;
  border-radius: 12px;
  background: var(--panel);
  color: var(--text);
  border: 1px solid var(--border);
  outline: none;
}

.iconbtn {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
  cursor: pointer;
  font-weight: 800;
}

.iconbtn:hover { background: var(--panel2); }

.hero { padding: 26px 0 12px; }
.hero__title {
  margin: 0;
  font-size: clamp(26px, 4vw, 46px);
  letter-spacing: -0.6px;
}
.hero__subtitle {
  margin: 14px 0 18px;
  color: var(--muted);
  max-width: 70ch;
  line-height: 1.5;
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn {
  padding: 12px 16px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
  cursor: pointer;
  font-weight: 800;
  letter-spacing: 0.2px;
  transition: transform 0.08s ease, background 0.15s ease;
}

.btn:active { transform: translateY(1px); }
.btn:hover { background: var(--panel2); }

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary2));
  border-color: rgba(255,255,255,0.16);
}
.btn-primary:hover { filter: brightness(1.05); }

.btn-ghost {
  background: transparent;
}

.loadingline {
  margin-top: 14px;
  color: var(--muted);
  font-weight: 700;
}

.hint {
  margin-top: 10px;
  font-size: 13px;
  color: var(--muted);
}

.panel {
  margin: 18px 0 8px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: var(--shadow);
}

.panel__header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
}

.panel__title { font-weight: 900; font-size: 18px; }
.panel__subtitle { color: var(--muted); margin-top: 4px; }

.panel__grid {
  margin-top: 14px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (max-width: 760px) {
  .panel__grid { grid-template-columns: 1fr; }
}

.panel__sectionTitle {
  font-weight: 900;
  margin-bottom: 8px;
}

.chk {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 10px;
}
.chk input { transform: scale(1.05); }

.divider {
  height: 1px;
  background: var(--border);
  margin: 12px 0;
}

.panel__footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 14px;
}

.result, .notfound { margin-top: 18px; }

.card {
  padding: 18px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: var(--shadow);
}

.card__top {
  display: flex;
  gap: 14px;
  align-items: center;
}
.foodEmoji { font-size: 44px; }
.foodName { font-size: 22px; font-weight: 950; }

.row {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.pill {
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--muted);
  background: rgba(0, 0, 0, 0.16);
}

body.theme-light .pill {
  background: rgba(255, 255, 255, 0.5);
}

.badge-green { border-color: rgba(47, 224, 139, 0.45); color: rgba(47, 224, 139, 1); }
.badge-gold { border-color: rgba(247, 201, 72, 0.55); color: rgba(247, 201, 72, 1); }
.badge-red { border-color: rgba(255, 84, 112, 0.55); color: rgba(255, 84, 112, 1); }
.badge-blue { border-color: rgba(92, 200, 255, 0.55); color: rgba(92, 200, 255, 1); }

.foodDesc {
  margin: 14px 0 0;
  color: var(--muted);
  line-height: 1.6;
}

.modes {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
@media (max-width: 760px) {
  .modes { grid-template-columns: 1fr; }
}

.modebtn {
  text-align: left;
  padding: 14px;
  border-radius: var(--radius2);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
}
.modebtn:hover { background: rgba(255, 255, 255, 0.06); }
.modebtn__title { font-weight: 950; }
.modebtn__sub { margin-top: 4px; color: var(--muted); font-weight: 650; }

.footer {
  margin-top: 28px;
  padding: 10px 0 0;
  color: var(--muted);
  font-weight: 650;
}
.footer__small { margin-top: 8px; font-size: 12px; }

.stickybar {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 14px;
  width: min(1100px, calc(100% - 32px));
  padding: 10px;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(18px);
  display: flex;
  gap: 10px;
  z-index: 30;
}
body.theme-light .stickybar {
  background: rgba(255, 255, 255, 0.65);
}

.stickybar__btn {
  flex: 1;
  justify-content: center;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.68);
  display: grid;
  place-items: center;
  padding: 18px;
  z-index: 50;
}

.modal__card {
  width: min(860px, 100%);
  border-radius: 20px;
  border: 1px solid var(--border);
  background: rgba(10, 12, 18, 0.9);
  box-shadow: var(--shadow);
  padding: 18px;
  position: relative;
}

body.theme-light .modal__card {
  background: rgba(255, 255, 255, 0.92);
}

.modal__card--wide { width: min(980px, 100%); }

.modal__close {
  position: absolute;
  top: 12px;
  right: 12px;
}

body[dir="rtl"] .modal__close {
  right: auto;
  left: 12px;
}

.modal__title { margin: 6px 0 8px; font-weight: 950; }
.modal__text { margin: 0 0 16px; color: var(--muted); line-height: 1.6; }

.features {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
@media (max-width: 760px) {
  .features { grid-template-columns: 1fr; }
}

.feature {
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
}
.feature__title { font-weight: 900; }
.feature__sub { margin-top: 4px; color: var(--muted); }

.modal__actions {
  margin-top: 14px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.h3 { margin: 0 0 10px; font-weight: 950; }

.modal__header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.modal__meta { display: flex; gap: 10px; flex-wrap: wrap; }

.muted { opacity: 0.7; }

.modal__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}
@media (max-width: 760px) {
  .modal__grid { grid-template-columns: 1fr; }
}

.list { margin: 0; padding-left: 18px; }
body[dir="rtl"] .list { padding-left: 0; padding-right: 18px; }
.list li { margin: 7px 0; color: var(--muted); line-height: 1.5; }
