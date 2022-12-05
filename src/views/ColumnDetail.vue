<!--
 * @Author: Reya
 * @Date: 2022-05-06 11:19:28
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-20 21:39:27
 * @Description: 专栏详情
-->
<template>
  <div class="columnDetail">
    <div class="info">
      <el-avatar :size="180" :src="column.avatar" />
      <div>
        <p class="t1">{{ column.nickName }}</p>
        <p class="t2">{{ column.description }}</p>
      </div>
    </div>
    <el-divider />
    <div class="list">
      <el-card v-for="post in list" :key="post.id" class="post">
       <!--  <router-link :to="`/posts/${post.id}`">
          <h2>{{ post.title }}</h2>
        </router-link> -->

        <h2 class="title" @click="$router.push(`/posts/${post.id}`)">{{ post.title }}</h2>
        <div class="post_content">
          <img :src="post.image" alt="" v-if="post.image">
          <img src="../assets/column.jpg" alt="" v-else>
          <div>{{ post.content }}</div>
        </div>
        <div class="post_footer">{{ post.create_time }}</div>
      </el-card>
    </div>
  </div>

</template>

<script lang="ts">
import { reactive, onMounted, toRefs, defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/index'
import { getBlogList, getUserInfo } from '@/service/index'

export default defineComponent({
  name: 'ColumnDetail',
  setup () {
    const store = useStore<GlobalDataProps>()
    const route = useRoute()
    const currentId = +route.params.id
    const state = reactive({
      list: [],
      column: {}
    })
    // const column = computed(() => store.getters.getColumnById(currentId))
    // const list = computed(() => store.getters.getPostByCid(currentId))
    // console.log('column', column)
    // console.log('list', list)

    onMounted(async () => {
      const res1 = await getBlogList({ authorId: currentId })
      state.list = res1.data

      const res2 = await getUserInfo(currentId)
      state.column = res2.data
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="scss">
* {
  font-weight: 500;
}

.columnDetail {
  width: 690px;
  margin: 0 auto;
  text-align: left;

  .el-avatar {
    margin: 0 20px;
  }

  .info {
    display: flex;

    &>div {
      flex: 1;
    }
  }

  .t1 {
    font-size: 30px;
  }

  .t2 {
    color: rgb(0 0 0 / 63%);
  }

  h2 {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
}

.post {
  margin-bottom: 20px;
  .title {
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }

  &_content {
    display: flex;

    &>div {
      flex: 1;
      padding: 0 15px;
      --bs-text-opacity: 1;
      color: #6c757d;
      // height: 45px;
      margin-bottom: 10px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }

    img {
      width: 200px;
      height: 110px;
      object-fit: cover;
    }

  }

  &_footer {
    color: #6c757d;
    margin-top: 10px;
  }
}
</style>
