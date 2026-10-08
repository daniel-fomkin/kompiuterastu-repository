function isNotEmpty(data, dataName) {
    if (!data || (typeof data === "str" && !data.trim()) || data === null || Number.isNaN(data)) {
        const err = new Error(`${dataName} is required.`);
        err.status = 400;

        throw err;
    }
}

function isEmail(data) {
    if(!(data.includes("@"))){
        const err = new Error("Invalid email.");
        err.status = 400;

        throw err;
    }

    [ username, domain ] = data.split("@");

    if(!username || !domain){
        const err = new Error("Invalid email.");
        err.status = 400;

        throw err;
    }

    if(!(domain.includes("."))){
        const err = new Error("Invalid email.");
        err.status = 400;

        throw err;
    }
}

module.exports = {
    isNotEmpty,
    isEmail
}