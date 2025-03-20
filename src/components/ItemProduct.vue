<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
    product: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div class="p-4 border rounded">
        <h2 class="text-xl font-semibold">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p class="text-lg font-bold">${{ product.price }}</p>
        <router-link :to="`/product/${product.id}`" class="text-blue-500 hover:underline">
            View Details
        </router-link>
    </div>
</template>