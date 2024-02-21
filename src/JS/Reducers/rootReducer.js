import { createSlice } from "@reduxjs/toolkit";
// import { Edit_Task } from "../Constantes/action-type";
import Tache from "../../Componenents/Tache";

const RootReducer = createSlice({
    // Définition de l'etat initialState soit l'état initial de notre application avec comme données le composant Tache
  name: "tasks",
  initialState: {
    list: Tache,
  },

  //Définition des actions sous forme de fonction
  reducers:{
    modifierTache : (state, action) => {
        
        const {id, newDescription, newIsDone} = action.payload
        // console.log(id, newDescription, newIsDone)
        const findTask = state.list.find((value)=>value.id === id)
        if (findTask) {
            findTask.description = newDescription
            findTask.isDone =  parseInt(newIsDone)
        }
    },

    ajouterUneTache :(state, action)=>{
        state.list.push(action.payload)
    }
  }
});
export const {modifierTache, ajouterUneTache} = RootReducer.actions
export default RootReducer.reducer;


