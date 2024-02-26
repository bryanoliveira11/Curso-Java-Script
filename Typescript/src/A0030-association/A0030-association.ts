/* class association */

export class Writer {
  /* tool is a association with Tool */
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  get tool(): Tool | null {
    if (!this._tool) return null;
    return this._tool;
  }

  set tool(tool: Tool) {
    this._tool = tool;
  }

  write() {
    if (this.tool === null) {
      console.log("Can't write without a tool.");
      return;
    }
    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  abstract write(): void;
}

export class Pen extends Tool {
  write() {
    console.log(`${this.name} is writing...`);
  }
}

export class Typewriter extends Tool {
  write() {
    console.log(`${this.name} is typing...`);
  }
}

const pen1 = new Pen('pen1');
pen1.write();

const twr1 = new Typewriter('twr1');
twr1.write();

const writer1 = new Writer('writer1');
writer1.write();
writer1.tool = pen1;
writer1.write();
writer1.tool = twr1;
writer1.write();
