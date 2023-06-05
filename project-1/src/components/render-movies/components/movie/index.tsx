import Rating from "./components/rating";
import Title from "./components/title";

export type MovieProps = {
    id: number;
    title: string;
    rating: number;
    picture: string;
};

const Movie = ({ picture, rating, title }: MovieProps) => {
    return (
        <div className="movie">
            <img src={picture} />
            <div className="movie-footer">
                <div className="footer-left">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                    </button>
                    <Title>{title}</Title>
                </div>
                <Rating rate={rating} />
            </div>
        </div>
    );
};

export default Movie;
