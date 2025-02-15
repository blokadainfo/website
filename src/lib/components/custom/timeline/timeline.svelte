<script lang="ts">
	let {
		timetable
	}: {
		timetable: {
			name: string;
			start: Date;
			end?: Date;
		}[];
	} = $props();
</script>

<ul class="timeline timeline-vertical">
	{#each timetable as { name, start, end }, index}
		{@const first = index === 0}
		{@const last = index === timetable.length - 1}
		{@const shh = String(start.getHours()).padStart(2, '0')}
		{@const smm = String(start.getMinutes()).padStart(2, '0')}
		{@const shhmm = `${shh}:${smm}`}
		{@const ehh = end ? String(end.getHours()).padStart(2, '0') : undefined}
		{@const emm = end ? String(end.getMinutes()).padStart(2, '0') : undefined}
		{@const ehhmm = ehh && emm ? `${ehh}:${emm}` : ''}
		{@const hhmm = ehhmm ? `${shhmm} - ${ehhmm}` : shhmm}
		{@const finished = new Date(Date.now()) >= (end ?? start)}
		<li>
			<hr class:hidden={first} class:bg-primary={finished} />
			<div class="timeline-start timeline-box">{hhmm}</div>
			<div class="timeline-middle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="h-5 w-5"
					class:text-primary={finished}
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="timeline-end timeline-box">{name}</div>
			<hr class:hidden={last} class:bg-primary={finished} />
		</li>
	{/each}
</ul>
