
var result=new Object();

result.get=function(){
    return uni.getStorageSync('selfInfo');
}

result.set=function(data){
    uni.setStorageSync('selfInfo',data);
    setTimeout(()=>{
        uni.$emit("setSelfInfo",data);
    },10);
}

export default result;