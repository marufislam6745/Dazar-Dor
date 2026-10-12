import { NextResponse } from 'next/server'

import { auth } from './lib/auth'
import { headers } from 'next/headers'
import toast from 'react-hot-toast'

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session?.user) {
        return NextResponse.redirect(new URL('/signin', request.url))
    }
}

export const config = {
    matcher: ['/profile', '/product/:path'],
}