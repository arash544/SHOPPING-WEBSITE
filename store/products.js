import productsservice from '@/service/productsservice'

export const state=()=>({
    productslist:[],
})
export const mutations={
    FETCH_PRODUCTS(state,val){
        state.productslist=val
    },
}
export const actions={
fetchProducts({commit}){
    return productsservice.getproducts()
    .then(res=>{
        commit('FETCH_PRODUCTS',res.data)
    });
},
}
export const getters={
finder:(state)=>(id)=>{
    return state.productslist.find(n=>n.id==id)
},
}