import React from "react";
import "./App.css";
import { ListCC } from "./components/List/ListCC";
import { HeaderCC } from "./components/Header/HeaderCC";
import { AddButtonCC } from "./components/AddButton/AddButtonCC";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { ModalWindowCC } from "./components/ModalWindow/ModalWindowCC";

export default class App extends React.Component {
  render() {
    return (
      <div className="App mx-auto ">
        <main className="container-sm d-flex flex-column justify-content-between main">
          <HeaderCC />
          <ListCC />
          <AddButtonCC />

          <footer className="d-flex justify-content-end align-items-end footer">
            <p className="mb-1">&copy; Балашов Максим</p>
          </footer>
        </main>

        {/* <SwitchTransition > */}
        <CSSTransition
          in={this.props.isOpen}
          timeout={1}
          classNames="my-node"
          unmountOnExit
          // onEnter={() => dispatch(toggleWindowConditionAC(true))}
          onExited={() => this.props.toggleModalWindow(false)}
        >
          <ModalWindowCC />
        </CSSTransition>
        {/* </SwitchTransition> */}
      </div>
    );
  }
}
