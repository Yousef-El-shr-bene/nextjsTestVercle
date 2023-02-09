// "use client"
import Link from 'next/link'
import Image from 'next/image'
export default function Move({title,id,poster_path,release_date}) {
    const imgrmove = 'https://image.tmdb.org/t/p/original'
    return<>
    <div id={id} >
        <h1 className='m-2'>title : {title}</h1>
        <h2 className='m-2'>release_date : {release_date}</h2>
        <Link href={`/${id}`} className='m-2' >
            <Image src={imgrmove + poster_path} width={100} height={100} alt={title} />
        </Link>
    </div>
    </>
}
