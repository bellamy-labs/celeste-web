<script lang="ts">
  import { navigate } from "svelte-navigator";

  import { CurrPanelsState } from "../store/PanelsState";

  function openHome() {
    navigate("/");
  }

  function openSearch() {
    CurrPanelsState.update((value) => {
      value.Search = true;
      return value;
    });
  }

  function openLibrary() {
    navigate("/library");
  }

  function openDiscover() {
    navigate("/discover");
  }
</script>

<nav>
  <div class="logo">Logo</div>
  <ul>
    <li on:click={openHome}>Home</li>
    <li on:click={openSearch}>Search</li>
    <li on:click={openLibrary}>Library</li>
    <li on:click={openDiscover}>Discover</li>
  </ul>
</nav>

<style lang="scss">
  @import "./styles/vars";

  nav {
    width: 15rem;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: $background_lighter;
    border-right: 1px solid $border_color;
    padding: 0.5rem;

    & > .logo {
      width: 100%;
      font-size: 2rem;
    }

    & > ul {
      list-style: none;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      & > li {
        width: 100%;
        padding: 0.5rem;
        border-radius: $border-radius;
      }

      & > li:hover {
        background-color: $nav-list-li_hover;
      }
    }
  }
</style>
