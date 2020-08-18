


class ApiResponse {

    constructor({data = {}, status = 1, error = [], message = ''}){
        this._data = data;
        this._status =  status;
        this._error =  error;
        this._message;
    }

    toJSON() {
        return {
            data:  this._data,
            status: this._status,
            error: this._error,
            message: this._message
        }
    }

}

module.exports = ApiResponse; 
