import { useState } from "react";

const Formulario = ({ adicionarTarefa }) => {
    const [texto, setTexto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!texto.trim()) return;
        adicionarTarefa(texto);
        setTexto('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3 d-flex gap-2">
            <input
                type="text"
                className="form-control"
                placeholder="Nova tarefa"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Adicionar</button>
        </form>
    );
};

export default Formulario;