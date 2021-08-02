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
      <div className="modal-window__btn-wrapper d-flex justify-content-start mt-3 w-100 flex-wrap">
        {colors.map((colorBtn, index) =>
          selectedColor === colorBtn ? (
            <button
              key={index}
              className="modal-window__color-btn modal-window__border border-white rounded m-1"
              style={{ backgroundColor: colorBtn }}
              onClick={(e) => this.handleSelectColor(e, colorBtn)}
            ></button>
          ) : (
            <button
              key={index}
              className="modal-window__color-btn rounded m-1"
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
            className="modal-window__wraper border border-primary rounded-top form-group m-0 row justify-content-md-center col-lg-6 col-md-8 col-sm-10 col-12 h-50"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              className="modal-window__form d-flex flex-column p-3 container-fluid"
              onSubmit={this.handleSubmit}
            >
              <div className="modal-window__input-container row m-0">

                <div className="col-sm-12 col-md-12 col-lg-9 mb-1">
                <input
                  placeholder="Введите название товара"
                  type="text"
                  onChange={(e) => this.handleInput(e)}
                  className="w-100 h-100 modal-window__input"
                  required
                />
                </div>

                <div className="col-sm-12 col-md-12 col-lg-3 p-0">
                  <button className="btn btn-secondary" type="submit">
                    Добавить
                  </button>
                </div>
                
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
