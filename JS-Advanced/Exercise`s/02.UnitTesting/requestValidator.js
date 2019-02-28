function validate(obj) {
    let methodValid = false;
    let uriValid = false;
    let versionValid = false;
    let msgValid = false;

    const regUri = /^[*\w.]+$/gm;
    let reslut = {
        method: validateMethod(obj.method),
        uri: validateUri(obj.uri),
        version: validateVersion,
        message: validateMessage
    };
    
    function validateMethod(meth) {
        if(meth == 'GET' || meth == 'POST' || meth == 'DELETE' || meth == 'CONNECT'){
            methodValid = true;
            return meth
        }
    }
    
    function validateUri(uri) {
        if(regUri.test(obj.uri)){
            uriValid = true;
            return uri;
        }
    }
}