"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const page = () => {

    const {id} = useParams()

    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-25'>{id} Page</h2>
        </div>
    );
};

export default page;