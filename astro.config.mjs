// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.flat.app',
    // base: 'docs',
    redirects: {
    //   '/': 'welcome/introduction'
    },
    integrations: [starlight({
        title: 'Flat User Guide',
        logo: {
          light: './src/assets/flat-logo.svg',
          dark: './src/assets/flat-logo-dark.svg',
          replacesTitle: true,
        },
        customCss: [
          // Relative path to your custom CSS file
          './src/styles/custom.css',
        ],
        social: {
        },
        sidebar: [
            {
                label: 'Welcome',
                items: [
                    { label: 'Introduction', slug: 'welcome/introduction' },
                    { label: 'Getting started', slug: 'welcome/getting-started' },
                    { label: 'Core concepts', slug: 'welcome/core-concepts' },
                    { label: 'Help and support', slug: 'welcome/help-and-support' },
                ],
            },
            {
                label: 'Organization setup',
                items: [
                    { label: 'Managing your organization', slug: 'setup/managing-your-organization' },
                    { label: 'Managing team members', slug: 'setup/managing-team-members' },
                    { label: 'Importing data', slug: 'setup/importing-data' },
                ],
            },
            {
                label: 'Account setup',
                items: [
                    { label: 'Personal profile', slug: 'account/personal-profile' },
                    { label: 'Appearance', slug: 'account/appearance' },
                    { label: 'Notifications', slug: 'account/notifications' },
                ],
            },
            {
                label: 'Workspaces',
                items: [
                    { label: 'Managing workspaces', slug: 'workspaces/managing-workspaces' },
                    { label: 'Workspace visibility', slug: 'workspaces/workspace-visibility' },
                    { label: 'Workflow stages', slug: 'workspaces/workflow-stages' },
                    { label: 'Workspace views', slug: 'workspaces/workspace-views' },
                    { label: 'Archive', slug: 'workspaces/archive' },
                ],
            },
            {
                label: 'Topics',
                items: [
                    { label: 'Creating topics', slug: 'topics/creating' },
                    { label: 'Selecting and editing topics', slug: 'topics/selecting-and-editing-topics' },
                    { label: 'Moving topics', slug: 'topics/moving-topics' },
                    { label: 'Topic ownership', slug: 'topics/ownership' },
                    { label: 'Labels', slug: 'topics/labels' },
                    { label: 'Due dates', slug: 'topics/due-dates' },
                    { label: 'Topic sizing', slug: 'topics/sizing' },
                    { label: 'Topic prioritization', slug: 'topics/prioritization' },
                    { label: 'Topic descriptions', slug: 'topics/topic-descriptions' },
                    { label: 'Checklists', slug: 'topics/checklists' },
                    { label: 'Attachments', slug: 'topics/attachments' },
                    { label: 'Code', slug: 'topics/code' },
                    { label: 'Archiving and trashing', slug: 'topics/archiving-and-trashing' },
                    { label: 'Change history', slug: 'topics/change-history' },
                    { label: 'Subscribing to notifications', slug: 'topics/subscribing-to-notifications' },
                ]
            },
            {
                label: 'Comments and discussion',
                items: [
                    { label: 'Topic threads', slug: 'discussion/threads' },
                    { label: 'Blockers', slug: 'discussion/blockers' },
                ]
            },
            {
                label: 'Finding and organizing topics',
                items: [
                    { label: 'Personal planner', slug: 'finding-and-organizing-topics/personal-planner' },
                    { label: 'Threads view', slug: 'finding-and-organizing-topics/threads-view' },
                    { label: 'Workspace filter', slug: 'finding-and-organizing-topics/workspace-filter' },
                    { label: 'Search and history', slug: 'finding-and-organizing-topics/search-and-history' },
                    { label: 'Flexible topic hierarchies', slug: 'finding-and-organizing-topics/flexible-topic-hierarchies' },
                ]
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
                items: [
                    { label: 'Security', slug: 'misc/security' },
                    { label: 'FAQ', slug: 'misc/faq' },
                    { label: 'Feedback', slug: 'misc/feedback' },
                ]
            },
        ],
		}), markdoc()],
});