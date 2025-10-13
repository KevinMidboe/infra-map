<script lang="ts">
	import { onMount } from "svelte";

  function systemDarkModeEnabled() {
    const computedStyle = window.getComputedStyle(document.body);
    if (computedStyle?.colorScheme != null) {
      return computedStyle.colorScheme.includes("dark");
    }

    return false;
  }

  let darkmode = $state(false);
	const darkmodeToggleIcon = $derived(darkmode ? "🌝" : "🌚");

  function toggleDarkmode() {
    darkmode = !darkmode;
    document.body.className = darkmode ? "dark" : "light";
  }

	onMount(() => darkmode = systemDarkModeEnabled())
</script>

  <div class="darkToggle">
		<span on:click={toggleDarkmode}>{ darkmodeToggleIcon }</span>
  </div>

<style lang="scss" scoped>
  .darkToggle {
    height: 25px;
    width: 25px;
    cursor: pointer;
    position: fixed;
    margin-bottom: 1.5rem;
    margin-right: 2px;
    bottom: 0;
    right: 0;
    z-index: 10;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
