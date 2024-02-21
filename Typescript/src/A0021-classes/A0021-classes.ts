/* classes */

/* long way to write the constructor */
export class Company {
  // public -> can use outside the class
  public readonly name: string;
  // private -> can't use outside the class
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  getCollaborators() {
    this.collaborators.forEach((collab) => console.log(collab));
  }
}

/* short way to write the constructor */
export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly lastname: string,
  ) {}
}

const company1 = new Company('company1', '11.111.111/0001-11');

const collab1 = new Collaborator('name1', 'lastname1');
const collab2 = new Collaborator('name2', 'lastname2');
const collab3 = new Collaborator('name3', 'lastname3');

company1.addCollaborator(collab1);
company1.addCollaborator(collab2);
company1.addCollaborator(collab3);

console.log(company1.getCollaborators());
