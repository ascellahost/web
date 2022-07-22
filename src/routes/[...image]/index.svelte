<script context="module" lang="ts">
	import { getImage } from '$lib/api';
	import type { Load } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	export const load: Load = async ({ params }) => {
		const { image } = params;
		let imgParams = image?.split('/');

		if (imgParams && imgParams[imgParams?.length - 1].split('.')?.[1]) {
			return {
				status: 302,
				redirect: 'https://ascella.host'
			};
		}
		let data = await getImage(imgParams[imgParams?.length - 1]);
		if (data.error)
			return {
				status: 302,
				redirect: 'https://ascella.host'
			};
		if (data.redirect && data.content_type === 'redirect') {
			return {
				status: 302,
				redirect: data.redirect
			};
		}
		return {
			props: { ...data, url: imgParams[imgParams?.length - 1] }
		};
	};
</script>

<script lang="ts">
	export let user_name: string;
	export let image_size: string = '10kb';
	export let embed: Record<string, string> = {};
	export let url: string;
	export let views: string;

	onMount(() => {
		//@ts-ignore -
		if (umami) umami.trackView('/image');
	});
</script>

<svelte:head>
	<title>{user_name} | Image Uploader</title>
	{#if embed.title}
		<meta name="title" content={embed.title} />
		<meta property="og:title" content={embed.title} />
		<meta property="twitter:title" content={embed.title} />
	{/if}
	{#if embed.description}
		<meta name="description" content={embed.description} />
		<meta property="og:description" content={embed.description} />
		<meta property="twitter:description" content={embed.description} />
	{/if}
	{#if embed.author}
		<meta property="site_name" content={embed.author} />
		<meta property="og:site_name" content={embed.author} />
		<meta property="twitter:site_name" content={embed.author} />
	{/if}

	<meta property="twitter:author" content={user_name} />
	<meta property="author" content={user_name} />
	<meta property="theme-color" content={embed.color} />
	<meta property="og:author" content={user_name} />

	<meta property="og:image" content={`https://ascella.wtf/v2/ascella/view/${url}.png`} />
	<meta property="og:type" content="website" />
	<meta property="twitter:card" content="summary_large_image" />

	<script
		async
		defer
		data-website-id="9d7a10ea-0ef7-4e4a-959f-bfe22fc26cfd"
		data-auto-track="false"
		src="https://analytics.tricked.pro/umami.js"></script>
</svelte:head>

<div class="main min-w-screen w-full min-h-screen h-full p-0">
	<div class="box mx-auto text-white">
		<a href={`https://ascella.wtf/v2/ascella/view/${url}.png`} target="_blank">
			<img class="image" alt="" src={`https://ascella.wtf/v2/ascella/view/${url}.png`} />
		</a>
		<div class="bar ">
			<p>Views {views}</p>
			<p>Owner {user_name}</p>
			<p>Size {image_size}</p>
			<p class="link link-hover link-primary">
				<a href="/">Ascella.host</a>
			</p>
		</div>
		<p class="text-white pt-4">
			Enjoy ascella? 💕 Consider sponsoring me on <a
				class="link link-hover link-primary"
				href="https://github.com/sponsors/tricked-dev">Github</a
			>
		</p>
	</div>
</div>

<style lang="postcss">
	:root {
		color-scheme: dark;
	}

	:global(body, html) {
		background-color: black;
	}
	:global(html) {
		background-color: black;
	}
	.bar {
		display: flex;
		gap: 30px 30px;
		justify-items: center;
		text-align: center;
	}
	.image {
		object-fit: contain;
	}
	.box {
		vertical-align: middle;
		justify-content: center;
	}
	.main {
		display: grid;
		height: 100%;
		justify-content: center;
	}

	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
