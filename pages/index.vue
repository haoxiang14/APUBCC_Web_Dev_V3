<template>
    <div class="font-poppins my-4 lg:my-8 lg:grid lg:grid-cols-2">
        <div class="col-span-1">
            <div>
                <p class="font-bold text-2xl lg:text-6xl lg:py-4"> The <a class="text-primary"> first and largest </a> </p>
                <p class="font-bold text-2xl lg:text-6xl lg:py-4"> student blockchain club </p>
                <p class="font-bold text-2xl lg:text-6xl lg:py-4"> in Malaysia... </p>
            </div>
            <div class="flex flex-col lg:flex-row text-center my-4 lg:my-8">
                <button class="btn btn-secondary px-8 rounded-xl my-2 lg:px-16 lg:mr-8 text-base lg:text-xl"> 
                    <NuxtLink to="/vision-mission">
                        Learn More 
                    </NuxtLink>
                </button>
                <button class="btn btn-primary px-8 rounded-xl my-2 lg:px-16 text-base lg:text-xl"> 
                    <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=owPtDy1AM0aozYswiCIlPnXexahZ7q5IsmNJl1_ZU91UNFYyQU01Mkg4TUpBMDlGUTlTTTc1VDVaSS4u" target="blank_">
                        Join Us 
                    </a>
                </button>
            </div>
        </div>
        <div class="col-span-1">
            <!-- <img class="w-full sm:h-96 md:h-128 lg:h-160 object-cover rounded-xl" src="../assets/bcc_gp_photos.jpg" alt="APUBCC Group Photos" />  -->
            <div class="carousel w-full sm:h-96 md:h-128 lg:h-160 object-cover rounded-xl">
                <div id="slide1" class="carousel-item relative w-full sm:h-96 md:h-128 lg:h-160 object-cover rounded-xl">
                    <img src="../assets/bcc_gp_photos.jpg" class="w-full sm:h-96 md:h-128 lg:h-160 object-cover rounded-xl" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle btn-primary">❮</a> 
                        <a href="#slide2" class="btn btn-circle btn-primary">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full sm:h-96 md:h-128 lg:h-160 object-cover rounded-xl">
                    <img src="../assets/bootcamp.jpg" class="w-full sm:h-96 md:h-128 lg:h-160 object-cover rounded-xl" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle btn-primary">❮</a> 
                        <a href="#slide3" class="btn btn-circle btn-primary">❯</a>
                    </div>
                </div> 
                <div id="slide3" class="carousel-item relative w-full sm:h-96 md:h-128 lg:h-160 object-cover rounded-xl">
                    <img src="../assets/viction_workshop.jpg" class="w-full sm:h-96 md:h-128 lg:h-160 object-cover rounded-xl" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle btn-primary">❮</a> 
                        <a href="#slide4" class="btn btn-circle btn-primary">❯</a>
                    </div>
                </div> 
                <div id="slide4" class="carousel-item relative w-full sm:h-96 md:h-128 lg:h-160 object-cover rounded-xl">
                    <img src="../assets/apubcc_outreach.jpeg" class="w-full sm:h-96 md:h-128 lg:h-160 object-cover rounded-xl" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle btn-primary">❮</a> 
                        <a href="#slide1" class="btn btn-circle btn-primary">❯</a>
                    </div>
                </div> 
            </div>

        </div>
    </div>
    <div class="font-poppins grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-1 lg:gap-2 my-4 lg:my-8 ">
        <div class="flex items-center justify-center col-span-1 lg:col-span-3 h-60 bg-primary rounded-xl p-4 hover:rotate-1 duration-50">
            <p class="font-bold text-2xl lg:text-6xl text-white text-center"> 500+ Members </p>
        </div>
        <div class="flex items-center justify-center col-span-1 lg:col-span-1 h-60 bg-secondary rounded-xl p-4 hover:rotate-1 duration-50">
            <p class="font-bold text-xl lg:text-4xl text-black text-center"> 20+ Partners </p>
        </div>
     
        <div class="flex items-center justify-center col-span-1 lg:col-span-2 h-60 bg-black rounded-xl p-4 hover:rotate-1 duration-50">
            <p class="font-bold text-2xl lg:text-6xl text-white text-center"> 30+ Events </p>
        </div>
        <div class="flex items-center justify-center col-span-1 lg:col-span-2 h-60 bg-primary rounded-xl p-4 hover:rotate-1 duration-50">
            <p class="font-bold text-2xl lg:text-6xl text-black text-center"> 20+ Committees </p>
        </div> 
    </div>
    <div class="font-poppins my-8 lg:my-16">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <h1 id="faq" class="font-bold text-2xl lg:text-6xl text-center lg:text-left"> FAQ </h1>
                <p class="py-4 lg:py-8 text-xl lg:text-2xl text-center lg:text-left"> Answer to some questions you might have. </p>
            </div>
            <div>
                <div tabindex="0" class="collapse rounded-xl bg-secondary bg-opacity-20 my-2">
                    <div class="collapse-title text-lg lg:text-2xl font-medium px-16 py-8">
                        What is APU Blockchain Club & Cryptocurrency Club (APUBCC)?
                    </div>
                    <div class="collapse-content px-16"> 
                        <p class="text-base lg:text-xl"> APU Blockchain & Cryptocurrency Club (APUBCC) is a student-run organization at Asia Pacific University (APU) that aims to spread awareness and knowledge about blockchain technology and cryptocurrency. They engage in various activities such as discussions, research, gamification, seminars, workshops, and hackathons to promote understanding and application of blockchain and cryptocurrency.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse rounded-xl bg-secondary bg-opacity-20 my-2">
                    <div class="collapse-title text-lg lg:text-2xl font-medium px-16 py-8">
                        What activities does APUBCC conduct?
                    </div>
                    <div class="collapse-content px-16"> 
                        <p class="text-base lg:text-xl"> APUBCC conducts a range of activities to spread awareness about blockchain and cryptocurrency. This includes discord channels, discussions, research initiatives, gamification, seminars, workshops, hackathons, and possibly more. </p>
                    </div>
                </div>
                <div tabindex="0" class="collapse rounded-xl bg-secondary bg-opacity-20 my-2">
                    <div class="collapse-title text-lg lg:text-2xl font-medium px-16 py-8">
                        What are the benefits of joining APUBCC?
                    </div>
                    <div class="collapse-content px-16"> 
                        <p class="text-base lg:text-xl"> By joining APUBCC, members can gain insights and knowledge about blockchain and cryptocurrency through various interactive activities and discussions. It provides a platform to connect with like-minded individuals and participate in events that can enhance understanding and skills in the blockchain and cryptocurrency domain. </p>
                    </div>
                </div>
                <div tabindex="0" class="collapse rounded-xl bg-secondary bg-opacity-20 my-2">
                    <div class="collapse-title text-lg lg:text-2xl font-medium px-16 py-8">
                        How can I stay updated with APUBCC's activities? 
                    </div>
                    <div class="collapse-content px-16"> 
                        <p class="text-base lg:text-xl"> You can stay updated with the APUBCC's activities by following our social media accounts on Facebook, Twitter, Instagram, LinkedIn, and YouTube. You can also join our Discord server to stay updated with our activities and events. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
