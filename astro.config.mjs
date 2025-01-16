// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.flat.app',
    integrations: [starlight({
        title: 'Flat User Guide',
        logo: {
          light: './src/assets/flat-logo.svg',
          dark: './src/assets/flat-logo-dark.svg',
          replacesTitle: true,
        },
        social: {
        },
        sidebar: [
            // {
            //     label: 'Guides',
            //     items: [
            //         // Each item here is one entry in the navigation menu.
            //         { label: 'Example Guide', slug: 'guides/example' },
            //     ],
            // },
            {
                label: 'Welcome',
                autogenerate: { directory: 'welcome' },
            },
            {
                label: 'Organization setup',
                autogenerate: { directory: 'setup' },
            },
            {
                label: 'Account setup',
                autogenerate: { directory: 'account' },
            },
            {
                label: 'Workspaces',
                autogenerate: { directory: 'workspaces' },
            },
            {
                label: 'Topics',
                autogenerate: { directory: 'topics' },
            },
            {
                label: 'Comments and discussion',
                autogenerate: { directory: 'discussion' },
            },
            {
                label: 'Finding and organizing topics',
                autogenerate: { directory: 'finding-and-organizing-topics' },
            },
            {
                label: 'Integrations',
                autogenerate: { directory: 'integrations' },
            },
            {
                label: 'Developers',
                autogenerate: { directory: 'developers' },
            },
            {
                label: 'Miscellaneous',
                autogenerate: { directory: 'misc' },
            },
        ],
		}), markdoc()],
});