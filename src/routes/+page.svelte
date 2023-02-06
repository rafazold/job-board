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
    let cardsPerRequest = 6;
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
        currentItem = currentItem + cardsPerRequest;
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
                <a class="job-card-wrapper" href="/job/{job.id}">
                    <JobCard {job} />
                </a>
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
            max-width: 80%;
            margin: 0 auto;
            padding: 2.5rem 0;
            .filters-wrapper {
                width: 100%;
                //max-width: 750px;
                right: auto;
                left: 50%;
                transform: translateX(-50%);
            }
            .jobs {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1.875rem;
            }
            .button-row {
                margin: 3.5rem auto;
            }
        }
        @media (min-width: $screen-large) {
            .jobs {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (min-width: 1400px) {
            max-width: 1200px;
            .filters-wrapper {
                max-width: 1200px;
            }
        }
    }
</style>
