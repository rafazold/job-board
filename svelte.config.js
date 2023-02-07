import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
    kit: {
        adapter: adapter({
            fallback: 'index.html',
        }),
    },
    prerender: { entries: ['*'], default: true },
    preprocess: preprocess({
        scss: {
            prependData: `@import './src/style/app.scss';`,
        },
    }),
};
