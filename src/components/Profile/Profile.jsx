import React from "react";
import { NavLink } from "react-router-dom";
import { registration } from "../../http/user.action";
import { ChangePasswordWindow } from "./ChangePasswordWindow";
import { LoginWindow } from "./LoginWindow";
import OneListRow from "./OneListRow";
import { RegistrationWindow } from "./RegistrationWindow";

class Profile extends React.Component {
  state = {
    loginWindowIsOpen: false,
    redistrationWindowIsOpen: false,
    changePasswordFormIsOpen: false,
    shareListForm: false,
  }
  loginHandler(email, password) {
    this.props.login(email, password);
  }
  registrationHandler(email, password) {
    registration(email, password);
  }
  handleSelectList(listId) {
    this.props.getList(listId);
  }
  changePassHandler(password, newPassword) {
//TODO CHANGE PaSsWoRd
  }

  componentDidMount() {
    if (this.props.isAuth) {
      return this.props.getLists();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.isAuth !== prevProps.isAuth) {
      return this.props.getLists();
    }
    if (this.props.lists !== prevProps.lists) {
      // return this.props.getLists();
      //TODO check old -> new lists
    }
  }
  openSendfield(e) {
    e.preventDefault();
    this.setState({ shareListForm: !this.state.shareListForm });

  }
  render() {

    return (
      <div className="profile d-flex flex-column justify-content-start container-fluid ">
        {this.state.changePasswordFormIsOpen
          && <ChangePasswordWindow
            closeChPasForm={(arg) => this.setState(arg)}
            changePassHandler={(password, newPassword) => this.changePassHandler(password, newPassword)}
          />}
        {this.props.isAuth
          ?
          <div className="container">
            <div className="row">
              <div className="col-md">
                <div className="profile__data d-flex flex-column justify-content-start align-items-start">
                  <p className="profile__email">Почта : {this.props.email}</p>
                  <button
                    className="profile__close btn border border-dark w-md-50 bg-light"
                    style={{ сolor: this.props.titleColor }}
                    onClick={() => this.setState({ changePasswordFormIsOpen: true })}
                  >
                    Сменить пароль
                  </button>
                </div>
              </div>
              <div className="col-md">
                <p>Списки покупок:</p>
                {this.props.lists.map((list, i) => (
                  <OneListRow selectList={(arg) => this.handleSelectList(arg)} nowSelected={this.props.selectedListId} list={list} key={i} />
                )
                )}
                <div className="container overflow-hidden pb-1" >
                  <form className={`row profile__form-wrapper ${this.state.shareListForm && 'profile__form-wrapper_active'}`}>
                    <div className="col-12 mb-2">
                      <input className="w-100 rounded" type="email" name="email" id="email" placeholder="Email пользователя..." />

                    </div>
                    <div className="col-12 mb-2">
                      <button className="btn btn-warning w-100 text-center">
                        Поделиться
                    </button>
                    </div>
                  </form>
                  <button
                    disabled={!this.props.selectedListId}
                    className="btn btn-warning"
                    onClick={e => this.openSendfield(e)}
                  >
                    Поделиться списком
                </button>
                </div>
              </div>
            </div>
            <div className="row mt-2"
            >
              <div className="col-12 col-sm-6 mt-3">
                <NavLink
                  to='/'
                  className="profile__close btn "
                  style={{ backgroundColor: this.props.titleColor }}
                >
                  Закрыть
                </NavLink>
              </div>

              <div className="col-12 col-sm-6 mt-3">
                <button
                  className="profile__close btn "
                  style={{ backgroundColor: this.props.titleColor }}
                  onClick={() => this.props.logout()}
                >
                  Выйти из профиля
                </button>
              </div>
            </div>

          </div>
          :
          <div className="container-fluid">
            {this.state.loginWindowIsOpen
              ? <LoginWindow closeForm={(arg) => this.setState(arg)}
                loginHandler={(email, password) => this.loginHandler(email, password)} />
              : null}
            {this.state.redistrationWindowIsOpen
              ? <RegistrationWindow
                closeForm={(arg) => this.setState(arg)}
                registrationHandler={(email, password) => this.registrationHandler(email, password)}
              />
              : null}
            <div className="row justify-content-around">
              <div className="col-sm-6 mt-3">
                <button
                  className="btn btn-info"
                  onClick={() => this.setState({ loginWindowIsOpen: true })}
                >
                  Войти
                </button>
              </div>
              <div className="col-sm-6 mt-3">
                <button
                  className="btn btn-success"
                  onClick={() => this.setState({ redistrationWindowIsOpen: true })}
                >
                  Зарегистрироваться
                </button>
              </div>
            </div>
          </div>
        }
        {!this.props.isAuth && <p>Войдите или зарегистрируйтесь, чтобы создать несколько списков</p>}
      </div>
    );
  };
};

export { Profile };