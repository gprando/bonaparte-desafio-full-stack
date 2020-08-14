import Movie from '../schemas/Movie';
import Rating from '../schemas/Rating';

class MoviesController {
  async index(request, response) {
    const { page = 1, name, genre } = request.query;

    const limit = 10;
    const skip = limit * (page - 1);

    if (name) {
      const movies = await Movie.find({
        primaryTitle: { $regex: `.*${name}.*` },
      })
        .limit(limit)
        .skip(skip);
      return response.json(movies);
    }

    if (genre) {
      const movies = await Movie.find({
        genres: { $regex: `.*${genre}.*` },
      })
        .limit(limit)
        .skip(skip);
      return response.json(movies);
    }

    const movies = await Movie.find({}).limit(limit).skip(skip);
    return response.json(movies);
  }

  async show(request, response) {
    const { _id } = request.params;

    const movie = await Movie.findOne({ _id });
    const rating = await Rating.findOne({ tconst: movie.tconst });

    const [, data] = Object.assign([movie, rating]);

    return response.json(data);
  }

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
