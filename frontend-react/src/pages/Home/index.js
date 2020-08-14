import React, { useState, useCallback, useEffect } from 'react';
import {
  FiSearch,
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

import { Container, Header, Form, Genres, Main } from './styles';
import ModalNewMovie from '../../components/ModalNewMovie';
import ModalDatail from '../../components/ModalDatail';
import api from '../../services/api';

export default function Home() {
  const [isOpenModalNewMovie, setIsOpenModalNewMovie] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get(`/movies?page=${page}`);

      setMovies(response.data);
    }
    loadMovies();
  }, [page]);

  const toggleModalNewMovie = useCallback(() => {
    setIsOpenModalNewMovie(state => !state);
  }, []);

  const incrementPage = useCallback(() => {
    setPage(state => state + 1);
  }, []);

  const decrementPage = useCallback(() => {
    page > 1 && setPage(state => state - 1);
  }, [page]);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      const response = await api.get(`/movies?name=${name}`);

      setMovies(response.data);
    },
    [name]
  );

  useEffect(() => {
    async function loadGenre() {
      const response = await api.get(`/movies?genre=${genre}`);

      setMovies(response.data);
    }
    loadGenre();
  }, [genre]);

  return (
    <Container>
      <Header>
        <h1>Movies</h1>

        <ModalNewMovie
          isOpen={isOpenModalNewMovie}
          setIsOpen={setIsOpenModalNewMovie}
        />

        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a movie "
            onChange={e => setName(e.target.value)}
          />
          <button type="submit">
            <FiSearch size={20} />
            Search
          </button>
          <button type="button" onClick={toggleModalNewMovie}>
            <FiPlus size={20} />
          </button>
        </Form>

        <Genres>
          <span onClick={() => setGenre('Drama')}>
            <strong>Drama</strong>
          </span>

          <span onClick={() => setGenre('Short')}>
            <strong>Short</strong>
          </span>

          <span onClick={() => setGenre('Musical')}>
            <strong>Musical</strong>
          </span>

          <span onClick={() => setGenre('Biography')}>
            <strong>Biography</strong>
          </span>
        </Genres>
        <div>
          <button type="button" onClick={decrementPage}>
            <FiChevronLeft />
          </button>

          <span>{page}</span>

          <button type="button" onClick={incrementPage}>
            <FiChevronRight />
          </button>
        </div>
      </Header>

      <Main>
        {movies.map(movie => (
          <ModalDatail key={movie._id} movie={movie} />
        ))}
      </Main>
    </Container>
  );
}
