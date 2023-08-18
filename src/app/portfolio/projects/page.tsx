/** @format */

import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/config";
import Projects from "@/components/projects";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Abdul Suleiman's Portfolio / Projects",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}projects`,
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
      projects.push({
        ...doc?.data(),
        id: doc?.id,
      });
    }
  });

  return projects;
}

const Page = async () => {
  const projects = await JSON.parse(JSON.stringify(await getProjects()));

  if (!projects.length) notFound();

  return (
    <div className="container mx-auto px-0 xl:px-2rem w-full md:max-w-lg xl:max-w-xl pb-3">
      <Projects projects={projects} />
    </div>
  );
};

export default Page;
