const relacionRemision = {
    name: 'relacion_remision',
    title: 'Relacion remision',
    type: 'document',
    fields: [
        {
            name: 'descripcion',
            title: 'descripcion',
            type: 'string',
        },
        {
            name: 'ref_remision',
            title: 'REF remision',
            type: 'reference',
            to: [{type: 'remision'}]
        },
        {
            name: 'id_remision',
            title: 'ID remision',
            type: 'number',
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
    ]
}

export default relacionRemision