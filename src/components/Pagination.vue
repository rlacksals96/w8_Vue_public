<template>
  <div class="page-nation">
    <ul class="page">
      {{ totalResults }}
      <li><a href="#">&lt;</a></li>
      <!-- <li
        v-for="content in contents"
        :key="content.imdbID">
        <a :href="$router.push({
            name: 'Page',
            params: {page: }
        })">2</a>
      </li> -->
      <li>
        <router-link to="/page/1">
          1
        </router-link>
      </li>
      <li><a href="/page/2">2</a></li>
      <li><a href="/page/3">3</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">&gt;</a></li>
    </ul>
  </div>
</template>
<script>
export default {
    computed:{
        totalResults(){
            return this.$store.state.movie.totalResults
        }
    },
}
</script>

<style lang="scss" scoped>
.page-nation{
    font-size:24px;
    .page{
        display: flex;
        list-style: none;
        justify-content: center;
        a{
            text-decoration: none;
            color: $color-pagiNation-font;
        }
        li{
            padding: 16px;
            &:hover{
                background-color: rgba(0, 0, 0, .1);
            }
        }
        
    }
}
</style>