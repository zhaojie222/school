<template>
    <div class="box router">
        <h4 class="remind">*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换！</h4>
        <ul class="tab">
            <router-link class="filter-item" :to="{name:'overall'}" :tag="'li'">综合检索</router-link>
            <router-link class="filter-item" :to="{name:'college'}" :tag="'li'">高校检索</router-link>
            <router-link class="filter-item" :to="{name:'major'}" :tag="'li'">专业检索</router-link>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
import VueRouter from 'vue-router'
export default {
    data:function(){
        return{

        }
    }
};

</script>
<style>
    *{
        margin: 0 ;
        padding: 0 ;
        list-style: none;
        text-decoration:none;
        font-size:16px;
    }
    .box{
        min-width: 960px;
        max-width:94%;
        margin:0 auto;
    }
    .router{
        width: 90%;
        margin:0 5%;
    }
    .tab{
        font-size: 0;
    }
    .remind{
        color: #f00;
        font-size:13px;
        line-height:30px;
    }
    .filter-item{
        display: inline-block;
        color: #333333;
        text-align: center;
        font-size: 15px;
        padding:10px;
        cursor: pointer;
    }
    .router-link-active{
        background: #06A060;
        color: #fff;
    } 
    .tab-item:hover{
        background: #06A060;
        color: #fff;
    }
    .filter-item.selected{
        background: #06A060;
        color: #fff;
    }
    .filter-item:hover{
        background: #06A060;
        color: #fff;
    } 
</style>

