import './CampoTexto.css'

const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }) => {

    const placeholderModificada = `${placeholder}`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto