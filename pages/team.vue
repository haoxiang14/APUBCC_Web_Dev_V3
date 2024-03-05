<template>
    <div class="font-poppins my-4 lg:my-8">
        <h1 class="font-bold text-2xl lg:text-6xl my-4 lg:my-8"> Team </h1>
            
        <div class="bg-secondary bg-opacity-30 rounded-xl py-4 lg:py-8 px-4 lg:px-8">
            <div>
                <div className="lg:hidden flex overflow-x-auto my-2 lg:my-4">
                    <ul class="menu menu-horizontal bg-base-200 rounded-box flex flex-nowrap space-x-4">
                        <li v-for="dept in departments" :key="dept" class="rounded-2xl px-6 py-2 mx-2 text-black hover:text-gray-300 hover:bg-primary hover:bg-primary cursor-pointer" :class="{ 'bg-primary text-white text-semibold': currentPage === dept }" @click="changePage(dept)">
                        {{ dept }}
                        </li>
                    </ul>
                </div>
                <ul class="hidden lg:flex items-center gap-4 [&>li]:flex-grow-0 flex-wrap lg:mb-8">
                    <li
                        v-for="dept in departments"
                        :key="dept"
                        class="rounded-2xl px-6 py-2 mx-2 text-black hover:bg-primary hover:text-white hover:font-semibold cursor-pointer"
                        :class="{ 'bg-primary font-semibold text-white': currentPage === dept }"
                        @click="changePage(dept)"
                    >
                    {{ dept }}
                    </li>
                </ul>
            </div>
            <div v-if="isLoading">
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8">
                    <div class="flex flex-col bg-white rounded-xl animate-pulse">
                        <div class="flex flex-col justify-center items-center py-4 lg:py-8">
                            <div class="h-20 w-20 lg:h-40 lg:w-40 bg-slate-300 rounded-full"></div>
                            <div class="h-4 w-40 bg-slate-300 my-2 lg:my-4 rounded-xl"></div>
                            <div class="h-4 w-40 bg-slate-300 my-2 lg:my-4 rounded-xl"></div>
                            <div class="h-4 w-40 bg-slate-300 my-2 lg:my-4 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8">
                    <div class="flex flex-col border border-gray-300 bg-white rounded-xl" v-for="(teamMember, index) in filteredCommittees" :key="index">
                        <div class="flex flex-col justify-center items-center py-4 lg:py-8">
                            <img class="h-20 w-20 lg:h-40 lg:w-40 border border-black rounded-full" :src="teamMember.imageUrl" />
                            <p class="py-2 lg:py-4 font-semibold"> {{ teamMember.title }} </p>
                            <div>
                                <span
                                    v-for="(dept, index) in teamMember.department"
                                    :key="index"
                                    class="inline-block mr-2"
                                >
                                    <span class="badge badge-primary text-white badge-md">{{ dept }}</span>
                                </span>
                            </div>
                            <div class="flex py-2 lg:py-4">
                                <a :href="teamMember.linkedInUrl" target="_blank">
                                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                </a>
                                <a :href="teamMember.twitterUrl" target="_blank">
                                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            

        </div>
       
    </div>
</template>

<script>
export default {
    data() {
        return {
        isLoading: true,
        currentPage: "all",
        departments: [
            "All",
            "Lead",
            "Event",
            "Marketing",
            "Community",
            "Bootcamp",
            "External Relations",
            "Secretary",
            "Treasurer",
            "Production"
        ],
        committees: [],
        filteredCommittees: [],
        };
    },
    methods: {
        changePage(page) {
            this.currentPage = page;
            if (page === "All") {
                this.filteredCommittees = this.committees;
                return;
            }
            // instead of N different lists for N committees, put the full list of committees to 1 var.
            // then filter the committees based on currentPage.
            this.filteredCommittees = this.committees.filter((committee) =>
                committee.department
                .map((c) => c.toLowerCase())
                .includes(page.toLowerCase()),
            );
        },
    },
    async created() {
            try {
                const response = await fetch("/api/fetchTeam"); // Adjust the API endpoint
                const data = await response.json();
                this.committees = data.results;
                this.filteredCommittees = data.results;
                this.isLoading = false;
            } catch (error) {
            console.error("Failed to fetch data:", error);
            }
        },
    };

</script>