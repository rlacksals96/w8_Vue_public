<template>
  <div>
    <Header />
    <Main />
    <Pagination />
    <teleport to="body">
      <Modal />
    </teleport>
  </div>
</template>

<script>
import Pagination from '~/components/Pagination'
import Header from '~/components/Header'
import Modal from '~/components/Modal'
import Main from '~/components/Main'

export default {
    components:{
        Header,
        Main,
        Pagination,
        Modal
    },
    
}
</script>

<style lang="scss" scoped>

</style>