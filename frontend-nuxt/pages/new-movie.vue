<template>
  <div class="container">
    <header class="header">
      <h1 class="title">Cadastrar filme</h1>
    </header>
    <form @submit.prevent="create">
      <input v-model="movie.tconst" placeholder="Informe um id" />
      <input v-model="movie.titleType" placeholder="filme, série...?" />
      <input
        v-model="movie.primaryTitle"
        type="text"
        placeholder="Título primário"
      />

      <input
        v-model="movie.originalTitle"
        type="text"
        placeholder="Título original "
      />

      <select v-model="movie.isAdult" placeholder="Filme +18 ?">
        <option value="" disabled hidden selected>
          Filme adulto ?
        </option>
        <option value="1">Sim</option>
        <option value="0">Não</option>
      </select>

      <input
        v-model="movie.startYear"
        type="text"
        placeholder="Ano de estréia"
      />
      <input
        v-model="movie.endYear"
        type="text"
        placeholder="Ano de término "
      />
      <input
        v-model="movie.runtimeMinutes"
        type="text"
        placeholder="Tempo de execução"
      />
      <input v-model="movie.genres" type="text" placeholder="Gêneros" />

      <button type="submit">Cadastrar</button>
      <nuxt-link to="/">voltar</nuxt-link>
    </form>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  data() {
    return {
      movie: {
        tconst: '',
        titleType: '',
        primaryTitle: '',
        originalTitle: '',
        isAdult: '',
        startYear: '',
        endYear: '',
        runtimeMinutes: '',
        genres: '',
      },
    }
  },

  methods: {
    async create() {
      try {
        await api.post('movies', this.movie)

        alert('Cadastrado com sucesso!')

        this.$router.push('/')
      } catch {
        alert('Erro no cadastro')
      }
    },
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2d4eca;
  width: 100vw;
  border-radius: 0 0 0.8rem 0.8rem;
}

.title {
  margin: 3rem auto;
  font-size: 3rem;
  color: #fff;
}

.container > form {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.container input {
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #2d4eca;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #5022b6;
  margin: 0 0 10px;
}

.container input::placeholder {
  color: #2d4eca;
}

.container span {
  color: #fb6f91;
  align-self: flex-start;
  margin: 0 0 10px;
  font-weight: bold;
}

.container select {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #2d4eca;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #2d4eca;
  font-size: 300;
  margin: 0 0 10px;
}

.container button {
  margin: 5px 0 0;
  height: 44px;
  background: #2d4eca;
  font-weight: bold;
  color: #fff;
  border: 0px;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
}
.container button + a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 5px 0 0;
  height: 44px;
  background: #808080;
  font-weight: bold;
  color: #fff;
  border: 0px;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
}

.container button:hover {
  background: #3a4d94;
}

.container button + a:hover {
  background: #909090;
}
</style>
