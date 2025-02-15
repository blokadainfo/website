<script lang="ts">
	import MapaBlokada from '$lib/assets/event/kragujevac 15.2./mapa-blokada-kg.png';
	import Timeline from '$lib/components/custom/kragujevac/timeline.svelte';

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

<div class="m-1 mt-3 text-justify sm:m-20">
	<h1 class="text-5xl">Poziv za protest u Kragujevcu</h1>
	<br />
	<p class="text-xl">
		U subotu, 15. februara s početkom u 9 časova, studenti i građani okupiće se duž Lepeničkog
		bulevara u Kragujevcu, kako bi 15-časovnom blokadom obeležili Dan državnosti Republike Srbije.
		Dan kada je donošenjem Sretenjskog ustava pokazano da dugogodišnja borba naroda za ustavnost i
		modernizaciju države nije bila uzaludna.
	</p>
	<br />
	<p class="text-xl">
		Ovog datuma, pre tačno 190 godina, donet je Ustav Knjaževstva Serbije, odnosno, Sretenjski
		ustav. Ovaj ustav predstavlja prvi srpski i jedan od prvih demokratskih ustava u Evropi. Ušao je
		u ustavnu istoriju Srbije kao značajan ustavni nacrt, iako nije doživeo praktičnu primenu. Njime
		je izvršena podela vlasti na zakonodavnu, izvršnu i sudsku, što se i danas smatra standardom
		ustavnosti i demokratije. Sretenjski ustav, čiji je tvorac Dimitrije Davidović, donet je u
		Kragujevcu na Skupštini narodnih starešina i velikog broja predstavnika iz svih okruga Srbije i
		potvrđen od strane kneza Miloša Obrenovića.
	</p>
	<br />
	<p class="text-xl">
		Na unutrašnjem planu, Sretenjski ustav je demokratski i antiautokratski. U Kragujevcu, februara
		1835. godine, Srbija je dobila ustav u pravom demokratskom značenju tog pojma – ustav koji ne
		učvršćuje autokratsku vlast knjaza, već ograničava i obuzdava vlast jednog čoveka. On je potekao
		iz dugogodišnjih demokratskih težnji naroda.
	</p>
	<br />
	<p class="text-xl">
		U jeku višemesečne građanske i studentske borbe za pravdu i poštovanje ustavnosti, važno je
		prisetiti se trenutka u istoriji naše zemlje kada se borba naroda pokazala delotvornom. U tom
		maniru, pozivamo građane da se u subotu, 15. februara, pridruže studentima u nekadašnjoj
		prestonici, gde ćemo obeležiti državni praznik i pokazati da, i ovog istorijskog trenutka, umemo
		da istrajemo u borbi za pravdu.
	</p>
	<br />
	<p class="text-xl">Sretnimo se na Sretenje!</p>
</div>
<div class="mt-5">
	<div class="text-center sm:mx-20 sm:text-left">
		<h1 class="text-5xl">Mapa Blokade</h1>
		<p class="mt-3 italic sm:hidden">(Mapu je moguće skrolovati levo-desno.)</p>
	</div>
	<br />
	<div class="overflow-scroll">
		<div class="w-[1600px] sm:w-full" id="mapa">
			<img class="object-cover" src={MapaBlokada} alt="Mapa Blokada u Kragujevcu" />
		</div>
	</div>
</div>

<div class="mb-12 flex flex-wrap justify-center">
	<div>
		<h1 class="mt-8 text-center text-3xl font-bold">Protestni plan i program u Kragujevcu</h1>
		<div class="overflow-scroll py-2">
			<Timeline timetable={events} />
		</div>
	</div>
	<div>
		<h1 class="mt-8 text-center text-3xl font-bold">Satnica protesta u Kragujevcu</h1>
		<div class="overflow-scroll py-2">
			<Timeline {timetable} />
		</div>
	</div>
</div>
