import React from 'react';

const boxStyle = {
  width: 200,
  height: 200,
  backgroundColor: 'red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default class Box extends React.Component {
  render() {
    return <div style={boxStyle}>box</div>;
  }
}
