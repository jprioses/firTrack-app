const estado = {
    name: 'estado',
    title: 'Estado',
    type: 'document',
    fields: [
        {
            name: 'descripcion',
            title: 'Descripcion',
            type: 'string'
        },
        {
            name: 'id_estado',
            title: 'id_estado',
            type: 'number'
        },
        {
            name: 'id_referencia',
            title: 'ID guia/remision',
            type: 'number'
        },
        {
            name: 'tipo_referencia',
            title: 'Tipo referencia',
            type: 'string'
        },
        {
            name: 'fecha',
            title: 'Fecha Actualizacion',
            type: 'date'
        },
        {
            name: 'observaciones',
            title: 'observaciones',
            type: 'text'
        },


    ]
}

export default estado