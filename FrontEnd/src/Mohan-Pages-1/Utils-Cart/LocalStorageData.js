const getLocalData=(key)=>{
    try{
        let data=localStorage.getItem(key);
        data=JSON.parse(data);
        return data;

    }catch (er){
        return null;
    }
}

const SaveData=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}

export {getLocalData,SaveData};