<script>
    import { filterIcon, searchIcon } from '../helpers';
    import Modal from './Modal.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let title = '';
    export let location = '';
    export let isFullTime = false;
    let showFilterModal = false;

    function handleSearch() {
        dispatch('SEARCH');
        showFilterModal = false;
    }
</script>

<form class="filters" on:submit|preventDefault={handleSearch}>
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
                bind:checked={isFullTime}
            />
            <span>Full Time</span>
        </label>
    </div>
    <button
        type="button"
        class="filter-button small-only"
        on:click|preventDefault={() => {
            showFilterModal = true;
        }}
    >
        <span class="filter-icon">
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
                <img src="assets/desktop/icon-location.svg" alt="location" />
            </span>
        </div>
        <div class="modal-bottom">
            <label class="custom-checkbox modal-checkbox">
                <input
                    class="custom-checkbox"
                    type="checkbox"
                    id="full-time-modal"
                    name="full-time-modal"
                    bind:checked={isFullTime}
                />
                <span>Full Time Only</span>
            </label>
            <button class="button modal-submit" on:click={handleSearch}>
                <span class="search">search</span>
            </button>
        </div>
    </div>
</Modal>

<style lang="scss">
    .filters {
        height: 100%;
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
        .filter-icon {
            margin: auto;
            display: flex;
            cursor: pointer;
            &:hover {
                color: $gray;
            }
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
            border-bottom: solid 0.5px $light-gray;
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
    :global(.dark) {
        .filters,
        .filter-box {
            background-color: $very-dark-blue;
        }
        .filter-icon {
            color: $white;
        }
    }
    @media (min-width: $screen-medium) {
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
    :global(.dark) {
        .filters {
            background-color: $very-dark-blue !important;
            .filter-title {
                color: $white;
            }
        }
        .filter-box {
            background-color: $very-dark-blue;
        }
    }
</style>
