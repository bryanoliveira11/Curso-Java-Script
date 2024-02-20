import RegisterFormControl from './form-control';

const registerForm = document.querySelector('.form') as HTMLFormElement;
const registerFormValidate = new RegisterFormControl(registerForm);
registerFormValidate.init();
