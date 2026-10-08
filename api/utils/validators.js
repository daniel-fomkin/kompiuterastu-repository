function isNotEmpty(data, dataName){
    if(!data || !data.trim() || data === null || Number.isNaN(data)){
        const err = new Error(`${dataName} is required.`);
        err.status = 400;

        throw err
    }
}

module.exports = {
    isNotEmpty
}