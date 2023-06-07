import clientes from "./clientes";
import destino from "./destino";
import guia from "./guia";
import lineaPedido from "./linea-pedido";
import ordenFabrica from "./orden-fabrica";
import pedido from "./pedido";
import pod from "./pod";
import productos from "./productos";
import relacionGuia from "./relacion-guia";
import relacionRemision from "./relacion-remision";
import remision from "./remision";

const schemas = [pedido, clientes, destino, lineaPedido, productos, ordenFabrica, pod, remision, relacionRemision, guia, relacionGuia, estado]

export default schemas