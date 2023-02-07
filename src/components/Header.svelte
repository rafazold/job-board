<script>
    import Switch from './Switch.svelte';
    import { isDarkMode } from '../store/store';
    import { onMount } from 'svelte';

    onMount(() => {
        if (window.matchMedia) {
            isDarkMode.set(
                window.matchMedia('(prefers-color-scheme: dark)').matches
            );
        }
    });
</script>

<header class="header" class:dark={$isDarkMode}>
    <div class="header-background">
        <div class="header-content">
            <h1 class="title">devjobs</h1>
            <div class="switch-wrapper">
                <img
                    class="left"
                    src="/assets/desktop/icon-sun.svg"
                    alt="sun"
                />
                <Switch bind:checked={$isDarkMode} />
                <img
                    class="right"
                    src="/assets/desktop/icon-moon.svg"
                    alt="moon"
                />
            </div>
        </div>
    </div>
</header>

<style lang="scss">
    .header {
        position: relative;

        .header-background {
            background: no-repeat center/cover
                url('/assets/mobile/bg-pattern-header.svg');
            width: 100%;
            aspect-ratio: 2.76;

            .header-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 2rem 1.5rem 0;
            }

            .title {
                color: transparent;
                margin: 0;
                background: no-repeat left/contain
                    url('/assets/desktop/logo.svg');
            }

            .switch-wrapper {
                display: flex;
                align-items: center;

                .left {
                    padding-right: 1rem;
                }

                .right {
                    padding-left: 1rem;
                }
            }
        }

        @media (min-width: $screen-medium) {
            .header-background {
                background: no-repeat left bottom/cover
                    url('/assets/desktop/bg-pattern-header.svg');
                width: 100%;
                aspect-ratio: 4.8;
                max-height: 12rem;
                .header-content {
                    max-width: 700px;
                    margin: 0 auto;
                }
            }
            @media (min-width: $screen-large) {
                .header-background {
                    .header-content {
                        max-width: 80%;
                    }
                }
                aspect-ratio: 8.8;
            }
            @media (min-width: 1400px) {
                .header-background {
                    .header-content {
                        max-width: 1200px;
                    }
                }
            }
        }
    }
</style>
