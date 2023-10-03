import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'

function Cart() {

    const { cart } = useSelector((state) => state)
    const [totalAmount, setTotalAmount] = useState(0);


    useEffect(() => {
        setTotalAmount(() => cart.reduce((acc, curr) => acc + curr.price, 0))

    }, [cart])



    return (
        <div>

            {
                cart.length > 0 ?
                    (
                        <div className='flex justify-evenly flex-wrap'>

                            <div >
                                {
                                    cart.map((item, index) => (
                                        <CartItem key={item.id} item={item} itemIndex={index} />
                                    ))
                                }
                            </div>

                            <div className='mt-20 flex gap-20 justify-around p-8 shadow-2xl rounded-lg bg-orange-400 h-40'>

                                <div>

                                    <div>Your Cart</div>
                                    <div>Summary</div>

                                    <p>
                                        <span className='text-lg font-bold'>Total Items : {cart.length}</span>
                                    </p>
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <p>Total Amount: {totalAmount}</p>
                                    <button className='h-10 w-30 font-bold bg-white shadow-lg rounded-lg text-center font-white '>Checkout Now</button>
                                </div>

                            </div>


                        </div>
                    ) :
                    (
                        <div className='flex flex-col mt-80 gap-2 items-center w-40 m-auto'>
                            <h1 className='text-xl font-bold'>Cart Empty</h1>
                            <NavLink to={"/"}>
                                <button className='h-10 w-40 rounded-sm font-bold text-white bg-orange-500 '>Show Now</button>
                            </NavLink>
                        </div>
                    )
            }

        </div>
    )
}

export default Cart