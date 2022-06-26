import { createContext, Dispatch, SetStateAction } from "react";

export type User = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
};

export const UserContext = createContext<{
  userState: User | undefined;
  setUserState: Dispatch<SetStateAction<User | undefined>> | undefined;
}>({ setUserState: undefined, userState: undefined });
