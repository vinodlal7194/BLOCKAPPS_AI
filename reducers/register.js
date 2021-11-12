import { useDispatch } from "react-redux";

export default (register = [],action) => {
    switch(action.type){
        case 'CREATE':
            return action.payload;
        case 'UPDATE':
            return [
                ...register.filter(p => p.text !== action.payload.text), action.payload
            ]
        default:
            return register;
    }
}