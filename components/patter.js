import React from 'react'
import pattern from '../public/pattern.png'
import Image from 'next/image'

export default function Pattern() {
  return (
      <div>
          
          <Image src = {pattern} alt="pattern" />
    </div>
  )
}
