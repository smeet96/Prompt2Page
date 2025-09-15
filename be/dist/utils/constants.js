"use strict";
// import { LLMManager } from '~/lib/modules/llm/manager';
// import type { Template } from '~/types/template';
Object.defineProperty(exports, "__esModule", { value: true });
exports.STARTER_TEMPLATES = exports.TOOL_EXECUTION_ERROR = exports.TOOL_EXECUTION_DENIED = exports.TOOL_NO_EXECUTE_FUNCTION = exports.TOOL_EXECUTION_APPROVAL = exports.PROMPT_COOKIE_KEY = exports.DEFAULT_MODEL = exports.PROVIDER_REGEX = exports.MODEL_REGEX = exports.MODIFICATIONS_TAG_NAME = exports.WORK_DIR = exports.WORK_DIR_NAME = void 0;
exports.WORK_DIR_NAME = 'project';
exports.WORK_DIR = `/home/${exports.WORK_DIR_NAME}`;
exports.MODIFICATIONS_TAG_NAME = 'bolt_file_modifications';
exports.MODEL_REGEX = /^\[Model: (.*?)\]\n\n/;
exports.PROVIDER_REGEX = /\[Provider: (.*?)\]\n\n/;
exports.DEFAULT_MODEL = 'claude-3-5-sonnet-latest';
exports.PROMPT_COOKIE_KEY = 'cachedPrompt';
exports.TOOL_EXECUTION_APPROVAL = {
    APPROVE: 'Yes, approved.',
    REJECT: 'No, rejected.',
};
exports.TOOL_NO_EXECUTE_FUNCTION = 'Error: No execute function found on tool';
exports.TOOL_EXECUTION_DENIED = 'Error: User denied access to tool execution';
exports.TOOL_EXECUTION_ERROR = 'Error: An error occured while calling tool';
// const llmManager = LLMManager.getInstance(process.env);
// export const PROVIDER_LIST = llmManager.getAllProviders();
// export const DEFAULT_PROVIDER = llmManager.getDefaultProvider();
// export const providerBaseUrlEnvKeys: Record<string, { baseUrlKey?: string; apiTokenKey?: string }> = {};
// PROVIDER_LIST.forEach((provider : any) => {
//   providerBaseUrlEnvKeys[provider.name] = {
//     baseUrlKey: provider.config.baseUrlKey,
//     apiTokenKey: provider.config.apiTokenKey,
//   };
// });
// starter Templates
exports.STARTER_TEMPLATES = [
    {
        name: 'Expo App',
        label: 'Expo App',
        description: 'Expo starter template for building cross-platform mobile apps',
        githubRepo: 'xKevIsDev/bolt-expo-template',
        tags: ['mobile', 'expo', 'mobile-app', 'android', 'iphone'],
        icon: 'i-bolt:expo',
    },
    {
        name: 'Basic Astro',
        label: 'Astro Basic',
        description: 'Lightweight Astro starter template for building fast static websites',
        githubRepo: 'xKevIsDev/bolt-astro-basic-template',
        tags: ['astro', 'blog', 'performance'],
        icon: 'i-bolt:astro',
    },
    {
        name: 'NextJS Shadcn',
        label: 'Next.js with shadcn/ui',
        description: 'Next.js starter fullstack template integrated with shadcn/ui components and styling system',
        githubRepo: 'xKevIsDev/bolt-nextjs-shadcn-template',
        tags: ['nextjs', 'react', 'typescript', 'shadcn', 'tailwind'],
        icon: 'i-bolt:nextjs',
    },
    {
        name: 'Vite Shadcn',
        label: 'Vite with shadcn/ui',
        description: 'Vite starter fullstack template integrated with shadcn/ui components and styling system',
        githubRepo: 'xKevIsDev/vite-shadcn',
        tags: ['vite', 'react', 'typescript', 'shadcn', 'tailwind'],
        icon: 'i-bolt:shadcn',
    },
    {
        name: 'Qwik Typescript',
        label: 'Qwik TypeScript',
        description: 'Qwik framework starter with TypeScript for building resumable applications',
        githubRepo: 'xKevIsDev/bolt-qwik-ts-template',
        tags: ['qwik', 'typescript', 'performance', 'resumable'],
        icon: 'i-bolt:qwik',
    },
    {
        name: 'Remix Typescript',
        label: 'Remix TypeScript',
        description: 'Remix framework starter with TypeScript for full-stack web applications',
        githubRepo: 'xKevIsDev/bolt-remix-ts-template',
        tags: ['remix', 'typescript', 'fullstack', 'react'],
        icon: 'i-bolt:remix',
    },
    {
        name: 'Slidev',
        label: 'Slidev Presentation',
        description: 'Slidev starter template for creating developer-friendly presentations using Markdown',
        githubRepo: 'xKevIsDev/bolt-slidev-template',
        tags: ['slidev', 'presentation', 'markdown'],
        icon: 'i-bolt:slidev',
    },
    {
        name: 'Sveltekit',
        label: 'SvelteKit',
        description: 'SvelteKit starter template for building fast, efficient web applications',
        githubRepo: 'bolt-sveltekit-template',
        tags: ['svelte', 'sveltekit', 'typescript'],
        icon: 'i-bolt:svelte',
    },
    {
        name: 'Vanilla Vite',
        label: 'Vanilla + Vite',
        description: 'Minimal Vite starter template for vanilla JavaScript projects',
        githubRepo: 'xKevIsDev/vanilla-vite-template',
        tags: ['vite', 'vanilla-js', 'minimal'],
        icon: 'i-bolt:vite',
    },
    {
        name: 'Vite React',
        label: 'React + Vite + typescript',
        description: 'React starter template powered by Vite for fast development experience',
        githubRepo: 'xKevIsDev/bolt-vite-react-ts-template',
        tags: ['react', 'vite', 'frontend', 'website', 'app'],
        icon: 'i-bolt:react',
    },
    {
        name: 'Vite Typescript',
        label: 'Vite + TypeScript',
        description: 'Vite starter template with TypeScript configuration for type-safe development',
        githubRepo: 'xKevIsDev/bolt-vite-ts-template',
        tags: ['vite', 'typescript', 'minimal'],
        icon: 'i-bolt:typescript',
    },
    {
        name: 'Vue',
        label: 'Vue.js',
        description: 'Vue.js starter template with modern tooling and best practices',
        githubRepo: 'xKevIsDev/bolt-vue-template',
        tags: ['vue', 'typescript', 'frontend'],
        icon: 'i-bolt:vue',
    },
    {
        name: 'Angular',
        label: 'Angular Starter',
        description: 'A modern Angular starter template with TypeScript support and best practices configuration',
        githubRepo: 'xKevIsDev/bolt-angular-template',
        tags: ['angular', 'typescript', 'frontend', 'spa'],
        icon: 'i-bolt:angular',
    },
    {
        name: 'SolidJS',
        label: 'SolidJS Tailwind',
        description: 'Lightweight SolidJS starter template for building fast static websites',
        githubRepo: 'xKevIsDev/solidjs-ts-tw',
        tags: ['solidjs'],
        icon: 'i-bolt:solidjs',
    },
];
