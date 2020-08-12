import Movie from '../schemas/Movie';

class MoviesController {
  async store(request, response) {
    const {
      tconst,
      titleType,
      primaryTitle,
      originalTitle,
      isAdult,
      startYear,
      endYear,
      runtimeMinutes,
      genres,
      averageRating,
      numVotes,
    } = request.body;

    const movieExists = await Movie.findOne({
      tconst,
    });

    if (movieExists) {
      return response.status(401).json({ error: 'Movie already exists' });
    }
    const movie = await Movie.create({
      tconst,
      titleType,
      primaryTitle,
      originalTitle,
      isAdult,
      startYear,
      endYear,
      runtimeMinutes,
      genres,
      averageRating,
      numVotes,
    });

    return response.json(movie);
  }
}

export default new MoviesController();
