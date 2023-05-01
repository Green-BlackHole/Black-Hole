import { useCurrentUser } from "@/components/CurretnUserProvider";
import Layout from "@/components/Layout";
import { IUser } from "@/interfaces/user";
import React from "react";

export default function Profile() {
  const { currentUser }: { currentUser: IUser } = useCurrentUser();
  if (!currentUser) {
    return <>Ta nevtreegui baina!</>;
  }
  return (
    <Layout>
      {console.log("currentUser", currentUser)}
      <div className="text-3xl">profile</div>
    </Layout>
  );
}
