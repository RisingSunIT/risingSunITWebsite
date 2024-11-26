import React from 'react'
import AddToCart from './AddToCart'
// import styles from './ProductCard.module.css' // if we want to import an external stylesheet

function ProductCard() {
  return (
    // import from stylesheet
    // <div className={styles.card}><AddToCart/></div>

    // alternatively to using external stylesheets, use tailwind and it's preexisting classes
    // <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'>
    //   <AddToCart/>
    // </div>

    // to simplify it further, use existing components from daisyui (see AddToCart component)
    <div><AddToCart/></div>
  )
}

export default ProductCard