import React from 'react'

const Header2 = () => {

    const List = [
        {
            name:'Banglore'
        },
        {
            name:'Chennai'
        },
        {
            name:'Delhi'
        },
        {
            name:'Gurgaon'
        },
        {
            name:'Hydrabad'
        },
        {
            name:'Kolkata'
        },
        {
            name:'Mumbai'
        },
        {
            name:'Noida'
        },
        {
            name:'Pune'
        },
    ]


  return (
    <div className='flex px-10 py-3 bg-gray-100 justify-between'>
        {
            List.map((e)=>{
                return (
                    <span key={e.name}>{e.name}</span>
                )
            })
        }
    </div>
  )
}

export default Header2