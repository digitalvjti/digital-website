import React from 'react'


const Title:React.FC<boolean | any> = ({title}) => {
    console.log(title);
  return (
    <>
        <div className='grid items-center'>
            <h1 className=' lg:text-4xl md:text-3xl text-5xl font-bold
            text-white filter'>{title}</h1>
        </div>
    </>
  )
}

export default Title