import Logo from './assets/logo.svg';
import userImg from './assets/image-avatar.png'
import cart from './assets/icon-cart.svg'
import hamburger from './assets/icon-menu.svg';
import close from './assets/icon-close.svg'
import React from 'react';
import Cart from './Cart';


export default function Navbar({nav, shownav, amount, showCart, setShowCart, addToCart, cartItems, setCartItems, itemObj}){
  
       
        
         function handleClick (){
            shownav(prevState => !prevState)
          
        }

       let show = nav? 'flex' : '';

       if(nav){
        document.body.style.overflow = 'hidden'
      
       }

       else {
        document.body.style.overflow = ''
         
       }
       
      const styles = { background: 'rgba(1, 1, 3, 0.6)'  }

            return(
                <div>
                    <nav >
                      <div className='nav-header'>  
                    { !nav && 
                             <button className='nav-btn' onClick={handleClick}>
                                <img src={hamburger} alt="hamburger-icon"/>
                                </button>
                        }
                        { nav && 
                             <button className='nav-btn close' onClick={handleClick}>
                                <img src={close} alt="close-icon" />
                                </button>
                        }
                        <img src={Logo} alt='logo' className='navlogo' />

                    </div>
                       
                         <div className='navlinks' 
                         style={{display: show}}>
                            <ul>
                             <li onClick={()=> shownav(false)}><a href='#about'>Men</a></li>

                             <li  onClick={()=> shownav(false)}>
                                <a href='#languages'>Women</a>
                                
                            </li>

                             <li  onClick={()=> shownav(false)}>
                                <a href='#tool'>About</a>
                            </li>

                             <li  onClick={()=> shownav(false)}>
                                <a href='#contact'> Contact</a>
                            </li>  
  

                            </ul>
                        </div>
                        
                        <div className='user-info'>
                            <button
                            
                            onClick={()=> setShowCart(prev => !prev)}>
                                <img src={cart} alt='cart' />
                                
                            { cartItems.length > 0 && <p className='cart-value'>{cartItems.length}</p> }
                            </button>
                            <img src={userImg} alt='avatar'className='user' />

                        </div>
                        <Cart addToCart={addToCart}
                        showCart ={showCart}
                        itemObj={itemObj}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        />
                    </nav>
                </div>
            )
}