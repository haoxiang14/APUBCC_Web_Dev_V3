<template>
	<div class="font-poppins bg-gray-200 rounded-xl">
		<footer class="footer p-10 text-base-content lg:text-xl">
			<aside>
				<NuxtLink to="/" class="flex items-center">
					<img
						src="../assets/APUBCC horizontal new black font (without bg).png"
						alt="APUBCC Logo"
						class="w-40 h-18 lg:w-52 lg:h-20"
					/>
				</NuxtLink>
				<p>
					Made with 💖 by
					<a class="link link-hover" href="https://twitter.com/haoxiang_14"> @haoxiang_14 </a>
				</p>
				<p>
					For collaboration, please contact
					<a class="link link-hover" href="mailto:info@apubcc.org">info@apubcc.org</a>
				</p>
			</aside>
			<nav>
				<h6 class="font-bold text-black">General</h6>
				<NuxtLink to="/vision-mission" class="link link-hover"> About Us </NuxtLink>
				<NuxtLink to="/team" class="link link-hover"> Our Team </NuxtLink>
				<NuxtLink to="/#faq" class="link link-hover"> FAQ </NuxtLink>
			</nav>
			<nav>
				<h6 class="font-bold text-black">Follow us on</h6>
				<a href="https://www.facebook.com/apubcc" target="_blank" class="link link-hover">
					Facebook
				</a>
				<a href="https://www.instagram.com/apubcc" target="_blank" class="link link-hover">
					Instagram
				</a>
				<a
					href="https://www.linkedin.com/company/apu-blockchain-crypto-club-apu-bcc"
					target="_blank"
					class="link link-hover"
				>
					LinkedIn
				</a>
				<a href="https://twitter.com/apubcc" target="_blank" class="link link-hover">
					Twitter (X)
				</a>
				<a href="https://www.youtube.com/@apubcc" target="_blank" class="link link-hover">
					YouTube
				</a>
				<a href="https://www.tiktok.com/@apubcc" target="_blank" class="link link-hover">
					TikTok
				</a>
			</nav>
			<nav>
				<h6 class="font-bold text-black">Resources</h6>
				<a href="https://apubcc.substack.com/" target="_blank" class="link link-hover">
					Substack
				</a>
				<a href="https://github.com/apubcc" target="_blank" class="link link-hover"> GitHub </a>
				<a
					href="https://onboard.stackup.dev/community/apubcc"
					target="_blank"
					class="link link-hover"
				>
					Onboard
				</a>
				<a href="http://jobs.apubcc.org/" target="_blank" class="link link-hover">
					Career<span class="badge badge-primary py-3 lg:py-4 font-semibold ml-2"
						>Hiring Opportunities!</span
					></a
				>
			</nav>
		</footer>
	</div>
</template>
