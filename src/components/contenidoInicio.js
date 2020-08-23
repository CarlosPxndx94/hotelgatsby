import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    text-align: justify;
    text-justify: inter-word;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10rem;
    }

    p {
        line-height: 2;        
    }
`;

const ContenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
        query{
            allDatoCmsPagina(filter: { slug: {eq: "inicio"} }) {
                nodes {
                    titulo
                    contenido
                    imagen {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                    id
                }
            }
        }
    `);


    const { contenido, imagen, titulo } = informacion.allDatoCmsPagina.nodes[0];

    return (
        <>
            <h1
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top:  4rem;
                `}
            >{titulo}</h1>

            <TextoInicio>
                <p>
                    {contenido}
                </p>
                <Image fluid={imagen.fluid} />
            </TextoInicio>
        </>
    );
}

export default ContenidoInicio;