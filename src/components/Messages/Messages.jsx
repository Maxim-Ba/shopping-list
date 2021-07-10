import React from "react";

class Messages extends React.Component {
  render() {
    return (
      <div className="messages h-100 d-flex justify-content-start container-sm flex-grow-1">
        <aside
          className="messages__aside d-flex flex-column w-25 rounded"
          style={{
            backgroundColor: `${this.props.titleColor}`,
            }}>
        </aside>
        <div className="messages__chat-wrapper container d-flex justify-content-start w-75 flex-column">
          <div className="messages__chat border border-dark w-100 container rounded flex-grow-1">
          </div>
          <form className="messages__chat-input-wrapper d-flex mt-1">
            <input
              type="text" 
              className="messages__chat-input form-control" 
              placeholder="Наберика текст ..."
            />
            <button className="messages__btn btn btn-primary ml-1"> Отправить</button>
          </form>
        </div>
      </div>
    );
  }
}

export { Messages };