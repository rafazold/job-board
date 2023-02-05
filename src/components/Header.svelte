<script>
    import Switch from './Switch.svelte';
    import Modal from './Modal.svelte';
    let title = '';
    let location = '';
    let isFullTime = false;
    let showFilterModal = false;
    let isDark = false;

    const filterIcon = `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                fill="currentColor"
                fill-rule="nonzero"
            />
        </svg>`;

    const searchIcon = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                    ><path
                        d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                        fill="currentColor"
                        fill-rule="nonzero"
                    /></svg
                >`;
</script>

<header class="header" class:dark={isDark}>
    <div class="header-background">
        <div class="header-content">
            <h1 class="title">devjobs</h1>
            <div class="switch-wrapper">
                <img class="left" src="assets/desktop/icon-sun.svg" alt="sun" />
                <Switch />
                <img
                    class="right"
                    src="assets/desktop/icon-moon.svg"
                    alt="moon"
                />
            </div>
        </div>
    </div>
    <form class="filters">
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
