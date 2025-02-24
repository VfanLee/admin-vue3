import { createI18n } from 'vue-i18n'
import { getCacheLang } from '@/utils/lang'

const messages: Record<string, any> = {}

const locales: Record<string, { default: string }> = import.meta.glob('./locales/*.ts', { eager: true })
for (const path in locales) {
  if (Object.prototype.hasOwnProperty.call(locales, path)) {
    const locale = locales[path]
    messages[path.match(/\.\/locales\/(.*)\.ts$/)![1]] = locale.default
  }
}

function getDefaultLang() {
  const cacheLang = getCacheLang()
  if (cacheLang) {
    return cacheLang
  }
  const browserLang = navigator.language.toLowerCase()
  const supportLangs = Object.keys(messages)
  for (const lang of supportLangs) {
    if (browserLang.includes(lang)) {
      return lang
    }
  }
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getDefaultLang(),
  fallbackLocale: 'en',
  messages,
})

export default i18n
