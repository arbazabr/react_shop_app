import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove, add} from '../redux/slices/CartSlice'
import { toast } from 'react-hot-toast'


function Product({ post }) {

    const { cart } = useSelector((state) => state)
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item Added To Cart")
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.success("Item Removed To Cart")
    }

    return (
        <div className='flex flex-col p-8 gap-4 shadow-lg rounded-lg m-2 hover:scale-[0.9] transition-[1s] w-80'>

            <div>
                <h2 className='text-xl truncate font-bold'>{post.title}</h2>
            </div>

            <div>
                <p className='truncate'>{post.description}</p>
            </div>

            <div>
                <img src={post.image} className='w-70 h-80' alt='This' />
            </div>

            <div className='flex justify-between items-center p-4'>
                <p className='text-orange-500 font-bold '>{post.price}</p>
                <div>
                    {
                        cart.some((p) => p.id === post.id) ?
                            (
                                <button className='h-10 font-bold w-40 text-white rounded-sm bg-black text-center outline-none' onClick={removeFromCart}>
                                    Remove Item
                                </button>
                            ) :

                            (
                                <button className='h-10 w-40 font-bold text-black rounded-sm bg-white text-center border-2 border-black border-solid' onClick={addToCart}>
                                    Add to cart
                                </button>
                            )
                    }
                </div>

            </div>

        </div>
    )
}

export default Product