/* ============================================================
   Rendering + interactions
   ============================================================ */
(function () {
  "use strict";
  var P = window.PORTFOLIO;
  var STORE_KEY = "stiwari.lang";

  /* pick a localized value: string OR {en,de} */
  function loc(v, lang) { return (v && typeof v === "object" && !Array.isArray(v)) ? v[lang] : v; }

  var ICONS = {
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z"/></svg>',
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 8.8 21.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7 0-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .3.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>'
  };
  var ARROW = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>';

  /* ---------- renderers ---------- */
  function renderSkills(lang) {
    var el = document.getElementById("skillsGrid");
    el.innerHTML = P.skills.map(function (s) {
      var items = loc(s.items, lang) || s.items;
      var chips = items.map(function (i) { return '<span class="chip">' + i + "</span>"; }).join("");
      return '<div class="skill-card"><h3>' + loc(s.cat, lang) + "</h3><div class=\"chips\">" + chips + "</div></div>";
    }).join("");
  }

  function renderProjects(lang) {
    var el = document.getElementById("projectsGrid");
    var linkTxt = lang === "de" ? "Auf GitHub ansehen" : "View on GitHub";
    el.innerHTML = P.projects.map(function (p) {
      var url = "https://github.com/" + P.github_user + "/" + p.repo;
      var badge = p.badge ? '<span class="card__badge">' + loc(p.badge, lang) + "</span>" : "";
      var tags = p.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("");
      return '<article class="card">' +
        '<a class="card__media" href="' + url + '" target="_blank" rel="noopener" aria-label="' + loc(p.title, lang) + '">' +
          badge + '<span class="card__year">' + p.year + "</span>" +
          '<img loading="lazy" src="' + p.img + '" alt="' + loc(p.title, lang) + '"></a>' +
        '<div class="card__body">' +
          '<h3 class="card__title">' + loc(p.title, lang) + "</h3>" +
          '<p class="card__role">' + loc(p.role, lang) + "</p>" +
          '<p class="card__desc">' + loc(p.desc, lang) + "</p>" +
          '<div class="card__tags">' + tags + "</div>" +
          '<a class="card__link" href="' + url + '" target="_blank" rel="noopener">' + linkTxt + " " + ARROW + "</a>" +
        "</div></article>";
    }).join("");
  }

  function renderTimeline(lang) {
    var el = document.getElementById("timeline");
    el.innerHTML = P.timeline.map(function (t) {
      var pts = (loc(t.points, lang) || []).map(function (p) { return "<li>" + p + "</li>"; }).join("");
      var meta = (t.meta || []).map(function (m) { return "<span>" + m + "</span>"; }).join("");
      return '<div class="tl-item" data-type="' + t.type + '">' +
        '<span class="tl-period mono">' + t.period + "</span>" +
        '<span class="tl-badge mono" data-k="' + t.type + '">' + loc(t.badge, lang) + "</span>" +
        '<h3 class="tl-title">' + loc(t.title, lang) + "</h3>" +
        '<p class="tl-org">' + loc(t.org, lang) + "</p>" +
        (pts ? '<ul class="tl-points">' + pts + "</ul>" : "") +
        (meta ? '<div class="tl-meta">' + meta + "</div>" : "") +
        "</div>";
    }).join("");
  }

  function renderContact() {
    var el = document.getElementById("contactLinks");
    el.innerHTML = P.contact.map(function (c) {
      var ext = c.href.indexOf("http") === 0;
      return '<a class="contact-card" href="' + c.href + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" +
        '<span class="ic">' + (ICONS[c.icon] || "") + "</span>" +
        '<span><span class="ck mono">' + c.key + '</span><br><span class="cv">' + c.value + "</span></span>" +
        "</a>";
    }).join("");
  }

  /* ---------- i18n apply ---------- */
  function applyI18n(lang) {
    var dict = P.ui[lang];
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (!(key in dict)) return;
      if (node.tagName === "META") node.setAttribute("content", dict[key]);
      else node.innerHTML = dict[key];
    });
    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
  }

  function setLang(lang) {
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    applyI18n(lang);
    renderSkills(lang);
    renderProjects(lang);
    renderTimeline(lang);
  }

  function initialLang() {
    var stored;
    try { stored = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (stored === "en" || stored === "de") return stored;
    return (navigator.language || "en").toLowerCase().indexOf("de") === 0 ? "de" : "en";
  }

  /* ---------- interactions ---------- */
  function initNav() {
    var nav = document.getElementById("nav");
    var links = document.getElementById("navLinks");
    var burger = document.getElementById("hamburger");

    window.addEventListener("scroll", function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 10);
    }, { passive: true });

    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });

    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    var navMap = {};
    links.querySelectorAll("a").forEach(function (a) { navMap[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.querySelectorAll("a").forEach(function (a) { a.classList.remove("is-current"); });
          var cur = navMap[e.target.id];
          if (cur) cur.classList.add("is-current");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("in-view"); }); return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in-view"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { obs.observe(e); });
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
    renderContact();
    setLang(initialLang());
    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
    initNav();
    initReveal();
  });
})();
