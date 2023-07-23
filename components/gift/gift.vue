<template>
    <view
    :class="!isSelect?'box':'box box-select'"
    >
        <view
        style="padding: 15rpx;"
        >
            <image 
            :class="!isSelect?'icon':'icon icon-select'"
             @load="load" :src="$kt.file.visit(item.fileIdOfShow)" mode="widthFix">
            </image>
            
        </view>

        <view>
            <view style="font-size: 26rpx;font-weight: bold;">
            {{ item.name }}
            <text v-if="isShowNumber">
            {{ " x" }} {{ number }}
            </text>
            </view>
        </view>

        <view style="height: 5rpx;"></view>

        <view
        v-if="type=='oMoney'"
        >
            <text style="font-size: 24rpx;vertical-align: top;color:#666">
            {{ item.costOfOMoney*number }}
            </text>
            <o-money size="35rpx"></o-money>
        </view>
        <view
        v-if="type=='charmValue'">
        <text style="font-size: 24rpx;vertical-align: top;color:#666">
           魅力值 {{ "+" }} {{ item.charmValue*number }}
        </text>
        </view>
        
        <view
        v-if="type=='contributionValue'">
        <text style="font-size: 24rpx;vertical-align: top;color:#666">
           贡献值 {{ "+" }} {{ item.charmValue*number }}
        </text>
        </view>

        
        

    </view>
</template>

<script>
export default {
    props:{
        isSelect:{
            type:Boolean,
            default:false
        },
        item:{
            type:Object,
            default:()=>{}
        },
        type:{
            type:String,
            default:'oMoney'
        },
        number:{
            type:Number,
            default:1
        },
        /**
         * 是否显示数量
         */
        isShowNumber:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            text: "",
        };
    },
    methods: {
        load() {
            console.log('加载完成');
        },
    },
}

</script>


<style lang="scss" scoped>
.box {
    text-align: center;
    background-color: #fff;
    display: inline-block;
    padding: 10rpx;
}

.icon {
    width: 120rpx;
    height: 120rpx;
}

.box-select {
    // 动画效果，忽大忽小
    animation: box-select 1.5s infinite;
}

.icon-select {
    // 动画效果，忽大忽小
    animation: icon-select 1.5s infinite;
}

@keyframes box-select {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}


@keyframes icon-select {
    0% {
        transform: scale(1.3);
    }

    50% {
        transform: scale(.9);
    }

    100% {
        transform: scale(1.3);
    }
}

</style>