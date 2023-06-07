const destino = {
    name: 'destino',
    title: 'Destino',
    type: 'document',
    fields: [
        {
            name: 'descripcion',
            title: 'Descripcion',
            type: 'string'
        },
        {
            name: 'id_destino',
            title: 'ID destino',
            type: 'number'
        },
        {
            name: 'ref_cliente',
            title: 'Ref cliente',
            type: 'reference',
            to: [{type: 'clientes'}]
        },
        {
            name: 'id_cliente',
            title: 'ID cliente',
            type: 'number',
        },
        {
            name: 'direccion',
            title: 'Direccion',
            type: 'string',
        },
        {
            name: 'ciudad',
            title: 'Ciudad',
            type: 'string'
        },
    ]
}

export default destino