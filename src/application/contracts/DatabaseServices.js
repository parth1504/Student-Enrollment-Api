module.exports= class DatabaseServices{

    constructor(){
        this.studentRepository= null;

    }
    initDatabase(){
        return Promise.reject(new Error('not implemented'));
    }
}