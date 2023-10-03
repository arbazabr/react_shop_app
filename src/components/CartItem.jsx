import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { remove } from '../redux/slices/CartSlice'

function CartItem({ item, itemIndex }) {


  const dispatch = useDispatch()

  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.error("Item remove from cart")
  }


  return (
    <div className='flex gap-10 border-b py-4 px-4 my-8 border-black border-solid items-start'>

      <div>
        <div><img src={item.image} className='h-60 w-60' /></div>
      </div>
      <div>
        <h1 className='text-lg font-bold '>{item.title}</h1>
        <p className='w-80'>{item.description}</p>
        <div className='flex justify-between p-4'>
          <p className='font-bold text-orange-500'>{item.price}</p>
          <div>
            <i onClick={removeFromCart} className="fa-solid text-red-500 bg-orange-300 p-2 rounded-full fa-trash"></i>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem