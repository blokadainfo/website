<script lang="ts">
	import Hero from '$lib/components/custom/hero/hero.svelte';
	import Timeline from '$lib/components/custom/timeline/timeline.svelte';

	const events = [
		{
			name: 'Štand za sakupljanje novca za decu obolelu od raka',
			start: new Date(2025, 1, 15, 9, 0)
		},
		{
			name: 'Štab za prenos uživo i platno',
			start: new Date(2025, 1, 15, 9, 0)
		},
		{
			name: 'Štand za Donu',
			start: new Date(2025, 1, 15, 9, 0)
		},
		{
			name: 'Štand za sport',
			start: new Date(2025, 1, 15, 9, 0)
		},
		{
			name: 'Izložba blokadnog materijala',
			start: new Date(2025, 1, 15, 9, 0)
		},
		{
			name: 'Veliko interaktivno platno',
			start: new Date(2025, 1, 15, 9, 0)
		},
		{
			name: 'Štand za Foni (beleške glasovnih poruka)',
			start: new Date(2025, 1, 15, 9, 0)
		},
		{
			name: 'Medicinski štand',
			start: new Date(2025, 1, 15, 10, 0),
			end: new Date(2025, 1, 15, 13, 0)
		},
		{
			name: 'Turnir u šahu',
			start: new Date(2025, 1, 15, 13, 0),
			end: new Date(2025, 1, 15, 17, 0)
		},
		{
			name: 'Nit slobode (stvaranje zajedničke instalacije)',
			start: new Date(2025, 1, 15, 13, 0),
			end: new Date(2025, 1, 15, 17, 0)
		},
		{
			name: 'Dečiji kutak (radionice Pedagoškog fakulteta)',
			start: new Date(2025, 1, 15, 13, 0),
			end: new Date(2025, 1, 15, 17, 0)
		},
		{
			name: 'Štand za štampanje majica',
			start: new Date(2025, 1, 15, 13, 0),
			end: new Date(2025, 1, 15, 18, 0)
		},
		{
			name: 'Klavinove',
			start: new Date(2025, 1, 15, 14, 0)
		},
		{
			name: 'Monolozi, pesme studenata i nastupi glumaca',
			start: new Date(2025, 1, 15, 20, 30)
		}
	];

	const timetable = [
		{
			name: 'Početak i okupljanje',
			start: new Date(2025, 1, 15, 9, 0)
		},
		{
			name: 'Medicinski kutak',
			start: new Date(2025, 1, 15, 10, 0),
			end: new Date(2025, 1, 15, 13, 0)
		},
		{
			name: 'Odavanje počasti',
			start: new Date(2025, 1, 15, 11, 52),
			end: new Date(2025, 1, 15, 12, 7)
		},
		{
			name: 'Turnir u šahu',
			start: new Date(2025, 1, 15, 13, 0),
			end: new Date(2025, 1, 15, 17, 0)
		},
		{
			name: 'Dečiji kutak',
			start: new Date(2025, 1, 15, 13, 0),
			end: new Date(2025, 1, 15, 17, 0)
		},
		{
			name: 'Klavinove',
			start: new Date(2025, 1, 15, 14, 0)
		},
		{
			name: 'Izrada majica',
			start: new Date(2025, 1, 15, 13, 0),
			end: new Date(2025, 1, 15, 18, 0)
		},
		{
			name: 'Mešoviti hor',
			start: new Date(2025, 1, 15, 18, 0)
		},
		{
			name: 'Čitanje studentskog pisma',
			start: new Date(2025, 1, 15, 19, 50)
		},
		{
			name: 'Pauza',
			start: new Date(2025, 1, 15, 20, 0),
			end: new Date(2025, 1, 15, 20, 30)
		},
		{
			name: 'Bina',
			start: new Date(2025, 1, 15, 20, 30)
		},
		{
			name: 'Odavanje počasti',
			start: new Date(2025, 1, 15, 23, 52),
			end: new Date(2025, 1, 16, 0, 7)
		}
	];
</script>

<Hero />

<div>
	<div>
		<h1 class="my-8 text-center text-3xl font-bold">Protestni plan i program u Kragujevcu</h1>
		<Timeline timetable={events} />
	</div>
	<div>
		<h1 class="my-8 text-center text-3xl font-bold">Satnica protesta u Kragujevcu</h1>
		<Timeline {timetable} />
	</div>
</div>
