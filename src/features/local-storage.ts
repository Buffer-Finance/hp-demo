/* eslint-disable @typescript-eslint/no-explicit-any */
// Function to get data from localStorage
export const getLocalStorage = <T>(key: string): T | null => {
	const storedValue = localStorage.getItem(key);
	return storedValue ? (JSON.parse(storedValue) as T) : null;
};

// Function to set data in localStorage
export const setLocalStorage = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value));
};
