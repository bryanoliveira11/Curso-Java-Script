/* polymorphic this */

export class Calculator {
  constructor(public number: number) {}

  /* returning this */
  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }

  mul(n: number): this {
    this.number *= n;
    return this;
  }
}

class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calc = new SubCalculator(10);
/* chaining methods because of the this return */
calc.add(10).mul(2).div(2).sub(10).pow(2); // -> 10 + 10 * 2 / 2 - 10 ** 2 = 100
console.log(calc);

/* Builder - GoF */
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Sending data from ${this.method} to ${this.url}`);
  }
}

const request = new RequestBuilder();
/* chaining methods */
request.setUrl('http://www.google.com').setMethod('post').send();
