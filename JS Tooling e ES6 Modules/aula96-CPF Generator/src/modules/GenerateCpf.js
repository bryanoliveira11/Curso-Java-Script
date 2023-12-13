import ValidateCpf from './ValidateCpf';

export default class GenerateCpf {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  format_cpf(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }

  generateNewCpf() {
    const noDigitCpf = this.rand();
    const digit1 = ValidateCpf.create_digit(noDigitCpf);
    const digit2 = ValidateCpf.create_digit(noDigitCpf + digit1);
    const newCpf = noDigitCpf + digit1 + digit2;
    return this.format_cpf(newCpf);
  }
}
