<script lang="ts">
  import Nav from "./lib/Nav.svelte";
  import Search from "./lib/Search.svelte";
  import { Route, Router } from "svelte-navigator";
  import Home from "./lib/pages/Home.svelte";
  import Library from "./lib/pages/Library.svelte";
  import Discover from "./lib/pages/Discover.svelte";
</script>

<main>
  <Search />
  <Nav />
  <Router>
    <Route path="/" component={Home} />
    <Route path="/library" component={Library} />
    <Route path="/discover" component={Discover} />
  </Router>
</main>

<style lang="scss">
  @import "./lib/styles/vars";

  @font-face {
    font-family: raleway;
    src: url(./assets/fonts/Raleway-Regular.ttf);
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    color: $text;
    font-family: raleway;
  }

  :global(.btn) {
    border: none;
    outline: none;
    background: none;
    font-size: 1.2rem;
  }

  :global(.btn:hover) {
    cursor: pointer;
  }

  :global(.icon-btn) {
    border: none;
    outline: none;
    background: none;
    font-size: 2rem;
  }

  :global(.icon-btn:hover) {
    cursor: pointer;
  }

  main {
    width: 100vw;
    height: 100vh;
    background-color: $background;
  }
</style>
