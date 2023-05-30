import Repo from "@/app/comps/Repo";
import RepoDirs from "@/app/comps/RepoDirs";
import Link from "next/link";

export default function page({ params }) {
  console.log(params.name);
  return (
    <div className="bg-blue-900 max-h-fit p-10 text-center text-white">
      <p>Repo details:</p>
      <Repo name={params.name} />
      <RepoDirs name={params.mame} />
    </div>
  );
}
