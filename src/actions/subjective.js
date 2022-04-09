import {
    CREATE_SUBJECTIVE,
    UPDATE_SUBJECTIVE,
    RETRIEVE_SUBJECTIVE_QUESTIONS,
    DELETE_SUBJECTIVE
} from  './type';

import SubjectiveDataService  from '../services/subjective-service';
//import SubjectiveQuestion from '../components/subjectivequestion';

export const createSubjectiveQuestion = ( description, answer, category) => async (dispatch) => {
    try {
      const res = await SubjectiveDataService.create({  description , answer , category });
  
      dispatch({
        type: CREATE_SUBJECTIVE,
        payload: res.data,
      });
      console.log(res);
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const retrieveTutorials = () => async (dispatch) => {
    try {
      const res = await SubjectiveDataService.getAll();
  
      dispatch({
        type: RETRIEVE_SUBJECTIVE_QUESTIONS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const updateTutorial = (id, data) => async (dispatch) => {
    try {
      const res = await SubjectiveDataService.update(id, data);
  
      dispatch({
        type: UPDATE_SUBJECTIVE,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const deleteTutorial = (id) => async (dispatch) => {
    try {
      await SubjectiveDataService.delete(id);
  
      dispatch({
        type: DELETE_SUBJECTIVE,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };