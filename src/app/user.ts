export class User {
  public showDescription: boolean;
  constructor(public id: number, public name: string, public repos_url: string) {
    this.showDescription = false;
  }
}
