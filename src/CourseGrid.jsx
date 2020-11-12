import React from "react"
import Curso from "./Curso"

const cursos = [
    {
        "id": 1,
        "titulo": "python",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png",
        "price": 20,
        "profesor": "beto"
    },
    {
        "id": 2,
        "titulo": "arduino",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/1bada4e8-4bab-4be8-8f2e-83e285515187.png",
        "price": 30,
        "profesor": "beto"
    },
    {
        "id": 3,
        "titulo": "unity",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/35d81cae-b9b2-4fbd-9329-8bd20e09ef9f.png",
        "price": 10,
        "profesor": "beto"
    },
    {
        "id": 4,
        "titulo": "AWS",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/608331fa-c0c6-4f7c-9ad7-470903923179.jpg",
        "price": 5,
        "profesor": "beto"
    }
]

function CourseGrid() {
    return (
        <div className="ed-grid m-grid-4">
            {
                cursos.map(c =>
                <Curso key={c.id} id={c.id} title={c.titulo} image={c.image} price={c.price} profesor={c.profesor} />)
            }
        </div>
    );

}

export default CourseGrid