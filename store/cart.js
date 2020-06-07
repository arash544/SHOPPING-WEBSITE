
export const state=()=>({
    cartlist:[]
})

export const mutations={
    FETCH_CART(state,val){
        state.cartlist.push(val)
    },
    CHANGE(state,val){
        state.cartlist[val.index].quantity = val.quan
    }
}
export const actions={
fetchCart({commit},val){
    commit('FETCH_CART',val)
},
changeQuan({commit},val){
    commit('CHANGE',val)
}
}
export const getters={

}