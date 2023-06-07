const pod = {
    name: 'pod',
    title: 'POD',
    type: 'document',
    fields: [
        {
            name: 'id_pod',
            title: 'ID pod',
            type: 'number',
        },
        {
            name: 'obs',
            title: 'obs',
            type: 'string',
        },

        // {
        //     name: 'id_referencia',
        //     title: 'ID guia/remision',
        //     type: 'array',
        //     of: [
        //         {
        //             type:'reference',
        //             to: [
        //                 {type: 'guia'},
        //                 {type: 'remision'}  
        //             ]
        //         }
        //     ]
            
        // },
        // {
        //     name: 'foto',
        //     title: 'Foto prueba',
        //     type: 'image',
        //     options: {
        //         hotspot: true
        //       },
        //       fields: [
        //         {
        //           name: 'alt',
        //           type: 'string',
        //           title: 'Alt',
        //         },
        //       ]
        // },
        // {
        //     name: 'observaciones',
        //     title: 'Observaciones',
        //     type: 'string',
        // }
       
    ]
}

export default pod