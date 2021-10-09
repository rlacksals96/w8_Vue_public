export default {
    namespaced:true,
    state(){
        return {
            showModal: false
        }
    },
    getters:{

    },
    mutations:{
        assignState(state, payload) {
            Object.keys(payload).forEach(key => {
              state[key] = payload[key]
            })
        },
        ToggleModal(state){
            state.showModal = !state.showModal
        },
        ResizingImg(state, payload){
            const posterArray = payload.Poster.split('_')
            const sizeIndex = posterArray.indexOf('SX300.jpg')
            posterArray[sizeIndex] = 'SX700.jpg'
            const resizeImg = posterArray.join('_')
            payload.Poster = resizeImg
        }
    },
    actions:{
        async searchMovies({ commit }, payload){
            const API_KEY = '7035c60c'
            const { title, page } = payload
            const data = await fetch(`https://www.omdbapi.com?apikey=${API_KEY}&s=${title}&page=${page}`,{
                method: 'GET',
            }).then(res => res.json())
            commit('assignState', data)
        },
        async detailMovie({ commit }, payload){
            // loading 때 사용해보자. 여기다 commit('ToggleModal') 작성하면 현재 단계에서는 최초에 
            // 포스터에 대한 정보가 없어 에러가 발생함
            const API_KEY = '7035c60c'
            const { movieId } = payload
            const data = await fetch(`https://www.omdbapi.com?apikey=${API_KEY}&i=${movieId}&plot=full`,{
                method: 'GET',
            }).then(res => res.json())
            commit('ResizingImg', data)
            const selectedMovie = { selectedMovie: {...data}}
            commit('assignState', selectedMovie)
            commit('ToggleModal')
            
        }
    }
}