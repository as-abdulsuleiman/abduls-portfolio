/** @format */

import Home from "@/components/home";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function getData() {
  let Newitems: any = [];
  const querySnapshot = await getDocs(collection(db, "projects"));
  querySnapshot.forEach((doc) => {
    if (doc.exists()) {
      Newitems.push({
        ...doc?.data(),
        id: doc?.id,
      });
    }
  });

  return Newitems;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto px-0 xl:px-2rem w-full md:max-w-lg xl:max-w-xl pb-3">
      <Home projectCount={data?.length || 4} />
    </div>
  );
}
