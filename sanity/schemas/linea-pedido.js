const lineaPedido = {
    name: 'linea_pedido',
    title: 'Linea pedido',
    type: 'document',
    fields: [
        {
            name: 'descripcion',
            title: 'Descripcion',
            type: 'string'
        },
        {
            name: 'id_linea',
            title: 'ID linea ',
            type: 'number'
        },
        {
            name: 'ref_pedido',
            title: 'Ref pedido',
            type: 'reference',
            to: [{type: 'pedido'}],
            
        },
        {
            name: 'id_pedido',
            title: 'ID pedido',
            type: 'number',
        },
        {
            name: 'ref_producto',
            title: 'REF producto',
            type: 'reference',
            to: [{type: 'productos'}]
        },
        {
            name: 'id_producto',
            title: 'ID producto',
            type: 'number',
        },
        {
            name: 'ref_destino',
            title: 'REF destino',
            type: 'reference',
            to: [{type: 'destino'}],
        },
        {
            name: 'id_destino',
            title: 'ID destino',
            type: 'number',
        },
        {
            name: 'cantidad',
            title: 'Cantidad',
            type: 'number'
        },
        {
            name: 'fecha_entrega',
            title: 'Fecha entrega',
            type: 'date'
        },
        
    ]
}

export default lineaPedido