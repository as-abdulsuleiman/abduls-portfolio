/** @format */

import { type MetadataRoute } from "next";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/config";

type ProjectItemsProps = {
  url: string;
  bgColor: string;
  tech: {
    name: string;
  }[];
  description: string;
  title: string;
  banner: string;
  id: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

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

  const projectUrl =
    projects?.map((project: ProjectItemsProps) => {
      return {
        url: `${baseUrl}/project/${project?.id}`,
        lastModified: new Date().toISOString(),
      };
    }) ?? [];

  return [
    {
      url: process.env.NEXT_PUBLIC_METADATABASE_URL,
      lastModified: new Date().toISOString(),
    },
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date().toISOString(),
    },
    ...projectUrl,
  ];
}
