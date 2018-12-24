import React from 'react';

const boxStyle = {
  width: 200,
  height: 200,
  backgroundColor: 'red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default class Box extends React.PureComponent {
  render() {
    return (
      <div  onClick={this.props.onClick} style={boxStyle}>
        <p style={this.props.style}>box</p>
      </div>
    );
  }
}
