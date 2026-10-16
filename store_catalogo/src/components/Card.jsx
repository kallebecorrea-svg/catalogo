import Button from "./Button"
import "./Card.css"

// Card de cada produto do catálogo
export default function Card(
    {
        imagem,
        categoria,
        nome,
        preco,
        precoAntigo
    }
) {
    // Classe usada para aplicar a cor da categoria
    const categoriaClasse = categoria;

    // Formata o preço em moeda brasileira
    const precoFormatado = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(preco);

    return (
        <article className="card">
            <div className={`categoria ${categoriaClasse}`}>
                <span>{categoria}</span>
            </div>
            <div className="informacao">
                <h1 className="imagem">{imagem}</h1>
                <h2 className="nome">{nome}</h2>
                <h1 className="preco">{precoFormatado}</h1>
                {precoAntigo && <span className="preco-antigo">de {new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(precoAntigo)}</span>}
            </div>

            <Button titulo={"Comprar"}></Button>
        </article>
    )
}