import { useStore } from "vuex"

const useBacktest = () => {

    const store = useStore()

    const addIndicator = ( indicator ) => {
        
        store.dispatch("backtest/addIndicator", indicator)
    }


    const removeIndicator = async( id ) => {
        
        const resp = await store.dispatch('backtest/deleteIndicator', id)
        return resp
    }

    const macdResumen = ( config ) => {
        let resumen = `Tipo: ${ config.MA }, periodos: ${ config.period }.`
        return resumen
    }

    const donchianChannelsResumen = ( config ) => {
        let resumen = `Tamaño del Periodo: ${ config.period }.`
        return resumen
    }

     const bollingerBandsResumen = ( config ) => {
        let resumen = `Periodos: ${ config.period },
        Desviacion Estandar: ${ config.std }.`
        return resumen
    }

    const ichimokuResumen = ( config ) => {
        let resumen = `
        Linea de conversion: ${ config.conversion} periodos.
        linea base: ${ config.base } periodos.
        linea de retraso: ${ config.lagging } periodos.
        Span A: ${ config.spanA }.
        Span B: ${ config.spanB} .
        `
        return resumen
    }

    const numberFormat = (num) => {

        if ( typeof(num)==='string' ){
            return num
        } else {
            const format = num.toFixed(3);
            return format
        }
    }

    const dateFormat = ( date ) => {
        const dateSplit = date.split('T')
        const format = dateSplit[0] +' '+ dateSplit[1]
        return format
    }

    return {
        numberFormat,
        dateFormat,
        addIndicator,
        removeIndicator,
        macdResumen,
        donchianChannelsResumen,
        bollingerBandsResumen,
        ichimokuResumen,
    }

}


export default useBacktest 
