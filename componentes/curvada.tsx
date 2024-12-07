import React from 'react'
import Image from 'next/image'

const curvada = () => {
  return (
    <div className='container'>
      <Image
          className='imagen'
          src='/curvada.png'
          alt='curvada'
          width={100}
          height={100}
        />
        <h1>Remada Curvada</h1>
        <p>3 series x 12 repeticiones</p>
    </div>
  )
}

export default curvada
