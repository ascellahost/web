<script context="module" lang="ts">
	import { getDomains } from '$lib/api';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load() {
		let data = await getDomains();
		data = data
			.sort((a, b) => {
				let fa = a.domain.toLowerCase(),
					fb = b.domain.toLowerCase();

				if (fa < fb) {
					return 1;
				}
				if (fa > fb) {
					return -1;
				}
				return 0;
			})
			.sort((a, b) => {
				if (a.apex) return -1;
				if (b.apex) return 1;
				let fa = a.domain.toLowerCase(),
					fb = b.domain.toLowerCase();

				if (fa < fb) {
					return -1;
				}
				if (fa > fb) {
					return 1;
				}
				return 0;
			});

		return {
			props: { data }
		};
	}
</script>

<script lang="ts">
	export let data: any[];
	import '../css/app.scss';
</script>

<div>
	<div class="w-[30rem] m-auto">
		<p class="text-xl text-white text-center pb-7">Ascella domains</p>
		{#each data as domain}
			<div class="flex">
				<p class="font-mono text-lg text-white">{domain.domain}</p>
				{#if domain.apex}
					<p class="font-mono  text-sm text-gray-400 ml-auto">apex</p>
				{/if}
			</div>
		{/each}
	</div>
</div>
