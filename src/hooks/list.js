import React, { useState } from 'react';
import ListItem from './list_item';

const listItemStyle = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 5
};

export default function List(props) {
  const [counter, setCounter] = useState(0);

  const onCounterClick = () => {
    setCounter(counter + 1);
  };

  const onListItemClick = (index, e) => {
    props.onClick(e, index);
  };

  const renderList = () => {
    const { data } = props;

    return (
      <div>
        {data.map((item, i) => {
          return (
            <ListItem
              // onClick={this.onListItemClick.bind(this, i)}
              // onClick={(e) => this.props.onClick(i, e)}
              onClick={props.onClick}
              index={i}
              key={`${item}-${i}`}
              // style={listItemStyle}
              style={
                new Object({
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  margin: 5
                })
              }
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <button onClick={onCounterClick}>{`update list ${counter}`}</button>
      {renderList()}
    </div>
  );
}
