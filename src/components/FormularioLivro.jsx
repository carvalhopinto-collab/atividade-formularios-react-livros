import { useState } from 'react';
import CampoTexto from './CampoTexto' 
import Livro from "./Livro";

function FormularioLivro(props) {
    const [livros, setLivros] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [anoPublicacao, setAnoPublicacao] = useState("");
    const [genero, setGenero] = useState("");

    function aoEnviar(e) {
    e.preventDefault();
    const livro = {
        id: Date.now(),
        titulo: titulo,
        autor: autor,
        anoPublicacao: anoPublicacao,
        genero: genero,
    };
    props.aoSalvar(livro);
    setTitulo("");
    setAutor("");
    setAnoPublicacao("");
    setGenero("");
    }



return (
    <form className='formulario-livro' onSubmit={aoEnviar}>
        <CampoTexto label="Título" value={titulo} onChange={setTitulo} />
        <CampoTexto label="Autor" value={autor} onChange={setAutor} />
        <CampoTexto label="Ano de publicação" value={anoPublicacao} onChange={setAnoPublicacao} />
        <CampoTexto label="Gênero" value={genero} onChange={setGenero} />

        <button type="submit">Cadastrar</button>
    </form>
);
}

export default FormularioLivro;
