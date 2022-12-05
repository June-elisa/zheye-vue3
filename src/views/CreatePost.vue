<!--
 * @Author: Reya
 * @Date: 2022-05-06 11:19:58
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-07 10:15:57
 * @Description: 新建文章
-->
<template>
    <div class="createPost">
      <p style="font-size:26px">新建文章</p>
      <div class="photo">点击上传头图</div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="ruleForm"
        label-position="left"
        hide-required-asterisk
      >
        <el-form-item label="文章标题" prop="title"  >
            <el-input v-model="ruleForm.title" placeholder="请输入文章标题" />
        </el-form-item>
        <el-form-item label="文章详情" prop="content"  >
            <el-input type="textarea" maxlength="1000" :rows="10" show-word-limit v-model="ruleForm.content"  />
        </el-form-item>
        <el-form-item label="" fixed="left" >
            <el-button type="primary" @click="submitForm(ruleFormRef)">发表文章</el-button >
        </el-form-item>
      </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDataProps, PostProps } from '../store/index'

export default defineComponent({
  name: 'CreatePost',
  setup () {
    const router = useRouter()
    const store = useStore<GlobalDataProps>()
    const ruleFormRef = ref<FormInstance>()
    const ruleForm = reactive({
      title: '',
      content: ''
    })

    const rules = reactive({
      title: [{ required: true, message: '文章标题不能为空', trigger: 'blur' }],
      content: [{ required: true, message: '文章详情不能为空', trigger: 'blur' }]
    })

    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          console.log('submit!')
          const { columnId } = store.state.user
          if (columnId) {
            const newPost:PostProps = {
              id: new Date().getTime(),
              title: ruleForm.title,
              content: ruleForm.content,
              columnId,
              createdAt: new Date().toLocaleString()
            }
            store.commit('CREATE_POST', newPost)
            router.push({ name: 'column', params: { id: columnId } })
          }
        } else {
          console.log('error submit!')
          return false
        }
      })
    }

    return {
      rules,
      submitForm,
      ruleForm,
      ruleFormRef
    }
  }
})
</script>

<style scoped lang="scss">
.createPost{
  text-align: left;
  max-width: 1220px;
  margin:0 auto;
  .photo{
    width:100%;
    height: 200px;
    background-color:#f5f5f5;
  }
}

.el-form-item {
  flex-direction: column;
  margin-bottom: 20px;
  ::v-deep .el-form-item__label{
  font-size: 16px;
  }
}
</style>
