//import React, { useState } from 'react';
import './Tarefa.css';
import Card from '../../components/card/card';
import lsTarefas from './listaTarefas';

function Tarefas() {
    return(
        <div>
            <ul className='list-tarefa'>
                {lsTarefas.map((tarefa, index) =>
                    <li key={index}>
                        <Card {...tarefa} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Tarefas;