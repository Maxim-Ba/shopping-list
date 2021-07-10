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

export default class App extends React.Component {
  render() {
    return (
      <div className="App mx-auto ">
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
              <AddButtonCC />
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
