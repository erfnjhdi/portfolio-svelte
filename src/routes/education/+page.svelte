<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { title as importedTitle, items } from '@data/education';
	import type { Education } from '$lib/types';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';

	let result: Array<Education> = items;
	let title = importedTitle;

</script>
<TabTitle bind:title />
<h1 class="font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] mt-14">
	{title}
</h1>

<div class="col items-center relative mt-10 flex-1">
	{#if result.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-development" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded" />
		{#each result as education, index (education.slug)}
			<div
				class={`flex ${
					index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
				} relative items-center w-full my-[10px]`}
			>
				<div class="flex-1 hidden lg:flex" />
				<div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
					<UIcon icon="i-carbon-condition-point" />
				</div>
				<div class="col flex-1 items-stretch">
					<Card color={education.color}>
						<div class="flex-1 col gap-2 items-stretch">
							<img
								src={getAssetURL(education.logo)}
								alt={education.organization}
								height="50"
								width="50"
								class="mb-5"
							/>
							<div class="text-[1.3em]">{education.degree}</div>
							<div>{education.organization}</div>
							<div class="col text-[0.9em]">
								<CardDivider />
								<div class="row items-center gap-2">
									<UIcon icon="i-carbon-location" />
									{education.location}
								</div>
								<CardDivider />
								<div class="row items-center gap-2">
									<UIcon icon="i-carbon-time" />
									{education.period}
								</div>
								<CardDivider />
							</div>
							<div class="row flex-wrap gap-1">
								{#each education.subjects as subject}
									<Chip>{subject}</Chip>
								{/each}
							</div>
						</div>
					</Card>
				</div>
			</div>
		{/each}
	{/if}
</div>