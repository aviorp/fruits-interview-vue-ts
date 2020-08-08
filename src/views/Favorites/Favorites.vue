<template>
<ul class="list-container">
    <li tag="li"  v-for="(fruit ,i) in fruits" :key="i" class="fruit-item" @click="openFruit(fruit)" >
        <span>{{i+1}}. {{fruit.name}}</span>
        <span class="text-xl">></span>
    </li>
</ul>
<!-- :to="{name:'selected-fruit' ,query:fruit.name, params:{name:fruit.name}}" -->
</template>

 <script src='./Favorites.ts' lang='ts'></script>