/* interfaces declaration merging */

interface PersonMerge {
  name: string;
}

/* merging */
interface PersonMerge {
  readonly lastname: string;
}

interface PersonMerge {
  readonly addresses: readonly string[];
}

interface PersonMerge {
  /* optional property - ? */
  readonly age?: number;
}

const p: PersonMerge = {
  name: 'name',
  lastname: 'lastname',
  addresses: ['address'],
};

console.log(p);
