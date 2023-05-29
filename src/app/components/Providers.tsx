"use client";

import React from 'react';
import { SessionProvider } from 'next-auth/react';
interface Props{
    children: React.ReactNode;
}

const Providers = ({children}:Props) => {
    return (
        <SessionProvider basePath="/api/auth">{children}</SessionProvider>
    )
}

export default Providers;