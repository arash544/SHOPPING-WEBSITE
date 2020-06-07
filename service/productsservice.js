import {apiClient} from './apiClient.js'

export default {
    getproducts(){
        return apiClient.get('/products')
    },
    getproductsbyid(id){
        return apiClient.get(`/products/${id}`)
    },
}