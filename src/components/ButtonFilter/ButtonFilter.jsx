import React from 'react'
import './ButtonFilter.css'

function ButtonFilter(props) {
  return (
    <button className='button-flex-filter'><i>{props.icon}{props.name}</i></button>
  )
}







export default ButtonFilter