import $Cookies from 'js-cookie'

interface CookieAttributes extends Record<string, any> {
  expires?: number | Date | undefined
  path?: string | undefined
  domain?: string | undefined
  secure?: boolean | undefined
  sameSite?: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None' | undefined
}

const cookiesOptions: CookieAttributes = {
  expires: 7,
  path: '/',
}

class Cookie {
  set(key: string, value: any, options = cookiesOptions): void {
    const stringValue = typeof value === 'object' ? JSON.stringify(value) : value
    $Cookies.set(key, stringValue, options)
  }

  get<T = any>(key: string): T | null {
    const value = $Cookies.get(key)
    if (value) {
      try {
        return JSON.parse(value) as T
      } catch (error) {
        return value as T
      }
    }
    return null
  }

  getAll(): Record<string, any> {
    const cookies = $Cookies.get()
    const result: Record<string, any> = {}
    for (const [key, value] of Object.entries(cookies)) {
      try {
        result[key] = JSON.parse(value)
      } catch (error) {
        result[key] = value
      }
    }
    return result
  }

  remove(key: string, options = cookiesOptions): void {
    $Cookies.remove(key, options)
  }

  removeAll(options = cookiesOptions): void {
    const cookies = $Cookies.get()
    for (const key in cookies) {
      $Cookies.remove(key, options)
    }
  }

  has(key: string): boolean {
    return !!$Cookies.get(key)
  }
}

const cookie = new Cookie()

export default cookie
