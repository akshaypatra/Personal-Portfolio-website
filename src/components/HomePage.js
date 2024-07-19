import React from 'react'
import logo from '../IMG_20200928_102321.jpg';


export default function HomePage() {
  return (
    <section className='homepage'>
        
           <div className='description'>
            <div>
                <h1>Hello , I am Akshay Patra</h1>
                <p className='p1'> I am a  web developer,<br/>
                     Exploring the intersection of code and creativity  and  <br>
                </br>dedicated to push the boundaries of innovation in the digital realm
                </p>
                </div>   
               
           </div>

           <div className='display-picture'>
            <img src={logo} alt='user photo'/>
          </div>
        
       
    </section>
  )
}
