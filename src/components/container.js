import React from 'react';
import List from './list';
import Box from './box';

export default class Container extends React.Component {
  state = {
    list: []
  };

  componentWillMount() {
    const list = [];
    for (let i = 0; i < 100; i++) {
      list.push(i);
    }
    this.setState({ list });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({...this.state})}>update container</button>
        <Box />
        <List data={this.state.list} />;
      </div>
    );
  }
}
