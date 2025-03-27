<script lang="ts">
</script>

{#snippet event(time: string, title: string, body: string)}
	<li class="mb-10 ms-4">
		<div
			class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-[#db2340] bg-[#db2340]"
		></div>
		<time class="mb-1 text-sm font-normal leading-none">{time}</time>
		<h2 class="text-lg font-semibold">
			{title}
		</h2>
		<p class="mb-4 text-base font-normal sm:text-justify">
			{body}
		</p>
		<!--<a
			href="#"
			class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
			>Learn more <svg
				class="ms-2 h-3 w-3 rtl:rotate-180"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 5h12m0 0L9 1m4 4L9 9"
				/>
			</svg></a
		>-->
	</li>
{/snippet}

<div class="mx-auto flex w-full max-w-screen-sm flex-col p-4 sm:p-0">
	<ol class="relative border-s border-[#db2340]">
		<div class="flex items-center">
			<div class="hidden h-28 p-2 sm:block">
				<svg
					id="Layer_2"
					data-name="Layer 2"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 355.8 571.03"
					height="100px"
				>
					<defs>
						<style>
							.cls-1 {
								fill: #db2340;
								stroke-width: 0px;
							}
						</style>
					</defs>
					<g>
						<path
							class="cls-1"
							d="m322.24,163.89c5.29,5.52,4.46,15.85-1.79,20.31-1.7,1.21-2.03,2.13-.7,3.69.73.85,1.2,1.93.65,2.98-.65,1.25-1.84.66-2.89.53-2.84-.36-3.43.2-3.45,3.16,0,1.97.45,3.75-2.28,4.91-1.57.67-1.86,3.55-1.96,5.58-.14,2.9-1.16,5.28-3.08,7.39-2.53,2.79-3.04,5.77-.81,9.05.59.86.73,2.01,1.17,2.99,1.06,2.39.46,4.15-1.87,5.37-.69.36-1.27.93-1.94,1.32-1.33.77-1.5,1.72-.5,2.86,5.14,5.84,4.82,13.19,5.59,20.23.29,2.64-1.57,3.21-3.59,3.73-1.07.28-2.97-.44-2.95,1.53.02,2.05-1.55,4.49,1.24,6.06,1.19.67,2.08,1.76,2.89,2.88,1.15,1.58,1.47,3.15.14,4.82-1.77,2.22-1.52,4.53-.11,6.81,1.44,2.34,2.17,4.94,1.68,7.58-1.1,5.91-.14,11.67.63,17.48,1.57,11.81,1.45,23.56-.63,35.34-1.81,10.21-1.89,20.61-3.03,30.9-1.51,13.68.86,27.11,2.11,40.62.58,6.27.33,12.49-.47,18.72-.29,2.26-1.52,3.16-3.57,3.49-2.14.35-3.81-.06-4.91-2.16-2.64-5.03-3.46-10.37-2.79-15.93.77-6.4,1.77-12.78,2.58-19.17.45-3.51,1.46-6.9-.46-10.53-1.13-2.14.04-4.98.21-7.51.26-3.69.98-7.35.91-11.12-1.5-.08-1.88,1.11-2.45,1.9-2,2.77-3.95,5.59-5.86,8.43-1.27,1.88-2.53,3.66-4.76,4.6-2.26.95-1.88,3.18-2,5.08-.05.9.54,1.84-.59,2.7,0-1.31-.05-2.61.01-3.92.12-2.71-.06-2.92-2.74-2.11-4.86,1.46-9.72,2.96-14.55,4.52-4.77,1.55-9.57,2.87-14.65,2.31-1.97-.22-2.5.86-2.83,2.45-1.39,6.8-1.01,13.63-.36,20.45.69,7.3,1.77,14.55,1.5,21.92-.35,9.69,1.63,19.05,4.65,28.2,3.13,9.48,1.78,12.85-7.26,17.32-3.33,1.64-3.39,1.61-5.58-1.46-3.34-4.67-3.62-9.77-2.17-15.12.77-2.83,1.63-5.63,2.32-8.47.88-3.66.92-7.37-.03-11.03-.67-2.59-1.12-5.21-.62-7.84,1.69-8.99,1.65-18.11,1.78-27.18.1-7.01-1.82-13.95-1.45-21.03.07-1.25-.82-2.12-1.86-2.8-3.04-1.99-5.94-4.02-6.88-7.95-.43-1.81-1.64-2.19-3.2-.56-2.8,2.93-3.1,2.8-4.15-1.11-.87-3.26-.76-6.59-.74-9.91,0-1.34.07-3.33-1.28-3.44-1.19-.1-1.18,1.95-1.31,3.15-.76,7.2-1.17,14.42-1.12,21.67.15,24.06.38,48.13.26,72.19-.04,7.6-1.26,15.19-.17,22.82.33,2.34.55,4.63,1.84,6.71.96,1.55,1.22,3.27.73,5.08-.56,2.08-1.01,4.18-1.6,6.25-.76,2.62-.34,5.01,1.07,7.3.51.83,1.01,1.68,1.43,2.56,1.69,3.5,1.61,4.5-1.32,7.18-1.91,1.74-2.9,3.21-.67,5.43,1.3,1.3,1.11,3.17.65,4.75-1.01,3.5-.35,6.52,1.9,9.32,1.24,1.54,1.56,3.38,1.05,5.27-.82,3.03-.48,5.98.26,8.97.77,3.13,1.48,6.28,2.04,9.45.5,2.77-.21,5.32-2.44,7.14-1.65,1.34-3.52,2.77-5.83,1.58-2.57-1.33-5.21-2.48-4.98-6.36.28-4.68.45-9.33,1.14-14,1.02-6.87.85-13.78-.84-20.64-.54-2.2-.11-4.64-.06-6.97.18-7.78-.64-15.41-3.03-22.86-1.04-3.24-1.02-6.55-.16-9.84.79-3.04,1.27-6.11,1.25-9.27-.16-21.82.94-43.62,1.17-65.43.08-7.05-.25-14.08-.62-21.11-.13-2.38-1.23-3.85-3.62-4.25-2.43-.41-4.82-.95-6.75-2.6-1.11-.94-1.73-.32-2.35.58-1.1,1.62-2.28,3.19-3.29,4.86-1.15,1.9-2.71,2.71-4.9,2.37-2.43-.38-4.69-.16-6.42,1.89-.17.21-.5.36-.77.39-4.07.49-4.23,3.25-4.29,6.57-.23,14.08-.82,28.16-.99,42.24-.09,7.43,1.25,14.79,1.97,22.18.68,6.91,1.53,13.82.33,20.75-.33,1.9-.83,3.78-1.45,5.6-.49,1.42-.86,3.22-2.87,3.28-2.18.06-4.02-.69-5.09-2.77-1.97-3.85-2.31-7.97-2.47-12.23-.43-11.52,2.75-22.66,3.34-34.06.17-3.22.52-6.44.5-9.67-.08-11.73-.03-23.46.39-35.19.16-4.35-1.86-6.93-5.31-7.73-3.56-.82-6.02.87-6.75,4.45-.56,2.77-.04,5.44.31,8.15.2,1.56.45,3.25-1.79,3.66-2.17.39-3.38-.75-3.9-2.66-.74-2.71-.22-5.43.23-8.14.64-3.83-.22-6.05-2.69-7.37-1.83-.98-3.19-.78-3.84,1.4-.17.56-.22,1.17-.47,1.69-.5,1.09-.53,2.8-2.2,2.7-1.58-.09-2.09-1.83-2.02-2.86.4-6.02-3.4-8.63-8.08-10.83-2.39-1.13-4.26-3.12-6.07-5.04-3.26-3.45-7.06-6.18-11.08-8.62-12.51-7.63-23.21-17.15-31.73-29.18-4.46-6.29-8.31-12.92-12.39-19.42-1.14-1.82-2.25-3.67-3.77-5.22-.89-.9-1.63-1.8-3.23-1.07-1.28.59-2.47-.12-3.16-1.4-.28-.51-.43-1.1-.76-1.58-.66-.98-.55-2.94-2.09-2.77-1.62.18-2.08,1.97-2.39,3.38-.52,2.34-.06,4.66.59,6.94.56,1.97,1.11,3.95,1.01,6.04-.1,1.91-1.03,3.2-2.87,3.56-1.96.38-3.43-.48-4.22-2.36-.8-1.89-.5-3.85-.29-5.79.45-3.98.99-7.96,1.36-11.94.22-2.41-.5-2.87-2.66-2.07-1.17.43-2.55,1.98-3.6.31-1.06-1.69.58-2.8,1.65-3.9-1.52,1.23-2.61,1.11-2.38-1.08.61-5.84-2.02-9.51-7.17-11.96-2.27-1.08-4.37-2.53-6.73-3.51-1.85-.77-2.7-.11-3.28,1.56-.5,1.44-.39,2.9-.23,4.35.86,7.96,1.73,15.91,2.66,23.86.25,2.13.23,4.1-1.59,5.61,1.26-1.06,2.24-1.05,2.1.86-.12,1.73-.39,3.52-.99,5.14-1.16,3.15-1.9,6.33-1.68,9.7.04.59.45,1.5-.53,1.71-.32.07-.58-.03-.8-.2,1.65,2.1,2.24,4.61,2.51,7.31.59,5.73,1.4,11.43,2.1,17.15.42,3.5.48,7.04,0,10.52-.56,4.06-.23,7.97,1.01,11.85.41,1.29.69,2.65.86,4,.48,3.87-1.36,4.46-4.7,5.36-1.11.3-1.31-.61-1.59-1.3-1.23-3.02-1.88-6.15-1.68-9.43.23-3.72.14-7.4-.92-11.03-.27-.92-.43-1.96-.27-2.89,1.32-7.65.04-15.19-.97-22.73-.42-3.11-.33-6.24-.34-9.36,0-1.11.02-2.36,1.77-1.52-2.52-3.12-2.16-9.05.7-11.56-1.96,1.35-2.66.59-2.43-1.51.1-.96.23-1.98.65-2.83,1.86-3.75,1.36-7.38-.3-11.06-1.24.28-1.07,1.5-1.5,2.26-1.14,1.99-2.81,3.01-5.06,2.84-2.28-.17-3.68-1.5-4.4-3.7-.97-2.95-.59-5.78.39-8.61,1-2.86,2.04-5.7,3.03-8.57.74-2.15,1.16-4.4.75-6.64-.48-2.65-.78-5.11.9-7.57.87-1.29-1.19-3.25-3.33-3.29-.68-.01-1.36.25-2.03.23-2.33-.08-4.1-1.85-3.57-4.01.4-1.63-.22-2.57-1.04-3.68-3.22-4.29-5.9-8.93-9.04-13.3-6.26-8.7-2.63-18.33,7.64-21.49,7.07-2.17,14.18-2.49,21.35-.22,9.37,2.98,19.92,14.02,16.85,27.09-.54,2.29.99,3.68,2.67,4.77,1.13.73,2.46,1.16,3.7,1.74,1.76.81,2.91,1.94,2.3,4.12-.45,1.62-.15,2.35,1.8,1.71,5.73-1.88,10.04.64,13.81,4.69,1.11,1.19,1.31,2.35.14,3.59,1.3-1.1,2.01-.48,2.68.8,1.86,3.56,3.74,7.12,7.46,9.17.79.44.61,1.18.5,1.82-.55,3.1.33,5.49,3.26,6.96,1.91.95,3.47,2.34,5.05,4.74-.18-4.71,2.56-6.25,5.72-7.44,2.02-.76,4.08-1.3,6.22-1.63,4.01-.61,4.59-.39,6.63,3.09q2.28,3.9,6.51,2.31c2.56-.97,5.08-2.04,7.66-2.95,2.31-.81,3.31-2.39,3.65-4.78.68-4.83,1.6-9.62,3.34-14.23,2.39-6.36,6.69-10.66,13.1-12.91,11.79-4.13,24-5.31,36.39-5.13,6.96.1,13.85.82,20.64,2.39,5.49,1.28,7.05,3.37,6.61,8.9-.69,8.78-1.26,17.56-1.46,26.36-.11,5.13.54,10.15,3.08,14.74,3.52,6.35,10.84,8.03,16.8,3.86,4.41-3.09,7.85-7.07,10.47-11.72,2.16-3.83,4.12-7.78,6.2-11.66,1.48-2.76,2.93-5.61,5.26-7.73,4.68-4.26,4.65-13.95,1.58-18.9-.73-1.18-1.67-2.15-2.76-3.01-1.05-.83-1.93-.88-3.17-.21-4.58,2.5-6.45,1.95-9.11-2.46-.97-1.6-2.05-3.1-3.47-4.33-.99-.85-2.04-1.59-3.44-1.03-1.46.59-2,1.84-2.06,3.27-.06,1.36.11,2.74.11,4.1,0,1.76.03,3.53-.17,5.27-.15,1.33-1,2.34-2.37,2.7-1.37.36-2.47-.12-3.41-1.15-2.05-2.23-2.53-5.01-2.84-7.85-.76-7.06-2.11-8.56-8.91-9.83-7.08-1.33-9.22-3.89-9.74-11.66-.27-3.98-.22-3.9-3.78-1.86-1.59.91-2.34,1.82-1.61,3.71.38.97.4,2.11.4,3.18.02,3.52-1.46,5.26-5.01,5.58-6.51.58-12.85-.68-19.16-2.06-6.05-1.32-11.83-3.37-17.18-6.55-.42-.25-.86-.48-1.3-.67-2.69-1.17-3.63-.64-3.7,2.26-.07,2.93.04,5.87.1,8.8.04,1.82-.47,3.49-1.38,5.03-1.38,2.33-3.46,2.5-5.22.42-1.4-1.65-1.88-3.6-1.84-5.73.08-4.89.08-9.78.23-14.67.19-6.01-.25-11.92-2.1-17.67-.57-1.78-.67-3.46.84-4.88-2.07,1.38-2.04-.47-2.18-1.56-.5-3.86.09-7.63,1.51-11.22,1.42-3.6,1.63-7.42,2.31-11.16.11-.63.37-1.49-.48-1.79-4.17-1.47-3.62-4.88-3.15-8.04.47-3.19.72-6.22-1.26-9.01-.28-.4-.54-.82-.86-1.19-.54-.62-1.25-1.14-2.04-.76-.73.35-.48,1.21-.4,1.86.22,1.64.59,3.27.74,4.92.14,1.54-.25,3.01-1.83,3.66-1.71.7-3.27.24-4.56-1.07-1.65-1.67-2.03-3.77-1.69-5.98.35-2.31.91-4.59,1.34-6.9.56-3.05.2-5.52-2.67-7.69-6.64-5.03-6.44-13.84.35-18.62,5.94-4.18,12.94-5.89,19.84-7.7,2.16-.57,4.31-1.25,6.6-1.29,4.81-.08,8.2,2.71,8.97,7.47.57,3.51-.31,6.8-1.6,10-2.05,5.08-3.97,10.16-4.5,15.71-.34,3.51-2.47,6.55-3.74,9.82-.83,2.13-2.87,1.91-4.76.9-2.58-1.38-2.59-1.33-2.54,1.53.04,2.05.12,4.11.02,6.16-.08,1.64.39,1.88,2.02,1.58,7.42-1.35,14.89-2.16,22.44-.98,1.12.17,2.72.02,1.44,1.97,2.91-3.14,6.49-1.51,9.69-1.04,2.29.34,4.38.48,6.6-.12,6.77-1.84,13.78-2.63,20.44-5.08,5.8-2.13,11.59-.02,17.28,1.32,4.35,1.02,8.23,2.71,11.04,6.6,1.54,2.14,4.06,3.09,7.05,2.62,3.37-.53,6.82-.54,10.23-.8,1.75-.13,3.51.26,4.61,1.49,1.53,1.72,3.42,2.03,5.44,2.38,6.97,1.21,13.29,3.95,18.88,8.27,1.78,1.37,2.57.71,2.59-1.03.04-3.15,1.68-5.75,2.66-8.55,1.1-3.14,5.81-4.52,8.4-2.23,2.59,2.3,5.12,2.36,8.11,1.56,1.69-.46,3.44-.67,5.16-1.03,1.26-.27,1.59-.91.85-2.08-1.05-1.66-2.2-3.25-3.64-4.58-1.91-1.78-2.49-3.97-1.95-6.42.66-3,.74-6.01.58-9.05-.11-2.2.34-4.29,1.35-6.23,1.37-2.62,3.68-3.81,6.56-3.23,1.74.35,3.21.09,4.74-.81,2.8-1.66,5.38-1.18,7.65,1.19ZM109.21,86.88c1.9,1.37,3.73,2.86,5.48,4.41,1.91,1.69,2.67,3.76,1.73,6.33-.81,2.2-1.42,4.47-2.17,6.69-1.36,3.98-1.93,8.01-.61,12.09,1.7,5.25,4.25,10.1,7.7,14.41,2.67,3.34,6.19,4.64,10.43,3.82,3.26-.63,6.51-1.33,9.78-1.94,7.28-1.35,8.51-2.43,9.64-9.6,1-6.35,2.44-12.65,1.54-19.21-1.2-8.73-4.65-12.26-13.35-12.9-1.96-.14-3.9-.35-5.71-1.15-1.1-.49-2.15-1.07-2.13-2.5.02-1.24.82-1.96,1.83-2.44,1.68-.79,3.39-1.5,5.09-2.25,4.42-1.96,6.51-5.41,6.56-10.45-.24-5.07-1.47-10.16-3.79-14.98-3.38-7.03-8.72-11.36-16.59-12.42-8.77-1.18-15.38,3-17.8,11.44-1.65,5.75-2.79,11.59-3.24,17.56-.41,5.32,1.08,9.84,5.6,13.1Zm114.14-15.93c1.89-4.7.55-8.81-3.7-11.35-3.39-2.02-7.05-2.02-10.76-1.04-1.41.37-2.62,1.21-2.92,2.62-.43,2-1.69,2.14-3.38,2.33-6.21.68-9.62,3.93-10.78,10.14-.62,3.29-.53,6.61-.03,9.92,1.04,6.87,4.29,12.93,7.01,19.19.89,2.05,2.15,4.03,2.04,6.35-.19,4.09-.39,8.19-.84,12.25-.42,3.7-1.7,7.19-3.21,10.61-3.93,8.88-1.21,17.42,1.56,25.92.44,1.35,1.46.97,2.32.26-1.15.8-1.76,1.89-1.33,3.26.82,2.62,1.32,5.2.99,8.01-.21,1.83,1.08,3.18,3,3.26,2.05.09,2.89-1.21,2.96-3.18.05-1.55.2-3.11.39-4.65.6-4.75,1.26-5.25,5.72-3.86,2.4.75,3.89.17,4.91-2.14,1.53-3.48,3.24-6.87,4.81-10.32,1.45-3.18,1.84-6.54,1.51-9.99-.13-1.38-.53-2.46-2.12-1.08.96-1.23,1.37-2.6.87-4.12-.66-2.02-.48-4.01-.03-6.06.48-2.19.77-4.42,1.07-6.65.75-5.67-1.26-10.39-5.25-14.28-1.97-1.92-2.45-3.78-.94-6.21,1.14-1.82,1.88-3.9,2.2-6.02.33-2.17,1.27-4.64-.39-6.5-1.64-1.83-1.35-3.44-.51-5.35,1.65-3.75,3.29-7.51,4.82-11.31Zm-36.43-6.6c1.08,1.84,2.79,1.82,3.84-.05.88-1.56,1.15-3.29,1.25-5.08.13-2.24.36-4.48.58-6.72.05-.55,0-1.26.76-1.4.52-.09.9.3,1.22.69.31.38.66.73.91,1.15,1.81,3.06,4.52,3.79,7.82,3.1,2.39-.5,4.77-1.06,7.18-1.42,5.85-.89,9.67-4.29,12.18-9.47,5.98-12.34,4.02-24.22-2.49-35.57-4.35-7.58-11.82-10.7-19.92-9.22-8.09,1.48-13.59,7.08-15.45,15.63-.86,3.95-1.12,7.93-1.09,11.96.5,11.42,2.21,22.76,2.52,34.2.02.74.31,1.55.69,2.2Zm167.64,62.57c-.22-6.86.89-13.67.63-20.52-.16-4.28-1.12-8.33-3.38-11.99-3.13-5.05-9.36-8.26-14.52-6.67-9.25,2.84-16.31,8.48-19.23,18.09-1.52,4.98-.71,9.57,3.6,13.29,3.4,2.93,6.43,6.28,9.6,9.48.87.88,1.94,1.67,2.09,3.25-2.39.02-4.34-1.17-6.28-2.13-2.73-1.34-5.19-.85-7.4.84-2.3,1.76-3.07,4.22-2.13,7.07,1.31,3.99,2.61,7.98,3.94,11.97.82,2.45,2.24,3.81,5.13,3.82,3.5.01,5.55,1.99,6.32,5.42.32,1.42.42,2.9.64,4.34.45,2.99.5,6.05,1.47,8.94.28.84.77,1.83,1.75,1.74.98-.08,1.24-1.09,1.38-2.01.28-1.86.15-3.69-.3-5.52-.95-3.9-1.54-7.87-1.8-11.87-.1-1.48.01-3.03,1.43-3.93,1.29-.82,2.17.43,3.13.96,1.39.76,2.84,1.18,4.08.04,1.21-1.11.17-2.38-.28-3.5-.72-1.79-2.14-3.52-1.1-5.52,1.28-2.46,1.04-4.81.42-7.36-.65-2.69-.82-5.48,1.28-7.76,1.01-1.1,2.27-2.13,3.84-1.63,1.7.54,1.76,2.17,1.68,3.69-.06,1.17-.24,2.33-.32,3.5-.1,1.46-.35,2.95-.15,4.38.27,2,1.41,3.56,3.65,3.5,2.59-.07,1.93-2.19,2.04-3.74.24-3.46-1.1-6.71-1.22-10.16Zm-100.21-78.02c.26,7.27,2.23,9.18,9.32,10.9,5.85,1.42,11.84.62,17.67,1.82.5.1.67-.21.91-.53,2.14-2.9,4.31-5.73,5.31-9.33,1.79-6.42,3.03-12.92,3.27-20.4,1.26-7.94-3.97-13.55-10-18.19-5.18-3.98-12.53-2.62-17.45,2.16-4.29,4.17-7.02,9.32-9.26,14.8-1.19,2.91-1.57,5.91-.89,8.9.74,3.27,1.02,6.55,1.14,9.87Zm1.72,119.26c.02.92.54,1.65,1.11,2.34.59.71,1.26.84,2.08.44.75-.37,1.37-.85,1.24-1.77-.12-.87-.4-1.71-.53-2.58-.47-3.21,1.01-5.06,4.24-5.33,4.54-.38,8.07,3.48,7.31,8.01-.26,1.55-.6,3.09-.09,4.64.29.88.75,1.66,1.78,1.71.94.04,1.67-.44,2.19-1.23.75-1.15.81-2.42.53-3.68-.39-1.81-.92-3.59-1.4-5.38-.66-2.47-.98-5.48.82-6.99,3.91-3.29,3.63-7.42,3.97-11.74.44-5.51,2.64-10.76,2.43-16.45-.26-7.07-2.72-12.91-8.21-17.37-1.96-1.59-4.4-2.59-6.85-1.63-4.22,1.66-7.98,3.97-10.2,8.32-3.38,6.63-4.35,13.72-4.69,20.34.11,2.9.04,5.15.56,7.37,1.64,6.93,3.55,13.81,3.7,21.01Zm27.84-77.51c.51-4.76,1.04-9.51,1.49-14.27.1-1.08.2-2.52-1.62-1.23,1.87-2.66.73-7.38-2.03-7.45-4.23-.12-8.17-1.82-12.38-1.79-4.22.03-8.43.47-10.63,4.69-2.27,4.36-3.44,8.98-.25,13.53,1.55,2.22,2.04,4.53,1.3,7.19-.33,1.18-.32,2.54-.14,3.77.24,1.68,1.1,2.55,2.76,1.13-1.59,1.66-1.05,2.91.73,3.97,1.62.97,3.4,1.66,5.24,1.73,4.21.17,7.2,1.49,8.41,6.07.76,2.89,3.21,2.89,5.33.79,1.53-1.53,1.25-3.17.67-4.57-1.14-2.76-1.82-5.06.33-7.85,1.02-1.33.59-3.77.8-5.71Z"
						/>
					</g>
				</svg>
			</div>
			<h1 class="pb-4 pl-4 text-3xl font-semibold text-[#db2340] sm:pl-0">Arhiv protesta</h1>
		</div>
		{@render event(
			'Petak, 1.11.2024.',
			'Tragedija u Novom Sadu',
			'Pad nadstrešnice nedavno rekonstruisane Železničke stanice u Novom Sadu, u 11.52 časa, usmrtio je 14 osoba, a teško ranio tri.'
		)}
		{@render event(
			'Subota, 2.11.2024.',
			'Početak vršenja uviđaja',
			'Javni tužilac Višeg javnog tužilaštva u Novom Sadu počinje vršenje uviđaja. Za televiziju N1 istupa inženjer geologije Zoran Đajić, koji je do marta 2023. godine radio na rekonstrukciji, gde ističe da na svoje izveštaje o nepravilnostima nije dobijao odgovore.'
		)}
		{@render event(
			'Nedelja, 3.11.2024.',
			'Prvi protest',
			'Građani Beograda organizovali su protest pod nazivom “Ovo je kap koja je prelila čašu”. Ovaj skup obeležili su tragovi šaka crvene boje, koji će postati simbol nezadovoljstva zbog neistupanja odgovornih.'
		)}
		{@render event(
			'Ponedeljak, 4.11.2024.',
			'Nadstrešnica nema upotrebnu dozvolu',
			'Istraživanje Insajdera utvrdilo je da državno preduzeće „Infrastrukture železnice Srbije“ do ovog datuma nije ni poslalo zahtev za izdavanje upotrebne dozvole za Železničku stanicu u Novom Sadu.'
		)}
		{@render event(
			'Utorak, 5.11.2024.',
			'Novosadski protest',
			'Prema Arhivu javnih skupova, oko 22 000 građana Novog Sada odazvalo se protestu povodom urušavanja nadstrešnice, čineći ovaj skup najvećim novosadskim protestom.'
		)}
		{@render event(
			'Petak, 8.11.2024.',
			'Hapšenje novosadskih aktivista',
			'Građani Novog Sada organizovali su šestočasovnu blokadu Varadinskog mosta. Nešto pre početka ovog događaja došlo je do privođenja aktivista, što je dodatno uznemirilo građanstvo.'
		)}
		{@render event(
			'Petak, 15.11.2024.',
			'Početak akcije “Zastani, Srbijo”',
			'Prva u nizu akcija “Zastani, Srbijo”. Ovom akcijom, građani širom zemlje su zastali na 14 minuta, tačno 14 dana nakon tragedije, kako bi odali počast 14 stradalih osoba.'
		)}
		{@render event(
			'Nedelja, 17.11.2024.',
			'Sa 14 na 15 minuta',
			'Nakon dve nedelje borbe za život, preminula je 15. žrtva urušavanja nadstrešnice. Nakon ovoga, građani nastavljaju akcije blokiranja raskrsnica i odavanja pošte stradalima svakog petka na 15 minuta, u Beogradu svakog dana.'
		)}
		{@render event(
			'Petak, 22.11.2024.',
			'Prvi fizički napad na studente',
			'Tokom odavanja počasti preminulima, nekoliko vozača izašlo je iz automobila i verbalno i fizički napalo studente Fakulteta dramskih umetnosti u Beogradu.'
		)}
		{@render event(
			'Ponedeljak, 25.11.2024.',
			'Blokada Fakulteta dramskih umetnosti',
			'Fakultet dramskih umetnosti u Beogradu stupa u blokadu, kao odgovor na prethodne fizičke napade na studente.'
		)}
		{@render event(
			'Petak, 29.11.2024.',
			'Fizički napad na učenike srednjih škola',
			'Napad na učenike Karlovačke gimnazije i Gimnazije “Jovan Jovanović Zmaj” za vreme održavanja 15-minutne tišine.'
		)}
		{@render event(
			'Nedelja, 1.12.2024.',
			'Mesec dana od tragedije',
			'Obeležavanje mesec dana od tragedije u Novom Sadu, protestnoj šetnji pristupilo je oko 3 000 Novosađana.'
		)}
		{@render event(
			'Ponedeljak, 2.12.2024.',
			'Protest učenika u Novom Sadu',
			'Kao odgovor na medijske napade na učenike i nastavnike, učenici Gimnazije “Jovan Jovanović Zmaj” održali su protest ispred škole.'
		)}
		{@render event(
			'Sreda, 11.12.2024.',
			'Zahtev za ostavku Dejana Madića',
			'Profesori Univerziteta u Novom Sadu okupili su se ispred zgrade Rektorata kako bi rektoru Dejanu Madiću uručili zahtev za ostavku.'
		)}
		{@render event(
			'Sreda, 11.12.2024.',
			'Buka pred predsedništvom',
			'Studenti u Beogradu održali su protest ispred Predsedništva Srbije, za vreme obraćanja predsednika Aleksandra Vučića medijima. Studenti su imali cilj da remete govor predsednika, koji su smatrali neprikladnim.'
		)}
		{@render event(
			'Četvrtak, 12.12.2024.',
			'Blokirana Rektorat u Novom Sadu',
			'Studenti novosadskog univerziteta blokirali su zgradu Rektorata. Zahtev za smenu rektora Dejana Madića dodat je ostalim zahtevima.'
		)}
		{@render event(
			'Utorak, 17.12.2024.',
			'Blokirani fakulteti 3 najveća grada',
			'Zvanično, nastava na svim fakultetima Univerziteta u Beogradu, Novom Sadu i Nišu je blokirana.'
		)}
		{@render event(
			'Nedelja, 22.12.2024.',
			'Protest na Slaviji',
			'Protestu na beogradskom trgu Slavija prisustvovalo je oko 102 000 građana, što ovaj protest čini najvećim protestom u Srbiji.'
		)}
		{@render event(
			'Sreda, 25.12.2024.',
			'Nerad republičke javne tužiteljke',
			'Beogradski studenti u protestnoj šetnji ka Vrhovnom javnom tužilaštvu doneli su 1000 pisama republičkoj javnoj tužiteljki Zagorki Dolovac, nezadovoljni načinom na koji ona obavlja svoju funkciju.'
		)}
		{@render event(
			'Petak, 27.12.2024.',
			'Protest ispred RTV-a',
			'Deo zaposlenih Radio-televizije Vojvodine održao je protest ispred zgrade. Akciji su se pridružili novosadski studenti, koji su organizovano došli iz kampusa, blokirajući saobraćaj.'
		)}
		{@render event(
			'Ponedeljak, 30.12.2024.',
			'Novi Sad i privremeno finansiranje',
			'Studenti novosadskog univerziteta održali su treći po redu protest ispred Skupštine Vojvodine, povodom zasedanja skupštine o budžetu za 2025. godinu. Skupština je nakon trećeg pomerenja raspuštena, čime je Novi Sad ušao u privremeno finansiranje do marta.'
		)}
		{@render event(
			'Utorak, 31.12.2024.',
			'Komemoracija stradalima',
			'Studenti su u više gradova organizovali doček 2025. godine u vidu komemoracije stradalima u Novom Sadu sa porukom “Nema Nove, za staru ste nam još dužni”.'
		)}
		{@render event(
			'Sreda, 1.1. 2025.',
			'Dva meseca od tragedije',
			'Obeležavanje dva meseca od tragedije ispred Železničke stanice u Novom Sadu.'
		)}
		{@render event(
			'Petak, 10.1.2025.',
			'Blokada Mostarske petlje',
			'U Beogradu je održana akcija jednočasovne blokade Mostarske petlje, pod nazivom “Dođi na Mostar, ako imaš petlju”.'
		)}
		{@render event(
			'Subota, 11.1.2025.',
			'BIA protest',
			'Kao odgovor na pozive na razgovor Bezbednosno-informativne agencije, novosadski studenti su održali protest ispred sedišta ove agencije u Novom Sadu. Događaju je prisustvovalo više od hiljadu građana i studenata.'
		)}
		{@render event(
			'Nedelja, 12.1.2025.',
			'Protest ispred Ustavnog suda',
			'Studenti beogradskog univerziteta održali su protest ispred Ustavnog suda, kojim su pokazali nezadovoljstvo zbog slučajeva kršenja ustavnog prava. Ovom događaju prisustvovalo je oko 30 000 građana.'
		)}
		{@render event(
			'Utorak, 14.1.2025.',
			'Napad na studente u blokadi',
			'U toku noći, došlo je do nekoliko incidenata ispred Pravnog fakulteta u Beogradu. Ovo je zvaničan napad na studente tokom blokade fakulteta.'
		)}
		{@render event(
			'Četvrtak, 16.1.2025.',
			'Napad tokom odavanja počasti',
			'Tokom 15-minutne tišine u Ruzveltovoj ulici u Beogradu, vozač automobila zaleteo se sa trotoara na okupljene studente i tom prilikom naneo ozbiljne povrede studentkinji Pravnog fakulteta Sonji Ponjavić. Ovaj čin mnogi su okarakterisali kao pokušaj ubistva, i predstavlja dalju kulminaciju događaja.'
		)}
		{@render event(
			'Četvrtak, 16.1.2025.',
			'Protest ispred Osnovnog suda',
			'Studenti novosadskog univerziteta okupili su se ispred Osnovnog suda u Novom Sadu, kako bi sprečili nezakonito održavanje ispitnog roka Pravnog fakulteta.'
		)}
		{@render event(
			'Petak, 17.1.2025.',
			'Buka ispred RTS-a',
			'Veliki broj studenata i građana okupio se ispred zgrade RTS-a u Beogradu. Ovim protestom učesnici skupa su uputili kritike i burnim negodovanjem reagovali tačno u 19.30, u vreme kad se emituje špica Dnevnika. Ovom događaju prisustvovalo je oko 55 000 građana.'
		)}
		{@render event(
			'Subota, 18.1.2025.',
			'“Novi slobodan univerzitet Sad”',
			'Profesori novosadskog univerziteta su oformili neformalnu akademsku mrežu zaposlenih na Univerzitetu pod nazivom “Novi slobodan univerzitet Sad”, sa ciljem da se priključe studentima u borbi, u znak čega su održali protestnu šetnju.'
		)}
		{@render event(
			'Nedelja, 19.1.2025.',
			'“Školski čas u zadnji čas”',
			'U velikom broju gradova srednjoškolci su, uz veliku podršku prosvetara, studenata i građana, održali protest “Školski čas u zadnji čas”, pred početak drugog polugodišta. U većini, zabeleženi su najveći protesti u 21. veku.'
		)}
		{@render event(
			'Ponedeljak, 20.1.2025.',
			'Pokušaj celokupne obustave nastave',
			'Početak drugog polugodišta u osnovnim i srednjim školama obeležili su masovni protesti. Zaposleni su pokušali da uprkos odluci nezavisnih sindikata prosvetnih radnika, obustave nastavu u znak građanske neposlušnosti.'
		)}
		{@render event(
			'Petak, 24.1.2025.',
			'Pozivanje na neposlušnost građana',
			'Studenti su pozvali građanstvo da se priključi “Generalnom štrajku”. Širom zemlje, bojkotovani su trgovinski lanci i održani masovni protesti.'
		)}
		{@render event(
			'Nedelja, 26.1.2025.',
			'Blokirani svi univerziteti Srbije',
			'Državni univerzitet u Novom Pazaru je zvanično blokiran, čime su zvanično svi državni univerziteti u Srbiji u blokadi.'
		)}
		{@render event(
			'Ponedeljak, 27.1.2025.',
			'Blokada Autokomande',
			'Beogradski studenti organizovali su 24-časovnu blokadu Autokomande, na šta se odazvao veliki broj građana.'
		)}
		{@render event(
			'Utorak, 28.1.2025.',
			'Ugrožen život još jedne studentkinje',
			'U toku noći, došlo je do napada na novosadske studente od strane lica koja su izašla iz prostorija Srpske napredne stranke. Tom prilikom, studentkinji Akademije umetnosti dislocirana je vilica.'
		)}
		{@render event(
			'Utorak, 28.1.2025.',
			'Ostavke premijera i gradonačelnika',
			'Premijer Srbije, Miloš Vučević, i Milan Đurić, gradonačelnik Novog Sada, podneli su ostavke na svoje pozicije.'
		)}
		{@render event(
			'Subota, 1.2.2025.',
			'“1.2. na 3 mosta”',
			'Povodom 3 meseca od tragedije, novosadski studenti održali su tročasovnu blokadu 3 mosta, nakon čega su naredna 24 sata blokirali Most slobode. Ova 27-časovna blokada predstavlja jedan od najvećih novosadskih protesta, kome su se pridružili studenti iz cele Srbije, a deo je iz Beograda došao peške.'
		)}
		{@render event(
			'Nedelja, 9.2.2025.',
			'Blokiranje prometnih raskrsnica',
			'Povodom 100 dana od urušavanja nadstrešnice, studenti širom Srbije blokirali su prometne raskrsnice po gradovima, šireći apel nadležnima da reaguju.'
		)}
		{@render event(
			'Utorak, 11.2.2025.',
			'“Držimo vam lekciju”',
			'Ispred Ministarstva prosvete u Beogradu održan je protestni skup pod nazivom “Držimo vam lekciju”. Studenti su ukazali na to da je obrazovni sistem u krizi.'
		)}
		{@render event(
			'Sreda, 12.2.2025.',
			'Blokada SKC-a u Beogradu',
			'Studenti Univerziteta u Beogradu blokirali su Studentski kulturni centar sa idejom da studentske prostore treba vratiti studentima.'
		)}
		{@render event(
			'Subota, 15.2.2025.',
			'“Sretnimo se na Sretenje”',
			'Povodom 190. godišnjice od donošenja Sretenjskog ustava, studenti Univerziteta u Kragujevcu organizovali su 15-časovnu blokadu Lepeničkog bulevara. Ovom protestu priključili su se studenti i građani iz cele Srbije, a deo studenata je iz svojih matičnih gradova ogranizovano došao peške ili biciklom.'
		)}
		{@render event(
			'Ponedeljak, 17.2.2025.',
			'“Daske su zaćutale”',
			'Pozorišni radnici širom zemlje organizovali su u Novom Sadu protestnu šetnju pod nazivom “Daske su zaćutale”. Događaj je svečano završen dodelom daski koje su u sklopu pozorišnih scena studentima u blokadi.'
		)}
		{@render event(
			'Utorak, 18.2.2025.',
			'Napad na novopazarske studente',
			'Za vreme blokade magistralnog puta u Novom Pazaru, automobil se zaleteo u okupljene studente i time naneo povrede ruke jednom od njih.'
		)}
		{@render event(
			'Sreda, 19.2.2025.',
			'“Potraga za rektorom”',
			'Kao odgovor na oglašavanje rektora novosadskog univerziteta Dejana Madića na to da je 17 ustanova izglasalo njegovu smenu, kao i na odlaganje Sednice Senata, zaposleni na univerzitetu organizovali su “Potragu za rektorom”.'
		)}
		{@render event(
			'Nedelja, 23.2.2025.',
			'“Iz Banata iz inata”',
			'U Vršcu je održan veliki protestni skup pod nazivom “Iz Banata iz inata”. Petočasovnoj blokadi prometne saobraćajnice ovog grada pristupio je veliki broj građana, a studenti iz Zrenjanina dopešačili su dan ranije.'
		)}
		{@render event(
			'Utorak, 25.2.2025.',
			'Štafetni maraton profesora',
			'Pedesetak profesora novosadskog univerziteta istrčalo je štafetni maraton do Beograda, gde su se pridružili protestu ispred Ministarstva prosvete.'
		)}
		{@render event(
			'Četvrtak, 27.2.2025.',
			'“Pohitajte u Pazar”',
			'Kao odgovor na pritiske, studenti Državnog univerziteta u Novom Pazaru održali su protest “Pohitajte u Pazar” kom su se pridružili i studenti drugih univerziteta.'
		)}
		{@render event(
			'Subota, 1.3.2025.',
			'“Studentski edikt”',
			'Povodom četiri meseca od pada nadstrešnice u Novom Sadu, tragedije za koju još uvek niko nije odgovarao, održan je 18-časovni protest u Nišu. Tokom ovog događaja niški studenti pročitali su “Studentski edikt”, a ratni veterani Srbije svečano su predali svoje beretke studentima. Ovo je treći po redu masovni protest, nakon Novog Sada i Kragujevca, kom je pristustvovao ogroman broj ljudi iz čitave zemlje.'
		)}
		{@render event(
			'Ponedeljak, 3.3.2025.',
			'“Protest protiv gušenja blokade”',
			'Studenti Fakulteta za medije i komunikacije održali su “Protest protiv gušenja blokade”, kao odgovor na izjavu Predsednice Skupštine Ane Brnabić da će ovaj fakultet početi sa radom.'
		)}
		{@render event(
			'Utorak, 4.3.2025.',
			'Prvo zasedanje Skupštine Srbije u 2025.',
			'Tokom prvog zasedanja Skupštine Srbije u 2025. godini došlo je do incidenta kada su bačene dimne bombe i beli prah. Kasnije u toku dana, beogradski studenti su se zajedno sa građanima okupili ispred zgrade Skupštine Srbije, gde su održali protest.'
		)}
		{@render event(
			'Utorak, 4.3.2025.',
			'100 dana blokada',
			'Ovog dana obeležava se i 100 dana od ulaska prvog fakulteta u blokadu, za čije vreme nijedan zahtev studenata nije ispunjen. Fakultet dramskih umetnosti pozvao je građanstvo na stominutnu blokadu Bulevara umetnosti.'
		)}
		{@render event(
			'Sreda, 5.3.2025.',
			'Predškolske ustanove šetaju',
			'Zaposleni u predškolskim ustanovama u Novom Sadu organizovali su protestnu šetnju, kao vid podrške studentima i poljoprivrednicima.'
		)}
	</ol>
</div>
