import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstname: string,
  lastname: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstname, lastname, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('Individual Customer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have firstname, lastname and cpf', () => {
    const sut = createIndividualCustomer('first', 'last', '111.111.111-11');
    expect(sut).toHaveProperty('firstname', 'first');
    expect(sut).toHaveProperty('lastname', 'last');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('first', 'last', '111.111.111-11');
    expect(sut.getName()).toBe('first last');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('Enterprise Customer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('name', 'XX.XXX.XXX/0001-XX');
    expect(sut).toHaveProperty('name', 'name');
    expect(sut).toHaveProperty('cnpj', 'XX.XXX.XXX/0001-XX');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('name', 'XX.XXX.XXX/0001-XX');
    expect(sut.getName()).toBe('name');
    expect(sut.getIDN()).toBe('XX.XXX.XXX/0001-XX');
  });
});
