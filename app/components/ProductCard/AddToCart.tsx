'use client';
import React from 'react'

function AddToCart() {
  return (
    <button
      className='btn btn-primary'
      onClick={() => console.log('Added to Cart')}>Add to Cart
    </button>
)
}

export default AddToCart