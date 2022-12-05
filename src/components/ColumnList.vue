<!--
 * @Author: Reya
 * @Date: 2022-05-05 17:27:15
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-20 20:26:37
 * @Description:专栏列表组件
-->
<template>
    <div class="column">
        <el-row>
            <el-col :span="8" v-for="column in columnList" :key="column.id" class="column_item">
            <div class="card">
                <div class="avatar">
                    <img :src="column.avatar" :alt="column.nickName" >
                </div>
                <h5>{{column.nickName}}</h5>
                <div class="desc">{{column.description}}</div>
                <router-link :to="`/column/${column.id}`">
                  <el-button type="primary" plain>进入专栏</el-button>
                </router-link>

            </div>

            </el-col>
        </el-row>

    </div>
</template>
<script scoped lang="ts">

import { defineComponent, PropType, computed } from 'vue'
import { ColumnProps } from '../testData'

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/default.png')
        }
        return column
      })
    })

    return {
      columnList
    }
  }
})
</script>
<style lang="scss">
.column{
    &_item{
        padding: 20px;
    }
    .card{
        border: 1px solid #ccc;
        box-shadow: 0px 0px 12px rgb(0 0 0 / 12%);
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    .avatar{
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid #ccc;
        img{
            width:100%;
        }
    }
    .desc{
        height: 45px;
        margin-bottom: 10px;
            text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }
}
a {
  text-decoration: none;
    // font-weight: 400;
  color: #212529;
}

</style>
