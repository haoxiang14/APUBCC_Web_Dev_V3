<template>
	<div class="font-poppins navbar bg-base-100 border-b-2 border-gray-300">
		<div class="navbar-start">
			<NuxtLink to="/" class="flex items-center">
				<img src="../assets/APUBCC Logo without Text.png" alt="APUBCC Logo" class="h-12 w-12" />
				<p class="font-bold text-3xl m-2 lg:text-4xl">APUBCC</p>
			</NuxtLink>
		</div>

		<div class="navbar-end">
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						class="w-10 h-10"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</div>
				<ul
					tabindex="0"
					class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a class="font-bold text-xl">ABOUT US</a>
						<ul class="p-2">
							<li>
								<NuxtLink to="/vision-mission" class="hover:bg-primary hover:text-white">
									VISION & MISSION
								</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/partners" class="hover:bg-primary hover:text-white">
									PARTNERS
								</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/team" class="hover:bg-primary hover:text-white">
									OUR TEAM
								</NuxtLink>
							</li>
						</ul>
					</li>
					<li>
						<NuxtLink to="/events" class="font-bold text-xl hover:bg-primary hover:text-white"
							>EVENTS</NuxtLink
						>
					</li>
					<li>
						<a class="font-bold text-xl">Resources</a>
						<ul class="p-2">
							<li>
								<a
									href="https://apubcc.substack.com/"
									target="_blank"
									class="hover:bg-primary hover:text-white"
								>
									SUBSTACK
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-external-link"
									>
										<path d="M15 3h6v6" />
										<path d="M10 14 21 3" />
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									</svg>
								</a>
							</li>
							<li>
								<a
									href="https://github.com/apubcc"
									target="_blank"
									class="hover:bg-primary hover:text-white"
								>
									GITHUB
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-external-link"
									>
										<path d="M15 3h6v6" />
										<path d="M10 14 21 3" />
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									</svg>
								</a>
							</li>
							<li>
								<a
									href="https://onboard.stackup.dev/community/apubcc"
									target="_blank"
									class="hover:bg-primary hover:text-white"
								>
									ONBOARD
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-external-link"
									>
										<path d="M15 3h6v6" />
										<path d="M10 14 21 3" />
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									</svg>
								</a>
							</li>
							<li>
								<a
									href="http://jobs.apubcc.org/"
									target="_blank"
									class="hover:bg-primary hover:text-white"
								>
									Career
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-external-link"
									>
										<path d="M15 3h6v6" />
										<path d="M10 14 21 3" />
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									</svg>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<NuxtLink to="/#faq" class="font-bold text-xl hover:bg-primary hover:text-white">
							FAQ
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1 text-2xl font-bold">
				<li>
					<details>
						<summary>ABOUT</summary>
						<ul class="p-2 z-[1]">
							<li>
								<NuxtLink to="/vision-mission" class="text-base hover:bg-primary hover:text-white">
									VISION & MISSION
								</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/partners" class="text-base hover:bg-primary hover:text-white">
									PARTNERS
								</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/team" class="text-base hover:bg-primary hover:text-white">
									OUR TEAM
								</NuxtLink>
							</li>
						</ul>
					</details>
				</li>
				<li><NuxtLink to="/events"> EVENTS </NuxtLink></li>
				<li>
					<details>
						<summary>RESOURCES</summary>
						<ul class="p-2 z-[1]">
							<li>
								<a
									href="https://apubcc.substack.com/"
									target="_blank"
									class="text-base hover:bg-primary hover:text-white"
								>
									SUBSTACK
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-external-link"
									>
										<path d="M15 3h6v6" />
										<path d="M10 14 21 3" />
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									</svg>
								</a>
							</li>
							<li>
								<a
									href="https://github.com/apubcc"
									target="_blank"
									class="text-base hover:bg-primary hover:text-white"
								>
									GITHUB
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-external-link"
									>
										<path d="M15 3h6v6" />
										<path d="M10 14 21 3" />
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									</svg>
								</a>
							</li>
							<li>
								<a
									href="https://onboard.stackup.dev/community/apubcc"
									target="_blank"
									class="text-base hover:bg-primary hover:text-white"
								>
									ONBOARD
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-external-link"
									>
										<path d="M15 3h6v6" />
										<path d="M10 14 21 3" />
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									</svg>
								</a>
							</li>
							<li>
								<a
									href="http://jobs.apubcc.org/"
									target="_blank"
									class="text-base hover:bg-primary hover:text-white"
								>
									Career
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-external-link"
									>
										<path d="M15 3h6v6" />
										<path d="M10 14 21 3" />
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									</svg>
								</a>
							</li>
						</ul>
					</details>
				</li>
				<li><NuxtLink to="/#faq"> FAQ </NuxtLink></li>
			</ul>
		</div>
	</div>
</template>
