<script>
    import Header from '../components/Header.svelte';
    import { isDarkMode } from '../store/store';
</script>

<div class="main-wrapper" class:dark={$isDarkMode}>
    <Header />
    <main>
        <slot />
    </main>
</div>

<style lang="scss">
    @import '../style/app';
    .main-wrapper {
        background-color: $light-gray;
        &.dark {
            background-color: $midnight;
        }
    }
</style>
