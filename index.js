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

  const t = (en, ar, es, zh, ru, fr, de) => ({ en, ar, es, zh, ru, fr, de });
  const text = (value, lang) => (typeof value === "string" ? value : value[lang] || value.en);
  const makePage = ({ code, badge, heading, message, title, wordCode = false, variant = "error", showReload = true, showBadge = true }) => ({
    title,
    badge,
    code,
    heading,
    message,
    wordCode,
    variant,
    showReload,
    showBadge
  });

  const serviceUnavailable = t(
    "Service temporarily unavailable",
    "الخدمة غير متاحة مؤقتاً",
    "El servicio no está disponible por ahora",
    "服务暂时不可用",
    "Сервис временно недоступен",
    "Le service est temporairement indisponible",
    "Der Dienst ist vorübergehend nicht verfügbar"
  );

  const browserCheckPage = makePage({
    code: "",
    badge: "",
    title: t("Browser Check", "فحص المتصفح", "Comprobación del navegador", "浏览器检查", "Проверка браузера", "Vérification du navigateur", "Browserprüfung"),
    variant: "browser-check",
    showReload: false,
    showBadge: false,
    heading: t("Checking browser", "جارٍ فحص المتصفح", "Comprobando el navegador", "正在检查浏览器", "Проверяем браузер", "Vérification du navigateur", "Browser wird geprüft"),
    message: t(
      "Please wait, this will take a few seconds.",
      "يرجى الانتظار، سيستغرق ذلك بضع ثوانٍ.",
      "Espera un momento, esto tomará unos segundos.",
      "请稍候，这需要几秒钟。",
      "Пожалуйста, подождите, это займёт несколько секунд.",
      "Veuillez patienter, cela prendra quelques secondes.",
      "Bitte warte, das dauert ein paar Sekunden."
    )
  });

  const clientErrorPage = makePage({
    code: "ERROR",
    title: t("Error", "خطأ", "Error", "错误", "Ошибка", "Erreur", "Fehler"),
    badge: t("Error", "خطأ", "Error", "错误", "Ошибка", "Erreur", "Fehler"),
    heading: t("Something went wrong", "حدث خطأ ما", "Algo salió mal", "出现问题", "Что-то пошло не так", "Une erreur est survenue", "Etwas ist schiefgelaufen"),
    message: t(
      "Refresh the page or try again later.",
      "حدّث الصفحة أو حاول مرة أخرى لاحقاً.",
      "Actualiza la página o inténtalo de nuevo más tarde.",
      "请刷新页面，或稍后再试。",
      "Обновите страницу или попробуйте позже.",
      "Actualisez la page ou réessayez plus tard.",
      "Aktualisiere die Seite oder versuche es später erneut."
    ),
    wordCode: true
  });

  const pages = {
    "404": makePage({
      code: "404",
      title: t("404 Not Found", "404 غير موجود", "404 No encontrado", "404 未找到", "404 Not Found", "404 Introuvable", "404 Nicht gefunden"),
      badge: t("Not Found", "غير موجود", "No encontrado", "未找到", "Не найдено", "Introuvable", "Nicht gefunden"),
      heading: t("Page not found", "الصفحة غير موجودة", "Página no encontrada", "页面不存在", "Страница не найдена", "Page introuvable", "Seite nicht gefunden"),
      message: t(
        "The link may be outdated or the address may be incorrect.",
        "قد يكون الرابط قديماً أو العنوان مكتوباً بشكل غير صحيح.",
        "Puede que el enlace haya caducado o que la dirección esté mal escrita.",
        "链接可能已失效，或地址输入有误。",
        "Возможно, ссылка устарела или адрес введён с ошибкой.",
        "Le lien a peut-être changé ou l’adresse contient une erreur.",
        "Der Link ist möglicherweise veraltet oder die Adresse wurde falsch eingegeben."
      )
    }),
    "403": makePage({
      code: "403",
      title: t("403 Forbidden", "403 ممنوع", "403 Prohibido", "403 禁止访问", "403 Forbidden", "403 Accès interdit", "403 Zugriff verweigert"),
      badge: t("Access Blocked", "تم حظر الوصول", "Acceso bloqueado", "访问已被阻止", "Доступ заблокирован", "Accès bloqué", "Zugriff blockiert"),
      heading: t("Access blocked", "تم حظر الوصول", "Acceso bloqueado", "访问已被阻止", "Доступ заблокирован", "Accès bloqué", "Zugriff blockiert"),
      message: t(
        "This request cannot be processed from your connection.",
        "لا يمكن معالجة هذا الطلب من اتصالك.",
        "Esta solicitud no se puede procesar desde tu conexión.",
        "无法从你的连接处理此请求。",
        "Этот запрос не может быть обработан с вашего подключения.",
        "Cette requête ne peut pas être traitée depuis votre connexion.",
        "Diese Anfrage kann über deine Verbindung nicht verarbeitet werden."
      )
    }),
    error: clientErrorPage,
    "500": makePage({
      code: "500",
      title: t("500 Internal Server Error", "500 خطأ داخلي في الخادم", "500 Error interno del servidor", "500 服务器内部错误", "500 Internal Server Error", "500 Erreur interne du serveur", "500 Interner Serverfehler"),
      badge: t("Internal Server Error", "خطأ داخلي في الخادم", "Error interno del servidor", "服务器内部错误", "Ошибка сервера", "Erreur interne du serveur", "Interner Serverfehler"),
      heading: t("Internal server error", "حدث خطأ داخل الخادم", "Error interno del servidor", "服务器出现内部错误", "Внутренняя ошибка сервера", "Erreur interne du serveur", "Interner Serverfehler"),
      message: t(
        "Refresh the page or try again later.",
        "حدّث الصفحة أو حاول مرة أخرى لاحقاً.",
        "Actualiza la página o inténtalo de nuevo más tarde.",
        "请刷新页面，或稍后再试。",
        "Попробуйте обновить страницу или вернуться позже.",
        "Actualisez la page ou réessayez plus tard.",
        "Aktualisiere die Seite oder versuche es später erneut."
      )
    }),
    "502": makePage({
      code: "502",
      title: t("502 Bad Gateway", "502 بوابة غير صالحة", "502 Puerta de enlace incorrecta", "502 网关错误", "502 Bad Gateway", "502 Passerelle incorrecte", "502 Fehlerhaftes Gateway"),
      badge: t("Bad Gateway", "بوابة غير صالحة", "Puerta de enlace incorrecta", "网关错误", "Ошибка шлюза", "Passerelle incorrecte", "Fehlerhaftes Gateway"),
      heading: serviceUnavailable,
      message: t(
        "Refresh the page in a few seconds.",
        "حدّث الصفحة بعد بضع ثوانٍ.",
        "Actualiza la página dentro de unos segundos.",
        "请几秒钟后刷新页面。",
        "Попробуйте обновить страницу через несколько секунд.",
        "Actualisez la page dans quelques secondes.",
        "Aktualisiere die Seite in ein paar Sekunden."
      )
    }),
    "503": makePage({
      code: "503",
      title: t("503 Service Unavailable", "503 الخدمة غير متاحة", "503 Servicio no disponible", "503 服务不可用", "503 Service Unavailable", "503 Service indisponible", "503 Dienst nicht verfügbar"),
      badge: t("Service Unavailable", "الخدمة غير متاحة", "Servicio no disponible", "服务不可用", "Сервис недоступен", "Service indisponible", "Dienst nicht verfügbar"),
      heading: serviceUnavailable,
      message: t(
        "The service may be busy or under maintenance. Try again in a few minutes.",
        "قد تكون الخدمة مشغولة أو قيد الصيانة. حاول مرة أخرى بعد بضع دقائق.",
        "El servicio puede estar ocupado o en mantenimiento. Vuelve a intentarlo en unos minutos.",
        "服务可能正忙或正在维护。请几分钟后再试。",
        "Сейчас он может быть перегружен или на обслуживании. Попробуйте снова через пару минут.",
        "Le service est peut-être occupé ou en maintenance. Réessayez dans quelques minutes.",
        "Der Dienst ist möglicherweise ausgelastet oder wird gewartet. Versuche es in ein paar Minuten erneut."
      )
    }),
    "504": makePage({
      code: "504",
      title: t("504 Gateway Timeout", "504 انتهت مهلة البوابة", "504 Tiempo de espera agotado", "504 网关超时", "504 Gateway Timeout", "504 Délai de passerelle dépassé", "504 Gateway-Zeitüberschreitung"),
      badge: t("Gateway Timeout", "انتهت مهلة البوابة", "Tiempo de espera agotado", "网关超时", "Тайм-аут шлюза", "Délai dépassé", "Gateway-Zeitüberschreitung"),
      heading: t("Response took too long", "استغرقت الاستجابة وقتاً طويلاً", "La respuesta tardó demasiado", "响应时间过长", "Ответ занял слишком много времени", "La réponse a pris trop de temps", "Die Antwort hat zu lange gedauert"),
      message: t(
        "The service did not respond in time. Refresh the page in a few seconds.",
        "لم تستجب الخدمة في الوقت المناسب. حدّث الصفحة بعد بضع ثوانٍ.",
        "El servicio no respondió a tiempo. Actualiza la página dentro de unos segundos.",
        "服务未能及时响应。请几秒钟后刷新页面。",
        "Сервис не успел ответить. Попробуйте обновить страницу через несколько секунд.",
        "Le service n’a pas répondu à temps. Actualisez la page dans quelques secondes.",
        "Der Dienst hat nicht rechtzeitig geantwortet. Aktualisiere die Seite in ein paar Sekunden."
      )
    }),
    unbound: makePage({
      code: "NO LINK",
      badge: t("Address Not Linked", "العنوان غير مرتبط", "Dirección sin vincular", "地址未绑定", "Адрес не привязан", "Adresse non liée", "Adresse nicht verknüpft"),
      title: t("Address Not Linked", "العنوان غير مرتبط", "Dirección sin vincular", "地址未绑定", "Адрес не привязан", "Adresse non liée", "Adresse nicht verknüpft"),
      wordCode: true,
      heading: t("Address is not linked to a service", "هذا العنوان غير مرتبط بأي خدمة", "Esta dirección no está vinculada a ningún servicio", "此地址尚未绑定到任何服务", "Адрес не привязан к сервису", "Cette adresse n’est liée à aucun service", "Diese Adresse ist mit keinem Dienst verknüpft"),
      message: t(
        "DNS already points to Reynard Cloud, but this address has not been assigned to a service in the control panel.",
        "يشير DNS بالفعل إلى Reynard Cloud، لكن لم يتم اختيار خدمة لهذا العنوان في لوحة التحكم بعد.",
        "El DNS ya apunta a Reynard Cloud, pero esta dirección aún no se ha asignado a un servicio en el panel de control.",
        "DNS 已指向 Reynard Cloud，但此地址尚未在控制面板中分配到具体服务。",
        "DNS уже указывает на Reynard Cloud, но для этого адреса ещё не выбран сервис в панели управления.",
        "Le DNS pointe déjà vers Reynard Cloud, mais aucun service n’a encore été associé à cette adresse dans le panneau de contrôle.",
        "DNS zeigt bereits auf Reynard Cloud, aber diese Adresse wurde im Control Panel noch keinem Dienst zugewiesen."
      )
    }),
    waf: browserCheckPage,
    pow: browserCheckPage,
    "browser-check": browserCheckPage
  };

  const i18n = {
    en: {
      refresh: "Refresh page",
      poweredBy: "Powered by"
    },
    ar: {
      refresh: "تحديث الصفحة",
      poweredBy: "Powered by"
    },
    es: {
      refresh: "Actualizar página",
      poweredBy: "Powered by"
    },
    zh: {
      refresh: "刷新页面",
      poweredBy: "Powered by"
    },
    ru: {
      refresh: "Обновить страницу",
      poweredBy: "Powered by"
    },
    fr: {
      refresh: "Actualiser la page",
      poweredBy: "Powered by"
    },
    de: {
      refresh: "Seite aktualisieren",
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
  width: 100%;
  min-width: 0;
  padding-bottom: clamp(12px, 3vh, 28px);
  text-align: center;
}
.badge,
.code,
.check-visual,
h1,
p,
.reload,
.host {
  animation: fade-up 700ms cubic-bezier(0.23, 1, 0.32, 1) both;
}
.badge { animation-delay: 60ms; }
.code { animation-delay: 120ms; }
.check-visual { animation-delay: 120ms; }
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
.check-visual {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: auto;
  min-height: 24px;
  margin-bottom: clamp(2px, 0.8vh, 8px);
}
.check-dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--orange);
  box-shadow: 0 0 16px rgba(255, 138, 31, 0.42);
  opacity: 0.36;
  transform: scale(0.82);
  animation: dot-wait 1.35s ease-in-out infinite;
}
.check-dot:nth-child(2) {
  animation-delay: 160ms;
}
.check-dot:nth-child(3) {
  animation-delay: 320ms;
}
@keyframes dot-wait {
  0%, 100% { opacity: 0.32; transform: scale(0.78); }
  42% { opacity: 1; transform: scale(1); }
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
.page.browser-check h1 {
  max-width: 720px;
  font-size: clamp(26px, 5.4vw, 54px);
  letter-spacing: -0.035em;
}
.page.browser-check p {
  width: min(100%, 620px);
  max-width: calc(100vw - 48px);
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
  .check-visual { gap: 12px; min-height: 28px; }
  .check-dot { width: 9px; height: 9px; }
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
  .check-visual { min-height: 20px; margin-bottom: 0; }
  .code { font-size: clamp(64px, 18vh, 104px); }
  .code.word { font-size: clamp(42px, 13vh, 76px); }
  h1 { font-size: clamp(24px, 8vh, 38px); }
  p { font-size: 14px; }
}
@media (max-height: 430px) {
  .page { padding-block: 10px; }
  .content { gap: 8px; padding-bottom: 6px; }
  .badge { min-height: 28px; padding: 7px 11px; font-size: 10px; }
  .check-visual { min-height: 18px; }
  .check-dot { width: 7px; height: 7px; }
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
  .page.browser-check h1,
  .page.browser-check p {
    max-width: 320px;
  }
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
    const supported = new Set(["en", "ar", "es", "zh", "ru", "fr", "de"]);
    const languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    for (const value of languages) {
      const base = String(value || "").toLowerCase().split(/[-_]/)[0];
      if (supported.has(base)) {
        return base;
      }
    }
    return "en";
  };

  const getPageKey = () => {
    const currentScript = document.currentScript;
    const scriptUrl = currentScript ? new URL(currentScript.src, window.location.href) : null;
    const scriptQuery = scriptUrl ? scriptUrl.search.slice(1).trim() : "";
    const pageQuery = window.location.search.slice(1).trim();
    const fileMatch = window.location.pathname.match(/([^/\\]+)\.html$/);
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
  const pageClass = page.variant === "browser-check" ? "page browser-check" : "page";
  const mainVisual = page.variant === "browser-check"
    ? `
        <div class="check-visual" aria-hidden="true">
          <span class="check-dot"></span>
          <span class="check-dot"></span>
          <span class="check-dot"></span>
        </div>`
    : `<p class="${codeClass}" aria-hidden="true">${page.code}</p>`;
  const badge = page.showBadge
    ? `<div class="badge">${text(page.badge, lang)}</div>`
    : "";
  const reloadLink = page.showReload
    ? `<a class="reload" href="">${labels.refresh}</a>`
    : "";

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = text(page.title, lang);
  setFavicon();
  injectStyle();

  const app = document.getElementById("root");

  if (!app) {
    return;
  }

  app.innerHTML = `
    <main class="${pageClass}" aria-labelledby="title">
      <span class="sphere one" aria-hidden="true"></span>
      <span class="sphere two" aria-hidden="true"></span>
      <span class="sphere three" aria-hidden="true"></span>

      <section class="content">
        ${badge}
        ${mainVisual}
        <h1 id="title">${text(page.heading, lang)}</h1>
        <p>${text(page.message, lang)}</p>
        ${reloadLink}
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
