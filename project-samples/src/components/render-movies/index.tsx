import Movie, { MovieProps } from "./components/movie";
import { useMemo } from "react";

export type RenderMovies = {
    movies: MovieProps[];
};

const RenderMovies = ({ movies }: RenderMovies) => {
    const renderMovies = useMemo(() => {
        return movies.map((movie) => {
            return <Movie {...movie} key={movie.id} />;
        });
    }, [movies]);

    return (
        <div className="movies">
            <div>
                {renderMovies}
            </div>
        </div>
    );
};

export default RenderMovies;
