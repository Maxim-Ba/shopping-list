import React from 'react';

export class ModalWindow extends React.Component{


  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.toggleModalWindow(false);
    this.props.addItem(this.props.inputValue, this.props.color);
    this.props.changeInput('');
  } 
  handleClick = ()=>{

    this.props.toggleModalWindow(false);

  }
  handleInput =(e)=>{
    this.props.changeInput(e.target.value);
  }
  render(){
    return(
      <div
        className='modal-window d-flex fixed-top justify-content-center align-items-end'
        onClick={(e)=>this.handleClick()}
      >
        <div
          className='modal-window__wraper w-50 border border-primary rounded-top h-50 '
          onClick={e=>e.stopPropagation()}
        >
          <form className='modal-window__form d-flex flex-column p-3 ' onSubmit={this.handleSubmit}>

            <div className='modal-window__input-container d-flex justify-content-between'>
            <input 
              placeholder='Введите название товара' 
              type='text' 
              onChange={this.handleInput}
              className='w-75'
            />
            <button className='btn btn-secondary'>Добавить</button>
            </div>
            <div>


            </div>
          </form>
        </div>
      </div>
    );
  }
}