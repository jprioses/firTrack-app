const remision = {
    name: 'remision',
    title: 'Remision',
    type: 'document',
    fields: [
        {
            name: 'descripcion',
            title: 'descripcion ',
            type: 'string'
        },
        {
            name: 'id_remision',
            title: 'ID remision ',
            type: 'number'
        },
        {
            name: 'fecha_despacho',
            title: 'Fecha despacho',
            type: 'date',
        },
        {
            name: 'fecha_entrega',
            title: 'Fecha entrega',
            type: 'date',
        },
        {
            name: 'estado_remision',
            title: 'Estado remision',
            type: 'string'
        }
    ]
}

export default remision