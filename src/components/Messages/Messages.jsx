import React from "react";
import { Redirect } from "react-router-dom";
import './messages.css';
import { updateChatWS, updateUserWS } from '../../websocket/websocket.js';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerClicked: false,
      isOpenForm: false,
      messageField: '',
      newUserInput:''
    };
  }
  handleClickBurger(e) {
    this.setState({ burgerClicked: !this.state.burgerClicked, isOpenForm: false });
  }
  setFieldValue(e) {
    this.setState({ messageField: e.target.value });
  }
  sendMessageHandle(e) {
    e.preventDefault();
    if (this.props.ws) {
      updateChatWS(this.props.ws, this.state.messageField, this.props.currentUser.id, this.props.currentUser.email, this.props.listID);
      this.setState({ messageField: '' });
    }
  }

  addNewUser(e){
    e.preventDefault();
    updateUserWS(this.props.ws, this.props.listID, this.state.newUserInput);
    this.setState({newUserInput:''});
  }
  addForm(e) {
    this.setState({ isOpenForm: !this.state.isOpenForm });
  }
  componentDidMount() {
    if (this.props.isAuth) {
      this.props.getChat(this.props.listID);
    }
    // if (this.props.ws) {
    //   this.props.ws && this.props.listID && firstConnectWS(this.props.ws, this.props.listID, this.props.currentUser.id, this.props.currentUser.email);
    // }
    

  }


  render() {
    return (
      <div className="messages h-100 d-flex justify-content-start container-sm flex-grow-1">
        {!this.props.isAuth && <Redirect to="/profile" />}
        {              // на innerWidth > 575
        }
        {window.innerWidth > 575
          ? <aside
            className={`overflow-hidden mh-100  messages__aside d-flex flex-column w-25 rounded`}
            style={{
              backgroundColor: `${this.props.titleColor}`,
            }}>
            <div className="zindex-1000" style={{
              backgroundColor: `${this.props.titleColor}`,
            }}>
              <p className="border-bottom m-1">Участники чата:</p>
              <div className="zindex-1000">
              </div>
              {this.props.users.map((user, index) => <p userid={user._id} key={index}>{user.email}</p>)}
              {/* список пользователей в этом чате */}
            </div>
            <div className={`zindex-1 messages__form-wrapper ${this.state.isOpenForm && 'messages__form-wrapper_active'}`}>
              <form className="messages__add-user-form">
                <input value={this.state.newUserInput} placeholder="E-mail..." type="text" className="messages__add-user-input" onChange={e=>this.setState({newUserInput:e.target.value})}/>
                <button 
                  className="btn btn-primary border"
                  onClick={e=>this.addNewUser(e)}
                >
                  Добавить</button>
              </form>
              <button className="btn btn-dark border m-1 messages__add-user"
                style={{
                  backgroundColor: `${this.props.titleColor}`,
                }}
                onClick={e => this.addForm(e)}
              >
                Добавить участника
              </button>
            </div>
          </aside>
          : <button
            className={`btn-burger d-flex flex-column justify-content-around align-items-center `}
            style={{
              backgroundColor: `${this.props.titleColor}`,
            }}
            onClick={e => this.handleClickBurger(e)}
          >
            <div className="btn-burger__item"></div>
            <div className="btn-burger__item"></div>
            <div className="btn-burger__item"></div>
          </button>
        }
        {              // на innerWidth менее 575
        }
        <div className="messages__chat-wrapper container d-flex justify-content-start w-75 flex-column ml-1 p-0 overflow-hidden">
          <div className="messages__chat border border-dark w-100 container rounded flex-grow-1 px-0">
            {this.state.burgerClicked && <div className="">
              <aside
                className={`overflow-hidden mh-100 messages__aside d-flex flex-column w-100 rounded`}
              >
                <div className="zindex-1000" style={{
                  backgroundColor: `${this.props.titleColor}`,
                }}>
                  <p className="border-bottom m-1">Участники чата:</p>
                  <div className="zindex-1000">
                  </div>
                  {this.props.users.map((user, index) => <p userid={user._id} key={index}>{user.email}</p>)}
                  {/* список пользователей в этом чате */}
                </div>
                <div className={`zindex-1 messages__form-wrapper ${this.state.isOpenForm && 'messages__form-wrapper_active'}`}>
                  <form className="messages__add-user-form">
                    <input placeholder="E-mail..." type="text" className="messages__add-user-input" onChange={e=>this.setState({newUserInput:e.target.value})}/>
                    <button 
                      className="btn btn-primary border"
                      onClick={e=>this.addNewUser(e)}
                    >Добавить</button>
                  </form>
                  <button className="btn btn-dark border m-1 messages__add-user"
                    style={{
                      backgroundColor: `${this.props.titleColor}`,
                    }}
                    onClick={e => this.addForm(e)}
                  >
                    Добавить участника
                  </button>
                </div>

              </aside>
            </div>
            }
            {/* <div>сообщения</div> */}
            {this.props.chat.map((msg, index) => <div
              key={index}
              className={`${(msg.userID === this.props.currentUser.id) ? "text-right" : "text-left"} `}
            >
              <span
                className={`  font-weight-normal`}
              >
                <span className="font-italic">
                  {msg.email}{' :'}
                </span>
                {msg.message}
              </span>
            </div>
            )}
          </div>



          <form className="messages__chat-input-wrapper d-flex mt-1 row w=100">
            <div className="col-12 col-sm-9 pr-sm-1 pr-md-3">
              <input
                type="text"
                value={this.state.messageField}
                className="messages__chat-input form-control "
                placeholder="Наберика текст ..."
                onChange={e => this.setFieldValue(e)}
              />
            </div>

            <div className="col-12 col-sm-3 p-sm-0 px-md-3">
              <button
                className="messages__btn btn btn-primary p-0 h-100 w-100"
                style={{
                  backgroundColor: `${this.props.titleColor}`,
                }}
                onClick={e => this.sendMessageHandle(e)}
              >
                Отправить
              </button>
            </div>


          </form>
        </div>
      </div>
    );
  }
}

export { Messages };