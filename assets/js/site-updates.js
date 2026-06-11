/* Small post-content overrides for current portfolio assets. */
(function () {
  "use strict";
  var P = window.PORTFOLIO;
  if (!P) return;

  var bracket = (P.projects || []).find(function (project) {
    return project.repo === "parametric-bracket-generator";
  });
  if (bracket) {
    bracket.img = "https://raw.githubusercontent.com/Swarit786/parametric-bracket-generator/main/docs/sketch.jpg?v=20260611";
  }

  P.cvFiles = {
    en: "assets/cv/CV_Swarit_Tiwari_EN_2026.pdf?v=20260611",
    de: "assets/cv/Lebenslauf_Swarit_Tiwari_DE.pdf?v=20260611"
  };

  P.cvPages = {
    en: ["assets/cv/cv_en_2026_1.png?v=20260611"],
    de: ["assets/cv/cv_de_1.png?v=20260611"]
  };
})();
