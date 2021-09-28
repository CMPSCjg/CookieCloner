import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function FontAdjust() {
    return (
        <Head>
            <title>Cookie Cloner</title>
            <link rel="icon" href="/favicon.ico" />
            <link
            rel="preconnect" 
            href="https://fonts.googleapis.com"
            crossOrigin="true"
            />
            <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Gluten:wght@400&display=swap"
            />
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Gluten:wght@400&display=swap"
            media="print"
            // @ts-ignore
            onLoad="this.media='all'"
            />
            <noscript>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Gluten:wght@400&display=swap"
            />
            </noscript>
        </Head>
    )
}
