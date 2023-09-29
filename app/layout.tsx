import React from 'react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Nextjs',
}

interface children {
    children : React.ReactNode
}

export default function RootLayout( { children }: children  ) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
