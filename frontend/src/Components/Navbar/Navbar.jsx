import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import nav_dropdown from '../Assets/dropdown.png'
import { ShopsContext } from '../../Context/ShopsContext'
import logoo from '../Assets/logoo.jpeg'

const Navbar = ()=>{

    const [menu,setMenu]=useState("shop");
    const menuRef = useRef();
    const {getTotalCartItems} = useContext(ShopsContext);

    const dropdown_toggle =(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')

    }

    return(
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logoo} alt=""/>
               
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=''/>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>setMenu("shop")}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("fast")}><Link style={{textDecoration: 'none'}} to='/Fast'>Fast Food</Link>{menu==="fast"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("ice")}><Link style={{textDecoration: 'none'}} to='/Ice'>Ice-cream</Link>{menu==="ice"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("pastry")}><Link style={{textDecoration: 'none'}} to='/Pastry'>Pastry</Link>{menu==="pastry"?<hr/>:<></>}</li>
                <li onClick={()=>setMenu("drinks")}><Link style={{textDecoration: 'none'}} to='/Drinks'>Drinks</Link>{menu==="drinks"?<hr/>:<></>}</li>
                {/* <li onClick={()=>setMenu("kids")}><Link style={{textDecoration: 'none'}} to='/About'>About</Link>{menu==="kids"?<hr/>:<></>}</li> */}
            </ul>
            <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
                
                <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>

        </div>
    )
}
export default Navbar