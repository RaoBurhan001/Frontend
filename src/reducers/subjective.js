import {
    CREATE_SUBJECTIVE,
    UPDATE_SUBJECTIVE,
    RETRIEVE_SUBJECTIVE_QUESTIONS,
    DELETE_SUBJECTIVE
} from  '../actions/type';

const initialstate=[]

const SubjectiveReducer=(subjective=initialstate ,  actions )=>{

    const {type,payload}= actions;
    switch(type){
        case CREATE_SUBJECTIVE:
      return [...subjective, payload];

    case RETRIEVE_SUBJECTIVE_QUESTIONS:
      return payload;

      case UPDATE_SUBJECTIVE:
        return subjective.map((sub) => {
          if (sub.id === payload.id) {
            return {
              ...sub,
              ...payload,
            };
          } else {
            return sub;
          }
        });
        case DELETE_SUBJECTIVE:
      return subjective.filter(({ id }) => id !== payload.id);
      default:
        return subjective;

    }


}

export default SubjectiveReducer;