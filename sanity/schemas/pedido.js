const pedido = {
    name: 'pedido',
    title: 'Pedidos',
    type: 'document',
    fields: [
        {
            name: 'descripcion',
            title: 'Descripcion',
            type: 'string'
        },
        {
            name: 'id_pedido',
            title: 'ID pedido',
            type: 'number'
        },
        {
            name: 'id_cliente',
            title: 'ID cliente',
            type: 'number',
        },
        {
            name: 'ref_cliente',
            title: 'Ref cliente',
            type: 'reference',
            to: [{type: 'clientes'}]
        },
    ]
}

export default pedido