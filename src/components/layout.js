import React from 'react'
import { Global, css } from '@emotion/core'
import Header from './header'

const Layout = (props) => {
    return (
        <>
            <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                    }

                    body {
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.5;
                    }

                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }

                    h1, h2 {
                        font-family: 'Roboto', serif;
                    }

                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Header />
            {props.children}
        </>
    );
}

export default Layout;