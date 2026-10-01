import { useState } from 'react';
import CampoTexto from './CampoTexto' 
import './FormularioLivro.css';
import Livro from "./Livro";

function FormularioLivro(props) {
    const [livros, setLivros] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [anoPublicacao, setAnoPublicacao] = useState("");
    const [genero, setGenero] = useState("");

    function aoEnviar(e) {
    e.preventDefault();
    
    const novoLivro = {
        id: Date.now(),
        titulo: titulo,
        autor: autor,
        anoPublicacao: anoPublicacao,
        genero: genero,
    };

    setLivros([...livros, novoLivro])

    // props.aoSalvar(livro);
    setTitulo("");
    setAutor("");
    setAnoPublicacao("");
    setGenero("");
}
    // ⬆ limpar formulário


return (
    <section className='container-formulario'>
        <form className='formulario-livro' onSubmit="{AoEnviar}">
            <h2>Cadastro de livros</h2>

            <CampoTexto label="Título" name="titulo" value={titulo} onChange={setTitulo} />
            <CampoTexto label="Autor" name="autor" value={autor} onChange={setAutor} />
            <CampoTexto label="Ano de publicação" name="anoPublicacao" value={anoPublicacao} onChange={setAnoPublicacao} />
            <CampoTexto label="Gênero" name="genero" value={genero} onChange={setGenero} />
            {/* ⬆ renderizar labels e inputs */}

            <button type='submit'></button>
        </form>

        <div>
            <h3>Livros cadastrados</h3>
        {livros.length === 0 ? (
          <p>Nenhum livro cadastrado ainda.</p>
        ) : (
          livros.map((item) => (
            <Livro key={item.id} livro={item} />
          ))
        )}
        </div>
    </section>    
);
}

export default FormularioLivro;


