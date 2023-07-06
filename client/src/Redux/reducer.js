
import {GET_COUNTRIES,GET_COUNTRY, GET_CONTINENTS, GET_ACT_COUNTRY, GET_ORDER_A_Z, GET_ORDER_Z_A,POPULATION_A,POPULATION_D,RESET} from "./actions/action_type"
const initialState = {
    countries: [],
    countriesOrigin: [],
    country: [],
    activities: [],
} 
export function reducer(state=initialState,accions) {
    switch (accions.type) {
        case GET_COUNTRIES:
           return{
            ...state,
            countries:accions.payload,
            countriesOrigin:accions.payload
           } 
           
        case GET_COUNTRY:
          return{
            ...state,
          country:accions.payload
          }
        case GET_CONTINENTS:
          const countriesCopy=[...state.countriesOrigin]
        const countries= countriesCopy.filter((c)=>c.continent===accions.payload)
       
        return{
          ...state,
          countries:countries,
        }
        case GET_ACT_COUNTRY:
          const countriesCopy2=[...state.countriesOrigin]
    const activity= countriesCopy2.filter((a) => a.activities.length)
    var filter=[]
  for (let i = 0; i < activity.length; i++) {
    for (let index = 0; index < activity[i].activities.length; index++) {
   if (activity[i].activities[index].name===accions.payload) {
    filter.push(activity[i])
   }
 }
  }
          return{
            ...state,
            countries:filter,
          }
          case GET_ORDER_A_Z:
            const countriesOC=[...state.countriesOrigin]
          const order= countriesOC.sort((a,b)=>{
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          }
          )
          
       console.log(order)
            return{
              ...state,
            countries:order
              
            }
            case GET_ORDER_Z_A:
              const countriesO=[...state.countriesOrigin]
          const Order= countriesO.sort((a,b)=>{
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          }
          )
            return{
              ...state,
            countries:Order
              
            }
            case POPULATION_A:
              const countriesA=[...state.countriesOrigin]
              const orden= countriesA.sort((a,b)=>{
                if (a.population > b.population) {
                  return -1;
                }
                if (a.population < b.population) {
                  return 1;
                }
                return 0;
              }
              )
              return{
                ...state,
                countries:orden
              }
              case POPULATION_D:
              const countriesD=[...state.countriesOrigin]
              const ordens= countriesD.sort((a,b)=>{
                if (a.population < b.population) {
                  return -1;
                }
                if (a.population > b.population) {
                  return 1;
                }
                return 0;
              }
              )
              return{
                ...state,
                countries:ordens
              }

          case RESET:
            const countriesCopy3= [...state.countriesOrigin]
            return{
              ...state,
              countries:countriesCopy3
            }
        default:
            return {...state}
    }
}
