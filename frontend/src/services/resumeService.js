import API from "../api/axios";

export const deleteResume = async (id) => {
  return await API.delete(`/resume/${id}`);
};

export const analyzeResume = async (id) => {
  return await API.get(`/ai/${id}`);
};