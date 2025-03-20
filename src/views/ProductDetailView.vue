<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useProductsStore } from '@/stores/products'


const route = useRoute()
const productId = Number(route.params.id)

const productsStore = useProductsStore()
const product =  productsStore.getProductById(productId)

</script>
<template>
    <div class="">
        <div class=" container mx-auto mt-4">
            <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2">
                    <h2 class="text-xl font-semibold">{{ product.name }}</h2>
                    <p>{{ product.description }}</p>
                    <p class="text-lg font-bold">${{ product.price }}</p>
                </div>
                <div class="col-span-1">
                    <img :src="product.image" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>