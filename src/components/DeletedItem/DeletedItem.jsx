import React from "react";




class DeletedItem extends React.Component {
  handleClick = ()=>{
    this.props.addItem(this.props.item.items, this.props.item.color);
    this.props.removeFromDeleted(this.props.item.items, this.props.item.color);
  }
  render() { 
    return ( 
      
      <div className="deleted-item alert-dark rounded mb-1" onClick={this.handleClick}>
        {this.props.item.items}
      </div>
    );
  }
}
export default DeletedItem;