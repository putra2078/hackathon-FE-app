import { User } from "@/types/api/auth.types";

const ACC_TOKEN_KEY = "acc-token";
const REFRESH_TOKEN_KEY = "refresh-token";
const USER_KEY = "user"

export const accessTokenStorage = {
  get(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(ACC_TOKEN_KEY);
  },
  set(accToken: string) {
    localStorage.setItem(ACC_TOKEN_KEY, accToken);
  },
  remove() {
    localStorage.removeItem(ACC_TOKEN_KEY);
  },
};
export const refreshTokenStorage = {
  get(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },
  set(refreshToken: string) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  },
  remove() {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
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
