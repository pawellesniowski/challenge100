export enum Loaders {
  spinner,
  loadingDots,
}

interface Owner {
  firstname: string;
  lastname: string;
}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    private _completed: boolean,
    public owner: Owner
  ) {}

  get completed() {
    if (this.id == 1 && this._completed) {
      // uncomment to see the change detector on the dev tools
      //debugger;
    }
    return this._completed;
  }

  set completed(completed) {
    this._completed = completed;
  }
}
