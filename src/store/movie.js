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
            const data = await _request(payload)
            commit('assignState', data)
        },
        async detailMovie({ commit }, payload){
            // loading 때 사용해보자. 여기다 commit('ToggleModal') 작성하면 현재 단계에서는 최초에 
            // 포스터에 대한 정보가 없어 에러가 발생함
            const data = await _request(payload)
            commit('ResizingImg', data)
            const selectedMovie = { selectedMovie: {...data}}
            commit('assignState', selectedMovie)
            commit('ToggleModal')
        }
    }
}

async function _request(options){
    const { movieId, title, page=1 } = options
    const API_KEY = '7035c60c'
    if (title && !movieId){
        return await fetch(`https://www.omdbapi.com?apikey=${API_KEY}&s=${title}&page=${page}`,{
                method: 'GET',
        }).then(res => res.json())
    }
    if (!title && movieId){
        return await fetch(`https://www.omdbapi.com?apikey=${API_KEY}&i=${movieId}&plot=full`,{
                method: 'GET',
        }).then(res => res.json())
    }

}