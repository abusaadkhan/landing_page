import React from 'react'
const Navbar = () =>{
    return (
    <nav>
        <div className='logo'>ATools<span className='dot' >.</span></div>
        <ul id='menuList'>
            <li  ><a className='trial' href='#'>Start Free Trial</a></li>
            <li   ><a className='login' href='#' >Login</a></li>
        </ul>
        
    
    </nav>
        
    )
}

export default Navbar