import {getGuideData, getRequest, getProducts, getRemisionsID, updatePOD } from "@/sanity/sanity-utils"
import UpdateGuide from "./updateGuide"

export default async function Modify() {

    const idGuia = 2
    const remisionsRef = await getRemisionsID(idGuia)
    const requestLines = await getRequest(remisionsRef.map((ref) => ref.ref_remision._id))
    const destinyInfo = await getGuideData(requestLines[0].ref_linea.ref_destino._ref)
    const productsInfo = await getProducts(requestLines)

    const guideInfo = {
        guideId: idGuia,
        city: destinyInfo[0].ciudad,
        direction: destinyInfo[0].direccion,
        client: destinyInfo[0].ref_cliente.nombre_cliente,
        shipmentDate: remisionsRef[0].ref_remision.fecha_despacho,
        deliveryDate: remisionsRef[0].ref_remision.fecha_entrega,

    }

    const remisionData = remisionsRef.map((rem) => {
        let id=rem.ref_remision.id_remision 
        const requestLinesId = requestLines.filter(ref => ref.ref_remision.id_remision == id).map(ref => ref.ref_linea._id)
        const productList = productsInfo.filter(product => requestLinesId.includes(product._id))
        return {remisionId:id, 
                products: productList.map(product => product.ref_producto.nombre_producto),
                quantity:  productList.map(product => product.cantidad),
                unity: productList.map(product => product.ref_producto.unidad),
            }
    }) 

    const updateState = await updatePOD()
    
    guideInfo.remision = remisionData

    return (
        <div className="track__container">
            <div><span><b>Numero de guia:</b> </span> <span>{guideInfo.guideId}</span></div>
            <div><span><b>Lugar destino:</b> </span> <span>{guideInfo.city}</span></div>
            <div><span><b>Dirección destino:</b> </span> <span>{guideInfo.direction}</span></div>
            <div><span><b>Cliente:</b> </span> <span>{guideInfo.client}</span></div>
            <div><span><b>Fecha despacho:</b> </span> <span>{guideInfo.shipmentDate}</span></div>
            <div><span><b>Fecha entrega:</b> </span> <span>{guideInfo.deliveryDate}</span></div>
            <div><span><b>Estado guía</b> </span> <span>En camino</span></div>
            <h3>Remisiones</h3>

            <div className="remision__container">
                {
                    guideInfo.remision.map((item) => (
                    <div className="remision__content" key={item.remisionId}>
                        <div><span><b>Remision:</b> </span> <span>{item.remisionId}</span></div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Productos</th>
                                    <th>Cantidad</th>
                                    <th>Unidad</th>
                                </tr>
                                {item.products.map((products, index) => (
                                    <tr key={index}>
                                        <td>{item.products[index]}</td>
                                        <td>{item.quantity[index]}</td>
                                        <td>{item.unity[index]}</td>
                                    </tr>
                                ))} 
                
                            </tbody>
                        </table>
                    </div> 
                    ))
                }
                    
                
            </div>
            <UpdateGuide/>
            <button>Actualizar GUIA</button>
            <button>Subir PODs</button>
        </div>

    )
  }