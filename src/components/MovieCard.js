import React, { useState } from 'react';
import { IMG_CDN_URL } from '../constants/constants';
import MovieModal from "./MovieModal";

function MovieCard({ posterPath, movie }) {
    const [modalOpen, setModalOpen] = useState(false);

    if (!posterPath) {
        return null;
    }

    const handleCardClick = () => {
        setModalOpen(prev => !prev);
        console.log(movie)
    };

    return (
        <div className="w-48 pr-4" onClick={handleCardClick}>
            <img className="border-2" src={IMG_CDN_URL + posterPath} alt="Movie Card" />
            {modalOpen && <MovieModal movieModal={movie} isOpen={modalOpen}  />}
        </div>
    );
}

export default MovieCard;
