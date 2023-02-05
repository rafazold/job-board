<script>
    import Header from '../components/Header.svelte';
    let isDark = false;
</script>

<div class="container" class:dark={isDark}>
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
