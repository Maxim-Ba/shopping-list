import React from "react";


class LoaderList extends React.Component {

  render() {
    return (
      <div className="loader-list__wrapper">
        <div className="spinner-border" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>


    );
  };
};

export { LoaderList };