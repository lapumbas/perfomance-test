import React from 'react';

const boxStyle = {
  width: 200,
  height: 200,
  backgroundColor: 'red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default function Box(props) {
  return (
    <div onClick={props.onClick} style={boxStyle}>
      <p style={props.style}>box</p>
    </div>
  );
}
