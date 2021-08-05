import React from "react";
import { CSSTransition } from "react-transition-group";
import { ModalWindowWrapper } from "./ModalwindowWrapper";
import "../../App.css";

export class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAlertWindow: false,
      input: ''
    };
  }
  componentDidMount() {
    this.setState({ isOpenAlertWindow: true });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.toggleModalWindow(false);
    this.props.addItem(this.state.input, this.props.colorSelected);
      
    this.setState({input: ''});
    // this.props.changeInput("");
  };
  handleClick = () => {
    this.props.toggleModalWindow(false);
  };
  handleInput = (e) => {
    this.setState({input: e.target.value});
    // this.props.changeInput(e.target.value);
  };
  handleSelectColor = (event, color) => {
    event.preventDefault();
    this.props.selectColor(color);
  };
  displayColorsBtn = (colors, selectedColor) => {
    return (
      <div className="modal-window__btn-wrapper d-flex justify-content-around mt-3 w-75">
        {colors.map((colorBtn, index) =>
          selectedColor === colorBtn ? (
            <button
              key={index}
              className="modal-window__color-btn modal-window__border border-white rounded"
              style={{ backgroundColor: colorBtn }}
              onClick={(e) => this.handleSelectColor(e, colorBtn)}
            ></button>
          ) : (
            <button
              key={index}
              className="modal-window__color-btn rounded"
              style={{ backgroundColor: colorBtn }}
              onClick={(e) => this.handleSelectColor(e, colorBtn)}
            ></button>
          )
        )}
      </div>
    );
  };
  render() {
    return (
      <div
        className=" vw-100 row modal-window d-flex fixed-top justify-content-center align-items-end container-fluid m-0 "
        onClick={(e) => this.handleClick(e)}
      >
        <CSSTransition
          in={this.state.isOpenAlertWindow}
          timeout={1000}
          classNames={{
            enter: "alert-enter",
            enterActive: "alert-enter-done",
            exit: "alert-exit",
            exitActive: "alert-exit-done",
          }}
          mountOnEnter
          unmountOnExit
          onExited={() => this.props.toggleModalWindow(false)}
        >
          <ModalWindowWrapper 
            {...this.props} 
            changeInput={(arg)=>this.setState({input:arg}) }
            inputValue={this.state.input} 
            
            />
        </CSSTransition>
      </div>
    );
  }
}
