<script lang="ts">
	import '../app.css';
	import { Sun } from '@lucide/svelte';
	let { children } = $props();
</script>

<header class="mx-auto my-4 max-w-5xl">
	<nav class="flex flex-row justify-between">
		<p class="text-xl font-bold tracking-tight">Stone Sha</p>

		<div class="flex flex-row items-center space-x-3 px-2 py-1">
			<a href="/" class="text-lg transition hover:text-sky-500">Home</a>
			<a href="#about" class="text-lg transition hover:text-sky-500">About</a>
			<a href="#work" class="text-lg transition hover:text-sky-500">Work</a>
			<a href="#contact-me" class="text-lg transition hover:text-sky-500">Contact Me</a>
			<button class="rounded-md p-2 transition hover:cursor-pointer hover:bg-sky-200"
				><Sun /></button
			>
		</div>
	</nav>
</header>
<main class="mx-auto max-w-3xl">
	{@render children()}
</main>
