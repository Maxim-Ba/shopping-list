import React from "react";

const OneListRow = (props) => {
  const handleSelectList = () =>
    props.selectList(props.list._id);
  return (
    <p className={`rounded list-of-list mt-1 ${props.nowSelected===props.list._id && 'border'}`}
      style={{ backgroundColor: props.list.color }}
      onClick={() => handleSelectList()}
    >
      {props.list.name}
    </p>
  );


};

export default OneListRow;