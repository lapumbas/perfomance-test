import React from 'react';
import uniqueId from 'lodash.uniqueid';

import List from './list';
import Box from './box';

const boxStyle = {
  fontSize: 30
};
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
        <button onClick={() => this.setState({ ...this.state })}>update container</button>
        <Box
          style={boxStyle}
          // style={{ color: 'white' }}
          // onClick={() => console.log('box pressed')}
          // onClick={this.onBoxClick}
          // key={uniqueId()}
        />
        <List onClick={this.onListItemClick} data={this.state.list} />;
      </div>
    );
  }
}
