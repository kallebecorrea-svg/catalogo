import Header from "./components/Header"
import Card from "./components/Card"

function App() {

  const produtos = [
    {
      id: 1,
      nome: "Mouse Gamer RGB",
      preco: 149.90,
      imagem: "MOUSE",
      categoria: "Periféricos"
    },
    {
      id: 2,
      nome: "Teclado Mecanico",
      preco: 299.90,
      imagem: "TECLADO",
      categoria: "Periféricos"
    },
    {
      id: 3,
      nome: "Monitor Gamer",
      preco: 1190.99,
      imagem: "MONITOR",
      categoria: "Monitor"
    },
    {
      id: 4,
      nome: "HeadSet Gamer",
      preco: 190.99,
      imagem: "HEADSET",
      categoria: "Áudio"
    }

  ]
  return (
    <>
      <Header />
      <section className="grip-produtos">
        {
          produtos.map((produto) => {
            return (
              <Card
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                categoria={produto.categoria}
                imagem={produto.imagem}
              ></Card>
            )
          })
        }
      </section>
    </>
  )
}

export default App
