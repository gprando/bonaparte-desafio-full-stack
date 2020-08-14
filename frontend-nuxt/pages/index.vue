<template>
  <header class="header">
    <h1 class="title">Movies</h1>

    <form class="form">
      <input class="input" type="text" placeholder="Search for a movie " />
      <button class="button-search" type="submit">
        Search
      </button>
      <button class="button-add" type="button">
        +
      </button>
    </form>

    <aside class="genres">
      <span class="genres-span">
        <strong class="genres-strong">Drama</strong>
      </span>

      <span class="genres-span">
        <strong class="genres-strong">Short</strong>
      </span>

      <span class="genres-span">
        <strong class="genres-strong">Musical</strong>
      </span>

      <span class="genres-span">
        <strong class="genres-strong">Biography</strong>
      </span>
    </aside>
    <div class="buttons-container">
      <button type="button">
        {{ `>` }}
      </button>

      <span>1</span>

      <button type="button">
        {{ `>` }}
      </button>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2d4eca;
  border-radius: 0 0 0.8rem 0.8rem;
}
.title {
  margin: 3rem auto;
  font-size: 3rem;
  color: #fff;
}
.form {
  display: flex;
  align-items: center;
}
.input {
  border-radius: 0.4rem;
  border: 0;
  height: 4rem;
  flex: 1;
}
.input::placeholder {
  text-align: center;
  padding: 0 4px;
  color: #7085cf;
}
.form button {
  background: #7085cf;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.3rem;
  margin-left: 1rem;
  border: 0;
  border-radius: 0.4rem;
  height: 4rem;
}
.form button:hover {
  background: #d0daff;
  color: #666;
}
.genres {
  margin: 2.5rem 0;
  display: flex;
}

.genres-span {
  cursor: pointer;
  background: #d0daff;
  height: 4rem;
  width: 7rem;
  border: 0;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.genres-span + span {
  margin-left: 3rem;
}

.genres-span:hover {
  background: #7085cf;
}
.genres-span strong:hover {
  color: #fff;
}

.genres-strong {
  display: block;
  color: #666;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 0 2px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-self: flex-end;
  margin: 0 30px;
}
.buttons-container button {
  background: transparent;
  border: 0;
  color: #fff;
}

.buttons-container span {
  color: #fff;
  margin: 0 4px;
}
</style>
