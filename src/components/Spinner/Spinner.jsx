import React from "react";


class Spinner extends React.Component {

  render() {
    return (
      <div className="spinner__wrapper">
        <div className="spinner-border" style={{ color: this.props.color, backgroundColor: this.props.color }} role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>


    );
  };
};

export { Spinner };