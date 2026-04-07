import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-25'>Men Page</h2>
            <Link href={'/about/men/child'} className='underline font-bold'>Children</Link>
        </div>
    );
};

export default page;