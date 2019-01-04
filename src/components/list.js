import React from 'react';
import ListItem from './list_item';

const listItemStyle = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 5,
  padding: 5,
  backgroundColor: '#ccc',
  width: 200
};

export default class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    // this.onListItemClick = this.onListItemClick.bind(this);
  }

  onCounterClick = () => {
    const counter = this.state.counter + 1;
    this.setState({ counter });
  };

  onListItemClick = index => e => {
    this.props.onListItemClick(e, index);
  };

  renderList = () => {
    const { data } = this.props;
    console.log('renderList');

    return (
      <ul>
        {data.map((item, i) => {
          return (
            <ListItem
              // onClick={this.onListItemClick.bind(this, i)}
              // onClick={(e) => this.props.onClick(i, e)}
              onClick={this.props.onListItemClick}
              item={item}
              index={i}
              key={`${item}-${i}`}
              style={listItemStyle}
              // style={
              //   new Object({
              //     cursor: 'pointer',
              //     display: 'flex',
              //     alignItems: 'center',
              //     justifyContent: 'center',
              //     margin: 5,
              //     padding: 5,
              //     backgroundColor: 'ccc',
              //     width: 200
              //   })
              // }
            />
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <br />
        <button onClick={this.onCounterClick}>{`update list ${this.state.counter}`}</button>
        {this.renderList()}
      </div>
    );
  }
}
