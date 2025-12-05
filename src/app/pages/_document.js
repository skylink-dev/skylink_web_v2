import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Roboto:wght@400;500&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Manrope:wght@200..800&family=Montserrat:wght@100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}