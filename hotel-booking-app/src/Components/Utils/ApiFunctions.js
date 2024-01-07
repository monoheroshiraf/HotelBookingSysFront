import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export async function addRoom(photo, roomType, roomPrice) {
  const formData = new FormData();
  formData.append("photo", photo);
  formData.append("roomType", roomType);
  formData.append("roomPrice", roomPrice);

  const response = await api.post("/hotel/newroom", formData);
  if (response.status === 201) {
    return true;
  } else {
    return false;
  }
}

export async function getRoomTypes() {
  try {
    const response = await api.get("/hotel/room-types");
    return response.data;
  } catch (error) {
    throw new Error("Error occurred during fetching room types from database!");
  }
}
