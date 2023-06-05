import "./App.css";
import RenderMovies from "./components/render-movies";
import { MovieProps } from "./components/render-movies/components/movie";
import Movie1Picture from "../public/assets/img/band-of-brothers.jpg";
import Movie2Picture from "../public/assets/img/breaking-bad.jpeg";
import Movie3Picture from "../public/assets/img/band-of-brothers.jpg";
import Movie4Picture from "../public/assets/img/chernobyl.jpeg";
import Movie5Picture from "../public/assets/img/sopranos.jpg";
import Movie6Picture from "../public/assets/img/dark.jpg";

function App() {
    const movies: MovieProps[] = [
        { id: 1, rating: 4.5, title: "Hannibal", picture: Movie1Picture },
        { id: 2, rating: 4.2, title: "Breaking Bad", picture: Movie2Picture },
        { id: 3, rating: 3.7, title: "Band Of Brothers", picture: Movie3Picture },
        { id: 4, rating: 4.9, title: "Chernobyl", picture: Movie4Picture },
        { id: 5, rating: 4.4, title: "The Sopranos", picture: Movie5Picture },
        { id: 6, rating: 4.9, title: "Dark", picture: Movie6Picture },
    ];

    return <RenderMovies movies={movies} />;
}

export default App;
