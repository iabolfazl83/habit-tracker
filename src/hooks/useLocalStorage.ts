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
        if (value instanceof Function) {
            setStoredValue(prev => {
                const valueToStore = value(prev);
                localStorage.setItem(key, JSON.stringify(valueToStore));
                return valueToStore;
            });
        } else {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        }
    };

    return [storedValue, setValue];
}