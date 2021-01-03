import {createStore} from 'redux';

const initData = {
    data:[{message:'sample data', created:new Date()}],
    message:'please type message',
    mode:'default',
    fdata:[]
}

// deducer
export function memoReducer(state = initData, action){
    switch (action.type){
        case 'ADD':
            return addReduce(state, action);

        case 'DELETE':
            return deleteReduce(state, action);
        
        case 'FIND':
            return findReduce(state, action);
        
        default:
            return state;
    }
}

// reduce action

// function to add memo
function addReduce(state, action){
    let data = {
        message:action.message,
        created:new Date()
    };

    let newdata = state.data.slice();

    newdata.unshift(data);

    return {
        data:newdata,
        message:'Added!',
        mode:'default',
        fdata:[]
    };
}

// function to find memo
function findReduce(state, action){
    let f = action.find;

    let fdata = [];
    
    state.data.forEach((value)=>{
        if (value.message.indexOf(f) >= 0){
            fdata.push(value);
        }
    });

    return {
        data:state.data,
        mesafge:'find"' + f + '":',
        mode:'find',
        fdata:fdata
    };
}

// function to delete memo
function deleteReduce(state, action){
    let newdata = state.data.slice();

    newdata.splice(action.index, 1);
    
    return {
        data:newdata,
        message:'delete"' + action.index + '":',
        mode:'delete',
        fdata:[]
    }
}


// action creater

// action to add memo

export function addMemo(text){
    return{
        type: 'ADD',
        message:text
    }
}

// action to delete memo

export function deleteMemo(num){
    return{
        type: 'DELETE',
        index:num
    }
}

//action to find mem0
export function findMemo(text){
    return {
        type: 'FIND',
        find:text
    }
}

// create store
export default createStore(memoReducer);