import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  tconst: {
    type: String,
    required: true,
    unique: true,
  },

  titleType: {
    type: String,
    required: true,
  },

  primaryTitle: {
    type: String,
    required: true,
  },

  originalTitle: {
    type: String,
    required: true,
  },

  isAdult: {
    type: Number,
    required: true,
  },

  startYear: {
    type: Number,
    required: true,
  },

  endYear: {
    type: Number,
    required: false,
  },

  runtimeMinutes: {
    type: Number,
    required: true,
  },

  genres: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export default mongoose.model('Movie', MovieSchema);
