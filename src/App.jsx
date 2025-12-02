import { useEffect, useState } from "react";
import './App.css'
import imgLogo from "./assets/img/disney-logo.png";


const filmsArray = [
  { title: 'Inception', genere: 'Fantascienza' },
  { title: 'Il Padrino', genere: 'Thriller' },
  { title: 'Titanic', genere: 'Romantico' },
  { title: 'Batman', genere: 'Azione' },
  { title: 'Interstellar', genere: 'Fantascienza' },
  { title: 'Pulp Fiction', genere: 'Thriller' },
];

function App() {

  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState(filmsArray);

  useEffect(() => {
    const newArray = filmsArray.filter((film) => film.genere.includes(search));
    setFilteredArray(newArray);

  }, [search]);


  return (
    <>
      <div className='container py-4 d-flex flex-column'>
        <header className="d-flex justify-content-between align-items-center">
          <img src={imgLogo} />
          <h1>Elenchi di Film</h1>
        </header>
        <main className='py-4'>
          <input
            type="search"
            className="form-control my-2"
            placeholder="Scegli il genere"
            value={search}
            onChange={(event) => setSearch(event.target.value)} />
            
          <ul className="list-group">
            {filteredArray.map((film, index) => (
              <li key={index} className="list-group-item list-group-item-dark">
                <h5>{film.title}</h5>
                <p>{film.genere}</p>
              </li>
            ))}
          </ul>
        </main >
      </div >
    </>
  )
}

export default App
