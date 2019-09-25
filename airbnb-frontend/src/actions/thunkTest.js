

/*
*-------------------------------------------------
a test thunk
what is a thunk? 
** A thunk is a function that wraps an expression to delay its evaluation.


WHY are thunks useful... 
*-------------------------------------------------
*/

export default ()=>{
    return waitASec
}

function waitASec(dispatch, getState){
    console.log("Wait a sec is running")
    setTimeout(()=>{
        console.log("2 seconds.")
        dispatch({
            type: "aThunkAction"
        })
    },2000)
}
//I've got two back-ends. 
//I submit it to 1... i get back json... 
//its not what i wanted...I'm screwed.... because redux...thunk manages the dispatch and you can run logic and manage the 