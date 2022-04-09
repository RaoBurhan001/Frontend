import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/questions" ,
  headers: {
    "Content-type": "application/json"
  }
 
});