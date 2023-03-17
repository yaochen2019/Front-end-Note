import { useState } from 'react'

export default function useLocalStorage(keyName, initialValue) {
    const [storedValue, setStoreValue] = useState(() => {
        try {
            // 检查local storage 是否可用
            if (typeof window === "undefined") {
                return initialValue
            }

            //检查是否已经有keyName在localstroage里面了
            const item = window.localStorage.getItem(keyName)

            // Return parsed data from storage or return the initialValue:
            return item !== null ? JSON.parse(item) : initialValue

        } catch (error) {
            console.log(error);

            return initialValue
        }
    })
    // Create handler function for storing value in local storage:
    const setValue = (value) => {
        try {
            // Store the value in the state:
            setStoredValue(value)

            // Store the value in local storage:
            window.localStorage.setItem(keyName, JSON.stringify(value))
        } catch (error) {
            // Catch any errors and log them:
            console.log(error)
        }
    }

    // Return latest data and handler function for storing new data:
    return [storedValue, setValue]

}
