import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  firstname: string;
  lastname: string;
  cpf: string;

  /*
   in this case, the customer does not need a cnpj, but it is required
   by the interface.
  */
  constructor(firstname: string, lastname: string, cpf: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.cpf = cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
