const AWS = require(`aws-sdk`);
AWS.config.update({ region: `us-east-1` });
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    let params = {};
    if(!event.queryStringParameters || !event.queryStringParameters.key || !event.queryStringParameters.value){
        params.TableName = 'employee-directory';
    } else {
      params = {
        TableName: event.queryStringParameters.table,
        FilterExpression: `contains (${event.queryStringParameters.key}, :val)`,
        ExpressionAttributeValues: { ':val': event.queryStringParameters.value }
      };
    }

  dynamo.scan(params, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      var response = {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
          'Access-Control-Allow-Origin': `*`,
        },
        body: JSON.stringify(data.Items),
        isBase64Encoded: false
      }
      callback(null, response);
    }
  });
}