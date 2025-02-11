import { notEmpty } from '../utils.js'

export default {
  description: '生成一个页面',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入名称',
      validate: notEmpty('name'),
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: '<script>',
          value: 'script',
          checked: true,
        },
        {
          name: '<template>',
          value: 'template',
          checked: true,
        },
        {
          name: 'style',
          value: 'style',
          checked: true,
        },
      ],
      validate(value) {
        if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
          return '至少选择一个 <script> 或者 <template> 标签！'
        }
        return true
      },
    },
  ],
  actions: (data) => {
    const name = '{{ pascalCase name }}'
    const pathName = '{{ kebabCase name }}'

    const actions = [
      {
        type: 'add',
        path: `src/views/${pathName}/${pathName}.vue`,
        templateFile: 'plop-templates/view/index.hbs',
        data: {
          name,
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style'),
        },
      },
    ]

    return actions
  },
}
