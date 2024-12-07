import React from 'react'
import Image from 'next/image'


const puxada = () => {
  return (
    <div className='conteiner'>
        <Image
          className='imagen'
          src='/puxada.png'
          alt='Puxada'
          width={100}
          height={100}
        />
        <h1>Puxada Frontal</h1>
        <p>3 series x 12 repeticiones</p>
      
    </div>
  )
}

export default puxada
