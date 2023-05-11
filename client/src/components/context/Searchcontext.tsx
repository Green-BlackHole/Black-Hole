import { IMyContext } from "@/interfaces/product";
import { createContext, useState } from "react";

const MyContext = createContext<any>("");
function Searchcontext({ children }: any) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <MyContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </MyContext.Provider>
  );
}
export { MyContext, Searchcontext };
