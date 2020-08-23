import { graphql, useStaticQuery } from 'gatsby'

const UseHabitaciones = () => {

    const habitaciones = useStaticQuery(graphql`
    query{
        allDatoCmsHabitacion (
          sort : {
            fields: id
            order: [ASC]
          }) {
          nodes {
            contenido
            id
            imagen {
              fluid (maxWidth: 1200) {
                ...GatsbyDatoCmsFluid
              }
            }
            slug
            titulo
          }
        }
      }
    `)

    return habitaciones.allDatoCmsHabitacion.nodes.map(habitacion => ({
        contenido: habitacion.contenido,
        id: habitacion.id,
        imagen: habitacion.imagen,
        slug: habitacion.slug,
        titulo: habitacion.titulo,
    }))
}

export default UseHabitaciones;