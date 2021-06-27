import React from 'react';
import { CSSTransition } from "react-transition-group";
import { BottomSubMenu } from './BottomSubMenu/BottomSubMenu';
import { BottomSubMenuCC } from './BottomSubMenu/BottomSubMenuCC';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAlertWindow: false,
      isOpenSubmenu: false,
      isOpenEditTitle: false,
      isOpenCreateNewList: false,
      deleteCurrentList:false,

    };
  }
  componentDidMount() {
    this.setState({ isOpenAlertWindow: true });
    this.setState({ isOpenEditTitle: false });
  }
  closeAlertWindow(e) {
    e.stopPropagation();
    this.props.toggleMenuWindow(false);
  }
  isOpenSubmenu(e) {
    e.stopPropagation();
    this.setState({ isOpenSubmenu: true });
  }
  render() {
    return (
      <div className="menu__background modal-window fixed-top" onClick={(e) => this.closeAlertWindow(e)}>
        <CSSTransition
          in={this.state.isOpenSubmenu}
          timeout={300}
          classNames="menu-transition"
          unmountOnExit
        >
          <BottomSubMenuCC
            isOpenEditTitle={this.state.isOpenEditTitle}
            isOpenCreateNewList={this.state.isOpenCreateNewList}
            deleteCurrentList={this.state.deleteCurrentList}

            menuLocaleState={(arg)=>this.setState(arg)}
          />
        </CSSTransition>
        <CSSTransition
          in={this.state.isOpenAlertWindow}
          timeout={300}
          classNames="menu-transition"
          unmountOnExit
        >
          <div
            className="menu container-fluid d-flex flex-column justify-content-start align-items-center px-0 zindex-sticky shadow"
            onClick={e => e.stopPropagation()}
          >
            <div
              className="menu__item alert-primary w-100"
              onClick={e => {
                this.setState({
                  isOpenEditTitle: false,
                  isOpenCreateNewList: true,
                  deleteCurrentList:false

                }); return this.isOpenSubmenu(e);
              }}
            >
              Создать новый список
            </div>
            <div
              className="menu__item alert-primary w-100"
              onClick={e => {
                this.setState({
                  isOpenEditTitle: false,
                  isOpenCreateNewList: false,
                  deleteCurrentList:true
                }); return this.isOpenSubmenu(e);
              }}  
            >
              Удалить текущий список
            </div>
            <div
              className="menu__item alert-primary w-100">
              Сохранить список в профиле
            </div>
            <div
              onClick={e => {
                this.setState({
                  isOpenEditTitle: true,
                  isOpenCreateNewList: false,
                  deleteCurrentList:false

                }); return this.isOpenSubmenu(e);
              }}
              className="menu__item alert-primary w-100">
              Редактировать название списка
            </div>
            <div
              className="menu__item alert-primary w-100">
              Сообщения
            </div>
            <div
              className="menu__item alert-primary w-100">
              Мой профиль
            </div>
          </div>
        </CSSTransition>

      </div>

    );
  }
}

export default Menu;