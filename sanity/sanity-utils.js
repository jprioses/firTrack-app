import { createClient, groq } from "next-sanity";
// This client is made to be abel to fetch data from the sanity studio

const client = createClient({
    projectId: 'sl9wi3dd',
    dataset: 'production',
    apiVersion: '2023-06-06',
    token: process.env.FIRTRACK_TOKEN,
    useCdn: true

})


const estado = {
    _type: 'estado',
    descripcion: 'Entregado',
    id_estado:1,
    id_referencia: 1,
    tipo_referencia: 'guia',
    fecha: '10-06-23',
    observaciones: 'Sin novedad',
}
  

export async function updatePOD(){
   return client.create(estado)
}

export async function getRemisionsID(guideId){
    return client.fetch(
        groq`*[_type == "relacion_guia" && id_guia == ${guideId}]{
            ref_remision->
        }`,
    )
}

export async function getRequest(remisionRef){
    return client.fetch(
        groq`*[_type == "relacion_remision" && ref_remision._ref in ['${remisionRef.join("','")}']]{
        ref_remision->,
        ref_linea->}`)
}

export async function getGuideData(destinyId){
    return client.fetch(
        groq`*[_type == "destino" && _id == '${destinyId}']{
        direccion,
        ciudad,
        ref_cliente->}`)
}


export async function getProducts(lineaInfo){
    const lineaRef = lineaInfo.map((ref) => ref.ref_linea._id)
    return client.fetch(
        groq`*[_type == "linea_pedido" && _id in ['${lineaRef.join("','")}']]{
        _id,
        cantidad,
        ref_producto->
        }`)
}
