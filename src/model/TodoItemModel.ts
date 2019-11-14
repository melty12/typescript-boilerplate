let todoIdx = 0;

export class TodoItemModel {
  /**
   * @param {string} title Todo アイテムのタイトル
   * @param {boolean} completed Todo アイテムが完了済みならば true、そうでない場合は false
   */
  public id: number;
  public title: string;
  constructor(title: string) {
    this.id = todoIdx++;
    this.title = title;
  }
}
