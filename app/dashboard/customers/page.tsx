import { Metadata } from 'next';
import React from 'react'
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Customers',
};

const page = () => {
    return (
        <div>Customers Page</div>
    )
}

export default page