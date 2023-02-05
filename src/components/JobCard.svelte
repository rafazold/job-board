<script>
    export let job;
</script>

<div class="job-card">
    <div class="card-content">
        <div class="card-logo" style="background-color: {job.logoBackground}">
            <img src={job.logo} alt={job.company} />
        </div>
        <h4 class="basic-details">
            <span>{job.postedAt}</span>
            <span>.</span>
            <span>{job.contract}</span>
        </h4>
        <h3 class="job-name">{job.position}</h3>
        <h4 class="company">{job.company}</h4>
        <p class="job-location">{job.location}</p>
    </div>
</div>

<style lang="scss">
    .job-card {
        margin-top: 3.5rem;
    }
    .card-content {
        margin-top: 1.5625rem;
        position: relative;
        padding: 2rem;
        background-color: $white;
        color: $dark-gray;
        border-radius: 6px;
        .basic-details,
        .company {
            font-weight: normal;
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
        }
    }
    :global(.dark .card-content) {
        background-color: $very-dark-blue !important;
        .job-name {
            color: $white;
        }
    }
</style>
