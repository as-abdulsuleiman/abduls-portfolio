/** @format */

import { notFound } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import ProjectDetails from "@/components/project-details";
import { db } from "@/config";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

interface ProjectProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProjectProps) {
  const docRef = doc(db, "projects", params?.id);
  const docSnap = await getDoc(docRef);
  if (docSnap?.exists()) {
    const { title } = docSnap?.data();
    return {
      title: `Abdul Suleiman's Portfolio / ${title} `,
    };
  }
}

const Page = async ({ params }: ProjectProps) => {
  try {
    const docRef = doc(db, "projects", params?.id);
    const docSnap = await getDoc(docRef);
    if (docSnap?.exists()) {
      const { title, url, banner, tech, bgColor, description } =
        docSnap?.data();
      const details = {
        title,
        url,
        banner,
        tech,
        bgColor,
        description,
      };
      return (
        <div className="container mx-auto px-0 xl:px-2rem w-full md:max-w-lg xl:max-w-xl pb-3">
          <ProjectDetails project={details} />
        </div>
      );
    } else {
      notFound();
    }
  } catch (error) {
    notFound();
  }
};

export default Page;
