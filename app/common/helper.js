function respondWithResult(statusCode, data) {
    const status = statusCode || 200;
    return {
        message : data.message,
        error : false,
        statusCode: status,
        data : data.result
    };
}

function handleError(error) {
    const status = error.status || 500;
    return {
        error,
        message: error.message,
        statusCode: status,

    };
}

module.exports = { respondWithResult, handleError };