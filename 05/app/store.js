import { observable, computed } from 'mobx';

// 数据保存在Store里面
// Store的属性分成两种：被观察的属性（@observable），和自动计算得到的属性@computed
class Store {
  @observable name = 'Bartek';
  @computed get decorated() {
    return `${this.name} is awesome!`;
  }
}

export default Store;
