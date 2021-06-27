import React from "react";

class Header extends React.Component {
  handleClick =(e)=>{
    this.props.toggleMenuWindow(true);
  }
  
  render() { 
    return ( 
      <header className="d-flex justify-content-start align-items-center my-2">
      <button 
        className="button btn btn-primary" 
        style={{backgroundColor:this.props.titleColor}}
        onClick={e=>this.handleClick(e)}
      >
        Меню
      </button>
      <h3 className="m-0 p-0" style={{color:this.props.titleColor}} >{this.props.titleList}</h3>
      {true ? <div className="rounded-circle bg-primary avatar ml-auto"></div>: <img src={null} alt="avatar"/>}
    </header>
    );
  }
}

export {Header};



