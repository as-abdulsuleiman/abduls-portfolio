/** @format */

import Home from "@/components/home";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/config";

export const metadata = {
  title: "Abdul Suleiman's Portfolio",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
  },
};

async function getProjects() {
  let projects: any = [];
  const projectRef = query(
    collection(db, "projects"),
    orderBy("timestamp", "desc")
  );
  const querySnapshot = await getDocs(projectRef);
  querySnapshot.forEach((doc) => {
    if (doc.exists()) {
      projects?.push({
        ...doc?.data(),
        id: doc?.id,
      });
    }
  });

  return projects;
}

export default async function Page() {
  const projects = await JSON.parse(JSON.stringify(await getProjects()));

  return (
    <div className="container mx-auto px-0 w-full md:max-w-lg lg:max-w-lg xl:max-w-xl pb-3">
      <Home projects={projects} projectCount={projects?.length || 4} />
    </div>
  );
}
