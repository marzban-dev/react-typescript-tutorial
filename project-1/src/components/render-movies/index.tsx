import Movie, { MovieProps } from "./components/movie";
import { useMemo } from "react";

export type RenderMoviesProps = {
    movies: MovieProps[];
};

const RenderMovies = ({ movies }: RenderMoviesProps) => {
    const renderMovies = useMemo(() => {
        return movies.map((movie) => {
            return <Movie {...movie} />;
        });
    }, [movies]);

    return <div className="movies">
        <div>{renderMovies}</div>
    </div>;
};

export default RenderMovies;
