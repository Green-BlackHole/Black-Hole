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

const CurrentUserContext = createContext<{
  _id: any;
  currentUser?: IUser;
  setCurrentUser?: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}>({
  currentUser: undefined,
  setCurrentUser: undefined,
  _id: undefined,
});

export const CurrentUserProvider: FC<CurrentUserProviderProps> = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState<IUser | undefined>();
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
