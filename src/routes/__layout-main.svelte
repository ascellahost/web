<script context="module" lang="ts">
</script>

<script lang="ts">
	import '@fontsource/roboto';
	import '@fontsource/material-icons';
	import '@fontsource/roboto-mono';
	const bottomLinks = [
		[
			{
				href: 'https://docs.ascella.host/rules',
				a: 'Rules'
			},
			{
				href: 'https://docs.ascella.host/privacy',
				a: 'Privacy'
			}
		],
		[
			{
				href: 'https://github.com/ascellahost',
				a: 'Github'
			},
			{
				href: '/contributors',
				a: 'Contributors'
			},
			{
				href: '/report',
				a: 'Report'
			}
		],
		[
			{
				href: '/domains',
				a: 'Domains'
			},
			{
				href: 'https://discord.gg/KkMKCchJb8',
				a: 'Discord'
			}
		]
	];

	const topLinks = [
		{
			href: 'https://discord.gg/KkMKCchJb8',
			a: 'Discord'
		},
		{ href: 'https://dash.ascella.host', a: 'Dashboard' },
		{ href: 'https://docs.ascella.host/signup', a: 'Create an account' }
	];
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let meta: Record<string, string> = {
		type: 'website',
		description:
			'Ascella Uploader is an extremely fast image uploader built with the newest technologies.  ' +
			'Ascella is OpenSource you can find the source code at https://github.com/ascellahost',
		title: 'Ascella Uploader - The fastest image uploader',
		keywords: 'javascript typescript programming discord matrix',
		viewport: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no',
		site_name: 'tricked#3777',
		locale: 'en_US'
	};
</script>

<svelte:head>
	<title>Ascella Image Uploader</title>
	{#each ['type', 'site_name', 'description', 'title', 'locale'] as item}
		<meta property={`og:${item}`} content={meta[item]} />
		<meta property={`twitter:${item}`} content={meta[item]} />
		<meta property={`${item}`} content={meta[item]} />
	{/each}

	{#if meta.image}
		<meta property="og:image" content={meta.image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}

	<meta property="theme-color" content="#1b8aeb" />
	<meta property="robots" content="index,follow" />
	<meta property="googlebot" content="index,follow" />
	<meta property="viewport" content="width=device-width" />

	<script
		async
		defer
		data-website-id="9d7a10ea-0ef7-4e4a-959f-bfe22fc26cfd"
		src="https://analytics.tricked.pro/umami.js"></script>
</svelte:head>

<template class="flex-1 flex">
	<nav class="bg-zinc-900">
		<div class="flex flex-col">
			<div class="flex items-center">
				<div class="flex flex-col md:flex-row gap-4 p-2">
					<a class="text-slate-200 text-lg px-2 py-0.5" href="/"><b>Ascella.host</b></a>
					{#each topLinks as link}
						<a
							class="hover:text-slate-100 text-slate-300 text-lg hover:bg-slate-800 rounded-lg px-2 py-0.5 duration-150"
							href={link.href}>{link.a}</a
						>
					{/each}
				</div>
			</div>
		</div>
	</nav>
	<slot />

	<div class="pb-7" />
	<div
		class="transform no-underline text-gray-300 hover:text-white min-h-full border-t-2 border-gray-300 hover:border-white pt-6 footer"
		transition:fly={{ x: 1500, y: 0, duration: 800 }}
	>
		<div class="flex-auto flex list-none">
			{#each bottomLinks as links}
				<div>
					<u>
						{#each links as link}
							<li>
								<a href={link.href} class="px-4 py-2 not-sr-only hover:text-slate-300 translate-x-"
									>{link.a}</a
								>
							</li>
						{/each}
					</u>
				</div>
			{/each}
		</div>
	</div>
</template>

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(body) {
		@apply bg-gradient-to-br from-cyan-600 to-sky-600;
	}
</style>
