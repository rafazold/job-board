<script>
    import { page } from '$app/stores';
    import JobCard from '../../../components/JobCard.svelte';

    const job = $page.data.job;
</script>

<article class="container">
    <header class="job-header">
        <div class="header-container">
            <div
                style="background-color:  {job.logoBackground}"
                class="company-logo"
            >
                <img src={job.logo} alt={job.company} />
            </div>
            <div class="company-details">
                <h3 class="company-name">{job.company}</h3>
                <p class="company-website">{job.website}</p>
            </div>
            <div class="company-link-wrapper">
                <a class="button secondary company-link" href={job.website}
                    >Company Site</a
                >
            </div>
        </div>
    </header>
    <section class="content">
        <div>
            <JobCard {job} isInternal />
            <a href={job.apply} class="button apply">Apply now</a>
        </div>
        <p class="description">{job.description}</p>
        <h2 class="requirements">Requirements</h2>
        <p class="requirements-content">{job.requirements.content}</p>
        <ul class="requirements-items">
            {#each job.requirements.items as item}
                <li>{item}</li>
            {/each}
        </ul>
        <h2 class="role">What will you do</h2>
        <p class="role-content">{job.role.content}</p>
        <ol class="role-items">
            {#each job.role.items as item}
                <li>{item}</li>
            {/each}
        </ol>
    </section>
    <footer class="footer">
        <div class="large-only">
            <h2 class="footer-position">{job.position}</h2>
            <h4 class="footer-company">{job.company}</h4>
        </div>
        <a href={job.apply} class="button apply-now">Apply Now</a>
    </footer>
</article>

<style lang="scss">
    .container {
        position: relative;
        padding: 0 1.5rem;
        .job-header {
            background-color: $white;
            border-radius: 6px;
            margin-top: -2.75rem;
            position: relative;
            .header-container {
                margin-top: 1.5625rem;
                .company-logo {
                    position: absolute;
                    left: 50%;
                    width: 3.125rem;
                    height: 3.125rem;
                    border-radius: 15px;
                    top: 0;
                    transform: translate(-50%, -50%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .company-details {
                    padding-top: 3.125rem;
                    text-align: center;
                    .company-name {
                        margin: 0;
                    }
                    .company-website {
                        color: $dark-gray;
                    }
                }
                .company-link-wrapper {
                    text-align: center;
                    padding: 0.5rem 0 2rem;
                    .company-link {
                        display: inline-block;
                    }
                }
            }
        }
        .content {
            border-radius: 6px;
            background-color: $white;
            padding: 2.5rem 1.5rem;
            margin-top: 1.75rem;
            color: $dark-gray;
            .button.apply {
                display: block;
                text-align: center;
                margin: 3.125rem 0 2rem;
            }
            .requirements,
            .role {
                color: $very-dark-blue;
                margin: 2.5rem 0 1.5rem;
            }
            .requirements-items,
            .role-items {
                padding-left: 1em;
                li {
                    padding-left: 1.5rem;
                    &::marker {
                        color: $violet;
                        margin-left: -40px;
                    }
                }
            }
            .role-items {
                li {
                    &::marker {
                        font-weight: bold;
                    }
                }
            }
        }
        .footer {
            margin-top: 4rem;
            padding: 2.5rem;
            background-color: $white;
            border-radius: 6px;
            .button.apply-now {
                display: block;
                text-align: center;
            }
        }
    }
    :global(.dark) {
        .container {
            .job-header {
                background-color: $very-dark-blue;
                .company-details {
                    .company-name {
                        color: $white;
                    }
                }
                .company-link {
                    background-color: rgba(89, 100, 224, 0.1);
                    color: $violet;
                }
            }
            .content {
                background-color: $very-dark-blue;
                .requirements,
                .role {
                    color: $white;
                }
            }
            .footer {
                background-color: $very-dark-blue;
            }
        }
    }
</style>
