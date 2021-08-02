import React from "react";
import './messages.css';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerClicked: false,
      isOpenForm: false,
      messageField: '',

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
      this.props.ws.send(JSON.stringify({
        event: 'message',
        message: this.state.messageField,
        user: this.props.currentUser.id,
        email: this.props.currentUser.email,
        listID: this.props.listID
      }));
      this.setState({ messageField: '' });
    }


  }
  addForm(e) {
    this.setState({ isOpenForm: !this.state.isOpenForm });
  }
  componentDidMount() {
    this.props.getChat(this.props.listID);
    if (this.props.ws) {
      this.props.ws.onopen = (event) => {
        this.props.ws.send(JSON.stringify({
          event: 'connection',
          user: this.props.currentUser.email,
          listID: this.props.listID,
          userID: this.props.currentUser._id
        }));
        
      };
      this.props.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        // dispath сообщение в чат
        console.log(data)
        switch (data.event) {
          case 'updateUser':
            this.props.updateUser(data.users);

            break;
          case 'updateChat':
            this.props.updateChat(data.message);

            break;
          default:
            break;
        }
      };
    }
    this.props.ws && this.props.ws.send(JSON.stringify({
      event: 'firstConnect',
      listID: this.props.listID,
      userID: this.props.currentUser.id
    }));
  }
  // componentWillUnmount() {
  //   if (this.props.ws) {
  //     this.props.ws.close(1000, 'ОТКЛЮЧЕНИЕ КЛИЕНТА...');

  //   }
  // }
  render() {
    return (
      <div className="messages h-100 d-flex justify-content-start container-sm flex-grow-1">
        {              // на innerWidth > 575
        }
        {window.innerWidth > 575
          ? <aside
            className={`overflow-hidden messages__aside d-flex flex-column w-25 rounded`}
            style={{
              backgroundColor: `${this.props.titleColor}`,
            }}>
            <div className="zindex-1000" style={{
              backgroundColor: `${this.props.titleColor}`,
            }}>
              <p className="border-bottom m-1">Участники чата:</p>
              <div className="zindex-1000">
              </div>
              {this.props.users.map((user,index)=><p userid={user._id} key={index}>{user.email}</p>)}
              {/* список пользователей в этом чате */}
            </div>
            <div className={`zindex-1 messages__form-wrapper ${this.state.isOpenForm && 'messages__form-wrapper_active'}`}>
              <form className="messages__add-user-form">
                <input placeholder="E-mail..." type="text" className="messages__add-user-input" />
                <button className="btn btn-primary border">Добавить</button>
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
        <div className="messages__chat-wrapper container d-flex justify-content-start w-75 flex-column ml-1 p-0">
          <div className="messages__chat border border-dark w-100 container rounded flex-grow-1 px-0">
            {this.state.burgerClicked && <div className="">
              <aside
                className={`overflow-hidden messages__aside d-flex flex-column w-100 rounded`}
              >
                <div className="zindex-1000" style={{
                  backgroundColor: `${this.props.titleColor}`,
                }}>
                  <p className="border-bottom m-1">Участники чата:</p>
                  <div className="zindex-1000">
                  </div>

                  {/* список пользователей в этом чате */}
                </div>
                <div className={`zindex-1 messages__form-wrapper ${this.state.isOpenForm && 'messages__form-wrapper_active'}`}>
                  <form className="messages__add-user-form">
                    <input placeholder="E-mail..." type="text" className="messages__add-user-input" />
                    <button className="btn btn-primary border">Добавить</button>
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
            {this.props.chat.map((msg, index)=><p key={index}>{msg.message}{' '}{msg.email}  </p>)}
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