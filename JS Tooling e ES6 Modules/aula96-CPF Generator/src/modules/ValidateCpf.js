export default class ValidateCpf {
  constructor(cpf) {
      this.cpf = cpf;
      this.clean_cpf = this.cpf.replace(/\D+/g, '');
  }

  is_sequency() {
      return this.clean_cpf[0].repeat(this.clean_cpf.length) === this.clean_cpf;
  }

  is_valid() {
      if (typeof this.clean_cpf !== 'string') return false;
      if (this.clean_cpf.length !== 11) return false;
      if (this.is_sequency()) return false;

      const partial_cpf = this.clean_cpf.slice(0, -2);
      const digit1 = ValidateCpf.create_digit(partial_cpf);
      const digit2 = ValidateCpf.create_digit(partial_cpf + digit1);
      const new_cpf = partial_cpf + digit1 + digit2;

      return new_cpf === this.clean_cpf;
  }

  static create_digit(partial_cpf) {
      const partial_cpf_array = Array.from(partial_cpf);
      let counter = partial_cpf_array.length + 1;

      const total = partial_cpf_array.reduce((ac, val) => {
          ac += (counter * Number(val));
          counter --;
          return ac
      },0)

      const digit = 11 - (total % 11);
      return digit > 9 ? '0' : String(digit);
  }
}