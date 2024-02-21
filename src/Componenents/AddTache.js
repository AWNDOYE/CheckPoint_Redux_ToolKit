import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ajouterUneTache } from '../JS/Reducers/rootReducer';

const AddTache = () => {

    const dispatch = useDispatch()
    //Définition de l'état initial
    const [newTask , setNewTask]= useState({
        description : " ",
        isDone : 0
    })

    const handleAddTask = () => {
        // {console.log("opp",newTask.description.length)}
        if (newTask.description.length > 1 ) {
            //   {console.log(newTask)}  
            dispatch(ajouterUneTache({ id: Date.now(), description: newTask, isDone : newTask}))
            setNewTask('')
            }else{
                alert("Veuiller saisir une description")
            }
    }
    return (
        <div style={{display:'flex', width:'50%', backgroundColor:'goldenrod', height:'50%', margin:'10px', padding:'20px',  marginLeft:'20%',justifyContent:'space-between'}}>
            <label style={{fontSize:'120%', fontWeight:'bold'}}>Nouvelle Tâche</label>
            <input type='text' placeholder="saisir une nouvelle tâche"  value={newTask.description}  onChange={e => setNewTask(e.target.value)}></input>
            <input type='boolean'  placeholder='saisir 0 ou 1' value={newTask.isDone} onChange={e =>(e.target.value)}></input>
            <button onClick={handleAddTask}> Ajouter une tâche</button>
        </div>
    );
}

export default AddTache;
