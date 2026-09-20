document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    const input = document.getElementById('newsletter-email');
    const msg = document.getElementById('newsletter-msg');

    if (!form || !input || !msg) return;

    const EMAIL_RE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function setMessage(text, type) {
        msg.textContent = text;
        msg.className = 'subscribe-msg' + (type ? ' ' + type : '');
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = input.value.trim();

        if (!email) {
            setMessage('Please enter your email address.', 'error');
            input.focus();
            return;
        }

        if (!EMAIL_RE.test(email)) {
            setMessage('That email address doesn\u2019t look right.', 'error');
            input.focus();
            return;
        }

        // Placeholder for an actual newsletter API call.
        setMessage("You're on the list \u2014 welcome to the community.", 'success');
        form.reset();
    });

    input.addEventListener('input', () => {
        if (msg.classList.contains('error')) {
            setMessage('', '');
        }
    });
});