const bodyParser = require('body-parser');
class Meta {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
}

class BaseResponse{
    constructor(code = 2000, message ="Data Found"){
        this.meta = new Meta(code, message);
    }

    withDataObject(data){
        this.data = data[0];
        return this;
    }

    withDataList(dataList){
        this.data = {list : dataList};
        return this
    }

    withToken(token){
        this.token = token;
        return this;
    }
}

module.exports = BaseResponse;