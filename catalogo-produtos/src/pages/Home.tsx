import { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";

function Home() {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const [imagem, setImagem] = useState("");
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");

    // Simulação de API
    useEffect(() => {
        setTimeout(() => {
            setProdutos([
                {
                    id: 1,
                    nome: "Camiseta branca",
                    preco: "79,90",
                    descricao: "Camiseta confortável para devs.",
                    imagem: "https://images.pexels.com/photos/6001415/pexels-photo-6001415.jpeg"
                },
                {
                    id: 2,
                    nome: "Caneca",
                    preco: "39,90",
                    descricao: "Ideal para café durante o código.",
                    imagem: "https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
            ]);
            setCarregando(false);
        }, 2000);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        const novoProduto = {
            id: Date.now(),
            imagem,
            nome,
            preco,
            descricao
        };

        setProdutos([...produtos, novoProduto]);

        setNome("");
        setPreco("");
        setDescricao("");
    }

    return (
        <div className="container">
            <h1>Catálogo de Produtos</h1>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="img"
                    placeholder="Imagem do produto"
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Nome do produto"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <input
                    type="number"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />

                <button type="submit">Adicionar Produto</button>
            </form>

            {/* Listagem */}
            {carregando ? (
                <p>Carregando produtos...</p>
            ) : (
                <div className="grid">
                    {produtos.map((produto) => (
                        <ProdutoCard
                            nome={produto.nome}
                            preco={produto.preco}
                            descricao={produto.descricao}
                            imagem={produto.imagem}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
