/** @format */

import ProjectModal from "@/components/project-modal";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config";

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
      title: `Abdul Suleiman's Portfolio / Project  `,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}project/${params?.id}`,
      },
    };
  }
}

const Page = async ({ params }: ProjectProps) => {
  return <ProjectModal params={params} />;
};

export default Page;
