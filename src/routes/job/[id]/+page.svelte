<script>
    import { page } from '$app/stores';
    import JobCard from '../../../components/JobCard.svelte';

    const job = $page.data.job;
</script>

<article class="job-page">
    <div class="container">
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
            <div class="content-header">
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
    </div>
    <footer class="footer">
        <div class="footer-container">
            <div class="large-only">
                <h2 class="footer-position">{job.position}</h2>
                <h4 class="footer-company">{job.company}</h4>
            </div>
            <a href={job.apply} class="button apply-now">Apply Now</a>
        </div>
    </footer>
</article>

<style lang="scss">
    .job-page {
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
                    font-size: 1.25rem;
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
        }
        .footer {
            margin-top: 4rem;
            padding: 1.5rem;
            background-color: $white;
            border-radius: 6px;
            .button.apply-now {
                display: block;
                text-align: center;
            }
        }
        @media (min-width: $screen-medium) {
            .container {
                padding: 0 2.5rem;
                .job-header {
                    .header-container {
                        display: flex;
                        margin: 0;
                        width: 100%;
                        align-items: center;
                        .company-logo {
                            position: static;
                            transform: none;
                            width: 8.75rem;
                            height: 8.75rem;
                            border-radius: 0;
                            img {
                                width: 4.5rem;
                            }
                        }
                        .company-details {
                            text-align: left;
                            margin-left: 2.5rem;
                            flex-grow: 1;
                            padding: 0;
                            .company-website {
                                margin: 0.5rem 0 0;
                            }
                        }
                        .company-link-wrapper {
                            margin-right: 2.5rem;
                        }
                    }
                }
                .content {
                    padding: 3rem;
                    .content-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .button {
                            &.apply {
                                margin: 0;
                            }
                        }
                    }
                    .description {
                        margin-top: 2.5rem;
                    }
                }
            }
            .footer {
                .footer-container {
                    max-width: 730px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem;
                    .footer-position {
                        font-size: 1.25rem;
                    }
                    .footer-company {
                        font-size: 1rem;
                        margin: 0.5rem 0 0;
                        color: $dark-gray;
                        font-weight: normal;
                    }
                }
            }
        }
        @media (min-width: $screen-large) {
            .container {
                max-width: 730px;
                margin: 0 auto;
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
            }
            .content {
                background-color: $very-dark-blue;
                .requirements,
                .role {
                    color: $white;
                }
            }
        }
        .footer {
            background-color: $very-dark-blue;
            .footer-position {
                color: $white;
            }
            .footer-company {
                color: $dark-gray;
            }
        }
    }
</style>
