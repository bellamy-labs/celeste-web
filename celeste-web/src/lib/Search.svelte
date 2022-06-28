<script lang="ts">
  import { CurrPanelsState, PanelsState } from "../store/PanelsState";
  import Icon from "./Icon.svelte";

  let panelsState: PanelsState;
  CurrPanelsState.subscribe((value) => {
    panelsState = value;
  });

  function closeSearch() {
    CurrPanelsState.update((value) => {
      value.Search = false;
      return value;
    });
  }
</script>

{#if panelsState.Search}
  <div class="search">
    <div class="action-bar">
      <button class="icon-btn" type="button" on:click={closeSearch}
        ><Icon name="x-circle" /></button
      >
    </div>
    <input type="text" placeholder="Search" />
  </div>
{/if}

<style lang="scss">
  @import "./styles/vars";

  .search {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    backdrop-filter: blur(8px);
    background-color: $background_lighter;
    padding: 1rem;

    .action-bar {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      & > button {
        color: $text;
      }
    }

    & > input {
      background-color: transparent;
      font-size: 2rem;
      border: 0;
      border-bottom: 1px solid $border_color;
      outline: 0;
      color: $text;
      padding: 1rem;
      width: 100%;
    }
  }
</style>
