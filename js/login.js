document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('toggle-password');
    const passwordIcon = togglePasswordBtn.querySelector('i');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const forgotPasswordBtn = document.getElementById('forgot-password-btn');
    const signupBtn = document.getElementById('signup-btn');
    const statusBox = document.getElementById('form-status');

    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const STATUS_ICONS = {
        info: 'fa-circle-info',
        error: 'fa-circle-exclamation',
        success: 'fa-circle-check',
    };

    function showStatus(message, type = 'info') {
        statusBox.className = `form-status is-${type}`;
        statusBox.replaceChildren();
        const icon = document.createElement('i');
        icon.className = `fa-solid ${STATUS_ICONS[type]}`;
        icon.setAttribute('aria-hidden', 'true');
        const text = document.createElement('span');
        text.textContent = message;
        statusBox.append(icon, text);
        statusBox.hidden = false;
    }

    function clearStatus() {
        statusBox.hidden = true;
    }

    function setFieldError(input, errorEl, message) {
        errorEl.textContent = message;
        input.classList.toggle('invalid', Boolean(message));
        input.setAttribute('aria-invalid', message ? 'true' : 'false');
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        if (!email) {
            setFieldError(emailInput, emailError, 'Please enter your email address');
            return false;
        }
        if (!EMAIL_RE.test(email)) {
            setFieldError(emailInput, emailError, 'That email address doesn’t look right');
            return false;
        }
        setFieldError(emailInput, emailError, '');
        return true;
    }

    function validatePassword() {
        if (passwordInput.value.length < 1) {
            setFieldError(passwordInput, passwordError, 'Please enter your password');
            return false;
        }
        setFieldError(passwordInput, passwordError, '');
        return true;
    }

    // Show/hide password
    togglePasswordBtn.addEventListener('click', () => {
        const reveal = passwordInput.type === 'password';
        passwordInput.type = reveal ? 'text' : 'password';
        passwordIcon.classList.toggle('fa-eye', !reveal);
        passwordIcon.classList.toggle('fa-eye-slash', reveal);
        togglePasswordBtn.setAttribute('aria-label', reveal ? 'Hide password' : 'Show password');
    });

    // Validate when leaving a field; once a field shows an error, re-check live so it clears as soon as it's fixed
    emailInput.addEventListener('input', () => {
        emailInput.value = emailInput.value.replace(/\s+/g, '');
        if (emailInput.classList.contains('invalid')) validateEmail();
    });
    emailInput.addEventListener('blur', () => {
        if (emailInput.value) validateEmail();
    });

    passwordInput.addEventListener('input', () => {
        passwordInput.value = passwordInput.value.replace(/\s+/g, '');
        if (passwordInput.classList.contains('invalid')) validatePassword();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearStatus();

        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (!isEmailValid) return emailInput.focus();
        if (!isPasswordValid) return passwordInput.focus();

        localStorage.setItem('currentUser', JSON.stringify({
            id: 'user_' + Date.now(),
            email: emailInput.value,
        }));

        window.location.href = '/profile-setup';
    });

    forgotPasswordBtn.addEventListener('click', () => {
        if (!validateEmail()) {
            emailInput.focus();
            return;
        }
        showStatus(`If an account exists for ${emailInput.value}, a password reset link will be sent.`, 'info');
    });

    [['google-btn', 'Google'], ['github-btn', 'GitHub'], ['apple-btn', 'Apple']].forEach(([cls, name]) => {
        document.querySelector(`.${cls}`).addEventListener('click', () => {
            showStatus(`${name} login isn’t available yet. Please use your email and password.`, 'info');
        });
    });

    signupBtn.addEventListener('click', () => {
        window.location.href = '/signup';
    });
});