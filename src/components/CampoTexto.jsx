import './CampoTexto.css'

function CampoTexto(props) {
    return (
        <div className="campo-texto">
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                id={props.name}
                name={props.name} 
                type={props.type || "text"} 
                value={props.value} 
                onChange={(e) => props.onChange(e.target.value)}
             />
        </div>
    )
}

export default CampoTexto


