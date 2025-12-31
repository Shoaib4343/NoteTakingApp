import axios from 'axios';
const BASE_URL = import.meta.env.MODE === "development" ? 'http://localhost:5000/api/vi' : '/api';
const api = axios.create({
    baseURL :BASE_URL
});

// get all data
export const getApiNoteData = ()=>{
    return api.get("/notes")
}

// creat note 
export const createNewNoteApi = (data)=>{
    return api.post('/notes',data)
}


// Delete Note 
export const deleteNoteApi = (id)=>{
    return api.delete(`/notes/${id}`)
}


// get single data using id
export const singleNoteDataApi = (id)=>{
    return api.get(`/note/${id}`)
}

// update data using id
export const updateNoteDataApi = (id,data)=>{
    return api.put(`/notes/${id}`,data)
}