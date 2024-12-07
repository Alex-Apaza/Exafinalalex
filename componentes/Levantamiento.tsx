import React from 'react'
import Image from 'next/image'

const Levantamiento = () => {
  return (
    <div className='container'>
      <Image
          className='imagen'
          src='/levanta.png'
          alt='Puxada'
          width={100}
          height={100}
        />
        <div className='datos'>
        <h1>Ramada Unilateral</h1>
        <p>3 series x 12 repeticiones</p>
        </div>
    </div>
  )
}

export default Levantamiento
