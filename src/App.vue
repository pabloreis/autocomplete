<template>
  <div id="app" class="flex-column">
    <h1>Autocomplete</h1>

    <main class="main">
      <section class="main__section flex">
        <template v-if="!loading">
          <div class="flex-column">
            <h2>Search for cities</h2>
            <Autocomplete :focus="true" placeholder="Search by city name" :options="cities" />
          </div>

          <div class="flex-column">
            <h2>Search for books</h2>
            <Autocomplete placeholder="Search by book title" :options="books" />
          </div>
        </template>
        <template v-else>
          <i class="main__loading fa fa-spinner"></i>
        </template>
      </section>
    </main>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="scss" src="./App.scss"></style>
