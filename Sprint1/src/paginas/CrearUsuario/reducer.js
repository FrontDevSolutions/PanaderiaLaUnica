import { CREATE, UPDATE, DELETE } from "./actions"

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE:
            {
                return console.log("usuario creado");
            }
        case UPDATE:
            {
                return console.log("usuario actualizado");
            }
            
        case DELETE:
            {
                return console.log("usuario borrado");
            }
                
        default:
            return state
    }
}

export default reducer

