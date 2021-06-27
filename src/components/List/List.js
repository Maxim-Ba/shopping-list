import React from "react";
import DeletedItem from "../DeletedItem/DeletedItem";
import { GroupItem } from "../GroupItem/GroupItem";

export class List extends React.Component {
  createGroupItems = (arr) => {
    return arr.map((item, index) => {
      return (
        <GroupItem key={index} item={item} deleteItem={this.props.deleteItem} />
      );
    });
  };
  createDeletedItems = (arr) => {
    return arr.map((item, index) => {
      return (
        <DeletedItem
          key={index}
          item={item}
          addItem={this.props.addItem}
          removeFromDeleted={this.props.removeFromDeleted}
        />
      );
    });
  };
  render() {
    return (
      <section className="list border border-dark flex-grow-1">
        <div className="top mb-1">
          {this.createGroupItems(this.props.groups)}
        </div>

        {this.props.deletedItems.length !== 0 ? (
          <div className="bottom border-top border-dark rounded pt-1 alert-secondary">
            {this.createDeletedItems(this.props.deletedItems)}
          </div>
        ) : null}
      </section>
    );
  }
}
