// lang-detect.js — zobrazí banner s nabídkou EN verze nečesky mluvícím návštěvníkům
// Spouštět pouze na české verzi (index.html)

(function () {
  var STORAGE_KEY = 'lang_preference';
  var stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return;

  var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  var isCzechOrSlovak = lang.startsWith('cs') || lang.startsWith('sk');
  if (isCzechOrSlovak) return;

  function showBanner() {
    var banner = document.createElement('div');
    banner.className = 'lang-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Language suggestion');
    banner.innerHTML =
      '<p>This website is also available in <strong>English</strong>.</p>' +
      '<div class="lang-banner__actions">' +
        '<a href="/en/" class="lang-banner__accept">Switch to English</a>' +
        '<button class="lang-banner__dismiss" type="button">Stay in Czech</button>' +
      '</div>';

    document.body.appendChild(banner);

    banner.querySelector('.lang-banner__accept').addEventListener('click', function () {
      localStorage.setItem(STORAGE_KEY, 'en');
    });

    banner.querySelector('.lang-banner__dismiss').addEventListener('click', function () {
      localStorage.setItem(STORAGE_KEY, 'cs');
      banner.remove();
    });
  }

  setTimeout(showBanner, 1500);
})();
