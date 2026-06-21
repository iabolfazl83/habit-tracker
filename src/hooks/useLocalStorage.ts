import {useState} from 'react';

type SetValue<T> = (value: T | ((prev: T) => T)) => void;

export function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {

    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`useLocalStorage: failed to parse key "${key}"`, error);
            return initialValue;
        }
    });

    const setValue: SetValue<T> = (value) => {
        try {
            // if caller passed a function, resolve it against current state
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`useLocalStorage: failed to set key "${key}"`, error);
        }
    };

    return [storedValue, setValue];
}