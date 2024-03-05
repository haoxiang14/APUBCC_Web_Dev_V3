<template>
    <div class="font-poppins my-4 lg:my-8">
        <h1 class="font-bold text-2xl lg:text-6xl"> Partners </h1>
        <div class="bg-secondary bg-opacity-30 lg:gap-8 my-4 lg:my-8 px-4 lg:px-8 rounded-xl">
        <div v-if="isLoading">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div class="card bg-white w-auto w-48 border border-gray-200 bg-base-200 shadow-xl my-4 lg:my-8 animate-pulse">
                    <figure class="py-4 lg:py-8"><div class="h-48 w-48 bg-slate-300 rounded-xl"></div></figure>
                    <div class="card-body">
                        <h2 class="h-4 w-40 bg-slate-300 rounded-xl"> </h2>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div class="card bg-white w-auto w-48 border border-gray-200 bg-base-200 shadow-xl my-4 lg:my-8" v-for="partner in partners">
                    <figure class="py-4 lg:py-8"><img class="h-48 w-48" :src="partner.imageUrl" :alt="partners.title"/></figure>
                    <div class="card-body">
                        <h2 class="card-title text-base lg:text-xl"> {{partner.title}}</h2>              
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>    
    
    
</template>

<script>
export default{
    data(){
        return{
            isLoading: true,
            partners: [],
        }
    },
    async created(){
        try{
            const response = await fetch("/api/fetchPartner");
            const data = await response.json();
            this.partners = data.results;
            this.isLoading = false;
        }catch(error){
            console.error("Failed to fetch data:", error);
        }
    }
}
</script>

