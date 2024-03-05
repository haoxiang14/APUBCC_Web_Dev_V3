<template>
    <div class="font-poppins my-4 lg:my-8">
        <h1 class="font-bold text-2xl lg:text-6xl"> Events </h1>

        <div class="bg-secondary bg-opacity-30 rounded-xl my-4 lg:my-8">
            <div class="py-4 lg:py-8 px-4 lg:px-8">
                <h2 class="font-semibold text-xl lg:text-4xl"> Upcoming Events </h2>
                <div v-if="isLoading">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 my-4 lg:my-8 animate-pulse">
                        <div class="card lg:card-side bg-base-100 border border-gray-300 shadow-xl relative">
                            <div class="bg-slate-300 w-auto lg:w-80 h-80 rounded-xl lg:h-80"></div>
                            <div class="card-body">
                                <div class="h-4 w-40 bg-slate-300 rounded-xl"></div>
                                <div class="h-4 w-40 bg-slate-300 rounded-xl py-2 my-4 lg:my-8"></div>
                                <div class="card-actions justify-end lg:absolute lg:bottom-8 lg:right-8">
                                    <div class="h-10 w-40 bg-slate-300 my-2 lg:my-4 rounded-xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 my-4 lg:my-8">
                        <div class="card lg:card-side bg-base-100 border border-gray-300 shadow-xl relative" v-for="event in events" :key="events.id">
                            <figure><img class="object-cover w-full h-60 lg:h-80" :src="event.imageUrl" alt="Event Poster"/></figure>
                            <div class="card-body">
                                <h2 class="card-title font-bold text-base lg:text-xl"> {{ event.title }} </h2>
                                <span class="text-left rounded-lg text-base lg:text-xl py-2 my-4 lg:my-8"> Date: {{ event.date }} </span>
                                <div class="card-actions justify-end lg:absolute lg:bottom-8 lg:right-8">
                                    <a :href="event.eventUrl" target="_blank">
                                        <button class="btn btn-primary"> Details </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-secondary bg-opacity-70 rounded-xl my-4 lg:my-8">
            <div class="py-4 lg:py-8 px-4 lg:px-8">
                <h2 class="font-semibold text-xl lg:text-4xl"> Past Events </h2>
                <div v-if="isLoading">
                    <div class="overflow-x-auto py-4 lg:py-8">
                            <table class="table animate-pulse">
                                <tbody>
                                    <tr class="bg-white hover:bg-secondary hover:bg-opacity-10">
                                        <td>
                                            <div class="flex items-center gap-3">
                                            <div class="avatar">
                                                <div class="bg-slate-300 rounded-xl w-24 h-24">
                                                </div>
                                            </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex flex-col lg:flex-row gap-3">
                                                <div class="h-4 w-40 bg-slate-300 rounded-xl">
                                                </div> 
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex flex-col lg:flex-row gap-3">
                                                <div class="h-4 w-40 bg-slate-300 rounded-xl">
                                                </div> 
                                            </div>
                                        </td>
                                        <td>
                                            <div class="h-4 w-40 bg-slate-300 rounded-xl">
                                            </div>
                                        </td> 
                                    
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
                <div v-else>
                    <div class="overflow-x-auto">
                        <table class="table my-4 lg:my-8">
                            <tbody>
                                <tr class="bg-white hover:bg-secondary hover:bg-opacity-10" v-for="pastEvent in pastEvents">
                                    
                                    <td>
                                        <div class="flex items-center gap-3">
                                        <div class="avatar">
                                            <div class="rounded-xl w-24 h-24">
                                            <img :src="pastEvent.imageUrl" alt="Event Poster"/>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="flex flex-col lg:flex-row gap-3">
                                            <div class="font-poppins font-semibold text-xs lg:text-xl hover:underline">
                                                <a :href="pastEvent.eventUrl" target="_blank">
                                                {{ pastEvent.title}} 
                                                </a>
                                            </div> 
                                            <div class="bg-secondary bg-opacity-30 text-center rounded-lg py-2 text-xs lg:text-xl lg:hidden"> {{ pastEvent.date }} </div>
                                        </div>
                                    </td>
                                    <td class="hidden text-center rounded-lg lg:block text-xs lg:text-xl mx-auto my-10"> {{ pastEvent.date }} </td>
                                    <td class="font-extrabold text-base lg:text-xl"> > </td>
                                
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

export default{
    data(){
        return {
            isLoading: true,
            events: [],
            pastEvents: [],
        }

    },

    async created(){
        try{
            const response = await fetch("/api/fetchEvent");
            const data = await response.json();
            this.events = data.results;
            const pastEventsResponse = await fetch("/api/fetchPastEvents");
            const pastEventsData = await pastEventsResponse.json();
            this.pastEvents = pastEventsData.results;
            this.isLoading = false;
        } catch (error){
            console.error("Failed to fetch data:", error);
        }
    },
}
    

</script>