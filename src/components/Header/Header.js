import React from "react";
import avatar from "../../img/person-fill.svg";
import noAvatar from "../../img/person-dash.svg";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  handleClick = (e) => {
    this.props.toggleMenuWindow(true);
  };

  render() {
    return (
      <header className="d-flex justify-content-start align-items-center my-2">
        <button
          className="button btn btn-primary"
          style={{ backgroundColor: this.props.titleColor }}
          onClick={(e) => this.handleClick(e)}
        >
          Меню
        </button>
        <h3 className="m-0 p-0" style={{ color: this.props.titleColor }}>
          {this.props.titleList}
        </h3>
        {this.props.isAuth ? (
          <div
            className="d-flex justify-content-center align-items-center rounded-circle  avatar ml-auto"
            style={{ backgroundColor: this.props.titleColor }}
          >
            <NavLink
              to="/profile"
              className="w-100 h-100 d-flex justify-content-center align-items-center"
            >
              <img src={avatar} alt="avatar" />
            </NavLink>
          </div>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center rounded-circle  avatar ml-auto"
            style={{ backgroundColor: this.props.titleColor }}
          >
            <NavLink
              to="/profile"
              className="w-100 h-100 d-flex justify-content-center align-items-center"
            >
              <img src={noAvatar} alt="avatar" />
            </NavLink>
          </div>
        )}
      </header>
    );
  }
}

export { Header };
