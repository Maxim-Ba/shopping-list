import React from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import { BottomSubMenuCC } from './BottomSubMenu/BottomSubMenuCC';
import { ItemMenu } from './ItemMenu';
// сделать DRY
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAlertWindow: false,
      isOpenSubmenu: false,
      isOpenEditTitle: false,
      isOpenCreateNewList: false,
      deleteCurrentList: false,
      titleSubMenuLinks: [
        'Создать новый список',
        'Удалить текущий список',
        'Сохранить список в профиле',
        'Редактировать название списка'
      ]
    };
  }

  componentDidMount() {
    this.setState({ isOpenAlertWindow: true });
    this.setState({ isOpenEditTitle: false });
  }
  closeAlertWindow(e) {
    e.preventDefault();
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

            menuLocaleState={(arg) => this.setState(arg)}
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
            { this.state.titleSubMenuLinks.map(title=>
              <ItemMenu
                key={title} 
                titleSubMenuLinks={title}
                isOpenSubmenu={e=>this.isOpenSubmenu(e)}
                menuLocaleState={(arg)=>this.setState(arg)}
              />
            ) }
            
            <NavLink
              to='/messages'
              activeClassName={"menu__item alert-primary w-100"}
              className="menu__item alert-primary w-100"
            >
              <div
                className="menu__item alert-primary w-100"
                onClick={e => {
                  this.props.toggleMenuWindow(false);
                }}
              >
                Сообщения
              </div>
            </NavLink >
            <NavLink
              to='/profile'
              activeClassName={"menu__item alert-primary w-100"}
              className="menu__item alert-primary w-100"
            >
              <div
                className="menu__item alert-primary w-100"
                onClick={e => {
                  this.props.toggleMenuWindow(false);
                }}
              >
                Мой профиль
              </div>
            </NavLink >
          </div>
        </CSSTransition>

      </div>

    );
  }
}

export default Menu;