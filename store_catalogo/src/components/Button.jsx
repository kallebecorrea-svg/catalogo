import "./Button.css"

// Botão reutilizável dos cards
export default function Button({titulo}){
    return(
        <button className="button">
            {titulo}
        </button>
    )
}