export class ToDo {
  public id: number;
  public title: string;
  public isDone: boolean;
  public createdAt: Date;

  constructor(id: number, title: string, isDone: boolean = false, createdAt: Date = new Date()) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
    this.createdAt = createdAt;
  }
}
