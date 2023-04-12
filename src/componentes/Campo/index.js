import './Campo.css'

const Campo = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }) => {

    const placeholderModificada = `${placeholder}`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default Campo