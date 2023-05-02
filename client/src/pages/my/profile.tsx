import { useCurrentUser } from "@/components/CurretnUserProvider";
import Layout from "@/components/Layout";
import { IUser } from "@/interfaces/user";
import { useRouter } from "next/router";
import React from "react";

export default function Profile() {
  const router = useRouter();

  const { currentUser }: { currentUser: IUser } = useCurrentUser();
  // if (!currentUser) {
  //   router.push('/auth/signin');
  //   return <>nevtreegu bna</>; // or any loading indicator
  // }
  React.useEffect(() => {
    if (!currentUser) {
      router.push('/auth/signin');
    }
  }, [currentUser, router]);
  return (
    <Layout>
      {console.log("currentUser", currentUser)}
      <div className="text-3xl">{currentUser.email}</div>
      <div>id:{currentUser._id}</div>
    </Layout>
  );
}