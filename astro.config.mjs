// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.flat.app',
    redirects: {
      '/': 'welcome/introduction'
    },
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
            //     label: 'Test',
            //     items: [
            //         // Each item here is one entry in the navigation menu.
            //         { label: 'Introduction', slug: 'index' },
            //     ],
            // },
            {
                label: 'Welcome',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Introduction', slug: 'welcome/introduction' },
                    { label: 'Getting started', slug: 'welcome/getting-started' },
                    { label: 'Core concepts', slug: 'welcome/core-concepts' },
                    { label: 'Help and support', slug: 'welcome/help-and-support' },
                ],
            },
            {
                label: 'Organization setup',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Managing your organization', slug: 'setup/managing-your-organization' },
                    { label: 'Managing team members', slug: 'setup/managing-team-members' },
                    { label: 'Importing data', slug: 'setup/importing-data' },
                ],
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