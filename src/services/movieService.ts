import axios from "axios";
import type {Movie} from "../types/movie"

// описує об'єкт відповіді від API
interface MoviesHttpResponse{
    results: Movie[];
}

const fetchMovies = async (query: string):
Promise<Movie[]> => {
    const response = await axios.get<MoviesHttpResponse>(
        `https://api.themoviedb.org/3/search/movie`,
        
        {
            params: {
                query: query,
            },
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            }
        }

    );
    return response.data.results;
}
export default fetchMovies