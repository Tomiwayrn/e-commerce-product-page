import React from 'react'
import minus from './assets/icon-minus.svg';
import plus from './assets/icon-plus.svg';
import cart from './assets/icon-cart.svg';

const ProductDetails = ({amount, setAmount, itemObj, setCartItems, cartItems}) => {


    React.useEffect(()=>{
       if (cartItems.length > 0) { 
        localStorage.setItem('cart',  JSON.stringify(cartItems))
    }
    }, [cartItems])
    
    const[ errMessage, setErrMessage] = React.useState('')   

    const handleClick =(e)=>{
            switch (e.target.name){
                case('plus'):
                setAmount(prev=> prev + 1)
                break;

                case('minus'):
                if(amount=== 0){
                    return
                }
                setAmount(prev => prev - 1)
                break;

                case('cart'):
                if (amount !== 0){
                setCartItems([{...itemObj
                }])
            
                }

                else if(amount === 0) {
                    setErrMessage('Please select an amount first')
                    setTimeout(()=>{
                        setErrMessage('')
                    }, 2000)
                }
                break;

            }

        
    }
  return (
    <section className='product-details' >
        <h4 className='orange'>SNEAKER COMPANY</h4>
        <h2>{itemObj.name}</h2>
        <p>
            These low-profile sneakers areyour perfect csual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
        <div className='price-info'>
            <h1>${itemObj.price}</h1>
            <h4 className='orange'>50%</h4>
            <h3>250%</h3>
        </div>

        <div className='toggle-amount'>
            <button className='minus' name='minus'
            onClick={(e)=> handleClick(e)}
            >
                <img src={minus} alt='minus' />
            </button>

            <span>{amount}</span>

            <button className='plus' name='plus'
            onClick={(e)=> handleClick(e)}
            >
            <img src={plus} alt='plus' />
            </button>
        </div>
        {errMessage && <small>{errMessage}</small>}
        <button className='cart-btn' name='cart'
        onClick={(e=> handleClick(e))}
        >
            <img src={cart} alt='cart'/> Add to Cart
        </button>
    </section>
  )
}

export default ProductDetails