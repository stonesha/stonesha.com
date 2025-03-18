<script lang="ts">
	import '../app.css';
	import { Sun } from '@lucide/svelte';
	let { children } = $props();

	function scrollToSection(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<header class="sticky top-0 mx-auto max-w-5xl bg-white px-4 py-4">
	<nav class="flex flex-row items-center justify-between">
		<p class="text-xl font-bold tracking-tight">Stone Sha</p>

		<div class="flex flex-row items-center space-x-3 px-2 py-1">
			<button
				onclick={() => scrollToSection('about')}
				class="text-lg transition hover:cursor-pointer hover:text-sky-500">About</button
			>
			<button
				onclick={() => scrollToSection('skills')}
				class="text-lg transition hover:cursor-pointer hover:text-sky-500">Skills</button
			>
			<button
				onclick={() => scrollToSection('work')}
				class="text-lg transition hover:cursor-pointer hover:text-sky-500">Work</button
			>
			<button class="rounded-md p-2 transition hover:cursor-pointer hover:bg-sky-200"
				><Sun /></button
			>
		</div>
	</nav>
</header>
<main class="mx-auto max-w-3xl">
	{@render children()}
</main>
