import React, { useState } from "react";


const RegistrationWindow = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div
      className="modal-window d-flex fixed-top justify-content-center align-items-center"
      onClick={() => props.closeForm({ redistrationWindowIsOpen: false })}
    >
      <form
        className="registration__form bg-success p-3"
        onClick={e => e.stopPropagation()}

      >
        <h3 className="registration">Регистрация</h3>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Адрес электронной почты</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">Мы никогда никому не передадим Вашу электронную почту.</small>
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
          onClick={(e) => {
            props.closeForm({ redistrationWindowIsOpen: false });
            props.registrationHandler(email, password);
            return e.preventDefault();
          }}
        >
          Отправить
        </button>
      </form>
    </div>

  );
};

export { RegistrationWindow };