export const loadStateLocalStorage = () => {
    try{
        const serializedState = localStorage.getItem('StdData');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
}

export const saveStateLocalStorage = (state) => {
    console.log(state);
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('StdData', serializedState);
    } catch (error) {
        //Ignore the error
    }
}