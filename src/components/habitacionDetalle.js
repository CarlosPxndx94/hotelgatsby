import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacion (filter: { slug: {eq: $slug} }) {
            nodes {
                contenido      
                imagen {
                    fluid (maxWidth: 1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }      
                titulo
            }
        }
    }
`;

const HabitacionDetalle = ({
    data: { allDatoCmsHabitacion: { nodes } }
}) => {

    const {
        contenido,
        imagen,
        titulo
    } = nodes[0];
    return (
        <Layout>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 1200px;
                    width: 95%;
                `}
            >
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 4rem;
                        font-size: 3rem;
                    `}
                >{titulo}</h1>
                <p>{contenido}</p>
                <Image
                    fluid={imagen.fluid}
                ></Image>
            </main>
        </Layout>
    );
}

export default HabitacionDetalle;