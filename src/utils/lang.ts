import i18n from '@/i18n'
import { localStore } from './storage'

export function getCacheLang() {
  return localStore.get('lang')
}

export function setCacheLang(lang: string) {
  localStore.set('lang', lang)
}

export const getI18nTitle = (title: string) => {
  const key = 'route.' + title
  // @ts-ignore
  return i18n.global.te(key) ? i18n.global.t(key) : title
}
