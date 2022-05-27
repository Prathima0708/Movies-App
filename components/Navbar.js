import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-gray-700 h-11 '>
<div className='font-bold text-neutral-100 max-w-7xl mx-auto container tracking-widest  font-neue'>
    <Link href="/">
  <h5 className='text-base pt-1 cursor-pointer  md:text-2xl'> Entertainment <span className='text-red-700'>Hub</span></h5>
    </Link>
</div>
    </nav>
  )
}

export default Navbar