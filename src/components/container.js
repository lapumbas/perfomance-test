import React from 'react';

import List from './list';

export default class Container extends React.Component {
  state = {
    list: []
  };

  componentWillMount() {
    const list = [];
    for (let i = 0; i < 1000; i++) {
      list.push(i);
    }
    this.setState({ list });
  }

  onBoxClick = () => {
    console.log('box pressed');
  };

  onListItemClick = (e, index) => {
    const list = this.state.list.filter((item, i) => i !== index);
    this.setState({ list });
  };

  render() {
    return (
      <div>
        <br></br>
        <button onClick={() => this.setState({ ...this.state })}>update container</button>
        <List onListItemClick={this.onListItemClick} data={this.state.list} />
      </div>
    );
  }
}
