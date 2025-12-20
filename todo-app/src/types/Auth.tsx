export type Role = "user" | "admin";
export type User = {
  name: string;
  email: string;
  role: Role;
  _id: string;
  token: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
};

export type AuthAction =
  | { type: "login"; user: User; token: string }
  | { type: "logout" }
  | { type: "setUser"; user: User }
  | { type: "setToken"; token: string | null };
