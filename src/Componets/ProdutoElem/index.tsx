type ProdutoDest = {
    Nome: string;
    Descricao: string;
    Preco: number;
    Estoque: number;
}
export const ProdutoElem: React.FC<ProdutoDest> = ({Nome, Descricao, Preco, Estoque}) => {
    return (
        <div>
            <td>{Nome}</td>
            <td>{Descricao}</td>
            <td>R$ {Preco}</td>
            <td>{Estoque}</td>
        </div>
    )
}