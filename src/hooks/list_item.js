import React, { memo } from 'react';

const ListItem = props => {
  const { style, onClick, index } = props;
  return (
    <li style={style} onClick={e => onClick(e, index)}>
      <button>click me asap</button>
      <div style={{ width: 30, height: 30, backgroundColor: 'blue' }} />
      {index}
    </li>
  );
};

export default memo(ListItem);
