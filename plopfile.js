import viewGenerator from './plop-templates/view/prompt.js'
import componentGenerator from './plop-templates/component/prompt.js'

export default function (plop) {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('component', componentGenerator)
}
