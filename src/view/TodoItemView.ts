import { TodoItemModel } from "../model/TodoItemModel";
import { element } from "../lib/html-util";

export class TodoItemView {
  /**
   * `todoItem`に対応するTodoアイテムのHTML要素を作成して返す
   * @param {TodoItemModel} todoItem
   * @returns {Element}
   */
  createElement(todoItem: TodoItemModel) {
    const todoItemElement: Element | null = element`<li>${todoItem.title}</li>`;
    return todoItemElement;
  }
}
