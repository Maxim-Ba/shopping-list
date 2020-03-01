import React from 'react';



export const Header = (props)=> {
  return(
    <header className="d-flex justify-content-start align-items-center mb-2">
    <button className='button btn btn-primary '>
      Меню
    </button>
    <h3 className=' m-0 p-0'>
      {props.titleList}
    </h3>
  </header>
  )


}