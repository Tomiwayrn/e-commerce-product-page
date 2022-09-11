import React from 'react';
 import Navbar from './Navbar';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import image from './assets/image-product-1-thumbnail.jpg'

 

function App() {
  
  const [nav, shownav] = React.useState(false)
  const [amount, setAmount] = React.useState(0)
  const[addToCart, setAddToCart] = React.useState(0)
  const [showCart, setShowCart] = React.useState(false)
  const [cartItems, setCartItems]= React.useState([])
  const itemObj = {
    id: 0,
    name: 'Fall Limited Edition Sneakers',
    price: '125.00',
    img: image, 
    amount: amount
  }

  
  
  const styles = { background: 'black', zIndex: '20' }
  return (
    <> 
    
     <Navbar nav={nav} shownav={shownav} amount={amount} addToCart={addToCart}
     showCart={showCart} setShowCart ={setShowCart}
     cartItems={cartItems}
     itemObj={itemObj}
     setCartItems={setCartItems}
     /> 
  
     <ProductImage showCart={showCart} nav={nav} /> 
     <ProductDetails itemObj={itemObj} nav={nav} amount={amount} setAmount={setAmount} setAddToCart={setAddToCart}
     setCartItems={setCartItems}
     cartItems ={cartItems}
     />
   
  </>
       
 
  );
}

export default App;
