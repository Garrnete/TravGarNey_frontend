import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api", // backend port
});

// Trip endpoints
export const getTrips = () => api.get("/trips");
export const getTrip = (id) => api.get(`/trips/${id}`);
export const createTrip = (tripData) => api.post("/trips", tripData);
export const updateTrip = (id, tripData) => api.put(`/trips/${id}`, tripData);
export const deleteTrip = (id) => api.delete(`/trips/${id}`);

export default api;

