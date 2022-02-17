import { useEffect, useState } from "react";
import { CardTutors } from "../components/card-tutors";
const URL = 'http://localhost:9002/tutors'

export default function ListTutors() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function carregaConteudo() {
            const promise = await fetch(URL)
            const response = await promise.json()
            setData(response)

        } carregaConteudo()
    }, [])

    console.log(data)
    return (
        <div className="listaTutores">

            <h1>Tutores</h1>
            
            <div className="row">
                {data.map((tutor) =>
                    (<CardTutors key={tutor.id} {...tutor} />))}
            </div>
        </div>
    )
}