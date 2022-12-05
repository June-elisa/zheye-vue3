<template>
  <div class="home">
    <img src="../assets/callout.svg" alt="callout" class="w-50"/>
    <h2>随心写作，自由表达</h2>
    <router-link to="/create"><el-button type="primary" size="large">开始写文章</el-button></router-link>

     <p class="find">发现精彩</p>
    <ColumnList :list="list" />

  </div>
</template>

<script lang="ts">
import { reactive, onMounted, toRefs, defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/index'
import ColumnList from '@/components/ColumnList.vue' // @ is an alias to /src
import { getColumnList } from '@/service/index'

export default defineComponent({
  name: 'HomeView',
  components: {
    ColumnList
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    store.dispatch('userInfo')
    const state = reactive({
      list: []
    })
    // store.dispatch('getBlog')
    // const list = computed(() => store.state.columns)
    onMounted(async () => {
      const res = await getColumnList()
      if (res.data) {
        state.list = res.data
      }
    })

    return {
      ...toRefs(state)
      // list
    }
  }
})
</script>

<style scoped lang="scss">
.w-50{
  width:300px;
}
h2 {
  font-weight: 500;
  font-size: 2rem;
}
.find{
  margin: 50px 0 5px;
  font-size:1.5rem;
}
</style>
