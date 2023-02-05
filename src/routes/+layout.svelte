<script>
    import Header from '../components/Header.svelte';
    import { isDarkMode } from '../store/store';
</script>

<div class="container" class:dark={$isDarkMode}>
    <Header />
    <main>
        <slot />
    </main>
</div>

<style lang="scss">
    @import '../style/app';
    .container {
        background-color: $light-gray;
        &.dark {
            background-color: $midnight;
        }
    }
</style>
