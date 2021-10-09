exports.handler = async function () {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'muntari',
            age: 30,
            email: 'muntari@.com'
        })
    }
}