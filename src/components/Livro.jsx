function Livro(props) {
    return (
        <div className="livro-card">
        <strong>Autor:</strong> {props.livro.autor}  
        <strong> Ano:</strong> {props.livro.anoPublicacao}  
        <strong> Gênero:</strong> {props.livro.genero}           
        </div>
    )
}