import React, { useState, useEffect } from 'react';

import { Modal } from './styles';
import api from '../../services/api';

export default function ModalDatail({ movie }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState({});

  const { _id } = movie;

  useEffect(() => {
    async function loadMovieAndRating() {
      const response = await api.get(`movies/${_id}`);

      setRating(response.data);
    }
    loadMovieAndRating();
  }, [_id]);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button onClick={toggleModal}>
        <section>
          <strong>{movie.primaryTitle}</strong>
          {movie.isAdult === 1 ? <span>+18</span> : ''}
        </section>

        <aside>{movie.genres}</aside>
      </button>

      <Modal
        appElement={document.getElementById('root')}
        style={{
          overlay: {
            backgroundColor: 'transparent',
          },
        }}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        closeTimeoutMS={300}
      >
        <h3>{movie.originalTitle}</h3>
        <span>{movie.genres}</span>
        <div>
          <span>
            tempo de execução principal do título: {movie.runtimeMinutes}min
          </span>
          {rating !== null && rating.averageRating && (
            <span>nota: {rating.averageRating}</span>
          )}
          {rating !== null && rating.numVotes && (
            <span> nº votos: {rating.numVotes}</span>
          )}
        </div>
        <div>
          <span>Lançamento: {movie.startYear}</span>
          {typeof movie.endYear === Number && <span>Término: 1990</span>}
          {movie.isAdult === 1 ? (
            <span> classificação +18</span>
          ) : (
            <span> não adulto</span>
          )}
        </div>
        <button onClick={toggleModal}>Fechar</button>
      </Modal>
    </>
  );
}
