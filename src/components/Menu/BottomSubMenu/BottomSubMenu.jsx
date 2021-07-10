import React from "react";
import { CirclePicker } from 'react-color';
import { NavLink } from 'react-router-dom';


class BottomSubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTitle: '',
      color: {}
    };
  }
  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
  };
  handleClick = (e)=> {
    this.props.toggleMenuWindow(false);
    this.props.menuLocaleState({
      isOpenAlertWindow: false,
      isOpenSubmenu: false,
      isOpenEditTitle: false,
      isOpenCreateNewList: false,
    });
  }
  handleClickEdit = (e) => {
    this.props.setNameofList(this.state.valueTitle);
    this.props.setColorofList(this.state.color);
    this.props.toggleMenuWindow(false);
    this.props.menuLocaleState({
      isOpenAlertWindow: false,
      isOpenSubmenu: false,
      isOpenEditTitle: false,
      isOpenCreateNewList: false,
    });

  }
  handleClickCreateNew = (e) => {
    this.props.toggleMenuWindow(false);
    this.props.menuLocaleState({
      isOpenAlertWindow: false,
      isOpenSubmenu: false,
      isOpenEditTitle: false,
      isOpenCreateNewList: false,
    });
    this.props.ceateList(this.state.valueTitle, this.state.color);

  }
  render() {
    return (
      <div
        className="bottom-submenu position-absolute bg-danger w-100 h-75 d-flex flex-column justify-content-center"
        onClick={e => e.stopPropagation()}
      >
        {this.props.isOpenEditTitle &&
          <div className="container d-flex flex-column justify-content-center align-items-center mb-3">
            <h3 className="bottom-submenu__title">Изменить список</h3>
            <input
              type="text"
              placeholder="Название списка"
              className=" mb-3"
              onChange={e => this.setState({ valueTitle: e.target.value })}
            />
            <CirclePicker
              color={this.state.color}
              onChangeComplete={this.handleChangeComplete}
            />
            <NavLink to='/' className="btn btn-light mt-3" onClick={e => this.handleClickEdit(e)}>Применить</NavLink>
          </div>
        }
        {this.props.isOpenCreateNewList &&
          <div className="container d-flex flex-column justify-content-center align-items-center mb-3">
            <h3 className="bottom-submenu__title">Новый список</h3>
            <input
              type="text"
              placeholder="Название списка"
              className=" mb-3"
              onChange={e => this.setState({ valueTitle: e.target.value })}
            />
            <CirclePicker
              color={this.state.color}
              onChangeComplete={this.handleChangeComplete}
            />
            <NavLink to='/' className="btn btn-light mt-3" onClick={e => this.handleClickCreateNew(e)}>Применить</NavLink>
          </div>
        }
        {this.props.deleteCurrentList &&
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h3 className="bottom-submenu__title mt-2">Удалить список</h3>
            <div className="bottom-submeny__wrapper-botton d-flex justify-content-around w-50 mt-2">
              <NavLink 
              to='/' className="btn btn-warning" onClick={e => this.handleClick(e)}>Удалить</NavLink>
              <NavLink to='/' className="btn btn-light" onClick={e => this.handleClick(e)}>Отена</NavLink>
            </div>
          </div>
        }
      </div>
    );
  }
}

export { BottomSubMenu };