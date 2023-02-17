import Image from "next/image";
import data from "../data.json";
export default function Home() {
  return (
    <div className="flex mx-auto w-full justify-center">
      <Image
        className="rounded-full"
        src={data.avatar}
        alt={data.name}
        width={80}
        height={80}
      />
      <h1 className="font-semibold">{data.name}</h1>
    </div>
  );
}
