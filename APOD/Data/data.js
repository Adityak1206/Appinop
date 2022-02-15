const { default: axios } = require("axios");
const { model } = require("mongoose");
const apod = require("../model/apodfunc");
const https = require("https");

let dataStatus = {}
nasa_api = "https://api.nasa.gov/planetary/apod?api_key=vYZuLOekYeuCUO0wKnPPMl2ydSn9jGlZIoYJIeJh"
api_key = "vYZuLOekYeuCUO0wKnPPMl2ydSn9jGlZIoYJIeJh"


fetchData = async (date) => {
    const api_url = nasa_api;
    let getApiData = await axios.get(api_url, {
        params: {
            api_key: api_key,
            date: date,
        }
    })
    return getApiData;

}

dataStatus.checkApod = async (date) => {
    const data = await apod.getData(date);
    if (data) {
        return data;
    }
    else { //fetch Apod data from Nasa.
        let apiData = await fetchData(date);
        const resultData = await apodDb.setData(apiData);
        if (resultData)
            return resultData;
        else {
            let error = new Error("Sorry for Interuption, Some Internal Error Occured!!");
            error.status = 500;
            throw error;
        }

    }
}
module.exports = dataStatus;