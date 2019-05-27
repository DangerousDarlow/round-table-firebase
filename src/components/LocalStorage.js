// https://usehooks.com/useLocalStorage used as a source of inspiration

class LocalStorage {
    load = (key) => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    save = (key, value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value() : value;

            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    }
}

export default LocalStorage;