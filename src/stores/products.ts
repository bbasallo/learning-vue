interface Rating {
    rate: number;
    count: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

import { defineStore } from 'pinia'
import { fetchProducts } from '@/api/products'


export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [] as Product[],
    }),
    getters: {
        getProducts: (state) => state.products,
        getProductById: (state) => {
            console.log('getProductById', state.products)
            return (id: number) => state.products.find(product => {
                console.log('getProductById', product)
                console.log('getProductById', id)
                return product.id === id
            })
        }
    },
    actions: {
        async fetchProducts() {
            try {
                const products = await fetchProducts()
                this.products = products
            } catch (error) {
                console.error('Failed to fetch products:', error)
            }
        },
    }
})