/* ============================================================
   NAT.IC — DATA WEBU
   ------------------------------------------------------------
   TADY upravujete obsah webu.

   Každý záznam obsahuje:
     id          = unikátní ID
     date        = datum
     title       = nadpis
     description = krátký popis na kartě
     content     = celý text článku (může obsahovat více odstavců)
     image       = URL obrázku nebo např. "images/clanek.jpg"

   PDF už zde NENÍ potřeba. Kliknutí na kartu otevře detail
   přímo na webu.
   ============================================================ */

const siteData = {

  /* ==========================================================
     ZPRÁVY
  ========================================================== */
  news: [
    {
      id: 3,
      date: "1. září 2026",
      title: "Nejnovější článek — ukázkový nadpis",
      description: "Toto je krátký popisek, který návštěvník uvidí v seznamu zpráv.",
      content: [
        "Toto je první odstavec celého článku. Sem napište samotný text zprávy, který se zobrazí po kliknutí na kartu.",
        "Tady může pokračovat druhý odstavec. Můžete tímto způsobem přidat libovolně dlouhý text a rozdělit jej do několika odstavců.",
        "Do článku můžete vložit také další informace, vysvětlení, stanovisko nebo oznámení."
      ],
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=85"
    },

    {
      id: 2,
      date: "28. srpna 2026",
      title: "Druhá zpráva — ukázkový nadpis",
      description: "Stručný popis zprávy, který se zobrazuje pouze jako náhled.",
      content: [
        "Tady je plný text druhé zprávy.",
        "Po kliknutí na kartu se návštěvník dostane na detail, kde uvidí celý obsah a velký obrázek."
      ],
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=85"
    },

    {
      id: 1,
      date: "10. března 2026",
      title: "ZZS bez vedení. Je to začátek změny, nebo začátek konce?",
      description: "Kongres San Andreas oficiálně odvolal ředitelku ZZS MUDr. Leu Santiago na základě její rezignace. Co stojí za jejím odchodem a ostrou kritikou z řad bývalého vedení?",
      content: [
        "<!-- ZDE VLOŽ LOGO (nahraď logo.png za název svého souboru) -->",
        "<div style='text-align: center; margin-bottom: 25px;'><img src='logo.png' alt='Red County News Logo' style='max-width: 200px; height: auto;'></div>",

        "<p>San Andreas se v těchto dnech dívá na další citlivou změnu ve vedení jedné z klíčových organizací. Kongres San Andreas officially odvolal ředitelku Zdravotnické záchranné služby <strong>MUDr. Leu Santiago</strong>, a to na základě její vlastní rezignace ze dne 9. března 2026. Současně bylo vyhlášeno výběrové řízení na nového ředitele či ředitelku ZZS, které potrvá do 16. března 2026.</p>",
        "<p>Dočasným řízením organizace byl pověřen <strong>JUDr. Ing. Carl Schmitz, CSc.</strong>, který má zajistit běžný chod služby do doby, než bude jmenováno nové vedení.</p>",
        
        "<!-- ZDE VLOŽ OBRÁZEK 1 -->",
        "<div style='margin: 20px 0; text-align: center;'><img src='obr1.jpg' alt='budova okresní nemocnice Montgomery' style='max-width: 100%; height: auto; border-radius: 12px;'><p style='font-size: 0.85rem; color: var(--text-soft); margin-top: 5px;'><em>obr. 1. budova okresní nemocnice Montgomery</em></p></div>",

        "<h3>Oficiální důvod je rezignace. Veřejná debata ale ukazuje hlubší problém</h3>",
        "<p>Bývalá ředitelka svůj odchod vysvětlila slovy: <em>„Neodcházím proto, že by se Zdravotnická záchranná služba pod mým vedením rozpadala, jak se vám zde někteří účelově snaží podsouvat, ale proto, že jsem po měsících intenzivní práce dospěla k závěru, že současný vnitřní stav instituce je natolik zatuhlý, přebujelý a dlouhodobě zanedbaný, že jej v krátkém čase nelze napravit pouhou vůlí jednoho člověka.“</em> Ve svém příspěvku zároveň odmítla interpretaci, podle níž by současné problémy vznikly až během jejího působení. Naopak tvrdí, že jde o důsledky dlouhodobě nastaveného systému, který byl léta přehlížen.</p>",
        "<p>Současně zdůraznila i to, že se během jejího působení podařilo otevřít témata, která byla dlouhodobě odsouvána. Jak sama uvedla: <em>„Za dobu mého působení se naopak podařilo znovu nastartovat zájem o práci v ZZS, zvýšit počet přihlášek a otevřít témata, která byla dlouhé měsíce a roky zametána pod koberec. Personální krize ani provozní problémy nevznikly 2.12.2025 a rozhodně nejsou výsledkem několika týdnů mého vedení. Jsou důsledkem systému, který se zde budoval dlouhodobě a který byl mnohými obhajován až do chvíle, kdy se na něj konečně začalo sahat.“</em></p>",

        "<h3>Ostrá kritika od bývalého zástupce</h3>",
        "<p>Zcela opačný pohled na situaci veřejně prezentoval bývalý zástupce ředitelky <strong>Richard William Morgan, M.D., MBA</strong>, který na svou funkci rezignoval ještě před samotným odchodem Santiago. Svou kritiku shrnul poměrně ostře: <em>„Důvodem je neudržitelný styl vedení, nečinnost a pasivita paní ředitelky. Instituce, která má být pilířem bezpečnosti našeho státu, je paralyzována vedením, které od svého jmenování dne 2.12.2025 neřeší reálné problémy. Místo personální krize v první linii a obecně klesajícímu zájmu o práci v ZZS se paní ředitelka měsíce věnuje pouze administrativním margináliím, jako jsou názvy hodností a i ty zůstaly dodnes nedotažené.“</em></p>",
        "<p>Morgan rovněž zpochybnil veřejně prezentované informace o stabilizaci a zvýšeném zájmu o práci v ZZS. Podle něj data ukazovala spíše nerovnoměrné zatížení, kdy velkou část práce táhl omezený počet lidí, zatímco zbytek organizace stagnoval.</p>",
        "<p>Veřejně se také pozastavil nad tím, že ani po několika měsících nebyly dotaženy některé vnitřní organizační změny, včetně úprav hodnostního systému. Jeho kritika byla formulována tvrdě a osobně, což následně vyvolalo další reakce.</p>",

        "<h3>Veřejnost i kolegové kritizovali hlavně formu sporu</h3>",
        "<p>Ačkoli si vyjádření obou stran získala pozornost, významná část reakcí veřejnosti i lidí z okolí státní správy směřovala spíše proti formě celé hádky než k samotnému obsahu. Pod příspěvky se objevovala kritika, že veřejné přestřelky mezi bývalým vedením ZZS působí nedůstojně a spíše připomínají osobní spor než profesionální debatu.</p>",
        "<p>Někteří komentující vyjadřovali zklamání nad tím, že se vysoce postavení členové zdravotnické služby přou na sociální síti místo toho, aby spor řešili interně. Jiní naopak upozorňovali, že i nepříjemná kritika může být legitimní, pokud poukazuje na skutečné problémy uvnitř organizace.</p>",
        "<p>Do debaty se zapojil i <strong>MUDr. James Mason</strong>, bývalý ředitel ZZS. Jeho vyjádření však nelze číst zcela odděleně od skutečnosti, je totiž snoubencem bývalé ředitelky. Mason ve svém příspěvku situaci spíše mírnil a uvedl, že realita bývá složitější než jednoduché hledání jednoho viníka. Současně zdůraznil, že i přes spory ve vedení zůstávají zdravotníci v nemocnici i v terénu připraveni pomáhat pacientům.</p>",

        "<!-- ZDE VLOŽ OBRÁZEK 2 -->",
        "<div style='margin: 20px 0; text-align: center;'><img src='obr2.jpg' alt='budova kongresu, San Fierro City Hall' style='max-width: 100%; height: auto; border-radius: 12px;'><p style='font-size: 0.85rem; color: var(--text-soft); margin-top: 5px;'><em>obr. 2. budova kongresu, San Fierro City Hall</em></p></div>",

        "<h3>Kongres hledá nové vedení</h3>",
        "<p>Nyní je situace v rukou Kongresu. Ten již vyhlásil výběrové řízení na pozici ředitele Zdravotnické záchranné služby. Zároveň připustil možnost prodloužení výběrového řízení v případě, že se nepřihlásí vhodný kandidát.</p>",
        "<p>Právě to bude v následujících dnech klíčové. Zdravotnická záchranná služba je jednou z nejdůležitějších institucí a dlouhodobé vakuum ve vedení by bylo pro její stabilitu rizikem. Na druhou stranu je zjevné, že nový ředitel nebo ředitelka nebude přebírat klidnou a jednotnou organizaci, ale sbor, kolem jehož vnitřního fungování se již teď vede otevřený spor.</p>",

        "<!-- PODPIS VPRAVO DOLE -->",
        "<p style='text-align: right; margin-top: 30px;'><em>Za <strong>Red County News</strong>, Natalia Walicki</em></p>"
      ],
      image: "obr1.jpg"
   }
  ],

  /* ==========================================================
     KONGRES
  ========================================================== */
  congress: [
    {
      id: 3,
      date: "1. září 2026",
      title: "Hlasování č. 03 — ukázkový návrh",
      description: "Stručně vysvětlete, co návrh mění, koho se týká a jaké má praktické dopady.",
      content: [
        "Toto je detail hlasování. Zde můžete přesně popsat předložený návrh a jeho hlavní body.",
        "Můžete například uvést, jaké ustanovení se mění, co se nově nařizuje a jaký bude dopad na občany nebo instituce.",
        "Na konci můžete přidat další vysvětlení nebo stanovisko."
      ],
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=85"
    },

    {
      id: 2,
      date: "26. srpna 2026",
      title: "Novela zákona — ukázkový návrh",
      description: "Krátké a srozumitelné shrnutí změny zákona.",
      content: [
        "V detailu novely můžete návštěvníkům vysvětlit původní stav a přesně popsat navrhovanou změnu.",
        "Další odstavec může obsahovat důsledky novely, důvod jejího přijetí nebo informace o hlasování."
      ],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=85"
    },

    {
      id: 1,
      date: "18. srpna 2026",
      title: "Změna ústavy — ukázkový návrh",
      description: "Jednoduché vysvětlení toho, co se má v ústavě změnit a proč.",
      content: [
        "Sem vložte úplné vysvětlení navrhované ústavní změny.",
        "Můžete ji rozdělit na několik odstavců tak, aby byla změna pro návštěvníka co nejčitelnější."
      ],
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1400&q=85"
    }
  ],


  /* ==========================================================
     O MNĚ — PROFILOVÝ OBRÁZEK
     ----------------------------------------------------------
     Např.: "images/natalia.jpg"
  ========================================================== */
  profileImage:
    "NW3.png"
};


/* ============================================================
   TECHNICKÁ ČÁST — NORMÁLNĚ NEMĚNIT
   ============================================================ */

const pageElements = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-button");
const latestArticleContainer = document.getElementById("latestArticleContainer");
const newsList = document.getElementById("newsList");
const congressList = document.getElementById("congressList");
const newsCount = document.getElementById("newsCount");
const congressCount = document.getElementById("congressCount");
const detailContainer = document.getElementById("detailContainer");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");
const aboutImage = document.getElementById("aboutImage");
const aboutImageFallback = document.getElementById("aboutImageFallback");


function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


// OPRAVA: Povolení HTML značek pro formátovaný obsah
function escapeMultilineContent(content) {
  return content
    .map(paragraph => {
      // Pokud odstavec již obsahuje HTML značky (jako <p>, <h3>, <div>), vloží se přímo
      if (paragraph.trim().startsWith("<")) {
        return paragraph;
      }
      // Obyčejný text zabalíme do odstavce <p>
      return `<p>${paragraph}</p>`;
    })
    .join("");
}


function sortByNewest(items) {
  return [...items].sort((a, b) => b.id - a.id);
}


function getCollection(section) {
  return section === "congress" ? siteData.congress : siteData.news;
}


/* ============================================================
   KARTA — ZPRÁVY / KONGRES
   ============================================================ */

function contentCard(item, section) {
  const safeTitle = escapeHtml(item.title);
  const safeDescription = escapeHtml(item.description);
  const safeDate = escapeHtml(item.date);
  const safeImage = escapeHtml(item.image);
  const safeSection = escapeHtml(section);
  const fallback = section === "congress" ? "§" : "NW";

  return `
    <article
      class="info-card clickable-card"
      tabindex="0"
      role="button"
      data-open-detail="${safeSection}:${escapeHtml(item.id)}"
      aria-label="Otevřít článek: ${safeTitle}"
    >
      <div class="card-image-wrap">
        <img
          class="card-image"
          src="${safeImage}"
          alt="Ilustrační obrázek: ${safeTitle}"
          loading="lazy"
          onerror="this.classList.add('fallback-hidden');"
        >
        <div class="image-fallback" aria-hidden="true">${fallback}</div>
      </div>

      <div class="card-body">
        <div class="card-meta">${safeDate}</div>
        <h2 class="card-title">${safeTitle}</h2>
        <p class="card-description">${safeDescription}</p>
        <div class="card-hint">Kliknutím otevřít celý článek →</div>
      </div>
    </article>
  `;
}


/* ============================================================
   DOMOV — NÁHLED NEJNOVĚJŠÍHO ČLÁNKU
   ============================================================ */

function latestCard(article) {
  const safeTitle = escapeHtml(article.title);
  const safeDescription = escapeHtml(article.description);
  const safeDate = escapeHtml(article.date);
  const safeImage = escapeHtml(article.image);

  return `
    <article
      class="latest-card clickable-card"
      tabindex="0"
      role="button"
      data-open-detail="news:${escapeHtml(article.id)}"
      aria-label="Otevřít nejnovější článek: ${safeTitle}"
    >
      <div class="latest-media">
        <img
          src="${safeImage}"
          alt="Ilustrační obrázek k článku: ${safeTitle}"
          loading="eager"
          onerror="this.style.display='none';"
        >
      </div>

      <div class="latest-content">
        <div class="card-meta">${safeDate}</div>
        <h2 class="latest-title">${safeTitle}</h2>
        <p class="latest-description">${safeDescription}</p>
        <div class="card-hint">Kliknutím otevřít celý článek →</div>
      </div>
    </article>
  `;
}


/* ============================================================
   DETAIL ČLÁNKU
   ============================================================ */

function renderDetail(section, id) {
  const items = getCollection(section);
  const item = items.find(entry => String(entry.id) === String(id));

  if (!item) {
    detailContainer.innerHTML = `
      <div class="empty-state">
        Článek nebyl nalezen.
      </div>
    `;
    return;
  }

  const safeTitle = escapeHtml(item.title);
  const safeDate = escapeHtml(item.date);
  const safeImage = escapeHtml(item.image);
  const label = section === "congress" ? "Kongres" : "Zprávy";
  const backPage = section === "congress" ? "congress" : "news";

  detailContainer.innerHTML = `
    <article class="detail-card">
      <button
        class="back-button"
        type="button"
        data-back-page="${backPage}"
      >
        ← Zpět na ${label}
      </button>

      <div class="detail-meta-row">
        <span class="page-badge">${label}</span>
        <span class="detail-date">${safeDate}</span>
      </div>

      <h1 id="detailTitle" class="detail-title">${safeTitle}</h1>

      <div class="detail-image-wrap">
        <img
          class="detail-image"
          src="${safeImage}"
          alt="Ilustrační obrázek k článku: ${safeTitle}"
          onerror="this.classList.add('fallback-hidden');"
        >
        <div class="image-fallback detail-fallback" aria-hidden="true">
          ${section === "congress" ? "§" : "NW"}
        </div>
      </div>

      <div class="detail-content">
        ${escapeMultilineContent(item.content)}
      </div>

      <button
        class="back-button back-button-bottom"
        type="button"
        data-back-page="${backPage}"
      >
        ← Zpět na ${label}
      </button>
    </article>
  `;
}


/* ============================================================
   ZPRÁVY
   ============================================================ */

function renderNews() {
  const items = sortByNewest(siteData.news);

  newsCount.textContent = `${items.length} ${
    items.length === 1
      ? "článek"
      : items.length < 5
        ? "články"
        : "článků"
  }`;

  if (!items.length) {
    newsList.innerHTML = `<div class="empty-state">Zatím zde nejsou žádné zprávy.</div>`;
    return;
  }

  newsList.innerHTML = items
    .map(item => contentCard(item, "news"))
    .join("");
}


/* ============================================================
   KONGRES
   ============================================================ */

function renderCongress() {
  const items = sortByNewest(siteData.congress);

  congressCount.textContent = `${items.length} ${
    items.length === 1
      ? "položka"
      : items.length < 5
        ? "položky"
        : "položek"
  }`;

  if (!items.length) {
    congressList.innerHTML = `<div class="empty-state">Zatím zde nejsou žádné záznamy.</div>`;
    return;
  }

  congressList.innerHTML = items
    .map(item => contentCard(item, "congress"))
    .join("");
}


/* ============================================================
   NEJNOVĚJŠÍ ČLÁNEK
   ============================================================ */

function renderLatest() {
  const items = sortByNewest(siteData.news);
  const latest = items[0];

  if (!latest) {
    latestArticleContainer.innerHTML = `<div class="empty-state">Zatím není vložen žádný článek.</div>`;
    return;
  }

  latestArticleContainer.innerHTML = latestCard(latest);
}


/* ============================================================
   PROFILOVÝ OBRÁZEK
   ============================================================ */

function setupProfileImage() {
  if (!siteData.profileImage) {
    aboutImage.style.display = "none";
    aboutImageFallback.style.display = "grid";
    return;
  }

  aboutImage.src = siteData.profileImage;

  aboutImage.addEventListener("error", () => {
    aboutImage.style.display = "none";
    aboutImageFallback.style.display = "grid";
  });

  aboutImageFallback.style.display = "none";
}


/* ============================================================
   PŘEPÍNÁNÍ HLAVNÍCH STRÁNEK
   ============================================================ */

function showPage(pageName, updateUrl = true) {
  const allowedPages = ["home", "news", "congress", "about", "detail"];
  const target = allowedPages.includes(pageName) ? pageName : "home";

  pageElements.forEach(page => {
    const isTarget = page.id === `page-${target}`;
    page.hidden = !isTarget;
    page.classList.toggle("active-page", isTarget);
  });

  let activeNavPage = target;

  if (target === "detail") {
    const state = parseDetailHash();
    activeNavPage = state ? state.section : "news";
  }

  navButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.page === activeNavPage);
  });

  if (updateUrl) {
    history.replaceState(null, "", `#${target}`);
  }

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
}


/* ============================================================
   HASH / DETAIL ROUTING
   ============================================================ */

function parseDetailHash() {
  const hash = window.location.hash
    .replace("#", "")
    .trim()
    .toLowerCase();

  const match = hash.match(/^(news|congress)-(\d+)$/);

  if (!match) {
    return null;
  }

  return {
    section: match[1],
    id: match[2]
  };
}


function openDetail(section, id) {
  renderDetail(section, id);

  history.replaceState(
    null,
    "",
    `#${section}-${id}`
  );

  showPage("detail", false);
}


function handleCurrentHash() {
  const detailState = parseDetailHash();

  if (detailState) {
    renderDetail(detailState.section, detailState.id);
    showPage("detail", false);
    return;
  }

  const hash = window.location.hash
    .replace("#", "")
    .trim()
    .toLowerCase();

  showPage(hash || "home", false);
}


/* ============================================================
   DARK / LIGHT MODE
   ============================================================ */

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeLabel.textContent = isDark ? "Světlý režim" : "Tmavý režim";
}


function initTheme() {
  const savedTheme = localStorage.getItem("natic-theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
    return;
  }

  applyTheme("light");
}


/* ============================================================
   EVENT LISTENERY
   ============================================================ */

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});


document.addEventListener("click", event => {
  const detailTrigger = event.target.closest("[data-open-detail]");

  if (detailTrigger) {
    const [section, id] = detailTrigger.dataset.openDetail.split(":");
    openDetail(section, id);
    return;
  }

  const backTrigger = event.target.closest("[data-back-page]");

  if (backTrigger) {
    showPage(backTrigger.dataset.backPage);
  }
});


document.addEventListener("keydown", event => {
  const card = event.target.closest("[data-open-detail]");

  if (!card) {
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    const [section, id] = card.dataset.openDetail.split(":");
    openDetail(section, id);
  }
});


themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  applyTheme(nextTheme);
  localStorage.setItem("natic-theme", nextTheme);
});


window.addEventListener("hashchange", handleCurrentHash);


/* ============================================================
   START APLIKACE
   ============================================================ */

renderLatest();
renderNews();
renderCongress();
setupProfileImage();
initTheme();
handleCurrentHash();
