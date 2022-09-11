import React from 'react'
import instagram from './assets/icon-instagram.svg';
import twitter from './assets/icon-twitter.svg';
import facebook from './assets/icon-facebook.svg';
import github from './assets/icon-github.svg';


const Footer = () => {
  return (
    <footer id='contact'>
        <h3>Contact</h3>
       <div>
       <button>
            <span>
                <img src={facebook} alt='fb-icon'/>
            </span>
        </button>

        <button>
            <span>
                <img src={twitter} alt='fb-icon'/>
            </span>
        </button>

        <button>
            <span>
                <img src={instagram} alt='fb-icon'/>
            </span>
        </button>

        <button>
            <span>
                <img src={github} alt='fb-icon'/>
            </span>
        </button>
       </div> 
        
    </footer>
  )
}

export default Footer