<script>
    export let job;
    export let isInternal = false;
</script>

<div class="job-card" class:internal={isInternal}>
    <div class="card-content" class:internal={isInternal}>
        {#if !isInternal}
            <div
                class="card-logo"
                style="background-color: {job.logoBackground}"
            >
                <img src={job.logo} alt={job.company} />
            </div>
        {/if}
        <h4 class="basic-details">
            <span>{job.postedAt}</span>
            <span class="dot">.</span>
            <span>{job.contract}</span>
        </h4>
        <h3 class="job-name">{job.position}</h3>
        {#if !isInternal}
            <h4 class="company">{job.company}</h4>
        {/if}
        <p class="job-location">{job.location}</p>
    </div>
</div>

<style lang="scss">
    .job-card {
        display: block;
        &:not(.internal) {
            :hover {
                .job-name {
                    color: $dark-gray;
                }
            }
        }
        &.internal {
            margin-top: 0;
        }
    }
    .card-content {
        margin-top: 1.5625rem;
        position: relative;
        padding: 1rem 2rem;
        background-color: $white;
        color: $dark-gray;
        border-radius: 6px;
        .basic-details,
        .company {
            font-weight: normal;
            font-size: 1rem;
            .dot {
                font-weight: bold;
                font-size: 1.5rem;
            }
        }
        .job-name {
            color: $very-dark-blue;
        }
        .card-logo {
            position: absolute;
            left: 2rem;
            width: 3.125rem;
            height: 3.125rem;
            border-radius: 15px;
            top: 0;
            transform: translateY(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .job-location {
            color: $violet;
            margin-top: 2rem;
            font-weight: bold;
            font-size: 0.875rem;
        }
        @media (min-width: $screen-medium) {
            .job-location {
                margin-bottom: 0;
            }
        }
        &.internal {
            background-color: transparent;
            margin-top: 0;
            padding: 0;
            h4,
            h3,
            p {
                margin: 0;
            }
            .job-name {
                margin: 0.5rem 0;
            }
            .basic-details {
                font-size: 1rem;
            }
            .job-location {
                font-size: 0.875rem;
            }
            @media (min-width: $screen-medium) {
                .job-name {
                    font-size: 1.75rem;
                }
            }
        }
    }
    :global(.dark .card-content) {
        background-color: $very-dark-blue !important;
        &.internal {
            background-color: transparent !important;
        }
        .job-name {
            color: $white;
        }
    }
</style>
