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

const CurrentUserContext = createContext({});

export const CurrentUserProvider: FC<CurrentUserProviderProps> = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/currentUser", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setCurrentUser(res.data);
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
