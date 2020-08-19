import React from 'react'
import Helmet from 'react-helmet'
import { css } from '@emotion/core'
import Navegacion from './navegacion'

const Header = () => {
    return (
        <>
            <Helmet>
                <title>Hotel Gatsby</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>

            <header
                css={css`
                    background-color: #333;
                    padding: 1rem;
                `}
            >
                <div
                    css={css`
                        max-width: 1200px;
                        margin: 0 auto;

                        @media (min-width: 768px){
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                    `}
                >
                    <h1
                        css={css`
                            color: #FFF;
                            text-align: center;
                        `}
                    >Hotel Gatsby</h1>

                    <Navegacion />

                </div>
            </header>
        </>
    );
}

export default Header;