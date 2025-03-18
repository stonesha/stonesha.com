<script lang="ts">
	import '../app.css';
	import { Sun, Moon } from '@lucide/svelte';
	let { children } = $props();
	import { browser } from '$app/environment';

	let darkMode = $state(false);

	function scrollToSection(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}

	function darkModeToggle() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<header class="sticky top-0 mx-auto max-w-5xl px-4 py-4">
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
			<button
				onclick={darkModeToggle}
				class="rounded-md p-2 transition hover:cursor-pointer hover:bg-sky-200"
			>
				{#if darkMode}
					<Moon />
				{:else}
					<Sun />
				{/if}
			</button>
		</div>
	</nav>
</header>
<main class="mx-auto max-w-3xl">
	{@render children()}
</main>
