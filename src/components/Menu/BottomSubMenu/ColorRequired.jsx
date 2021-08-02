import React from 'react';

const ColorRequired = (props) => {
  const visible = "alert alert-warning";

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div
        className={props.visible ? visible+ ' visible' : visible + ' invisible'} 
        role="alert">
        Ты забыла выбрать цвет!
      </div>
    </div>

  );
};

export { ColorRequired };