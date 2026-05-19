(() => {
  const logoSvg = `<svg viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <clipPath id="rc-logo-clip"><rect width="170" height="170" fill="#fff"/></clipPath>
    <mask id="rc-logo-right-mask" mask-type="alpha" maskUnits="userSpaceOnUse" x="102" y="69" width="68" height="46">
      <rect x="102" y="69" width="68" height="46" fill="#C4C4C4"/>
    </mask>
    <mask id="rc-logo-left-mask" mask-type="alpha" maskUnits="userSpaceOnUse" x="45.5" y="87" width="48" height="28">
      <path d="M45.5 87H61.73L93.5 110.85V115H45.5V87Z" fill="#EA580C"/>
    </mask>
  </defs>
  <g clip-path="url(#rc-logo-clip)">
    <path d="M152.5 115C152.5 103.58 148.74 93.02 142.37 84.44C135.53 75.2 126.17 68.82 115.87 65.55C104.81 62.01 93.41 62.26 83.12 65.55C72.05 69.07 62.98 75.84 56.63 84.43C49.78 93.66 46.49 104.38 46.5 115H152.5Z" fill="#B44409"/>
    <rect x="71.5" y="32" width="55" height="83" fill="#292929"/>
    <path d="M1 87L46 115V87H1Z" fill="#fff"/>
    <path d="M42 112.51L46 115V87H1L7.42 91L42 112.51ZM42 107.8L15 91H42V107.8Z" fill="#EA580C"/>
    <rect x="85.5" y="41" width="37" height="6" fill="#403F3F"/>
    <rect x="85.5" y="53" width="37" height="6" fill="#403F3F"/>
    <rect x="85.5" y="66" width="37" height="6" fill="#403F3F"/>
    <rect x="85.5" y="78" width="37" height="6" fill="#403F3F"/>
    <rect x="85.5" y="91" width="37" height="6" fill="#403F3F"/>
    <rect x="85.5" y="103" width="37" height="6" fill="#403F3F"/>
    <circle cx="79.5" cy="44" r="2" fill="#EA0C0C"/>
    <circle cx="79.5" cy="56" r="2" fill="#47EA0C"/>
    <circle cx="79.5" cy="69" r="2" fill="#47EA0C"/>
    <circle cx="79.5" cy="81" r="2" fill="#47EA0C"/>
    <circle cx="79.5" cy="94" r="2" fill="#47EA0C"/>
    <g mask="url(#rc-logo-right-mask)">
      <ellipse cx="136" cy="112.5" rx="34" ry="27.5" fill="#EA580C"/>
    </g>
    <g mask="url(#rc-logo-left-mask)">
      <rect x="43.5" y="87" width="57" height="28" fill="#EA580C"/>
      <rect x="68.5" y="108" width="28" height="7" fill="#fff"/>
      <rect x="88.5" y="111" width="4" height="4" fill="#000"/>
      <rect x="53.5" y="95" width="13" height="3" fill="#000"/>
    </g>
  </g>
</svg>`;

  const t = (en, ru = en) => ({ en, ru });
  const makePage = ({ code, badge, heading, message, title, wordCode = false }) => ({
    title: title || t(`${code} ${badge}`),
    badge,
    code,
    heading,
    message,
    wordCode
  });

  const serviceUnavailable = t("Service temporarily unavailable", "Сервис временно недоступен");

  const pages = {
    "404": makePage({
      code: "404",
      badge: "Not Found",
      heading: t("Page not found", "Страница не найдена"),
      message: t(
        "The link may be outdated or the address may be incorrect.",
        "Возможно, ссылка устарела или адрес введён с ошибкой."
      )
    }),
    "500": makePage({
      code: "500",
      badge: "Internal Server Error",
      heading: t("Internal server error", "Внутренняя ошибка сервера"),
      message: t("Refresh the page or try again later.", "Попробуйте обновить страницу или вернуться позже.")
    }),
    "502": makePage({
      code: "502",
      badge: "Bad Gateway",
      heading: serviceUnavailable,
      message: t("Refresh the page in a few seconds.", "Попробуйте обновить страницу через несколько секунд.")
    }),
    "503": makePage({
      code: "503",
      badge: "Service Unavailable",
      heading: serviceUnavailable,
      message: t(
        "The service may be busy or under maintenance. Try again in a few minutes.",
        "Сейчас он может быть перегружен или на обслуживании. Попробуйте снова через пару минут."
      )
    }),
    "504": makePage({
      code: "504",
      badge: "Gateway Timeout",
      heading: t("Response took too long", "Ответ занял слишком много времени"),
      message: t(
        "The service did not respond in time. Refresh the page in a few seconds.",
        "Сервис не успел ответить. Попробуйте обновить страницу через несколько секунд."
      )
    }),
    unbound: makePage({
      code: "NO LINK",
      badge: "Address Not Linked",
      title: t("Address Not Linked", "Адрес не привязан"),
      wordCode: true,
      heading: t("Address is not linked to a service", "Адрес не привязан к сервису"),
      message: t(
        "DNS already points to Reynard Cloud, but this address has not been assigned to a service in the control panel.",
        "DNS уже указывает на Reynard Cloud, но для этого адреса ещё не выбран сервис в панели управления."
      )
    })
  };

  const i18n = {
    en: {
      refresh: "Refresh page",
      poweredBy: "Powered by"
    },
    ru: {
      refresh: "Обновить страницу",
      poweredBy: "Powered by"
    }
  };

  const style = `
:root {
  color-scheme: dark;
  --black: #040506;
  --white: #ffffff;
  --muted: #9c9c9d;
  --soft: #6a6b6c;
  --orange: #ff8a1f;
  --orange-light: #ffc077;
  --glass-line: rgba(255, 255, 255, 0.14);
  --font: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --s1-x: 0vw;
  --s1-y: 0vh;
  --s2-x: 0vw;
  --s2-y: 0vh;
  --s3-x: 0vw;
  --s3-y: 0vh;
}
* { box-sizing: border-box; }
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  background: var(--black);
  color: var(--white);
  font-family: var(--font);
}
body {
  min-height: 100vh;
  min-height: 100svh;
}
#root {
  min-height: 100vh;
  min-height: 100svh;
  background: var(--black);
}
.page {
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100vh;
  height: 100svh;
  padding: clamp(16px, 4vw, 40px);
  padding-bottom: clamp(12px, 2.2vw, 24px);
  isolation: isolate;
}
.sphere {
  position: fixed;
  z-index: 0;
  pointer-events: none;
  filter: blur(clamp(42px, 7vw, 110px));
  opacity: 0;
  will-change: transform, opacity, border-radius;
}
.sphere.one {
  width: clamp(240px, 38vw, 760px);
  height: clamp(240px, 38vw, 760px);
  top: -18%;
  left: -12%;
  background: radial-gradient(circle, rgba(255, 138, 31, 0.6), rgba(255, 138, 31, 0.2) 42%, transparent 70%);
  animation: sphere-appear 900ms ease both, lava-one 13s ease-in-out infinite;
}
.sphere.two {
  width: clamp(210px, 30vw, 620px);
  height: clamp(210px, 30vw, 620px);
  right: -16%;
  bottom: -10%;
  background: radial-gradient(circle, rgba(255, 95, 0, 0.5), rgba(151, 47, 0, 0.17) 48%, transparent 72%);
  animation: sphere-appear 1100ms ease 120ms both, lava-two 16s ease-in-out infinite;
}
.sphere.three {
  width: clamp(150px, 22vw, 440px);
  height: clamp(150px, 22vw, 440px);
  top: 34%;
  right: 42%;
  background: radial-gradient(circle, rgba(255, 192, 119, 0.36), rgba(255, 138, 31, 0.12) 46%, transparent 72%);
  animation: sphere-appear 1000ms ease 220ms both, lava-three 14s ease-in-out infinite;
}
@keyframes sphere-appear {
  from { opacity: 0; }
  to { opacity: 0.64; }
}
@keyframes lava-one {
  0% { border-radius: 48% 52% 58% 42% / 45% 54% 46% 55%; transform: translate3d(var(--s1-x), var(--s1-y), 0) scale(1); }
  25% { border-radius: 56% 44% 48% 52% / 50% 42% 58% 50%; transform: translate3d(calc(var(--s1-x) + 6vw), calc(var(--s1-y) + 3vh), 0) scale(1.08); }
  55% { border-radius: 42% 58% 52% 48% / 58% 48% 52% 42%; transform: translate3d(calc(var(--s1-x) + 2vw), calc(var(--s1-y) + 8vh), 0) scale(0.96); }
  78% { border-radius: 52% 48% 45% 55% / 44% 56% 44% 56%; transform: translate3d(calc(var(--s1-x) + 8vw), calc(var(--s1-y) + 1vh), 0) scale(1.04); }
  100% { border-radius: 48% 52% 58% 42% / 45% 54% 46% 55%; transform: translate3d(var(--s1-x), var(--s1-y), 0) scale(1); }
}
@keyframes lava-two {
  0% { border-radius: 55% 45% 45% 55% / 48% 57% 43% 52%; transform: translate3d(var(--s2-x), var(--s2-y), 0) scale(1); }
  30% { border-radius: 43% 57% 54% 46% / 55% 42% 58% 45%; transform: translate3d(calc(var(--s2-x) - 7vw), calc(var(--s2-y) - 4vh), 0) scale(0.94); }
  62% { border-radius: 58% 42% 47% 53% / 43% 52% 48% 57%; transform: translate3d(calc(var(--s2-x) - 3vw), calc(var(--s2-y) + 5vh), 0) scale(1.08); }
  84% { border-radius: 49% 51% 59% 41% / 52% 46% 54% 48%; transform: translate3d(calc(var(--s2-x) - 9vw), calc(var(--s2-y) + 1vh), 0) scale(1.02); }
  100% { border-radius: 55% 45% 45% 55% / 48% 57% 43% 52%; transform: translate3d(var(--s2-x), var(--s2-y), 0) scale(1); }
}
@keyframes lava-three {
  0% { border-radius: 45% 55% 50% 50% / 54% 46% 54% 46%; transform: translate3d(var(--s3-x), var(--s3-y), 0) scale(1); }
  28% { border-radius: 57% 43% 43% 57% / 45% 55% 45% 55%; transform: translate3d(calc(var(--s3-x) - 5vw), calc(var(--s3-y) + 5vh), 0) scale(1.12); }
  58% { border-radius: 44% 56% 60% 40% / 58% 42% 52% 48%; transform: translate3d(calc(var(--s3-x) + 4vw), calc(var(--s3-y) - 4vh), 0) scale(0.95); }
  82% { border-radius: 53% 47% 46% 54% / 44% 56% 44% 56%; transform: translate3d(calc(var(--s3-x) + 6vw), calc(var(--s3-y) + 3vh), 0) scale(1.05); }
  100% { border-radius: 45% 55% 50% 50% / 54% 46% 54% 46%; transform: translate3d(var(--s3-x), var(--s3-y), 0) scale(1); }
}
.page::before {
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 32%),
    radial-gradient(70% 56% at 50% 42%, rgba(255, 138, 31, 0.08), transparent 68%),
    #040506;
  content: "";
  pointer-events: none;
}
.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 3vh, 26px);
  min-width: 0;
  padding-bottom: clamp(12px, 3vh, 28px);
  text-align: center;
}
.badge,
.code,
h1,
p,
.reload,
.host {
  animation: fade-up 700ms cubic-bezier(0.23, 1, 0.32, 1) both;
}
.badge { animation-delay: 60ms; }
.code { animation-delay: 120ms; }
h1 { animation-delay: 180ms; }
p { animation-delay: 230ms; }
.reload { animation-delay: 280ms; }
.host { animation-delay: 360ms; }
@keyframes fade-up {
  from { opacity: 0; transform: translate3d(0, 14px, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-height: 34px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  padding: 8px 13px;
  background: rgba(255, 255, 255, 0.045);
  box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0 inset, rgba(0, 0, 0, 0.35) 0 18px 44px;
  backdrop-filter: blur(22px) saturate(150%);
  -webkit-backdrop-filter: blur(22px) saturate(150%);
  color: var(--muted);
  font-size: clamp(11px, 2.4vw, 13px);
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1;
  text-transform: uppercase;
}
.badge::before {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--orange);
  box-shadow: 0 0 22px rgba(255, 138, 31, 0.86);
  content: "";
}
.code {
  display: inline-block;
  max-width: 100%;
  margin: 0;
  padding: 0.08em 0.08em 0.12em;
  color: transparent;
  background: linear-gradient(180deg, #fff3e3 0%, var(--orange-light) 34%, var(--orange) 70%, #8a2d00 100%);
  background-clip: text;
  -webkit-background-clip: text;
  font-size: clamp(86px, 22vw, 220px);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1;
  text-shadow: 0 24px 70px rgba(255, 110, 0, 0.24);
  animation-name: fade-up, code-breathe;
  animation-duration: 700ms, 4.8s;
  animation-delay: 120ms, 900ms;
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1), ease-in-out;
  animation-fill-mode: both, none;
  animation-iteration-count: 1, infinite;
}
.code.word {
  font-size: clamp(52px, 11vw, 142px);
  letter-spacing: -0.055em;
}
@keyframes code-breathe {
  0%, 100% { filter: drop-shadow(0 18px 48px rgba(255, 110, 0, 0.12)); }
  50% { filter: drop-shadow(0 22px 62px rgba(255, 138, 31, 0.22)); }
}
h1 {
  max-width: 760px;
  margin: 0;
  font-size: clamp(28px, 6vw, 62px);
  font-weight: 650;
  letter-spacing: -0.045em;
  line-height: 0.98;
}
p {
  max-width: 620px;
  margin: 0;
  color: var(--muted);
  font-size: clamp(14px, 3.2vw, 18px);
  line-height: 1.55;
}
.reload {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  border: 1px solid rgba(255, 138, 31, 0.5);
  border-radius: 8px;
  padding: 11px 16px;
  background: rgba(255, 138, 31, 0.1);
  box-shadow: rgba(255, 255, 255, 0.12) 0 1px 0 inset, rgba(0, 0, 0, 0.35) 0 12px 34px;
  color: var(--white);
  font-size: 14px;
  font-weight: 560;
  line-height: 1;
  text-decoration: none;
  transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
  animation-name: fade-up, button-breathe;
  animation-duration: 700ms, 4.2s;
  animation-delay: 280ms, 1200ms;
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1), ease-in-out;
  animation-fill-mode: both, none;
  animation-iteration-count: 1, infinite;
}
@keyframes button-breathe {
  0%, 100% { box-shadow: rgba(255, 255, 255, 0.12) 0 1px 0 inset, rgba(0, 0, 0, 0.35) 0 12px 34px; }
  50% { box-shadow: rgba(255, 255, 255, 0.14) 0 1px 0 inset, rgba(255, 138, 31, 0.13) 0 0 22px, rgba(0, 0, 0, 0.35) 0 12px 34px; }
}
.reload:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 138, 31, 0.76);
  background: rgba(255, 138, 31, 0.16);
}
.reload:focus-visible {
  outline: 2px solid var(--orange);
  outline-offset: 4px;
}
.host-wrap {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding-bottom: env(safe-area-inset-bottom);
}
.host {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  max-width: 100%;
  border: 1px solid var(--glass-line);
  border-radius: 999px;
  padding: 8px 14px 8px 10px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.035)),
    rgba(255, 255, 255, 0.045);
  box-shadow:
    rgba(255, 255, 255, 0.12) 0 1px 0 inset,
    rgba(0, 0, 0, 0.36) 0 18px 44px;
  backdrop-filter: blur(24px) saturate(150%);
  -webkit-backdrop-filter: blur(24px) saturate(150%);
  color: var(--muted);
  font-size: clamp(12px, 2.8vw, 14px);
  line-height: 1;
  white-space: nowrap;
  transition: border-color 180ms ease, box-shadow 180ms ease, background 180ms ease;
}
.host:hover,
.host:focus-within {
  border-color: rgba(255, 138, 31, 0.32);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 138, 31, 0.055)),
    rgba(255, 255, 255, 0.055);
  box-shadow:
    rgba(255, 255, 255, 0.14) 0 1px 0 inset,
    rgba(255, 138, 31, 0.13) 0 0 0 1px,
    rgba(0, 0, 0, 0.4) 0 18px 44px;
}
.host a {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: inherit;
  font-weight: 560;
  text-decoration: none;
}
.host a:focus-visible {
  outline: none;
}
.host-logo {
  display: block;
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  filter: drop-shadow(0 0 14px rgba(255, 138, 31, 0.22));
}
.host-logo svg {
  display: block;
  width: 100%;
  height: 100%;
}
.host strong {
  color: var(--white);
  font-weight: 620;
}
@media (min-width: 2200px) and (min-height: 1100px) {
  .page { padding: clamp(34px, 2.4vw, 56px); }
  .content { gap: clamp(24px, 2.6vh, 34px); }
  .badge { min-height: 42px; padding: 10px 16px; font-size: 14px; }
  .badge::before { width: 10px; height: 10px; }
  .code { font-size: clamp(210px, 12vw, 300px); }
  .code.word { font-size: clamp(132px, 6.4vw, 190px); }
  h1 { max-width: 980px; font-size: clamp(58px, 3.4vw, 76px); }
  p { max-width: 760px; font-size: clamp(19px, 1.15vw, 24px); }
  .reload { min-height: 48px; padding: 14px 20px; font-size: 16px; }
  .host { min-height: 52px; padding: 8px 16px 8px 11px; font-size: 15px; }
  .host-logo { width: 40px; height: 40px; }
}
@media (max-height: 560px) {
  .page { padding-block: 12px; }
  .content { gap: 12px; padding-bottom: 8px; }
  .code { font-size: clamp(64px, 18vh, 104px); }
  .code.word { font-size: clamp(42px, 13vh, 76px); }
  h1 { font-size: clamp(24px, 8vh, 38px); }
  p { font-size: 14px; }
}
@media (max-height: 430px) {
  .page { padding-block: 10px; }
  .content { gap: 8px; padding-bottom: 6px; }
  .badge { min-height: 28px; padding: 7px 11px; font-size: 10px; }
  .code { font-size: clamp(52px, 20vh, 76px); }
  .code.word { font-size: clamp(34px, 14vh, 54px); }
  h1 { font-size: clamp(22px, 8vh, 30px); }
  p { max-width: 460px; font-size: 12px; line-height: 1.35; }
  .reload { min-height: 32px; padding: 8px 12px; font-size: 12px; }
  .host { min-height: 40px; padding: 6px 11px 6px 8px; font-size: 12px; }
  .host-logo { width: 28px; height: 28px; }
}
@media (max-width: 420px) {
  .page { padding-inline: 14px; }
  .reload { width: min(100%, 180px); }
}
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}`;

  const root = document.documentElement;
  const offset = (range) => `${((Math.random() * 2 - 1) * range).toFixed(2)}vw`;
  const vertical = (range) => `${((Math.random() * 2 - 1) * range).toFixed(2)}vh`;

  root.style.setProperty("--s1-x", offset(8));
  root.style.setProperty("--s1-y", vertical(6));
  root.style.setProperty("--s2-x", offset(9));
  root.style.setProperty("--s2-y", vertical(7));
  root.style.setProperty("--s3-x", offset(10));
  root.style.setProperty("--s3-y", vertical(8));

  const getLang = () => {
    const languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    return languages.some((value) => String(value).toLowerCase().startsWith("ru")) ? "ru" : "en";
  };

  const getPageKey = () => {
    const currentScript = document.currentScript;
    const scriptUrl = currentScript ? new URL(currentScript.src, window.location.href) : null;
    const scriptQuery = scriptUrl ? scriptUrl.search.slice(1).trim() : "";
    const pageQuery = window.location.search.slice(1).trim();
    const fileMatch = window.location.pathname.match(/([^/\\\\]+)\\.html$/);
    const fileKey = fileMatch ? fileMatch[1] : "";
    const candidate = scriptQuery || pageQuery || fileKey || "502";

    return pages[candidate] ? candidate : "502";
  };

  const setFavicon = () => {
    const href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`;
    const link = document.querySelector('link[rel="icon"]') || document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = href;
    document.head.append(link);
  };

  const injectStyle = () => {
    const styleElement = document.createElement("style");
    styleElement.textContent = style;
    document.head.append(styleElement);
  };

  const pageKey = getPageKey();
  const lang = getLang();
  const page = pages[pageKey];
  const labels = i18n[lang] || i18n.en;
  const codeClass = page.wordCode ? "code word" : "code";

  document.documentElement.lang = lang;
  document.title = page.title[lang] || page.title.en;
  setFavicon();
  injectStyle();

  const app = document.getElementById("root");

  if (!app) {
    return;
  }

  app.innerHTML = `
    <main class="page" aria-labelledby="title">
      <span class="sphere one" aria-hidden="true"></span>
      <span class="sphere two" aria-hidden="true"></span>
      <span class="sphere three" aria-hidden="true"></span>

      <section class="content">
        <div class="badge">${page.badge}</div>
        <p class="${codeClass}" aria-hidden="true">${page.code}</p>
        <h1 id="title">${page.heading[lang] || page.heading.en}</h1>
        <p>${page.message[lang] || page.message.en}</p>
        <a class="reload" href="">${labels.refresh}</a>
      </section>

      <footer class="host-wrap">
        <div class="host">
          <a href="https://reynard.cloud" target="_blank" rel="noopener noreferrer">
            <span>${labels.poweredBy}</span>
            <span class="host-logo">${logoSvg}</span>
            <strong>Reynard Cloud</strong>
          </a>
        </div>
      </footer>
    </main>
  `;
})();
