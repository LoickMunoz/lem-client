export const API_URL = "http://localhost:3001";

export function constructHeader(token) {
  return {
    headers: {
      "x-access-token": token
    }
  };
}
