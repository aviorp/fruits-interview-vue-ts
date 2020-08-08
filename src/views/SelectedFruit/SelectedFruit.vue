<template>
<div class="flex flex-col  border w-4/6 mx-auto pt-4 px-16 h-full shadow-lg">
   <header class="flex flex-col mb-4">
    <router-link to="/" tag="li" class="back-button">  Back</router-link>
    <h1 class="text-4xl">Fruit Info</h1>
    </header>
    <section class="flex space-bottom mb-4">
    <img :src="fruit.image" class="fruit-image" alt="">
    <div class="flex flex-col">
        <p>Fruit Name:</p>
        <h1 class="text-2xl">{{fruit.name}} <span class="text-lg cursor-pointer" @click="$store.dispatch('useToggleFavorite')" ><i class="fa fa-star-o"></i></span></h1> 
    </div>
    </section>
          <h3>Overview</h3>
    <section class="flex flex-col space-bottom mb-4 p-4 border">
        <div class="flex">
        <span class="mr-4">Origin :</span> <span>{{fruit.origin}}</span>
        </div>
        <div class="flex">
        <span class="mr-4">Year Of Development :</span> <span>{{fruit.year}}</span>
        </div>
    </section>
    <div class="flex items-center mb-2">
        <h3>Nutrition </h3>
        <input type="checkbox" class="ml-2" v-model="isEditable" >
        <span v-if="isEditable" class="mx-2 rounded-full px-2 bg-green-400 text-white cursor-pointer" @click="addNewNutritionDetails">+</span> <span v-if="isEditable" class="rounded-full px-2 bg-red-400 text-white cursor-pointer" @click="fruit.nutrition.pop()">-</span>
    </div>
    
    <section class="flex flex-col space-bottom mb-4 p-4 border">
        <div class="flex" v-for="(item, i) in fruit.nutrition" :key="i">
        <input type="text" :readonly="!isEditable" :class="{' border-b-2 ':isEditable}" class="mr-4 outline-none" v-model="item.title"> <input  :readonly="!isEditable" :class="{'border-b-2 ':isEditable}" type="text" class="mr-4 outline-none" v-model="item.value">
        </div>
    </section>
</div>
</template>

 <script src='./SelectedFruit.ts' lang='ts'></script>