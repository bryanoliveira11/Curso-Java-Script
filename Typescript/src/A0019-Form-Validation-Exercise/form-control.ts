import { isEmail } from 'validator';

export default class RegisterFormControl {
  form: HTMLFormElement;
  SHOW_ERROR_MESSAGE: string;
  constructor(form: HTMLFormElement) {
    this.form = form;
    this.SHOW_ERROR_MESSAGE = 'show-error-message';
  }

  init(): void {
    this.events();
  }

  events(): void {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.hideErrorMessages(this.form);
      this.validate(this.form);
    });
  }

  showErrorMessage(input: HTMLInputElement, msg: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(
      '.error-message',
    ) as HTMLSpanElement;
    errorMessage.innerText = msg;
    formFields.classList.add(this.SHOW_ERROR_MESSAGE);
  }

  hideErrorMessages(form: HTMLFormElement): void {
    form
      .querySelectorAll(`.${this.SHOW_ERROR_MESSAGE}`)
      .forEach((item) => item.classList.remove(this.SHOW_ERROR_MESSAGE));
  }

  checkEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
      if (!input.value) {
        this.showErrorMessage(input, 'This Field must not be Empty.');
      }
    });
  }

  checkEmail(emailInput: HTMLInputElement): void {
    if (!isEmail(emailInput.value)) {
      this.showErrorMessage(emailInput, 'Invalid E-mail');
    }
  }

  checkEqualPasswords(
    password: HTMLInputElement,
    password2: HTMLInputElement,
  ): void {
    if (password.value !== password2.value) {
      this.showErrorMessage(password, 'Passwords must be Equal.');
      this.showErrorMessage(password2, 'Passwords must be Equal.');
    }
  }

  shouldSendForm(form: HTMLFormElement): boolean {
    let send = true;
    form
      .querySelectorAll(`.${this.SHOW_ERROR_MESSAGE}`)
      .forEach(() => (send = false));

    return send;
  }

  validate(form: HTMLFormElement) {
    const userInput = document.querySelector('.username') as HTMLInputElement;
    const emailInput = document.querySelector('.email') as HTMLInputElement;
    const passInput = document.querySelector('.password') as HTMLInputElement;
    const pass2Input = document.querySelector('.password2') as HTMLInputElement;

    this.checkEmptyFields(userInput, emailInput, passInput, pass2Input);
    this.checkEmail(emailInput);
    this.checkEqualPasswords(passInput, pass2Input);

    if (!this.shouldSendForm(form)) return;

    //form.submit();
    alert('form will be sent.');
  }
}
