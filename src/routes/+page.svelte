<script>
    import Filters from '../components/Filters.svelte';
    import JobCard from '../components/JobCard.svelte';

    export let data;

    let titleFilter = '';
    let locationFilter = '';
    let isFullTimeFilter = false;
    const fullTime = 'Full Time';

    const start = 0;
    let items = data?.jobs || [];
    let cardsPerRequest = 6;
    let currentGroup = 0;

    $: end = Math.min(currentGroup + cardsPerRequest, items.length);
    $: jobs = items.slice(start, end) || [];
    $: allItemsFetched = end >= items.length;
    function filterResults(title, location, isFullTime) {
        items = [];
        currentGroup = 0;
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
        if (allItemsFetched) return;
        currentGroup = currentGroup + cardsPerRequest;
    }
</script>

<div class="container">
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
        {#if !allItemsFetched}
            <button class="button" on:click={showMoreItems}>Load More</button>
        {/if}
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
        .jobs {
            margin-top: 2rem;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1.5rem;
        }
        .button-row {
            width: 100%;
            text-align: center;
            margin: 2rem auto;
        }
        @media (min-width: $screen-medium) {
            width: 100%;
            max-width: 700px;
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
                margin-top: 2.8125rem;
                grid-template-columns: repeat(2, 1fr);
                gap: 2.5rem 0.75rem;
                .job-card-wrapper {
                    margin-top: 0;
                }
            }
            .button-row {
                margin: 3.5rem auto;
            }
        }
        @media (min-width: $screen-large) {
            max-width: 80%;
            .jobs {
                margin-top: 5rem;
                gap: 2.5rem 1.875rem;
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
