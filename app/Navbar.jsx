import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-3 px-10 bg-green-700'>
            <h2 className='text-3xl font-bold'>Navbar</h2>
            <ul className='flex items-center gap-8 font-semibold'>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/product'}>Product</Link>
            </ul>
        </div>
    );
};

export default Navbar;