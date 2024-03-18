import { CustomerProtocol } from './interfaces/customer-protocol';

export class IndividualCustomer implements CustomerProtocol {
  firstname: string;
  lastname: string;
  cpf: string;
  cnpj: string;

  /*
   in this case, the customer does not need a cnpj, but it is required
   by the interface.
  */
  constructor(firstname: string, lastname: string, cpf: string, cnpj: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.cpf = cpf;
    this.cnpj = cnpj;
  }
}

export class EnterpriseCustomer {
  firstname: string;
  lastname: string;
  cpf: string;
  cnpj: string;

  constructor(firstname: string, lastname: string, cpf: string, cnpj: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.cpf = cpf;
    this.cnpj = cnpj;
  }
}
