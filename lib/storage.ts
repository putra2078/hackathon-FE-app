import { User } from "@/types/api/auth.types";

const TOKEN_KEY = "token";
const USER_KEY = "user"

export const tokenStorage = {
  get(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(TOKEN_KEY);
  },
  set(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  },
  remove() {
    localStorage.removeItem(TOKEN_KEY);
  },
};

export const userStorage = {
  get(): User | null {
    if (typeof window === "undefined") return null;
    const unParsedUser = localStorage.getItem(USER_KEY)
    if(!unParsedUser){
      return null
    }
    const user = JSON.parse(unParsedUser)
    return user;
  },
  set(userData: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  },
  remove() {
    localStorage.removeItem(USER_KEY);
  },
};
