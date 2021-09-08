import { IamRoleStatement } from "serverless/aws";

export const handler =  function(event: any, _context: any, callback: any) {
    var token = event.authorizationToken;
    const allow = token === '123'
    switch (allow) {
        case true:
            callback(null, generatePolicy('user', 'Allow', event.methodArn));
            break;
        case false:
            callback(null, generatePolicy('user', 'Deny', event.methodArn));
            break;
        default:
            callback("Unauthorized");   // Return a 401 Unauthorized response
            break;
    }
};

// Help function to generate an IAM policy
const generatePolicy = (principalId, effect, resource) => {
    var authResponse: any = {};
    
    authResponse.principalId = principalId;
    if (effect && resource) {
        var policyDocument: any = {};
        policyDocument.Version = '2012-10-17'; 
        policyDocument.Statement = [];
        var statementOne: any = {};
        statementOne.Action = 'execute-api:Invoke'; 
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }
    
    // Optional output with custom properties of the String, Number or Boolean type.
    authResponse.context = {
        "stringKey": "stringval",
        "numberKey": 123,
        "booleanKey": true
    };
    return authResponse
}