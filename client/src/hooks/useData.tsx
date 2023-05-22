import axios from "axios";
import { GetServerSidePropsContext } from "next";

export const useData = () => {
  const addData = (path: any) => {
    async function getServerSideProps(context: GetServerSidePropsContext) {
      const { query } = context;
      const { ordering = "", limit = 25, search = "", page = 0 } = query;
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `?${path}`);
      console.log("path", path);
    }
  };
  return { addData };
};
