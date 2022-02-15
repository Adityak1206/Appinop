const dbModel = require('../Schema/apodmongo');


const getData = async (date) => {

    const data = await db.findOne({ date }, { _id: 0, copyright: 0, __v: 0 });
    console.log(data);
    return data;
}

//inserting document to collection
const setData = async (insData) => {

    const insertedData = await db.create(insData);
    return insertedData;
}

module.exports = {
    getData,
    setData
}