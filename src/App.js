import React from "react";
import "./App.css";
import { ListCC } from "./components/List/ListCC";
import { HeaderCC } from "./components/Header/HeaderCC";
import { AddButtonCC } from "./components/AddButton/AddButtonCC";
import { ModalWindowCC } from "./components/ModalWindow/ModalWindowCC";
import { MenuCC } from "./components/Menu/MenuCC";
import { MessagesCC } from "./components/Messages/MessagesCC";
import { Route, Switch } from "react-router-dom";
import { ProfileCC } from "./components/Profile/ProfileCC";
import { SpinnerCC } from "./components/Spinner/SpinnerCC";
import { ClearButton } from "./components/AddButton/ClearButton";

export default class App extends React.Component {
  componentDidMount(){
    if (!this.props.isAuth) {
      this.props.setListFromStorage();
    }
  }
  componentWillUnmount() {
    if (this.props.ws) {
      this.props.ws.close(1000, 'ОТКЛЮЧЕНИЕ КЛИЕНТА...');

    }
  }
  render() {
    return (
      <div className="App mx-auto ">
        {this.props.loader && <SpinnerCC />}
        {this.props.isOpenMenu && <MenuCC />}
        <main className="container-sm d-flex flex-column justify-content-between main">
          <HeaderCC />
          <Switch>
            <Route path="/messages" history={this.props.history}>
              <MessagesCC />
            </Route>
            <Route path="/profile" history={this.props.history}>
              <ProfileCC />
            </Route>
            <Route path="/" history={this.props.history}>
              <ListCC />
              <div className={`d-flex justify-content-${this.props.isAuth?'center':'between'} button-add`}>
                <AddButtonCC />
                {!this.props.isAuth && <ClearButton />}
              </div>
            </Route>
          </Switch>
          <footer className="d-flex justify-content-end align-items-end footer">
            <p className="mb-1">&copy; Балашов Максим</p>
          </footer>
        </main>
        {/* сохранить в локал сторедж */}
        {this.props.isOpen && <ModalWindowCC />}
      </div>
    );
  }
}
