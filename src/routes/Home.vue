<template>
  <SearchContainer />
  <RouterView />
</template>
<script>
import SearchContainer from '~/container/SearchContainer'
export default {
  components:{
    SearchContainer
  }
}
</script>