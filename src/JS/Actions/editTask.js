import { Edit_Task } from '../Constantes/action-type';
// Fonction modifier la tâche en cours
const EditTask = (id, description, isDone) => ({
    type : Edit_Task,
    payLoad : {id, description, isDone},
    
})
export default EditTask;
