export interface Cartao {
    idCartaoCredito: number;
    nrNumeroCartao: number;
    nmNomeTitular: string;
    idCliente: number;
}

export interface ResponseCartao {
    cartoes: Cartao[];
}