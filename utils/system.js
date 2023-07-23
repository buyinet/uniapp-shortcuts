var result=new Object();


result.setGMTTime=function(data){
    uni.setStorageSync('gmtTime',data);
    setTimeout(()=>{
        uni.$emit("changeGmtTime",data);
    },10);
}

result.getGMTTime=function(){
    return uni.getStorageSync('gmtTime');
}


result.setBalanceMap=function(data){
    uni.setStorageSync('balanceSelfMap',data);
    setTimeout(()=>{
        uni.$emit("changeBalanceSelfMap",data);
    }
    ,10);
}

result.getBalanceSelfMap=function(){
    return uni.getStorageSync('balanceSelfMap');
}

export default result;