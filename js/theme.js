// Applies the theme chosen in Settings > Appearance on every page.
// Include as the first element inside <body> so the class is set before first paint.
(function () {
    var theme = 'default';
    try {
        theme = localStorage.getItem('theme') || 'default';
    } catch (e) {
        // Storage can be blocked (private mode, strict settings); fall back to default.
    }
    document.body.classList.toggle('light-theme', theme === 'light');
})();
