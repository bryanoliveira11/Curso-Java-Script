function CpfValidator(cpf) {
    Object.defineProperty(this, 'cleanCpf', {
        enumerable: true,
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    });
}

CpfValidator.prototype.is_sequency = function () {
    return this.cleanCpf[0].repeat(this.cleanCpf.length) === this.cleanCpf;
}

CpfValidator.prototype.is_valid = function () {
    if (typeof this.cleanCpf === 'undefined') return false;
    if (this.cleanCpf.length !== 11) return false;
    if (this.is_sequency()) return false;

    const partialCpf = this.cleanCpf.slice(0, -2);
    const digit1 = this.createDigit(partialCpf);
    const digit2 = this.createDigit(partialCpf + digit1);

    const new_Cpf = partialCpf + digit1 + digit2;

    return new_Cpf === this.cleanCpf;
}

CpfValidator.prototype.createDigit = function (partialCpf) {
    const cpfArray = Array.from(partialCpf);
    let regressive = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, val) => {
        ac += (regressive * Number(val));
        regressive--;
        return ac;
    }, 0);

    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
}

const cpf1 = new CpfValidator('070.987.720-03');
console.log(cpf1.is_valid());
const cpf2 = new CpfValidator('111-111-111-11');
console.log(cpf2.is_valid());
