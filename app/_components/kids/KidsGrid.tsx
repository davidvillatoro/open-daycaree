import { kids } from "@/app/_data/kids";
import { KidCard } from "./KidCard";

export function KidsGrid() {
  return (
    <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
      {kids.map((kid) => (
        <KidCard key={kid.id} kid={kid} />
      ))}
    </div>
  );
}
