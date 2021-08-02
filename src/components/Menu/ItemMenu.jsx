import React from 'react';

const ItemMenu = (props) => {

  const setMenuStateHandler=()=>{
    switch (props.titleSubMenuLinks) {
      case 'Создать новый список':
        props.menuLocaleState({
          isOpenEditTitle: false,
          isOpenCreateNewList: true,
          deleteCurrentList: false
        });
        break;
        case 'Удалить текущий список':
          props.menuLocaleState({
            isOpenEditTitle: false,
            isOpenCreateNewList: false,
            deleteCurrentList: true
          });
          break;
          case 'Сохранить список в профиле':
            props.menuLocaleState({
              isOpenEditTitle: false,
              isOpenCreateNewList: false,
              deleteCurrentList: false
            });
            props.saveList();
            break;
            case 'Редактировать название списка':
              props.menuLocaleState({
                isOpenEditTitle: true,
                isOpenCreateNewList: false,
                deleteCurrentList: false
              });
              break;
      default:
        break;
    }
  };


  return ( 
    <div
              className="menu__item alert-primary w-100"
              onClick={e => {
                setMenuStateHandler();
                if (props.titleSubMenuLinks !=='Сохранить список в профиле') {
                  return props.isOpenSubmenu(e);
                }
              }}
            >
              {props.titleSubMenuLinks}
            </div>
  );
};


export {ItemMenu};