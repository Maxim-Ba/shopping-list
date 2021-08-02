import React from "react";
import { CirclePicker } from 'react-color';
import { NavLink } from 'react-router-dom';
import {ColorRequired} from './ColorRequired';

class BottomSubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTitle: '',
      color: {},
      colorRequire:false

    };
  }
  setColorRequire(){
    this.setState({colorRequire : true});
    setTimeout(()=>this.setState({colorRequire : false}),3000);
  };
  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
    this.setState({colorRequire : false});
  };
  handleClickDelete = (e) => {
    this.props.toggleMenuWindow(false);
    this.props.menuLocaleState({
      isOpenAlertWindow: false,
      isOpenSubmenu: false,
      isOpenEditTitle: false,
      isOpenCreateNewList: false,
    });
    this.setState({colorRequire : false});

  }
  handleClickEdit = (e) => {
    if (typeof this.state.color === 'string') {
      this.props.saveList(this.state.valueTitle, this.state.color,this.props._id, this.props.groups, this.props.deleted);
      this.props.toggleMenuWindow(false);
      this.props.menuLocaleState({
        isOpenAlertWindow: false,
        isOpenSubmenu: false,
        isOpenEditTitle: false,
        isOpenCreateNewList: false,
      });
      return null;
    }
    this.setColorRequire();
  }
  handleClickCreateNew = (e) => {
    this.props.toggleMenuWindow(false);
    this.props.menuLocaleState({
      isOpenAlertWindow: false,
      isOpenSubmenu: false,
      isOpenEditTitle: false,
      isOpenCreateNewList: false,
    });
    this.setState({colorRequire : false});
    this.props.ceateList(this.state.valueTitle, this.state.color);

  }
  render() {
    return (
      <div
        className="bottom-submenu position-absolute bg-danger w-100 h-75 d-flex flex-column"
        onClick={e => e.stopPropagation()}
      >
        <ColorRequired visible={this.state.colorRequire}/>
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
                to='/' className="btn btn-warning" onClick={e => {
                  this.handleClickDelete(e);
                  return this.props.deleteList(this.props._id);
                }
                }>Удалить</NavLink>
              <NavLink to='/' className="btn btn-light">Отмена</NavLink>
            </div>
          </div>
        }
      </div>
    );
  }
}

export { BottomSubMenu };