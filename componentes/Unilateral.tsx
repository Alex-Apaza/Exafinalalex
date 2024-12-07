import React from 'react'
import Image from 'next/image'

const Unilateral = () => {
  return (
    <div className='container'>
      <Image
          className='imagen'
          src='/unilateral.png'
          alt='Puxada'
          width={100}
          height={100}
        />
        <div className='datos'>
        <h1 className='titulo'>Ramada Unilateral</h1>
        <p className='series'>3 series x 12 repeticiones</p>
        </div>
    </div>
  )
}

export default Unilateral
