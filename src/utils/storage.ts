class WebStorage {
  private storage: Storage

  constructor(type: 'localStorage' | 'sessionStorage') {
    this.storage = type === 'localStorage' ? window.localStorage : window.sessionStorage
  }

  /**
   * 设置存储
   * @param {string} key - 存储的键
   * @param {any} value - 存储的值
   */
  set(key: string, value: any): void {
    const stringValue = JSON.stringify(value)
    this.storage.setItem(key, stringValue)
  }

  /**
   * 获取存储
   * @param {string} key - 存储的键
   * @returns {any|null} - 获取的值
   */
  get<T = any>(key: string): T | null {
    const value = this.storage.getItem(key)
    if (value !== null) {
      try {
        return JSON.parse(value) as T
      } catch (error) {
        console.warn(`[WebStorage] Failed to parse value for key "${key}".`)
      }
    }
    return null
  }

  /**
   * 删除指定键
   * @param {string} key - 存储的键
   */
  remove(key: string): void {
    this.storage.removeItem(key)
  }

  /**
   * 清空存储
   */
  clear(): void {
    this.storage.clear()
  }

  /**
   * 检查是否存在某个键
   * @param {string} key - 存储的键
   * @returns {boolean} - 是否存在
   */
  has(key: string): boolean {
    return this.storage.getItem(key) !== null
  }
}

// 实例化 localStorage 和 sessionStorage
const localStore = new WebStorage('localStorage')
const sessionStore = new WebStorage('sessionStorage')

export { localStore, sessionStore }
