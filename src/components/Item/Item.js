import React from 'react';

export class Item extends React.Component {
  handleClick() {
    this.props.deleteItem(this.props.item, this.props.color, this.props.index);
  }
  render() {
    return (
      <div
        className='item rounded container d-flex py-1 pl-1'
        onClick={() => this.handleClick()}
      >
        <div className="row w-100">
          <div className='rounded col-2 col-md-1' >
            <div className='item__wrapper h-100 rounded' style={{ backgroundColor: this.props.color, minWidth:24 }}>

            </div>
          </div>
          <div className='item__name col-10 col-md-11' >
            <p className='m-0 text-left'>
              {this.props.item}
            </p>
          </div>
        </div>

      </div>
    );
  }
}