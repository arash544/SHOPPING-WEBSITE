import {apiClient} from './apiClient.js'

export default {
    getid(){
        return apiClient.get('/products')
    },
    getidbyid(id){
        return apiClient.get(`/products/${id}`)
    }
}