import {
    CREATE_OBJECTIVE,
    UPDATE_OBJECTIVE,
    RETRIEVE_OBJECTIVE_QUESTIONS,
    DELETE_OBJECTIVE
} from  './type';

import ObjectiveDataService  from '../services/objective-service';
//import SubjectiveQuestion from '../components/subjectivequestion';

export const createObjectiveQuestion = ( description, option1, option2, option3, option4, teacher,code,course) => async (dispatch) => {
  console.log(teacher,code,course)  
  try {
      const res = await ObjectiveDataService.create({  description , option1, option2, option3, option4, teacher,code,course });
  
      dispatch({
        type: CREATE_OBJECTIVE,
        payload: res.data,
      });
      console.log(res);
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };


  export const retrieveObjectives = () => async (dispatch) => {
    try {
      const res = await ObjectiveDataService.getAll();
  
      dispatch({
        type: RETRIEVE_OBJECTIVE_QUESTIONS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };


  
  export const updateObjective = (id, data) => async (dispatch) => {
    try {
      const res = await ObjectiveDataService.update(id, data);
  
      dispatch({
        type: UPDATE_OBJECTIVE,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const deleteObjective = (id) => async (dispatch) => {
    try {
      await ObjectiveDataService.delete(id);
  
      dispatch({
        type: DELETE_OBJECTIVE,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };