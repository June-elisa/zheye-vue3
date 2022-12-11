import { createStore } from 'vuex'
import { testData, testPosts } from '../testData'
import { logout, getUserInfo } from '../service/index'

export interface ColumnProps {
  id: number;
  nickName: string;
  avatar?: string;
  description: string;
}
export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}
interface UserProps {
  isLogin: boolean;
  email?: string;
  name?: string;
  id?: number;
  columnId?: number;
}
export interface GlobalDataProps {
  columns: ColumnProps[],
  posts: PostProps[],
  user: UserProps;
}

export default createStore<GlobalDataProps>({
  state: {
    columns: [],
    posts: [],
    user: { isLogin: false }
  },
  getters: {
    getColumnById: (state) => (id: number) => {
      console.log('id', id)
      return state.columns.find(c => c.id === id)
    },
    getPostByCid: (state) => (cid: number) => {
      return state.posts.filter(post => post.columnId === cid)
    }
  },

  actions: {
    async getPerson ({ commit }) {
      console.log('准备发送请求')
      // const res = await getBlogList()
      // console.log('res:', res)
      // axios.get('http://localhost:8080/api/blog/list').then(
      //   response => {
      //     console.log('请求成功了', response)
      //   },
      //   error => {
      //     console.log('请求失败了', error.message)
      //   }
      // )
    },
    async getBlog ({ commit }) {
      console.log('准备发送请求')
      // const res = await getBlogList()
      // console.log('res:', res)
    },
    async logout ({ commit }) {
      console.log('准备注销')
      const res = await logout()
      commit('LOGOUT')
    },
    async userInfo ({ commit }) {
      const res = await getUserInfo(0)
      if (res.data.id) {
        commit('USER_INFO', res.data)
      } else {
        // commit('LOGOUT')
      }
    }
  },
  mutations: {
    LOGIN (state, value) {
      console.log('state.user:', state.user)
      console.log('state', state)
      console.log('value', value)
      const { id, email, nickName } = value
      state.user = { ...state.user, isLogin: true, name: nickName, columnId: id, id, email }
      console.log('state.user:', state.user)
    },
    LOGOUT (state, value) {
      state.user = { isLogin: false }
    },
    USER_INFO (state, value) {
      const { id, email, nickName } = value
      state.user = { ...state.user, isLogin: true, name: nickName, columnId: id, id, email }
    },
    CREATE_POST (state, newPost) {
      state.posts.push(newPost)
    }
  },
  modules: {
  }
})
