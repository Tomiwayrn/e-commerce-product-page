import image1 from './assets/image-product-1.jpg';
import image2 from './assets/image-product-2.jpg';
import image3 from './assets/image-product-3.jpg';
import image4 from './assets/image-product-4.jpg';
import image1thumb from './assets/image-product-1-thumbnail.jpg';
import image2thumb from './assets/image-product-2-thumbnail.jpg';
import image3thumb from './assets/image-product-3-thumbnail.jpg';
import image4thumb from './assets/image-product-4-thumbnail.jpg';
import plus from './assets/icon-previous.svg';
import minus from './assets/icon-next.svg';
import React from 'react';


export default function ProductImage({showCart}){

    
    const images = [image1, image2, image3, image4]
    const thumbnails = [image1thumb, image2thumb, image3thumb, image4thumb]
   
    const [image, setImage] = React.useState({
        index: 0
    })
   
   
  
    const [modal, setModal] = React.useState(false)
    if (modal){
        document.body.style.overflow = 'hidden'
    }

    else {
        document.body.style.overflow = ''
    }


    const increment = ()=>{
    if(image.index === 3){
        setImage({index :0})

    }

    else {
      setImage({index :image.index +1})
    }
    }

    const decrement = ()=>{
        if(image.index === 0){
            setImage({index :3})
    
        }
    
        else {
          setImage({index :image.index - 1})
        }
    }


    const handleClick =(e)=>{
      
   
       

        switch (e.target.name){
           
            case ('plus'):

             increment()
                break;

            case ('minus'):
               
               decrement()
                
                 break;
            
             case ('thumb'):
                setImage({ index: parseInt(e.target.id)})
                break;

            default:
    
                
            break;
        } }


    const thumbnailImages = thumbnails.map((item)=>{
        return(
           <img
               key={thumbnails.indexOf(item)}
               id ={thumbnails.indexOf(item)}
               className='thumb'
               onClick={(e)=> handleClick(e)}
               name ='thumb' 
               style={image.index === thumbnails.indexOf(item)?
                {border:'2px solid hsl(26, 100%, 55%)',
                    opacity:'.4' 
            }:{}}
               src={item} alt='img-thumb'/>
        )
    })

    
   


    return (
        <>
            <main className="product" >
           <div className="image-container" >
                <img src={images[image.index]} alt='img' className='product-img'
                onClick={()=>setModal(prev => !prev)}
                />
                <div className='btn-container'
                style={showCart?{display: 'none'}:{}}
                >
                       <button 
                       className='minus'
                       name='minus'
                        onClick={(e)=>handleClick(e)}                    
                    >
                    <img src={plus} alt='minus' />
                    </button>

                    <button className='plus'
                    name='plus'
                    onClick={(e)=>handleClick(e)}
                    >
                        <img src={minus} alt='plus' />
                    </button>
                    
                </div>
           </div> 

           <div className='thumbnail-container'>
           {thumbnailImages}
           </div>
     
        </main>

        {
            modal && 

            <main className=" modal" >
                <button className='close-modal' onClick={()=>setModal(false)}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg>
                </button>
           <div className="image-container" >
                <img src={images[image.index]} alt='img' className='product-img'
                
                />
                <div className='btn-container'
                style={showCart?{display: 'none'}:{}}
                >
                       <button 
                       className='minus'
                       name='minus'
                        onClick={(e)=>handleClick(e)}                    
                    >
                    <img src={plus} alt='minus' />
                    </button>

                    <button className='plus'
                    name='plus'
                    onClick={(e)=>handleClick(e)           
                    }
                    >
                        <img src={minus} alt='plus' />
                    </button>
                    
                </div>
           </div> 

           <div className='thumbnail-container'>
           {thumbnailImages}
           </div>
     
        </main>
        }
        </>
    )
}