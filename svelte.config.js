import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

export default {
    kit: {
        adapter: adapter({
            fallback: '200.html',
        }),
    },
    preprocess: preprocess({
        scss: {
            prependData: `@import './src/style/app.scss';`,
        },
    }),
};
