import { element } from "../lib/html-util";
import { TodoItemView } from "./TodoItemView";
import { TodoListModel } from "../model/TodoListModel";
import { TodoItemModel } from "../model/TodoItemModel";

export class TodoListView {
  /**
   * `todoItems` に対応する Todo リストの HTML 要素を作成して返す
   * @param {TodoItemModel[]} todoItems TodoItemModel の配列
   * @returns {Element} TodoItemModel の配列に対応したリストの HTML 要素
   */
  createElement(todoItems: TodoListModel) {
    const todoListElement: Element | null = element`<ul />`;

    if(todoListElement !== null) {
      [{...todoItems}].forEach((todoItem: any, i) => {
        const todoItemView = new TodoItemView();
        const todoItemElement: Element | null = todoItemView.createElement(todoItem[i]);

        if(todoItemElement !== null) {
          todoListElement.appendChild(todoItemElement);
        }
      });
    }
    return todoListElement;
  }
}
