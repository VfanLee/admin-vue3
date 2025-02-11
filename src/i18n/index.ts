import { createI18n } from 'vue-i18n'
import { getCacheLang } from '@/utils/lang'
import zh from './lang/zh'
import en from './lang/en'

const messages = {
  zh,
  en,
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
  fallbackLocale: 'zh',
  messages,
})

export default i18n
