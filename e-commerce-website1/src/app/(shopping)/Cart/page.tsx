import React from 'react'

function Cart() {
  return (
    <div className='w-screen h-screen bg-gray-300 flex justify-center items-center'>
      <div className=' bg-white w-96 h-28 rounded-lg text-center p-3'>
        <h1 className='text-2xl text-blue-300 font-medium'>
            Your Shopping Picks
        </h1>
        <p className='text-[16px] text-slate-700 font-sans'>
        Oops Your cart is empty. Start adding items you love
        </p>
      </div>
    </div>
  )
}

export default Cart
