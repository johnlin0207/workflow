const dispatch = (_action) => {
    return dispatch(_action)

};
const action = arg => dispatch => {
    console.log(arg)
    console.log(dispatch(3))

};

let bbb = (arg, dispatch) => {
    //console.log(typeof dispatch)
    let fun = (arg) => dispatch(action(arg));
    fun(arg)
};

bbb(1, dispatch)