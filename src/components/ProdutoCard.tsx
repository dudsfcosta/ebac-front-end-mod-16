function ProdutoCard({ nome, preco, descricao, imagem }) {
    return (
        <div className="card">
            {<img src={imagem} width={200} alt={nome}/>}
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <span className="preco">R$ {preco}</span>
        </div>
    );
}

export default ProdutoCard;
