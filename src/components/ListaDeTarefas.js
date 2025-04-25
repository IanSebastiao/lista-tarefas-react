import { useState } from 'react';

const ListaDeTarefas = ({ tarefas, removerTarefa, editandoId, iniciarEdicao, salvarEdicao }) => {
    const [novoTexto, setNovoTexto] = useState('');

    return (
        <ul className="list-group">
            {tarefas.map(tarefa => (
                <li key={tarefa.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {editandoId === tarefa.id ? (
                        <>
                            <input
                                type="text"
                                className="form-control me-2"
                                value={novoTexto || tarefa.texto}
                                onChange={(e) => setNovoTexto(e.target.value)}
                            />
                            <button
                                className="btn btn-sm btn-success me-2"
                                onClick={() => salvarEdicao(tarefa.id, novoTexto)}
                            >
                                Salvar
                            </button>
                        </>
                    ) : (
                        <>
                            <span>{tarefa.texto}</span>
                            <div>
                                <button
                                    className="btn btn-sm btn-outline-primary me-2"
                                    onClick={() => {
                                        setNovoTexto(tarefa.texto);
                                        iniciarEdicao(tarefa.id);
                                    }}
                                >
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => removerTarefa(tarefa.id)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ListaDeTarefas;