import React from 'react';

export default class ListItem extends React.PureComponent {

  // shouldComponentUpdate(nextProps) {
  //   console.log('key', nextProps.key === this.props.key);
  //   return true;
  // }

  render() {
    const { style, onClick, index } = this.props;
    return (
      <li style={style} onClick={(e) => onClick(index, e)}>
        <button>click me asap</button>
        <div style={{width: 30, height: 30, backgroundColor: 'blue'}}></div>
        {index}
      </li>
    );
  }
}
