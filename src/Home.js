import TableItem from './TableItem';
import {useState} from 'react';

function Home(){
    const [movies, setMovies] = useState([]);

    return(
        <>
            <header>
                <h1>Movie System</h1>
            </header>
            <main>
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Genre</th>
                    </tr>
                    {
                    movies.map(movie => <TableItem name={movie.name} year={movie.year} genre={movie.genre}></TableItem>)
                    }
                </table>
            </main>
        </>
    );
}

export default Home;