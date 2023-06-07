const relacionGuia = {
    name: 'relacion_guia',
    title: 'Relacion guia',
    type: 'document',
    fields: [
        {
            name: 'descripcion',
            title: 'descripcion',
            type: 'string',
        },
        {
            name: 'ref_guia',
            title: 'REF guia',
            type: 'reference',
            to: [{type: 'guia'}]
        },
        {
            name: 'id_guia',
            title: 'ID guia',
            type: 'number',
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
    ]
}

export default relacionGuia