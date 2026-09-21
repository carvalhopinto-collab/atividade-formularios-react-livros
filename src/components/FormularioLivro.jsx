import { useState } from 'react';
import CampoTexto from './CampoTexto' 

function FormularioLivro(props) {
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
        <CampoTexto label="Título" value={titulo} aoAlterar={setTitulo} />
        <CampoTexto label="Autor" value={autor} aoAlterar={setAutor} />
        <CampoTexto label="Data de publicação" value={anoPublicacao} aoAlterar={setAnoPublicacao} />
        <CampoTexto label="Gênero" value={genero} aoAlterar={setGenero} />


    </form>
);
}

export default FormularioLivro;
