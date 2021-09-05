import React from "react";
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
                <div style={{color:'black'}}>
                  {this.props.isAuth ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-person-dash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      <path
                        fillRule="evenodd"
                        d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  )}
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export { Header };
