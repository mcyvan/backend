import Link from 'next/link'
export default function Home() {
//logica de js
const name = 'Juan'
  return (
    //html
    <main className='h-screen w-screen bg-gray-500'>
        <h1 className='text-4xl text-center text-white'>Hola {name}</h1>
        <Link href="/demo" className='text-4xl text-center text-white'>
        Demo
        </Link>
    </main>    
    )
}
