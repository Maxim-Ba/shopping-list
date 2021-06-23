import React from 'react';
import { Item } from '../Item/Item';

export class GroupItem extends React.Component {
  createItems = (arr) => {
    
    return arr.items.map((item, index)=>{
      return <Item  key={index} index={index} item={item} color={arr.color} deleteItem={this.props.deleteItem}/>;
    });
  }
  render(){
    if (this.props.item.items.length===0) {
      return null;
    }
    return (
      <div className='group-items rounded border'>
        {this.createItems(this.props.item)}
      </div>
    );
  }
}