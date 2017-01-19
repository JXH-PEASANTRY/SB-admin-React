import * as TYPE from './actionsType'
import $ from 'jquery'


/* category  actions*/
export function query() {
    return (dispatch, getState) => {
        return dispatch(fetch_catagory())
    }
}

export const requestCatagory = () => {
    return {
        type: TYPE.REQUEST_CATEGORY

    }
}


export function addCategory(catagory) {
    return (dispatch, getState) => {
        return dispatch(add_category(catagory))
    }

}

export const receiveCategory = (json) => {
    return {
        type: TYPE.RECEIVE_CATEGORY,
        category: json
    }
}

function add_category(category) {
    return dispatch => {
        dispatch(requestCatagory())
        console.log("-------------")
        console.log(category)
        return $.ajax({
            type: "POST",
            url: "http://localhost:3001/category",
            data: {
                "id": category.id,
                "name": category.name
            },
            dataType: "json",
            success: function () {
                dispatch(fetch_catagory())
            },
            error: function () {

            }
        });
    }
}


function delete_category(id) {
    return dispatch => {
        dispatch(requestCatagory());
        return $.ajax({
            type: "DELETE",
            url: "http://localhost:3001/category/" + id,
            dataType: "json",
            success: function () {
                dispatch(fetch_catagory())
            },
            error: function () {

            }
        });
    }
}

function fetch_catagory() {
    return dispatch => {
        dispatch(requestCatagory());
        return fetch(`http://localhost:3001/category`)
            .then(response => response.json())
            .then(json =>
                dispatch(receiveCategory(json))
            );
    }
}

export function deleteCategory(id) {
    return (dispatch, getState) => {
        return dispatch(delete_category(id))
    }
}

export function editCategory(catagory) {
    return {
        type: TYPE.EDIT_CATEGORY,
        catagory
    }
}

/* keyword  actions*/

function fetch_keyword(id) {
    return dispatch => {
        dispatch(requestKeyword(true,id));
        return fetch(`http://localhost:3001/keyword/?categoryId=` + id)
            .then(response => response.json())
            .then(json =>
                dispatch(receiveKeyword(json))
            )
    }
}

export const requestKeyword = (flag,id) => {
    return {
        type: TYPE.REQUEST_KEYWORD,
        showTable:flag,
        categoryId:id
    }
}

export const receiveKeyword = (json) => {
    return {
        type: TYPE.RECEIVE_KEYWORD,
        keyword: json
    }
}

export function querykeyword(id) {
    return (dispatch, getState) => {
        return dispatch(fetch_keyword(id))
    }
}

/* keyword  actions*/

function fetch_report() {
    return dispatch => {
        dispatch(requestReport());
        dispatch(requestKeyword(false))
        return fetch(`http://localhost:3001/report`)
            .then(response => response.json())

            .then(json =>
                dispatch(receiveReport(json))
            )
    }
}

export function requestReport() {
    return {
        type: TYPE.REQUEST_REPORT
    }
}

export const receiveReport = (json) => {
    console.log("-----------------")
    console.log(json)
    return {
        type: TYPE.RECEIVE_REPORT,
        report: json,

    }
}

export function getReport() {
    return (dispatch, getState) => {
        return dispatch(fetch_report())
    }
}