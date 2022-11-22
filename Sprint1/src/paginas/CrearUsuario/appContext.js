import { createContext, useContext, useReducer } from "react";
import reducer from "../CrearUsuario/reducer";
import { CREATE, DELETE, UPDATE } from "./actions";

export const AppContext = createContext ()
const initialState = {
    usuarios : [
        {id: 1,  name: "Alejandra", password: "1234abc"},
        {id: 2,  name: "David", password: "12345abcd"}
    ]
}
export const AppProvider = ({children}) => {
        //reducer(1)
        const [state, dispatch] = useReducer(reducer, initialState)

        const createUsuario = () => dispatch ({type: CREATE, paiLoad: "create from context"})
        const actualizarUsuario = () => dispatch ({type: UPDATE, paiLoad: "update from context"})
        const borrarUsuario = () => dispatch ({type: DELETE, paiLoad: "delete from context"})

        const values = ""
        return (
        <AppContext.Provider value={{
            usuarios : state.usuarios,
            createUsuario, actualizarUsuario, borrarUsuario, dispatch 
        }
        }>
            {children}
        </AppContext.Provider>
        )
    }
    export const useAppContext = () => {
        return useContext (AppContext)
    }
    
