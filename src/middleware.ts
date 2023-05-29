// A. Path restricted by signed in
export { default } from 'next-auth/middleware';

export const config = {
    matcher: ["/protected/:path*"]
}



/*
// B. Path restricted by role

import { withAuth } from "next-auth/middleware";
import { NextResponse } from 'next/server';

export default withAuth(
    function middleware(req){
        if(req.nextUrl. pathname.startsWith("/protected-admin-role") && req.nextauth.token?.role !== "admin"){
            return NextResponse.rewrite(
                new URL("/missing-admin-role", req.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        }
    }
)

export const config = {
    matcher: ["/protected-admin/:path*"]
}

*/