class ValidateForm {
  constructor() {
    this.form = document.querySelector('.formulario');
    this.events();
  }

  events() {
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e);
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.isValid();
    const validPasswords = this.isPasswordsValid();
    if (isValid && validPasswords) this.form.submit();
  }

  isPasswordsValid() {
    let valid = true;

    const password = this.form.querySelector('.senha');
    const password2 = this.form.querySelector('.repetir-senha');

    if (password.value != password2.value) {
      this.createFormError(password, `Passwords Are Different.`);
      this.createFormError(password2, `Passwords Are Different.`);
      valid = false;
    }

    if (password.value.length < 6 || password.value.length > 12) {
      this.createFormError(password, `Password Must Have Between 6 and 12 Chars.`);
      valid = false;
    }

    return valid;
  }

  isValid() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll('.validar')) {
      const label = field.previousElementSibling.innerText;

      if (!field.value) {
        this.createFormError(field, `Field "${label}" Must not be Empty.`);
        valid = false;
      }

      if (field.classList.contains('cpf')) {
        if (!this.validateCPF(field)) valid = false;
      }

      if (field.classList.contains('usuario')) {
        if (!this.validateUser(field)) valid = false;
      }
    }
    return valid;
  }

  validateCPF(field) {
    const cpf = new ValidateCpf(field.value);

    if (!cpf.is_valid()) {
      field.value = null;
      this.createFormError(field, `Invalid CPF.`);
      return false;
    }
    return true;
  }

  validateUser(field) {
    const user = field.value;
    let valid = true;

    if (user.length < 3 || user.length > 12) {
      this.createFormError(field, `User Must Have Between 3 and 12 Chars.`);
      valid = false;
    }
    
    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createFormError(field, `User Must Have Only Letters and Numbers.`);
      valid = false;
    }

    return valid;
  }

  createFormError(field, message) {
    const div = document.createElement('div');
    div.innerHTML = '&#x2022; ' + message;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div);
  }
}

const validate = new ValidateForm();