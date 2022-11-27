import React from 'react'
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
    <div> 
        <h2> Abogados </h2>
        <ul>
            <li>About</li>
            <li>Service</li>
            <li>Memberships</li>
        </ul>
    </div>
    <CartWidget />
    </>
  )
}

export default NavBar