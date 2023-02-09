// "use client"
import { Image } from "next/image";
export default async function MovieDetails({ params }) {
  const { movee } = params;
  const imgrmove = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movee}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <>
      <div>
        <div className="bg-zinc-400">
          <h2 className="text-2xl">{res.title}hh</h2>
          <h2 className="text-lg">{res.title}</h2>
          <h2>run time : {res.runtime}minets</h2>
          <h2>{res.status}</h2>
          {/* <Image
            className="my-12"
            src={imgrmove + res.poster_path}
            width={1000}
            height={1000}
          /> */}
        </div>
      </div>
    </>
  );
}
