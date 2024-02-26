import React from 'react';
import  Button  from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { modifierTache,filterTache } from '../JS/Reducers/rootReducer';


const Taches = () => {

    //Utilisation de dispatch pour notifier au store un changement
    const dispatch = useDispatch();

    //Utilisation de useSelector pour accéder à l'état initial de la liste des tâches importée depuis rootReducer
    const tasks = useSelector((state) =>state.tasks.list)

    const filtre = useSelector((state) => state.tasks.filter)



    //Fonction handleEdit exécutée au clique du bouton modifier
    const handleEdit = (id , description,isDone) =>{
        // {console.log({id , description,isDone})}
        const newDescription= prompt('Nouvelle description:',  description);
        const newIsDone = prompt('Tâche effectuée:', isDone);
        // si les 2 champs sont non vides alors notifie le store du changement avec les nouvelles valeurs
      if (newDescription && newIsDone){
    //  {console.log({id,newDescription,newIsDone})}
        dispatch(modifierTache({id,newDescription,newIsDone}))
      }
    }

    const filteredTasks = () => {
        if (filtre === 'isDone') {
          return tasks.filter((task) => task.isDone);
        } else if (filtre === 'notIsDone') {
          return tasks.filter((task) => !task.isDone);
        }
        return tasks;
      };
    return (
       <>
            <div style={{display:'flex', width:'50%', backgroundColor:'goldenrod', height:'20%', margin:'10px', padding:'20px',  marginLeft:'20%',justifyContent:'space-between'}}>
            <label style={{fontSize:'120%', fontWeight:'bold'}}> Filtrer les tâches</label>
            <label><input type='radio' value='all' checked ={filtre === "all"} onChange={()=> {dispatch(filterTache('all'))}}/>Toutes</label> 
            <label><input type='radio' value='isDone' checked ={filtre === "isDone"} onChange={()=> {dispatch(filterTache('isDone'))}}/>Faites</label> 
            <label><input type='radio' value='notIsDone' checked ={filtre === "notIsDone"} onChange={()=> {dispatch(filterTache('notIsDone'))}}/>Pas Faites</label> 

            </div>
          <div style={{ display: 'flex',width:'100%', height:'800%', justifyContent: 'left', flexWrap: 'wrap', rowGap: '10px', columnGap:'20px' ,backgroundColor:'gold', padding:'10px'}}>
          
            {filteredTasks().map((value) => (
                
                <div key = {value.id}  style={{ width: '30%', height:'80%', backgroundColor:"beige", justifyContent: 'left', columnGap:'20px', padding:'10px'}} >
                    <h4>Tache N° : {value.id}</h4>
                    <p><strong>Description : </strong>{value.description}</p>
                    {value.isDone ? <p><strong>statut :</strong> Fait</p> : <p><strong>statut :</strong> Pas Fait</p>}
                    <Button style={{width:'20%', backgroundColor:'goldenrod', color:'Black', fontStyle:'bold',cursor:'pointer'}} variant='primary' onClick={()=>handleEdit(value.id,value.description,value.isDone)}>Modifier</Button>
                </div>
            ))}
           
        </div>
       </>
     
    );
}

export default Taches;
