import React from "react";
import { saveOnLocStorage } from "../../utils/clearList";
import { firstConnectWS, messageListenerWS, updateDeletedAndGroups, updateGroupsWS } from "../../websocket/websocket";
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

  componentDidMount(){
    this.props.ws && this.props.listID && firstConnectWS(this.props.ws, this.props.listID, this.props.currentUser.id, this.props.currentUser.email);

  }
  componentDidUpdate(prevProps){
    if (!this.props.isAuth) {
      saveOnLocStorage(this.props.groups, this.props.deletedItems);
    }
    if (this.props.isAuth && this.props.ws && (prevProps.deletedItems === this.props.deletedItems) &&(JSON.stringify(prevProps.groups) !== JSON.stringify(this.props.groups)) ) {
      updateGroupsWS(this.props.ws, this.props.groups, this.props.listID, this.props.currentUser.id);
    }
    if (this.props.isAuth && this.props.ws && ( JSON.stringify(prevProps.deletedItems) !==  JSON.stringify(this.props.deletedItems))) {
      updateDeletedAndGroups(this.props.ws, this.props.groups, this.props.deletedItems, this.props.listID, this.props.currentUser.id);
    }
  }
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
