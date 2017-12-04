import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

import Store from './store';

// 整个App类都是一个“观察者”，观察store的变化，只要一有变化，立刻重新渲染

@observer
class App extends React.Component {
  render() {
    return (
      <div className="index">
        <p>{this.props.store.decorated}</p>
        <input
          defaultValue={this.props.store.name}
          onChange={(event) => this.props.store.name = event.currentTarget.value}
        />
      </div>
    );
  }
}

const store = new Store();

ReactDOM.render(
  <App store={store} />,
  document.body.appendChild(document.createElement('div'))
);
