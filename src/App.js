import React from "react";
import "./App.css";
import { ListCC } from "./components/List/ListCC";
import { HeaderCC } from "./components/Header/HeaderCC";
import { AddButtonCC } from "./components/AddButton/AddButtonCC";
import { ModalWindowCC } from "./components/ModalWindow/ModalWindowCC";
import { MenuCC } from "./components/Menu/MenuCC";
import { MessagesCC } from "./components/Messages/MessagesCC";

export default class App extends React.Component {
  render() {
    return (
      <div className="App mx-auto ">
        {this.props.isOpenMenu && <MenuCC />}
        {!this.props.isOpenMessages 
        ? (
          <main className="container-sm d-flex flex-column justify-content-between main">
            <HeaderCC />
            <ListCC />
            <AddButtonCC />
            <footer className="d-flex justify-content-end align-items-end footer">
              <p className="mb-1">&copy; Балашов Максим</p>
            </footer>
          </main>
        ) 
        //TODO Redirect to MessagesCC
        : <MessagesCC/>}
        {this.props.isOpen && <ModalWindowCC />}
      </div>
    );
  }
}
