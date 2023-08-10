/** @format */

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config";
import Projects from "@/components/projects";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const metadata = {
  title: "Abdul Suleiman's Portfolio / Projects",
};

const Page = async () => {
  const Newitems: any = [];
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        Newitems.push({
          ...doc?.data(),
          id: doc?.id,
        });
      }
    });
  } catch (error) {}

  if (!Newitems.length) notFound();

  return (
    <div className="container mx-auto px-0 xl:px-2rem w-full md:max-w-lg xl:max-w-xl pb-3">
      <Projects projects={Newitems} />
    </div>
  );
};

export default Page;
