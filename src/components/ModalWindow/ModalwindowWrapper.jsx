import React from "react";
export class ModalWindowWrapper extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.toggleModalWindow(false);
    this.props.addItem(this.props.inputValue, this.props.colorSelected);
    this.props.changeInput("");
  };

  handleInput = (e) => {
    this.props.changeInput(e.target.value);
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
            className="modal-window__wraper w-50 h-50 border border-primary rounded-top form-group m-0"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              className="modal-window__form d-flex flex-column p-3"
              onSubmit={this.handleSubmit}
            >
              <div className="modal-window__input-container d-flex justify-content-between">
                <input
                  placeholder="Введите название товара"
                  type="text"
                  onChange={(e) => this.handleInput(e)}
                  className="w-75"
                  required
                />
                <button className="btn btn-secondary" type="submit">
                  Добавить
                </button>
              </div>
              {this.displayColorsBtn(
                this.props.colors,
                this.props.colorSelected
              )}
            </form>
          </div>
    );
  }
}
