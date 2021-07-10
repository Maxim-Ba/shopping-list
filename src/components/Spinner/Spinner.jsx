import React from "react";


class Spinner extends React.Component {

  render() {
    return(<div class="spinner-border" style={{ color: this.props.color, backgroundColor: this.props.color }} role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

    );
  };
};

export { Spinner };