<script>
    import Filters from '../components/Filters.svelte';
    import { isDarkMode } from '../store/store';
    import JobCard from '../components/JobCard.svelte';

    export let data;
</script>

<div class="container" class:dark={$isDarkMode}>
    <div class="filters-wrapper">
        <Filters />
    </div>
    <div class="jobs">
        {#if data?.jobs?.length > 0}
            {#each data.jobs as job (job.id)}
                <div class="job-card-wrapper">
                    <JobCard {job} />
                </div>
            {/each}
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
