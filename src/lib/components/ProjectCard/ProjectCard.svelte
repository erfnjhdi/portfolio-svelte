<script lang="ts">
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import type { Project } from '$lib/types';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	export let project: Project;
</script>

<Card color={project.color}>
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={project.name} />
		<div class="row">
			{#each project.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<div class="col m-b-15px justify-between text-[var(--secondary-text)] text-0.85em">
		<div class="row items-center gap-2">
			<UIcon icon="i-carbon-assembly-cluster" classes="text-1.25em" />
			<p>{project.type}</p>
		</div>
		<CardDivider />
	</div>
	<div class="col sm:h-100px md:h-160px">
		<p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">
			{project.shortDescription}
		</p>
	</div>
	<!--<div class="col items-center gap-2 mt-4 mb-2">
		<a href={`${base}/projects/${project.slug}`} class="text-[var(--accent-text)] font-500 text-0.85em rounded transition-all duration-300
			   hover:text-[var(--secondary-text)] hover:opacity-90 hover:text-[1em] hover:border hover:border-[var(--accent-text)] hover:px-2 hover:py-1 hover: underline hover: underline-offset-4 ">
			Show more
		</a>
	</div>-->
	<div class="row justify-between text-0.8em font-400">
		<Chip>{project.date}</Chip>
	</div>
	<CardDivider />
	<div class="row flex-wrap gap-1">
		{#each project.subjects as subject}
			<Chip>{subject}</Chip>
		{/each}
	</div>
</Card>
