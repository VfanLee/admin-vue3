import Layout from '@/layout/index.vue'

export default {
  path: '/components',
  component: Layout,
  name: 'components',
  redirect: '/components/tinymce',
  meta: {
    title: 'components',
    icon: 'cube'
  },
  alwaysShow: true,
  children: [
    {
      path: 'tinymce',
      component: () => import('@/views/components/tinymce.vue'),
      meta: {
        title: 'Tinymce'
      }
    }
  ]
}
