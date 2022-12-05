/*
 * @Author: Reya
 * @Date: 2022-05-06 18:04:48
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-20 20:07:14
 * @Description:
 */
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
export const testData: ColumnProps[] = [
  {
    id: 1,
    nickName: 'test1的专栏',
    description: '喜欢我，就请多多关注我哟',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F34%2F06%2F02%2F34060280461dac760313c6edf37998e6.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654339416&t=78d0fe4e0927ce775f527a4bd6e75635'
  },
  {
    id: 2,
    nickName: 'test2的专栏',
    description: '喜欢我，就请多多关注我哟',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F11%2F20200211233823_bligy.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654339416&t=af812e21e7402ac4244083a4882760f8'
  },
  {
    id: 3,
    nickName: 'test3的专栏',
    description: '喜欢我，就请多多关注我哟'
    // avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F9f%2F6b%2Fc8%2F9f6bc8cf69fc651d6f2d2af3778dee17.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654339416&t=3275eb5575c6341c2f3988587b98b4c1'
  },
  {
    id: 4,
    nickName: 'test4的专栏',
    description: '喜欢我，就请多多关注我哟',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F22%2Ff9%2F1c%2F18%2Ff006d74ac4246ceaf22fedbc0dcb1cfb.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654339416&t=86d15f0cdd7f2124e98bb23fce83ce85'
  }
]

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '这是我的第一篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
    createdAt: '2020-06-11 10:34:22',
    columnId: 1
  },
  {
    id: 2,
    title: '这是我的第二篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    createdAt: '2020-06-11 10:34:22',
    columnId: 1
  },
  {
    id: 3,
    title: '这是我的第三篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
    createdAt: '2020-06-11 10:34:22',
    columnId: 1
  }
]
