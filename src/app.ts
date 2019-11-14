import { render } from "./lib/html-util";
import { TodoListModel } from "./model/TodoListModel";
import { TodoItemModel } from "./model/TodoItemModel";
import { TodoListView } from "./view/TodoListView";

export class App {
  private todoListView: TodoListView;
  private todoListModel: TodoListModel;

  constructor() {
    this.todoListView = new TodoListView();
    this.todoListModel = new TodoListModel();
  }

  /**
   * Todo を追加するときに呼ばれるリスナー関数
   * @param {string} title
   */
  handleAdd(title: string) {
    this.todoListModel.addTodo(new TodoItemModel(title));
  }

  mount() {
    const formElement: HTMLElement | null = document.querySelector("#js-form");
    const inputElement: HTMLInputElement | null = document.querySelector("#js-form-input");
    const containerElement: HTMLElement
     | null = document.querySelector("#js-todo-list");

    this.todoListModel.onChange(() => {
      const todoItems = this.todoListModel.getTodoItems();
      const todoListElement: Element | null = this.todoListView.createElement(todoItems);

      if (todoListElement !== null && containerElement !== null) {
        render(todoListElement, containerElement);
      }
    });

    if(formElement !== null && inputElement !== null) {
      formElement.addEventListener("submit", event => {
        event.preventDefault();
        this.handleAdd(inputElement.value);
        inputElement.value = "";
      });
    }
  }
}