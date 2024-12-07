import React from 'react'
import Image from 'next/image'
import "./puxada.css"


const puxada = () => {
  return (
    <div className='container'>
        <Image
          className='imagen'
          src='/puxada.png'
          alt='Puxada'
          width={100}
          height={100}
        />
        <div className='datos'>
        <h1 className='titulo'>Puxada Frontal</h1>
        <p className='series'>3 series x 12 repeticiones</p>
      </div>
    </div>
  )
}

export default puxada
