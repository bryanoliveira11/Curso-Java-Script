/* abstract class */
export abstract class Character {
  /* abstract attribute */
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected atk: number,
    protected health: number,
  ) {}

  atack(character: Character): void {
    this.shout();
    character.loseHealth(this.atk);
  }

  loseHealth(atkPower: number): void {
    this.health -= atkPower;
    console.log(
      `${this.emoji} ${this.name} - has now ${this.health} of health`,
    );
  }

  /*
   abstract method
   this method needs to be implemented by the subclasses
   */
  abstract shout(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  shout() {
    console.log(`${this.emoji} - AAAAAAAAAAAA`);
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  shout() {
    console.log(`${this.emoji} - BBBBBBBBBBBBBBBB`);
  }
}

const warrior = new Warrior('warrior', 100, 1000);
const monster = new Monster('monster', 87, 1000);

warrior.atack(monster);
warrior.atack(monster);
warrior.atack(monster);
monster.atack(warrior);
