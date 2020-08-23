import React from "react"
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import ImageHotel from '../components/imageHotel'
import ContenidoInicio from '../components/contenidoInicio'
import HabitacionPreview from '../components/habitacionPreview'
import UseHabitaciones from '../hooks/use-habitaciones'

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {

  const habitaciones = UseHabitaciones();

  return (
    <Layout>
      <ImageHotel />

      <ContenidoInicio />

      <h2
        css={css`
              text-align: center;
              font-size: 4rem;
              margin-top:  4rem;
          `}
      >
        Nuestras Habitaciones
      </h2>

      <ListadoHabitaciones>
        {habitaciones.map(hab => (
          <HabitacionPreview
            key={hab.id}
            hab={hab}
          />
        ))}
      </ListadoHabitaciones>

    </Layout>
  )
}

export default IndexPage
