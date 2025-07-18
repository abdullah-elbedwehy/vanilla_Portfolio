/**
 * Create contact form with real-time validation.
 * @returns {HTMLFormElement}
 */
export function createContactForm() {
    const form = document.createElement('form');
    form.innerHTML = `
        <label>
            Name
            <input type="text" name="name" required aria-required="true" />
            <span class="error" aria-live="polite"></span>
        </label>
        <label>
            Email
            <input type="email" name="email" required aria-required="true" />
            <span class="error" aria-live="polite"></span>
        </label>
        <label>
            Message
            <textarea name="message" required aria-required="true"></textarea>
            <span class="error" aria-live="polite"></span>
        </label>
        <button type="submit">Send</button>
    `;

    form.addEventListener('input', (e) => {
        const field = e.target;
        if (field.matches('input, textarea')) {
            validate(field);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        [...form.elements].forEach(el => el.matches('input, textarea') && validate(el));
        if (form.querySelectorAll('.error:empty').length === 3) {
            alert('Form submitted!');
            form.reset();
        }
    });

    function validate(input) {
        const error = input.parentElement.querySelector('.error');
        if (!input.checkValidity()) {
            error.textContent = input.validationMessage;
        } else {
            error.textContent = '';
        }
    }

    return form;
}
