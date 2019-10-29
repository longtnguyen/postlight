const AWS = require(`aws-sdk`);
AWS.config.update({region: `us-east-1`});
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const params = JSON.parse(event.body);
    const TableName = params.table;
    const Item = {...params.data};
    console.log(params, params.table, Item, 'heree');
    console.log(TableName, Item);

    dynamo.put({TableName, Item}, function (err, data) {
        if (err) {
            console.log(`error`, err);
            callback(err, null);
        } else {
            var response = {
                statusCode: 200,
                headers: {
                    'Content-Type': `application/json`,
                    'Access-Control-Allow-Methods': `GET,POST,OPTIONS`,
                    'Access-Control-Allow-Origin': `*`,
                    'Access-Control-Allow-Credentials': `true`
                },
                isBase64Encoded: false
            };
            console.log(`success: returned ${data.Item}`);
            callback(null, response);
        }
    });
};