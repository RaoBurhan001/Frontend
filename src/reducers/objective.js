import {
    CREATE_OBJECTIVE,
    UPDATE_OBJECTIVE,
    RETRIEVE_OBJECTIVE_QUESTIONS,
    DELETE_OBJECTIVE
} from  '../actions/type';

const initialstate=[]

const ObjectiveReducer=(objective=initialstate ,  actions )=>{

    const {type,payload}= actions;
    switch(type){
        case CREATE_OBJECTIVE:
      return [...objective, payload];

    case RETRIEVE_OBJECTIVE_QUESTIONS:
      return payload;

      case UPDATE_OBJECTIVE:
        return objective.map((ob) => {
          if (ob.id === payload.id) {
            return {
              ...ob,
              ...payload,
            };
          } else {
            return ob;
          }
        });
        case DELETE_OBJECTIVE:
      return objective.filter(({ id }) => id !== payload.id);
      default:
        return objective;

    }


}

export default ObjectiveReducer;