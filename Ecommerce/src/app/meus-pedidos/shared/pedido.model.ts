export interface Pedido {

    idPedido: number;
    dtCompra: string;
    vlTotalPedido: number;
    qtItensPedido: number;
    idCliente: number;
    dsStatusPedido: string;
    items: Array<PedidoItens>;
  
  }
  
  export interface ResponsePedidos {
  pedidos: Pedido[];
  }
  
  export interface PedidoItens {
  
    cdProduto: number;
    idPedido: number;
    nrItemPedido: number;
    dsProduto: string;
    vlPedidoItem: number;
  }
  
  export interface ResponsePedidosItens{
    pedidosItens: PedidoItens[];
  }
  