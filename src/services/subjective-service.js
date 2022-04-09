import http from "../http-common";

class SubjectiveDataService {
  getAll() {
    return http.get("/subjective");
  }

  get(id) {
    return http.get(`/subjective/${id}`);
  }

  create(data) {
    return http.post("/subjective/create", data);
  }

  update(id, data) {
    return http.put(`/subjective/${id}`, data);
  }

delete(id) {
    return http.delete(`/subjective/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/subjective`);
//   }

//   findByTitle(title) {
//     return http.get(`/subjective?title=${title}`);
//   }
}

export default new SubjectiveDataService();