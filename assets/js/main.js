/* ============================================================
   Rendering + interactions
   ============================================================ */
(function () {
  "use strict";
  var P = window.PORTFOLIO;
  var STORE_KEY = "stiwari.lang";
  var CURRENT_LANG = "en";

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
    var dict = P.ui[lang];
    el.innerHTML = P.projects.map(function (p) {
      var url = "https://github.com/" + P.github_user + "/" + p.repo;
      var title = loc(p.title, lang);
      var badge = p.badge ? '<span class="card__badge">' + loc(p.badge, lang) + "</span>" : "";
      var tags = p.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("");
      var data = 'data-repo="' + p.repo + '" data-title="' + title.replace(/"/g, "&quot;") + '"';
      return '<article class="card">' +
        '<button class="card__media" ' + data + ' aria-label="' + title + '">' +
          badge + '<span class="card__year">' + p.year + "</span>" +
          '<img loading="lazy" src="' + p.img + '" alt="' + title + '"></button>' +
        '<div class="card__body">' +
          '<h3 class="card__title">' + title + "</h3>" +
          '<p class="card__role">' + loc(p.role, lang) + "</p>" +
          '<p class="card__desc">' + loc(p.desc, lang) + "</p>" +
          '<div class="card__tags">' + tags + "</div>" +
          '<div class="card__actions">' +
            '<button class="card__btn" ' + data + ' type="button">' + dict["project.details"] + "</button>" +
            '<a class="card__gh" href="' + url + '" target="_blank" rel="noopener">' + dict["project.github"] + " " + ARROW + "</a>" +
          "</div>" +
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
    CURRENT_LANG = lang;
    applyI18n(lang);
    renderSkills(lang);
    renderProjects(lang);
    renderTimeline(lang);
    // CV button
    var cvBtn = document.getElementById("cvBtn");
    var cvLabel = document.getElementById("cvBtnLabel");
    if (cvBtn) cvBtn.setAttribute("href", P.cvFiles[lang]);
    if (cvLabel) cvLabel.textContent = P.ui[lang]["cv.label"];
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

  /* ---------- README modal ---------- */
  var libsPromise = null;
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src; s.onload = resolve; s.onerror = function () { reject(new Error("load " + src)); };
      document.head.appendChild(s);
    });
  }
  function loadLibs() {
    if (libsPromise) return libsPromise;
    libsPromise = loadScript("https://cdn.jsdelivr.net/npm/marked/marked.min.js")
      .then(function () { return loadScript("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"); })
      .then(function () { if (window.mermaid) window.mermaid.initialize({ startOnLoad: false, theme: "default" }); })
      .catch(function (e) { libsPromise = null; throw e; });
    return libsPromise;
  }

  function fixRelativeImages(container, base) {
    container.querySelectorAll("img").forEach(function (img) {
      var src = img.getAttribute("src") || "";
      if (!/^https?:|^data:/.test(src)) img.setAttribute("src", base + src.replace(/^\.?\//, ""));
      img.setAttribute("loading", "lazy");
    });
  }
  function renderMermaid(container) {
    if (!window.mermaid) return;
    var blocks = container.querySelectorAll("code.language-mermaid");
    var nodes = [];
    blocks.forEach(function (code) {
      var div = document.createElement("div");
      div.className = "mermaid";
      div.textContent = code.textContent;
      var pre = code.closest("pre") || code;
      pre.parentNode.replaceChild(div, pre);
      nodes.push(div);
    });
    if (nodes.length) { try { window.mermaid.run({ nodes: nodes }); } catch (e) {} }
  }

  function openModal(repo, title) {
    var modal = document.getElementById("readmeModal");
    var body = document.getElementById("modalBody");
    var dict = P.ui[CURRENT_LANG];
    var ghUrl = "https://github.com/" + P.github_user + "/" + repo;
    var rawBase = "https://raw.githubusercontent.com/" + P.github_user + "/" + repo + "/main/";

    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalGh").setAttribute("href", ghUrl);
    body.innerHTML = '<p class="modal__status">' + dict["modal.loading"] + "</p>";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    function fail() {
      body.innerHTML = '<p class="modal__status">' + dict["modal.error"] +
        ' <a href="' + ghUrl + '" target="_blank" rel="noopener">' + dict["modal.errorLink"] + "</a></p>";
    }

    Promise.all([
      loadLibs(),
      fetch(rawBase + "README.md").then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
    ]).then(function (res) {
      var md = res[1];
      body.innerHTML = window.marked.parse(md);
      fixRelativeImages(body, rawBase);
      renderMermaid(body);
      body.scrollTop = 0;
    }).catch(fail);
  }

  function closeModal() {
    var modal = document.getElementById("readmeModal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initModal() {
    var grid = document.getElementById("projectsGrid");
    grid.addEventListener("click", function (e) {
      var t = e.target.closest("[data-repo]");
      if (t) { e.preventDefault(); openModal(t.getAttribute("data-repo"), t.getAttribute("data-title")); }
    });
    document.getElementById("readmeModal").addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close")) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
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
    initModal();
  });
})();
