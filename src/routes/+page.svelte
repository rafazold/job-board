<script>
    import Filters from '../components/Filters.svelte';
    import { isDarkMode } from '../store/store';
    import JobCard from '../components/JobCard.svelte';

    export let data;

    let titleFilter = '';
    let locationFilter = '';
    let isFullTimeFilter = false;
    const fullTime = 'Full Time';

    const start = 0;
    let items = data?.jobs || [];
    let cardsPerRequest = 5;
    let currentItem = 0;

    $: end = Math.min(currentItem + cardsPerRequest, items.length);
    $: jobs = items.slice(start, end) || [];

    function filterResults(title, location, isFullTime) {
        items = [];
        currentItem = 0;
        if (!title && !location && !isFullTime) {
            items = data.jobs;
            return;
        }
        items = data.jobs.filter((job) => {
            const hasTitle =
                title &&
                job.position.toLowerCase().includes(title.toLowerCase());
            const hasLocation =
                location &&
                job.location.toLowerCase().includes(location.toLowerCase());
            const hasFullTime = isFullTime && job.contract === fullTime;
            return hasTitle || hasLocation || hasFullTime;
        });
    }

    function showMoreItems() {
        currentItem = currentItem + 5;
    }
</script>

<div class="container" class:dark={$isDarkMode}>
    <div class="filters-wrapper">
        <Filters
            bind:title={titleFilter}
            bind:location={locationFilter}
            bind:isFullTime={isFullTimeFilter}
            on:SEARCH={() => {
                filterResults(titleFilter, locationFilter, isFullTimeFilter);
            }}
        />
    </div>
    <div class="jobs">
        {#if jobs?.length > 0}
            {#each jobs as job (job.id)}
                <div class="job-card-wrapper">
                    <JobCard {job} />
                </div>
            {/each}
        {/if}
    </div>
    <div class="button-row">
        <button class="button" on:click={showMoreItems}>Load More</button>
    </div>
</div>

<style lang="scss">
    .container {
        position: relative;
        padding: 2.5rem 1.5rem;
        .filters-wrapper {
            position: absolute;
            top: 0;
            right: 1.5rem;
            left: 1.5rem;
            height: 5rem;
            margin-top: -2.5rem;
        }
        .button-row {
            width: 100%;
            text-align: center;
            margin: 2rem auto;
        }
        @media (min-width: $screen-medium) {
            width: 100%;
            max-width: 750px;
            margin: 0 auto;
            .filters-wrapper {
                width: 100%;
                max-width: 750px;
                right: auto;
                left: 50%;
                transform: translateX(-50%);
            }
            .jobs {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .job-card-wrapper {
                    width: 48%;
                    max-width: 350px;
                }
            }
            .button-row {
                margin: 3.5rem auto;
            }
        }
        @media (min-width: $screen-large) {
            max-width: 1200px;
            .filters-wrapper {
                max-width: 1200px;
            }
            .job-card-wrapper {
                width: 30%;
            }
        }
    }
</style>
