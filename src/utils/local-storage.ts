
class IStorage {
    static set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    static get(key: any) {
        const res = localStorage.getItem(key)
        if (res) {
            return JSON.parse(res)
        }
        return ""
    }

    static remove(key: any) {
        localStorage.removeItem(key)
    }

    static clear() {
        localStorage.clear()
    }
}

export default IStorage
