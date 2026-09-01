/* ============================================================
   NAT.IC — DATA APLIKACE
   ------------------------------------------------------------
   TADY upravujete články, kongres a profilový obrázek.
   Stačí změnit/přidat položky do příslušných polí níže.
   ============================================================ */

const siteData = {
  /* ==========================================================
     ZPRÁVY / ČLÁNKY
     ----------------------------------------------------------
     Každý článek má:
       id          = unikátní číslo nebo text
       date        = datum zobrazené na kartě
       title       = nadpis
       description = krátký popisek
       image       = URL obrázku
       pdf         = odkaz na PDF; může být i lokální soubor
       pdfLabel    = text tlačítka PDF
  ========================================================== */
  news: [
    {
      id: 3,
      date: "1. září 2026",
      title: "Nejnovější článek — ukázkový nadpis",
      description: "Toto je ukázkový článek. Nahraďte text vlastním obsahem a případně přidejte odkaz na PDF.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
      pdf: "pdf/nejnovejsi-clanek.pdf",
      pdfLabel: "Otevřít PDF"
    },
    {
      id: 2,
      date: "28. srpna 2026",
      title: "Druhá zpráva — ukázkový nadpis",
      description: "Stručný popis zprávy. Tady můžete uvést hlavní informaci, která se zobrazí návštěvníkovi ještě před otevřením dokumentu.",
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
      pdf: "pdf/druha-zprava.pdf",
      pdfLabel: "Otevřít PDF"
    },
    {
      id: 1,
      date: "20. srpna 2026",
      title: "První zpráva — ukázkový nadpis",
      description: "Starší zpráva pro demonstraci pořadí. Nejvyšší hodnota `id` není pro řazení povinná — níže lze použít datum.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
      pdf: "pdf/prvni-zprava.pdf",
      pdfLabel: "Otevřít PDF"
    }
  ],

  /* ==========================================================
     KONGRES
     ----------------------------------------------------------
     Stejnou logikou můžete přidávat hlasování, novely,
     změny zákonů nebo ústavy.
  ========================================================== */
  congress: [
    {
      id: 3,
      date: "1. září 2026",
      title: "Hlasování č. 03 — ukázkový návrh",
      description: "Zde stručně vysvětlete, co návrh mění, koho se týká a jaké bude mít praktické dopady.",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
      pdf: "pdf/hlasovani-03.pdf",
      pdfLabel: "Podklady PDF"
    },
    {
      id: 2,
      date: "26. srpna 2026",
      title: "Novela zákona — ukázkový návrh",
      description: "Krátké a srozumitelné shrnutí změny zákona. Vhodné pro přehledné vysvětlení veřejnosti.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
      pdf: "pdf/novela-zakona.pdf",
      pdfLabel: "Podklady PDF"
    },
    {
      id: 1,
      date: "18. srpna 2026",
      title: "Změna ústavy — ukázkový návrh",
      description: "Sem vložte jednoduchý popis toho, co se má v ústavě změnit a proč je návrh projednáván.",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1200&q=80",
      pdf: "pdf/zmena-ustavy.pdf",
      pdfLabel: "Podklady PDF"
    }
  ],

  /* ==========================================================
     O MNĚ — PROFILOVÝ OBRÁZEK
     ----------------------------------------------------------
     Sem vložte URL obrázku nebo cestu k lokálnímu souboru,
     např. "images/natalia.jpg".
  ========================================================== */
  profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85"
};

/* ============================================================
   TECHNICKÁ ČÁST — NORMÁLNĚ NEMUSÍTE MĚNIT
   ============================================================ */

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-button");
const latestArticleContainer = document.getElementById("latestArticleContainer");
const newsList = document.getElementById("newsList");
const congressList = document.getElementById("congressList");
const newsCount = document.getElementById("newsCount");
const congressCount = document.getElementById("congressCount");
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

function sortByNewest(items) {
  return [...items].sort((a, b) => b.id - a.id);
}

function articleCard(article, isLatest = false) {
  const safeTitle = escapeHtml(article.title);
  const safeDescription = escapeHtml(article.description);
  const safeDate = escapeHtml(article.date);
  const safeImage = escapeHtml(article.image);
  const safePdf = escapeHtml(article.pdf);
  const safePdfLabel = escapeHtml(article.pdfLabel || "Otevřít PDF");

  if (isLatest) {
    return `
      <article class="latest-card">
        <div class="latest-media">
          <img src="${safeImage}" alt="Ilustrační obrázek k článku: ${safeTitle}" loading="eager" onerror="this.style.display='none';">
        </div>
        <div class="latest-content">
          <div class="card-meta">${safeDate}</div>
          <h2 class="latest-title">${safeTitle}</h2>
          <p class="latest-description">${safeDescription}</p>
          <div class="card-actions">
            <a class="file-link" href="${safePdf}" target="_blank" rel="noopener">📄 ${safePdfLabel}</a>
            <button class="article-link" type="button" data-open-news="${escapeHtml(article.id)}">Zobrazit ve Zprávách</button>
          </div>
        </div>
      </article>
    `;
  }

  return `
    <article class="info-card">
      <div class="card-image-wrap">
        <img class="card-image" src="${safeImage}" alt="Ilustrační obrázek k článku: ${safeTitle}" loading="lazy" onerror="this.classList.add('fallback-hidden');">
        <div class="image-fallback" aria-hidden="true">NW</div>
      </div>
      <div class="card-body">
        <div class="card-meta">${safeDate}</div>
        <h2 class="card-title">${safeTitle}</h2>
        <p class="card-description">${safeDescription}</p>
        <div class="card-actions">
          <a class="file-link" href="${safePdf}" target="_blank" rel="noopener">📄 ${safePdfLabel}</a>
        </div>
      </div>
    </article>
  `;
}

function congressCard(item) {
  const safeTitle = escapeHtml(item.title);
  const safeDescription = escapeHtml(item.description);
  const safeDate = escapeHtml(item.date);
  const safeImage = escapeHtml(item.image);
  const safePdf = escapeHtml(item.pdf);
  const safePdfLabel = escapeHtml(item.pdfLabel || "Podklady PDF");

  return `
    <article class="info-card">
      <div class="card-image-wrap">
        <img class="card-image" src="${safeImage}" alt="Ilustrační obrázek: ${safeTitle}" loading="lazy" onerror="this.classList.add('fallback-hidden');">
        <div class="image-fallback" aria-hidden="true">§</div>
      </div>
      <div class="card-body">
        <div class="card-meta">${safeDate}</div>
        <h2 class="card-title">${safeTitle}</h2>
        <p class="card-description">${safeDescription}</p>
        <div class="card-actions">
          <a class="file-link" href="${safePdf}" target="_blank" rel="noopener">📄 ${safePdfLabel}</a>
        </div>
      </div>
    </article>
  `;
}

function renderNews() {
  const items = sortByNewest(siteData.news);
  newsCount.textContent = `${items.length} ${items.length === 1 ? "článek" : items.length < 5 ? "články" : "článků"}`;

  if (!items.length) {
    newsList.innerHTML = `<div class="empty-state">Zatím zde nejsou žádné zprávy.</div>`;
    return;
  }

  newsList.innerHTML = items.map(item => articleCard(item)).join("");
}

function renderCongress() {
  const items = sortByNewest(siteData.congress);
  congressCount.textContent = `${items.length} ${items.length === 1 ? "položka" : items.length < 5 ? "položky" : "položek"}`;

  if (!items.length) {
    congressList.innerHTML = `<div class="empty-state">Zatím zde nejsou žádné záznamy.</div>`;
    return;
  }

  congressList.innerHTML = items.map(congressCard).join("");
}

function renderLatest() {
  const items = sortByNewest(siteData.news);
  const latest = items[0];

  if (!latest) {
    latestArticleContainer.innerHTML = `<div class="empty-state">Zatím není vložen žádný článek.</div>`;
    return;
  }

  latestArticleContainer.innerHTML = articleCard(latest, true);
}

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

function showPage(pageName, updateUrl = true) {
  const allowedPages = ["home", "news", "congress", "about"];
  const target = allowedPages.includes(pageName) ? pageName : "home";

  pages.forEach(page => {
    const isTarget = page.id === `page-${target}`;
    page.hidden = !isTarget;
    page.classList.toggle("active-page", isTarget);
  });

  navButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.page === target);
  });

  if (updateUrl) {
    history.replaceState(null, "", `#${target}`);
  }

  window.scrollTo({ top: 0, behavior: "auto" });
}

function getPageFromHash() {
  const hash = window.location.hash.replace("#", "").trim().toLowerCase();
  return hash || "home";
}

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

navButtons.forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

document.addEventListener("click", event => {
  const trigger = event.target.closest("[data-open-news]");
  if (!trigger) return;

  showPage("news");
});

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  const nextTheme = isDark ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("natic-theme", nextTheme);
});

window.addEventListener("hashchange", () => {
  showPage(getPageFromHash(), false);
});

/* ============================================================
   START APLIKACE
   ============================================================ */

renderLatest();
renderNews();
renderCongress();
setupProfileImage();
initTheme();
showPage(getPageFromHash(), false);
