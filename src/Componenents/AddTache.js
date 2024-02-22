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
        
        if (newTask.trim() !== '' ) {
              {console.log(newTask)}  
            dispatch(ajouterUneTache({ id: Date.now(), description: newTask, isDone : newTask}))
            setNewTask('')
            }
    
        // {console.log(newTask.description)}

        // dispatch(ajouterUneTache({description: newTask, isDone : newTask}))
        // setNewTask('')
    }

    return (
        <div style={{display:'flex', width:'50%', backgroundColor:'goldenrod', height:'50%', margin:'10px', padding:'20px',  marginLeft:'20%',justifyContent:'space-between'}}>
            <label style={{fontSize:'120%', fontWeight:'bold'}}>Nouvelle Tâche</label>
            <input type='text' value={newTask.description} placeholder='saisir une nouvelle tâche'  onChange={e => setNewTask(e.target.value)} required/>
            <input type='number' min={0} max={1} placeholder='saisir 0 ou 1' value={newTask.isDone} onChange={e =>(e.target.value)}></input>
            <button onClick={handleAddTask}> Ajouter une tâche</button>
        </div>
    );
}

export default AddTache;
