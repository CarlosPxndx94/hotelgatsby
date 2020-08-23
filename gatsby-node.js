exports.createPages = async({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
    query{
        allDatoCmsHabitacion (
          sort : {
            fields: id
            order: [ASC]
          }) {
          nodes {
            slug      
          }
        }
      }
    `);

    //console.log(resultado.data.allDatoCmsHabitacion.nodes);
    if (resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    //si hay resultados
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

    habitaciones.forEach(hab => {
        actions.createPage({
            path: hab.slug,
            component: require.resolve('./src/components/habitacionDetalle.js'),
            context: {
                slug: hab.slug
            }
        });
    });
}