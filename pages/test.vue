<template>
    <TeamCardSkeleton/>
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
    <div class="overflow-x-auto">
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
</template>