import React from "react";
import OneListRow from "../Profile/OneListRow";
class SharedList extends React.Component {
  handleSelectList(listId) {
    this.props.getList(listId);
  }
  componentDidMount() {
    if (this.props.isAuth) {

      return this.props.getSharedList(this.props.currentUser.id);
    }
  }
  componentDidUpdate(prevProps) {
    if ((this.props.isAuth !== prevProps.isAuth) && this.props.isAuth) {
      return this.props.getSharedList(this.props.currentUser.id);

    }
  }

  render() {
    return (
      this.props.sharedLists.length !==0 && <section>
          <p>Списки других пользователей:</p>
          {this.props.sharedLists.map((list, i) => (
            <OneListRow selectList={(arg) => this.handleSelectList(arg)} nowSelected={this.props.selectedListId} list={list} key={i} />
          )
          )}
      </section>

    );
  }
}

export default SharedList;