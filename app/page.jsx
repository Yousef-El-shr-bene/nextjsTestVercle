import Move from "./Move"
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
const res = await data.json()
// console.log(res)
  return (
    <main>
      <h1 className="bg-slate-600">home page</h1>
      <a href="/ultmetpage">to ultmetpage</a>
      <div className="grid gap-16 grid-cols-fluid" >
      {res.results.map((move)=>{
        return <>
            <Move
            key={move.id}
            id={move.id} 
            title={move.title} 
            poster_path={move.poster_path}
            release_date={move.release_date}
            />
      
        </>
      })}
      </div>
    </main>
  );
}
