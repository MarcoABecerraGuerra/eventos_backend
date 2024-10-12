class ApiResponse {
    headers = {
        "Access-Control-Allow-Headers" : "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
    };
    body;
    statusCode;
    constructor(statusCode, body) {
        this.statusCode = statusCode || 200;
        this.body = JSON.stringify(body, null, 2);
    }
}

class ApiSuccesResponse extends ApiResponse{
    constructor(body){
        super(200, body)
    }
}

class ApiInternalErrorResponse extends ApiResponse{
    constructor(body){
        super(500, body)
    }
}

class ApiBadRequestResponse extends ApiResponse{
    constructor(body){
        super(400, body)
    }
}

class ApiNotFoundResponse extends ApiResponse{
    constructor(body){
        super(404, body)
    }
}

module.exports.ApiResponse = ApiResponse;
module.exports.ApiSuccesResponse = ApiSuccesResponse;
module.exports.ApiInternalErrorResponse = ApiInternalErrorResponse;
module.exports.ApiBadRequestResponse = ApiBadRequestResponse;
module.exports.ApiNotFoundResponse = ApiNotFoundResponse;