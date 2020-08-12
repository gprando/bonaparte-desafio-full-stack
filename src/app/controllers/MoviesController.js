import Movie from '../models/Movie';

class MoviesController {
  async store(request, response) {
    const {
      tconst,
      tconsttitleType,
      primaryTitle,
      originalTitle,
      isAdult,
      startYear,
      endYear,
      runtimeMinutes,
      genres,
    } = request.body;

    const movieExists = await Movie.findOne({
      where: {
        tconst,
      },
    });

    if (movieExists) {
      return response.status(401).json({ error: 'Movie already exists' });
    }
    const movie = await Movie.create({
      tconst,
      tconsttitleType,
      primaryTitle,
      originalTitle,
      isAdult,
      startYear,
      endYear,
      runtimeMinutes,
      genres,
    });

    return response.json(movie);
  }
}

export default new MoviesController();
