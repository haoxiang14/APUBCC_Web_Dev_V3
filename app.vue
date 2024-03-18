<template>
    <html class="!scroll-smooth">
        <div class="m-4 lg:my-5 lg:mx-8">
            <Navbar/>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
            <Footer />
        </div>
    </html>
    
</template>

<script setup lang="ts">
    useHead({
        title: "APUBCC",
        meta: [
            {
                name: "APU Blockchain & Crypto Club",
                content: "APU Blockchain & Crypto Club Official Website",
            },
        ],
    });
</script>