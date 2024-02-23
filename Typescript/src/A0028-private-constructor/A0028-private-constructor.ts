/* private constructor */

/* Singleton - GoF - create only one instance of the class */
export class Database {
  private static database: Database;

  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`connecting to database: ${this.host}, ${this.user}`);
  }

  /* this will return an existing instance or create a new one if there's none */
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;

    Database.database = new Database(host, user, password);

    return Database.database;
  }
}

// instance one -> creates a instance of the class
const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

// instance one -> uses the same instance previously created
const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

console.log(db1 === db2); // -> true
