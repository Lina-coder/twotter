export const UserModule = {
    namespaced:true,

    state: {
        user:null
    },

    //mutations are functions that effect the STATE.
    mutations: {
        SET_USER(state,user){
            state.user=user;
        }
    },

    //Actions are function that you call throughout your application
    actions: {
        setUser({commit},user){
            commit('SET_USER',user);
        }
    },
}