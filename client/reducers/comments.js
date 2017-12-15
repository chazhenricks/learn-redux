//a reducer takes in two things:

//1. action (info about what happened)

//2. a copy of current state

//take in state, add new action, return updated state back to react

const comments = (state = [], action) => {
    console.log(state, action);
    return state;
}

export default comments;