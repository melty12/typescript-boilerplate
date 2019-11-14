import { TodoItemModel } from "./TodoItemModel";

export class TodoListModel {
  private items: any;
  private _listeners: Map<any, any>;
  constructor() {
    this._listeners = new Map();
    this.items = [];
  }

  /**
   * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録する
   * @param {string} type イベント名
   * @param {Function} listener イベントリスナー
   */
  addEventListener(type: string, listener: Function) {
    if (!this._listeners.has(type)) {
      this._listeners.set(type, new Set());
    }
    const listenerSet = this._listeners.get(type);
    listenerSet.add(listener);
  }

  getTodoItems() {
    return this.items;
  }

  /**
   * TodoList の状態が更新されたときに呼び出されるリスナー関数を登録する
   * @param {Function} listener
   */
  onChange(listener: Function) {
    this.addEventListener("change", listener);
  }

    /**
   * 指定したイベントをディスパッチする
   * @param {string} type イベント名
   */
  emit(type: string) {
    const listenerSet = this._listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach((listener: Function) => {
      listener.call(this);
    });
  }

  /**
   * 状態が変更されたときに呼ぶ。登録済みのリスナー関数を呼び出す
   */
  emitChange() {
    this.emit("change");
  }

  /**
   * TodoItem を追加する
   * @param {TodoItemModel} todoItem
   */
  addTodo(todoItem: TodoItemModel) {
    this.items.push(todoItem);
    this.emitChange();
  }
}
