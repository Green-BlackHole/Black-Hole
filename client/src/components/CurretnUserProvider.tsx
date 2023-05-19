import { IUser } from "@/interfaces/user";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Children,
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface CurrentUserProviderProps {
  children: ReactNode;
}

interface CurrentUserContextType {
  currentUser?: IUser;
  setCurrentUser: (e: any) => void;
}

const CurrentUserContext = createContext<CurrentUserContextType>(
  {} as CurrentUserContextType
);

export const CurrentUserProvider: FC<CurrentUserProviderProps> = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState<IUser>();
  useEffect(() => {
    axios
      .get("http://localhost:8000/currentUser", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setCurrentUser(res.data);
        console.log("user-iig set hiilee..", res.data);
      })
      .catch((e) => {
        console.error(e);
        setCurrentUser(undefined);
      });
  }, []);
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => useContext(CurrentUserContext);
