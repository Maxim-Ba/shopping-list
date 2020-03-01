import React from 'react'
import { Item } from './Item'

export class GroupItem extends React.Component {
  createItems(arr){
    return arr.map((item, index)=>{
      return <Item  key={index} index name/>
    })
  }
  render(){
    return (
      <div className=''>
      </div>
    )
  }
}