import React from "react";
import { CSSTransition } from "react-transition-group";
import { Item } from "../Item/Item";

export class GroupItem extends React.Component {
  createItems = (arr) => {
    return arr.items.map((item, index) => {
      return (
        <CSSTransition
        in={true}

          timeout={1000}
          classNames={{
            enter: "item-enter",
            exit: "item-exit",
            exitActive: "item-exit-done",
          }}
          mountOnEnter
          unmountOnExit
          key={index}
        >
          <Item
            key={index}
            index={index}
            item={item}
            color={arr.color}
            deleteItem={this.props.deleteItem}
          />
          
        </CSSTransition>
      );
    });
  };
  render() {
    if (this.props.item.items.length === 0) {
      return null;
    }
    return (
      <div className="group-items border">
        {this.createItems(this.props.item)}
      </div>
    );
  }
}
