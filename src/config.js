export const API_URL = "http://35.180.208.138:3001";

export function constructHeader(token) {
  return {
    headers: {
      "x-access-token": token
    }
  };
}
