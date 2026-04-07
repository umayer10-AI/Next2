import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-25'>About Page</h2>
            <div className='flex justify-center gap-5 underline text-amber-300 font-semibold'>
                <Link href={'/about/men'}>Men</Link>
                <Link href={'/about/women'}>Women</Link>
            </div>
        </div>
    );
};

export default page;