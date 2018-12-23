import React from 'react';

export default class ListItem extends React.Component {
  render() {
    const {style, onClick, index} = this.props;
    return <li style={style} onClick={(e) => onClick(e, index)}>{index}</li>;
  }
}
