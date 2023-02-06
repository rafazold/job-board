import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
    kit: {
        adapter: adapter({
            fallback: '200.html',
        }),
    },
    prerender: { entries: ['*'] },
    preprocess: preprocess({
        scss: {
            prependData: `@import './src/style/app.scss';`,
        },
    }),
};
