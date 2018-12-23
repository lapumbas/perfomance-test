import React from 'react';
import _ from 'lodash';
import ListItem from './list_item';

export default class List extends React.PureComponent {
  state = {
    counter: 0
  };

  onCounterClick = () => {
    const counter = this.state.counter + 1;
    this.setState({ counter });
  };

  onListItemClick = (e, index) => {
    console.log(index);
  };

  renderList = () => {
    const { data } = this.props;

    return (
      <div>
        {data.map(item => {
          return (
            <ListItem
              onClick={this.onListItemClick}
              index={item}
              key={_.uniqueId()}
              style={new Object({ cursor: 'pointer' })}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.onCounterClick}>{`update list ${this.state.counter}`}</button>
        {this.renderList()}
      </div>
    );
  }
}
