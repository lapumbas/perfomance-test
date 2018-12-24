import React from 'react';

export default class ListItem extends React.PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   console.log('key', nextProps.key === this.props.key);
  //   return true;
  // }

  onClick(index) {
    return e => {
      this.props.onClick(e, index);
    };
  }

  render() {
    const { style, index, item } = this.props;
    return (
      // <li style={style} onClick={this.onClick(index)}>
        <li style={style} onClick={(e) => this.props.onClick(e, index)}>
        <button>click me asap</button>
        <div style={{ width: 30, height: 30, backgroundColor: 'blue' }} />
        {`element ${item}`}
      </li>
    );
  }
}
