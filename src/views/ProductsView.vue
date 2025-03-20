<script lang="ts" setup>
import ItemProduct from '@/components/ItemProduct.vue'
import { useProductsStore } from '@/stores/products'
import { ref, computed } from 'vue'

const productsStore = useProductsStore()
productsStore.fetchProducts()

const searchQuery = ref('')
const filteredProducts = computed(() => {
    console.log('searchQuery', searchQuery.value)
    console.log('productsStore.getProducts', productsStore.getProducts)
    return productsStore.getProducts.filter(product => {
        return product?.title?.toLowerCase().includes(searchQuery?.value?.toLowerCase())
    })
})

</script>

<template>
    <div class="">
        <h1 class="text-3xl font-bold underline mx-auto">Products</h1>
        <div class=" container mx-auto mt-4">
            <div class="">
                <input type="text" placeholder="Search" v-model="searchQuery" class="border-2 border-gray-300 rounded-md p-2 w-full" />
            </div>
            
            <div class="grid grid-cols-3 gap-4">
                <ItemProduct v-for="product in filteredProducts" :key="product.id" :product="product"></ItemProduct>
            </div>
        </div>
    </div>
</template>