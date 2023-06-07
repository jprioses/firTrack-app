export default function UpdateGuide() {
  return (
    <div>
        <form>
            <label>Descripcion</label>
            <input name="descripcion"></input>
            <label>ID Estado</label>
            <input name="id_estado"></input>
            <label>ID Referencia</label>
            <input name="id_referencia"></input>
            <label>Tipo Referencia</label>
            <input name="tipo_referencia"></input>
            <label>Fecha</label>
            <input name="fecha"></input>
            <label>Observaciones</label>
            <input name="observaciones"></input>
        </form>
    </div>
  )
}
const estado = {
  _type: 'estado',
  descripcion: 'Entregado',
  id_estado:1,
  id_referencia: 1,
  tipo_referencia: 'guia',
  fecha: '10-06-23',
  observaciones: 'Sin novedad',
}