exports.success = function(req,res,message, status){
    let statusCode = status || 200;
    let statusMessage = message || '';
    res.status(statusCode).send({
        error: false,
        status: status,
        body: message
    });
}

exports.error = function(req,res,message, status){
    let statusCode = status || 500;
    let statusMessage = message || 'Internal Server error';

    res.status(statusCode).send({
        error: true,
        status: status,
        body: message,
    });
}