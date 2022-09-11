import React from 'react'
import trash from './assets/icon-delete.svg';

const Cart = ({cartItems, setCartItems, showCart}) => {

  React.useEffect(()=>{
    
setCartItems(JSON.parse(localStorage.getItem('cart')) || cartItems)

  }, [])
 
let newArr = []
const handleClick=(e)=>{
     const id = parseFloat(e.currentTarget.id)
     console.log(newArr)

      newArr = cartItems.filter(item =>{
        
        
        if(item.id !== id){
           return item
        }

        setCartItems(newArr)  
        localStorage.setItem('cart',  JSON.stringify(newArr))
         } )
}


   const items = cartItems.map((item)=>{
    return(
        <div className='item' id={cartItems.indexOf(item)}>
          <img src={item.img} alt={item.name}/>
          <div className='info'>
          <p>{item.name}</p>
          <p>{item.price} x {item.amount}      
          <b>${(item.price * item.amount).toFixed(2)}</b></p>
          </div>
          <button className='trash'
          id= {item.id}
          onClick={(e)=> handleClick(e)}
          >
          <img src={trash} alt='trash'/>
          </button>
        </div>
        
    )
   })
  return (
    <div className='cart'
    style={!showCart?{display: 'none'}:{}}
    >
        <h3>Cart</h3>
        <div className='cart-main'>
            {cartItems.length === 0 &&
            <p>
                Your cart is empty.
            </p>
            }
            {
            cartItems.length > 0 &&
             items}
             
        </div>
        {cartItems.length > 0 &&<button className='cart-btn check'>Checkout</button>}
    </div>
    
  )
}

export default Cart