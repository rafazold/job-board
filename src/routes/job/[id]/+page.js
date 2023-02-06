export async function load({ parent, params }) {
    const parentData = await parent();
    const job = parentData.jobs.find((j) => j.id.toString() === params.id);
    return { job };
}
