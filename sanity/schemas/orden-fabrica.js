const ordenFabrica = {
    name: 'orden_fabrica',
    title: 'Orden fabrica',
    type: 'document',
    fields: [
        {
            name: 'descripcion',
            title: 'descripcion ',
            type: 'string'
        },
        {
            name: 'id_orden',
            title: 'ID orden ',
            type: 'number'
        },
        {
            name: 'ref_linea',
            title: 'REF linea',
            type: 'reference',
            to: [{type: 'linea_pedido'}]
        },
        {
            name: 'id_linea',
            title: 'ID linea',
            type: 'number',
        },
        {
            name: 'bodega',
            title: 'Bodega',
            type: 'string',
        },
        {
            name: 'estado_fabrica',
            title: 'Estado Fabrica',
            type: 'string'
        },
    ]
}

export default ordenFabrica