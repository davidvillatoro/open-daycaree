import { notFound } from "next/navigation";

import { kidProfiles } from "@/app/_data/kids";
import { KidProfilePage } from "@/app/_components/kids/KidProfilePage";

export const instant = false;

export async function generateStaticParams() {  return [{ id: "mateo-fernandez" }];
}

export default async function Page({ params }: PageProps<"/kids/[id]">) {
  const { id } = await params;
  const profile = kidProfiles[id];
  if (!profile) {
    notFound();
  }
  return <KidProfilePage profile={profile} />;
}
