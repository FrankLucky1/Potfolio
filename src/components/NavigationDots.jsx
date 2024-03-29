import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {['home', 'work', 'skills', 'testimonials','about', 'contact'].map((item, index)=>(
            <a 
            key={item + index}
            href={`#${item}`}
            className='app__navigation-dot'
            style={active === item ? {backgroundColor: "#313BAC"} : {}}
            >{null} </a>
        ))}
    </div>
  )
}

export default NavigationDots