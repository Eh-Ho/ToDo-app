import type { LoginRequest, LoginResponse, SignUpRequest } from "../types/Auth";
import { ENDPOINTS } from "../utils/apiConfig";

export const login = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  const response = await fetch(ENDPOINTS.auth.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const result = await response.json();
  console.log(result);
  return result;
};

export const signup = async (credentials: SignUpRequest) => {
  const response = await fetch(ENDPOINTS.auth.signup, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const result = await response.json();
  console.log(result);
  return result;
};
