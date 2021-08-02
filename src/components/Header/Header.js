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
      <header className="d-flex justify-content-center align-items-center my-2 p-0 container-fluid">
        <div className="row container-fluid">
          <div className="col-12 col-sm-3 container-sm p-0 d-flex align-items-center">
          <button
            className="button btn btn-primary container-fluid p-0 h-100"
            style={{ backgroundColor: this.props.titleColor }}
            onClick={(e) => this.handleClick(e)}
          >
            Меню
          </button>
          </div>
          

          <h3
            className="m-0 p-0 col-12 col-sm-7 pb-2"
            style={{ color: this.props.titleColor }}
          >
            <NavLink to="/"> {this.props.titleList}</NavLink>
          </h3>

            <div className="col-12 col-sm-2 d-flex justify-content-center">
              <div
                className="d-flex justify-content-center align-items-center rounded-circle avatar"
                style={{ backgroundColor: this.props.titleColor }}
              >
                <NavLink
                  to="/profile"
                  className="w-100 h-100 d-flex justify-content-center align-items-center"
                >
                  <img src={this.props.isAuth ? avatar: noAvatar} alt="avatar" />
                </NavLink>
              </div>
            </div>
          
        </div>
      </header>
    );
  }
}

export { Header };
