import axios from "axios";

export const addProjectTask = (project_task, history) => async dispatch =>{
    await axios.post("http://localhost:8000/api/board",project_task);
    history.push("/");
};