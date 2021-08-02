import React, { useState } from "react";


const LoginWindow = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div
      className="modal-window d-flex fixed-top justify-content-center align-items-center"
      onClick={() => props.closeForm({ loginWindowIsOpen: false })}
    >
      <form
        className="registration__form bg-info p-3"
        onClick={e => e.stopPropagation()}
      >
        <h3 className="registration">Вход</h3>
        <div className="form-group ">
          <label htmlFor="exampleInputEmail1">Адрес электронной почты</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Пароль</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            props.closeForm({ loginWindowIsOpen: false });
            return props.loginHandler(email, password);
          }}
        >
          Отправить
        </button>
      </form>
    </div>

  );
};

export { LoginWindow };