import React, { useState } from "react";


const ChangePasswordWindow = (props) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordDouble, setNewPasswordDouble] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const checkNewPassword = ()=>{
    if (!!password && !!newPasswordDouble && !!newPassword && newPasswordDouble === newPassword) {
      return setSubmitDisabled (true);
    }
    setSubmitDisabled (false); // доделать проверку
  };
  return (
    <div
      className="modal-window d-flex fixed-top justify-content-center align-items-center"
      onClick={() => props.closeChPasForm({ changePasswordFormIsOpen: false })}
    >
      <form
        className="registration__form bg-light p-3"
        onClick={e => e.stopPropagation()}
      >
        <h3 className="registration">Сменить пароль</h3>

        <div className="form-group">
          <label htmlFor="Password">Старый пароль</label>
          <input
            type="password"
            className="form-control"
            id="Password"
            value={password}
            placeholder="Введите cтарый пароль"

            onChange={(e) => {setPassword(e.target.value);
              checkNewPassword();
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password1">Новый пароль</label>
          <input
            type="password"
            className="form-control"
            id="Password1"
            value={newPassword}
            placeholder="Введите новый пароль"

            onChange={(e) => {setNewPassword(e.target.value);
              checkNewPassword();
            }}
          />
                    <input
            type="password"
            className="form-control mt-1"
            id="Password2"
            value={newPasswordDouble}
            placeholder="Повторите новый пароль"
            onChange={(e) => {setNewPasswordDouble(e.target.value);
              checkNewPassword();

            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!submitDisabled}
          onClick={() => {
            props.closeChPasForm({ changePasswordFormIsOpen: false });//
            return props.changePassHandler( password, newPassword);
          }}
        >
          Отправить
        </button>
      </form>
    </div>

  );
};

export { ChangePasswordWindow };