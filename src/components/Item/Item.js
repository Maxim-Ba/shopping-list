import React from 'react';

export class Item extends React.Component {
  handleClick(){
    this.props.deleteItem(this.props.item, this.props.color, this.props.index);
  }
  render(){
    return (
      <div
        className='item rounded container d-flex py-1 pl-1'
        onClick={()=>this.handleClick()}
      >
        <div className='item__wrapper w-25 rounded' style={{backgroundColor: this.props.color}}></div>
        <div className='item__name w-25' >{this.props.item}</div>
      </div>
    );
  }
}