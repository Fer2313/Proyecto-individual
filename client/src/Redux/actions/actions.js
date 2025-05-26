import {GET_COUNTRIES,GET_COUNTRY,GET_CONTINENTS,GET_ACT_COUNTRY,GET_ORDER_A_Z,GET_ORDER_Z_A,POPULATION_A,POPULATION_D, RESET, RESETC} from "./action_type"
import axios from "axios"
const URL= "https://proyecto-individual-xz8a.onrender.com"
export function get_Countries() {
    return function (dispatch) {
       axios.get(URL).then((data)=>dispatch({
        type:GET_COUNTRIES,
        payload:data.data
       }))
    }
}

export function get_Country(name) {
    return function(dispatch){
        
         axios.get(`${URL}/countries?name=${name}`)
        .then((data)=>dispatch({
         type: GET_COUNTRY,
         payload:data.data
        }))
        .catch(()=>{
            window.alert("No se encontro el pais")
        })
    }
}
export function get_Continent(continent) {
      return function(dispatch) {
        dispatch({
         type:GET_CONTINENTS,
         payload:continent
     }
     
     )

   }
}
export function get_Act_Country(activity) {
    return function (dispatch) {
        dispatch({
                type:GET_ACT_COUNTRY,
                payload:activity
            }
        )
        
    }
}
export function reset(){
         return function (dispatch) {
            dispatch({
                type:RESET
            })
         }

}
export function resetC(){
    return function (dispatch) {
       dispatch({
           type:RESETC
       })
    }

}
export function get_Order_A_Z(A_Z) {
    return function (dispatch) {
        dispatch({
            type:GET_ORDER_A_Z,
            payload:A_Z
        })
     }
}
export function get_Order_Z_A(Z_A) {
    return function (dispatch) {
        dispatch({
            type:GET_ORDER_Z_A,
            payload:Z_A
        })
     }
}
export function population_A(A) {
    return function (dispatch) {
        dispatch({
            type:POPULATION_A,
            payload:A
        })
     }
}
export function population_D(D){
    return function (dispatch) {
        dispatch({
            type:POPULATION_D,
            payload:D
        })
     }
}


