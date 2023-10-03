import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const { cart } = useSelector((state) => state)

    return (
        <div>
            <div className='flex items-center bg-slate-800 m-auto p-2 justify-evenly'>
                <NavLink to={'/'} ><h2 className='text-orange-600 text-4xl font-bold'>Shopkaro</h2></NavLink>
                <div className='flex text-lg text-white gap-4 relative '>
                    <NavLink to={'/'} >Home</NavLink>
                    <NavLink to={"/cart"}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        
                           {
                            cart.length > 0 ? 
                            ( <span className='h-5 w-5 text-center text-sm bg-orange-500  absolute -right-1 -top-1 animate-bounce  text-white rounded-full'>{cart.length}</span> ) :
                            (<></>)
                           }
                        
                        </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar