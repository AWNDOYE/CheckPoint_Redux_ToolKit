import React from 'react';
import { Edit_Task } from '../Constantes/action-type';

const Action = () => {
    const EditTask = (id, description, isDone) => ({
        type : Edit_Task,
        payLoad : {id, description, isDone}
    })

    return (
        <div>

        </div>
    );
}

export default Action;
