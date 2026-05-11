import axios from "axios";
import type {Movie} from "../types/movie"

// описує об'єкт відповіді від API
interface MoviesHttpResponse{
    results: Movie[];
    total_pages: number;
}

const fetchMovies = async (query: string, page: number):
Promise<MoviesHttpResponse> => {
    const response = await axios.get<MoviesHttpResponse>(
        `https://api.themoviedb.org/3/search/movie`,
        
        {
            params: {
                query: query,
                page: page,
            },
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            }
        }

    );
    return response.data;
}
export default fetchMovies