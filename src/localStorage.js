export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("study-stud-state");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("study-stud-state", serializedState);
    } catch (err) {
        console.log(err);
    }
};

export const deleteState = () => {
    localStorage.removeItem("study-stud-state");
};
