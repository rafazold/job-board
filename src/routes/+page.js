import db from '../database/data.json';
export function load() {
    return { jobs: db };
}
