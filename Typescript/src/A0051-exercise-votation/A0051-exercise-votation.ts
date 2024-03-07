type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    this.votations.forEach((votation) => {
      console.log(votation.details);
      votation.votationOptions.forEach((votationOption) => {
        console.log(votationOption.option, votationOption.numberOfVotes);
      });
    });
  }
}

const votation1 = new Votation('Favorite Programming Language :');
votation1.addVotationOption({ option: 'C++', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'JavaScript', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Typescript', numberOfVotes: 0 });
votation1.vote(0);
votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(3);
votation1.vote(2);
votation1.vote(2);
votation1.vote(3);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.showVotations();
