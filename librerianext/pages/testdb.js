import axios from "axios";
import { useEffect, useState } from "react";

//peticion a la api, funcion asincrona trae la informacion de la api, recibe la respuesta y la pega en data
export async function getServerSideProps(){
    const res = await axios.get('http://localhost:3000/api/dbpage')
    const data = await res.data
    return{
        props: {
            data
        }
    } 
}

export default function Testdb({data}) {
    const [loading, setLoading]=useState(false)
    const[nombre, setNombre]=useState('');

    const handleLoading=()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },10000)
    }

    console.log(data)
    return (
      //html
      <>
      <div className="flex">
            {/* Boton de carga */}
            {loading ?(
                <button className="bg-red-500" disabled>Detener</button>
                ):(                    
                <button className="bg-green-500" onClick={handleLoading}>Iniciar</button>
            )}
      </div>
      <main className='h-screen w-screen bg-gray-500'>
            {/* para iterar el json completo o recorrer la API */}
          {data.map((alumno)=> (
              <div key={alumno.id}>
                <h1 className='text-4xl text-center text-white'>{alumno.nombre}</h1>                       
                <h3 className='text text-center text-red'>{alumno.apellidos}</h3>                       
            </div>
            ))}
      </main>
      </>    
      )
  }