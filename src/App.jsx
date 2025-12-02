
import './App.css'

const filmsArray = [
  { title: 'Inception', genere: 'Fantascienza' },
  { title: 'Il Padrino', genere: 'Thriller' },
  { title: 'Titanic', genere: 'Romantico' },
  { title: 'Batman', genere: 'Azione' },
  { title: 'Interstellar', genere: 'Fantascienza' },
  { title: 'Pulp Fiction', genere: 'Thriller' },
];

function App() {


  return (
    <>
      <div className='container py-4'>
        <header>
          <h1>Elenchi di Film</h1>
        </header>
        <main className='py-4'>
          <select className="form-select">
            <option selected>Scegli il genere del film</option>
            {filmsArray.map((film, index) => (
              <option key={index} className='list-group-item'>
                {film.genere}
              </option>
            ))}
        </select>
      </main >
    </div >
    </>
  )
}

export default App
