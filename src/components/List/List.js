import React from 'react'
import { GroupItem } from '../GroupItem'

export class List extends React.Component {
  constructor(props){
    super(props)
    this.props = props
    console.log(props)
  }
  createGroupItems = (arr)=>{
    return arr.map((item, index)=>{
      return <GroupItem  key={index} index/>
    })
  }
  render(){
    return(
      <section className='list border border-dark flex-grow-1'>
        <div className='top'>
          {this.createGroupItems(this.props.groups)}
        </div>
        <div className='bottom'>

        </div>
      </section>
  )}
  
}