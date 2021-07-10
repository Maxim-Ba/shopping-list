import React from "react";
import { NavLink } from "react-router-dom";
import { registration } from "../../http/user.action";
import { LoginWindow } from "./LoginWindow";
import { RegistrationWindow } from "./RegistrationWindow";

class Profile extends React.Component {
  state = {
    loginWindowIsOpen: false,
    redistrationWindowIsOpen: false,
  }
  loginHandler(email, password) {
    this.props.login(email, password);
  }
  registrationHandler(email, password) {
    registration(email, password);
  }
  componentDidMount(){
    if (this.props.isAuth) {
      return this.props.getList();
    }
  }
  componentDidUpdate(prevProps){
    if (this.props.isAuth !== prevProps.isAuth) {
    return this.props.getList();

    }
  }
  render() {
    console.log('render', this.props.lists);

    return (
      <div className="profile d-flex flex-column justify-content-start ">
        {this.props.isAuth
          ?
          <div className="container">
            <div className="row">
              <div className="col-md">
                <div className="profile__data d-flex flex-column justify-content-start align-items-start">
                  <p className="profile__email">Почта : {null}</p>
                  <button className="profile__close btn border border-dark w-md-50" style={{ сolor: this.props.titleColor }}>Сменить пароль</button>
                </div>
              </div>
              <div className="col-md">
                <p>Списки покупок:</p>
                { this.props.lists.map((list,i)=>(
                  <p
                  style={{backgroundColor:list.color}}
                    key={i}>
                    {list.name}
                  </p>)
                  )}
              </div>
            </div>
            <NavLink 
              to='/' 
              className="profile__close btn ml-md-auto" 
              style={{ backgroundColor: this.props.titleColor }} 
              
              >Закрыть</NavLink>
            <button 
              className="profile__close btn ml-md-auto" 
              style={{ backgroundColor: this.props.titleColor }} 
              onClick={()=>this.props.logout()}
              >
                Выйти из профиля
              </button>
          </div>
          :
          <div className="container">
            {this.state.loginWindowIsOpen 
            ? <LoginWindow closeForm={(arg)=>this.setState(arg)} 
            loginHandler={(email, password)=>this.loginHandler(email, password)}/> 
            : null}
            {this.state.redistrationWindowIsOpen 
            ? <RegistrationWindow 
              closeForm={(arg)=>this.setState(arg)} 
              registrationHandler={(email, password)=>this.registrationHandler(email, password)}
              /> 
            : null}
            <div className="row justify-content-around">
              <button
                className="btn btn-info col-sm-6"
                onClick={() => this.setState({ loginWindowIsOpen: true })}
              >
                Войти
              </button>
              <button
                className="btn btn-success col-sm-6"
                onClick={() => this.setState({ redistrationWindowIsOpen: true })}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        }
        {!this.props.isAuth && <p>Войдите или зарегистрируйтесь, чтобы создать несколько списков</p>}
      </div>
    );
  };
};

export { Profile };