import Image from "next/image";
import data from "../data.json";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16">
      <Image
        className="rounded-full"
        src={data.avatar}
        alt={data.name}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 text-xl ">{data.name}</h1>
      <div>
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
}
