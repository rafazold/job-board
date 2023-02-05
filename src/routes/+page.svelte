<script>
    import Filters from '../components/Filters.svelte';
    import { isDarkMode } from '../store/store';

    export let data;
</script>

<div class="container" class:dark={$isDarkMode}>
    <div class="filters-wrapper">
        <Filters />
    </div>
</div>
<button
    on:click={() => {
        console.log(data);
    }}>CLICK</button
>

<style lang="scss">
    .container {
        position: relative;
        .filters-wrapper {
            position: absolute;
            top: 0;
            right: 1.5rem;
            left: 1.5rem;
            height: 5rem;
            transform: translateY(-50%);
        }
    }
    @media (min-width: $screen-medium) {
    }
    @media (min-width: $screen-large) {
    }
</style>
