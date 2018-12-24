import React, { useState, useEffect } from 'react';

import List from './list';
import Box from './box';

const boxStyle = {
  fontSize: 30
};
export default function Container(props) {
  const [list, setList] = useState([]);

  useEffect(() => {

    const tempList = [];
    for (let i = 0; i < 100; i++) {
      tempList.push(i);
    }
    setList(tempList);
  }, []);

  const onBoxClick = () => {};

  const onListItemClick = (e, index) => {
    const tempList = list.filter((item, i) => i !== index);
    setList(tempList);
  };

  return (
    <div>
      <button onClick={() => setList(list)}>update container</button>
      <Box
        style={boxStyle}
        // style={{ color: 'white' }}
        // onClick={() => console.log('box pressed')}
        // onClick={this.onBoxClick}
      />
      <List onClick={onListItemClick} data={list} />;
    </div>
  );
}
