<script>
    import Switch from './Switch.svelte';
    import Modal from './Modal.svelte';
    import { isDarkMode } from '../store/store';
    import { onMount } from 'svelte';
    import { filterIcon, searchIcon } from '../helpers';
    let title = '';
    let location = '';
    let isFullTime = false;
    let showFilterModal = false;

    function search() {}
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
                <img class="left" src="assets/desktop/icon-sun.svg" alt="sun" />
                <Switch bind:checked={$isDarkMode} />
                <img
                    class="right"
                    src="assets/desktop/icon-moon.svg"
                    alt="moon"
                />
            </div>
        </div>
    </div>
    <form class="filters" on:submit|preventDefault={search}>
        <div class="title-wrapper">
            <input
                class="custom-input filter-title"
                type="text"
                bind:value={title}
                placeholder="Filter by title..."
            />
            <span class="input-icon large-only">
                {@html searchIcon}
            </span>
        </div>
        <div class="location-wrapper large-only">
            <input
                class="custom-input filter-location"
                placeholder="Filter by location..."
                type="text"
                bind:value={location}
            />
            <span class="input-icon large-only">
                <img src="assets/desktop/icon-location.svg" alt="location" />
            </span>
        </div>
        <div class="fulltime-wrapper large-only">
            <label class="custom-checkbox">
                <input
                    class="custom-checkbox"
                    type="checkbox"
                    id="full-time"
                    name="full-time"
                    bind:value={isFullTime}
                    checked
                />
                <span>Full Time</span>
            </label>
        </div>
        <button
            class="filter-button small-only"
            on:click|preventDefault={() => {
                showFilterModal = true;
            }}
        >
            <span class="filter">
                {@html filterIcon}
            </span>
        </button>
        <button class="button" type="submit">
            <span class="large-only search">search</span>
            <span class="small-only search">
                {@html searchIcon}
            </span>
        </button>
    </form>
    <Modal bind:showModal={showFilterModal}>
        <div class="filter-box">
            <div class="location-wrapper">
                <input
                    class="custom-input filter-location"
                    placeholder="Filter by location..."
                    type="text"
                    bind:value={location}
                />
                <span class="input-icon">
                    <img
                        src="assets/desktop/icon-location.svg"
                        alt="location"
                    />
                </span>
            </div>
            <div class="modal-bottom">
                <label class="custom-checkbox modal-checkbox">
                    <input
                        class="custom-checkbox"
                        type="checkbox"
                        id="full-time-modal"
                        name="full-time-modal"
                        bind:value={isFullTime}
                        checked
                    />
                    <span>Full Time Only</span>
                </label>
                <button class="button modal-submit">
                    <span class="search">search</span>
                </button>
            </div>
        </div>
    </Modal>
</header>

<style lang="scss">
    .header {
        padding-bottom: 2.5rem;
        position: relative;

        .header-background {
            background: no-repeat center/cover
                url('assets/mobile/bg-pattern-header.svg');
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
                    url('assets/desktop/logo.svg');
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

        .filters {
            position: absolute;
            bottom: 0;
            right: 1.5rem;
            left: 1.5rem;
            height: 5rem;
            background-color: $white;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem;
            .title-wrapper {
                width: 100%;
            }
            .filter-button {
                margin: 0 1.5rem;
                color: $dark-gray;
            }

            .button {
                color: $white;
                padding: 0.875rem;

                .search {
                    width: 1.5rem;
                    height: 1.5rem;
                    margin: auto;
                    display: block;
                }
            }
            .filter {
                margin: auto;
                display: flex;
            }
        }
        .title-wrapper,
        .location-wrapper,
        .fulltime-wrapper {
            min-width: 6.75rem;
            position: relative;
            span {
                margin: auto 0;
            }
        }
        .filter-box {
            background-color: $white;
            width: 327px;
            .location-wrapper {
                border-bottom: solid $light-gray;
                padding: 0.75rem 1.5rem;
                .filter-location {
                    padding-left: 2rem;
                }
                .input-icon {
                    position: absolute;
                    left: 1.7rem;
                    bottom: 50%;
                    color: $violet;
                    transform: translateY(50%);
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
            .modal-bottom {
                padding: 1.5rem;
                .modal-submit {
                    width: 100%;
                    margin-top: 1.5rem;
                    padding: 1rem 0;
                    text-align: center;
                }
            }
        }
        &.dark {
            .filters,
            .filter-box {
                background-color: $very-dark-blue;
            }
            .custom-checkbox {
                color: $white;
            }
        }

        @media (min-width: $screen-medium) {
            .header-background {
                background: no-repeat left/cover
                    url('assets/desktop/bg-pattern-header.svg');
                width: 100%;
                aspect-ratio: 4.8;
            }
            .filters {
                .title-wrapper,
                .location-wrapper {
                    width: 33%;
                    height: 100%;
                    display: flex;
                    .input-icon {
                        position: absolute;
                        left: 0.8rem;
                        bottom: 50%;
                        color: $violet;
                        transform: translateY(50%);
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
                .title-wrapper {
                    flex-grow: 1;
                }
                .fulltime-wrapper {
                    padding: 0 1.5rem;
                }
                .filter-title,
                .filter-location {
                    padding-left: 3rem;
                    position: relative;
                    border-right: solid $light-gray;
                }
                .button {
                    .search {
                        width: auto;
                        height: auto;
                    }
                }
            }
        }
        @media (min-width: $screen-large) {
            .header-background {
                aspect-ratio: 8.8;
            }
        }
    }
</style>
