/* protected */

export class Company {
  readonly name: string;

  /* protected does the same thing as private but it can be accessed on sub classes */
  protected readonly collaborators: Collaborator[] = [];

  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  showCollaborators() {
    this.collaborators.forEach((collab) => console.log(collab));
  }

  getCollabs(): Collaborator[] {
    return this.collaborators;
  }

  getName(): string {
    return this.name;
  }
}

export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly lastname: string,
  ) {}
}

export class SomeCompany extends Company {
  constructor() {
    super('some company', '11.111.111/0001-11');
  }

  popCollaborator(): Collaborator | null {
    // this.collaborators can be used in sub classes - protected
    const collaborators = this.collaborators.pop();

    if (!collaborators) {
      return null;
    }

    return collaborators;
  }
}

const collab1 = new Collaborator('name1', 'lastname1');
const collab2 = new Collaborator('name2', 'lastname2');
const collab3 = new Collaborator('name3', 'lastname3');

const c1 = new SomeCompany();

c1.addCollaborator(collab1);
c1.addCollaborator(collab2);
c1.addCollaborator(collab3);

console.log(c1.showCollaborators());
const collabRemoved = c1.popCollaborator();
console.log(collabRemoved);
