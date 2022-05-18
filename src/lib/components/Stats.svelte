<script>
	export let stats = {
		total_users: 'Loading...',
		total_uploads: 'Loading...',
		total_domains: 'Loading...'
	};
</script>

<div class="flex md:flex-row flex-col justify-center gap-4 md:p-10 p-4">
	<div
		class="p-8 bg-slate-800 rounded-lg text-white text-center lg:px-40 md:px-16 px-10"
		data-aos="fade-up"
	>
		<p><b class="cursor-default">Users</b></p>
		<p class="p-1 cursor-default">{stats.total_users}</p>
	</div>
	<div
		class="p-8 bg-slate-800 rounded-lg text-white text-center lg:px-40 md:px-16 px-10"
		data-aos="fade-up"
	>
		<p><b class="cursor-default">Uploads</b></p>
		<p class="p-1 cursor-default">{stats.total_uploads}</p>
	</div>
	<div
		class="p-8 bg-slate-800 rounded-lg text-white text-center lg:px-40 md:px-16 px-10"
		data-aos="fade-up"
	>
		<p><b class="cursor-default">Domains</b></p>
		<p class="p-1 cursor-default">{stats.total_domains}</p>
	</div>
</div>
