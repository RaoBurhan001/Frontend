import http from "../http-common";

class ObjectiveDataService {
  getAll() {
    return http.get('/objective');
  }

  get(id) {
    return http.get(`/objective/${id}`);
  }

  create(data) {
    return http.post("/objective/create", data);
  }

  update(id, data) {
    return http.put(`/objective/${id}`, data);
  }

delete(id) {
    return http.delete(`/objective/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/subjective`);
//   }

//   findByTitle(title) {
//     return http.get(`/subjective?title=${title}`);
//   }
}

export default new ObjectiveDataService();