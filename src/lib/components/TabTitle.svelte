<script lang="ts">
	import { titleSuffix } from '@data/app';
	import { useTitle } from '$lib/utils/helpers';

	export let title: string;
</script>

<svelte:head>
	<title>{useTitle(titleSuffix, title)}</title>
</svelte:head>
