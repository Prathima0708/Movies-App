import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-gray-700 h-9'>
<div className='font-bold text-neutral-100 max-w-7xl mx-auto container tracking-widest font-neue'>
    <Link href="/">
    <a className='text-base mt-5  md:text-2xl'>Entertainment <span className='text-red-700'>Hub</span></a>
    </Link>
</div>
    </nav>
  )
}

export default Navbar