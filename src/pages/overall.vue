<template>
    <div class="filter-box">
        <div class="selected-condations clearfix ks-clear">
            <div class="left-title" style="margin-left:-8px;">已选条件：</div>
            <div class="right-area">
                <p class="selected-item" v-if="selected_range_item!='不限'">
                    {{selected_range_item}}
                    <span class="clear-selected" @click="clearRange">X</span>
                </p>
                <p class="selected-item" v-if="selected_area_item!='不限'" style="width:50%;">
                    {{selected_area_item}}
                    <span class="clear-selected" @click="clearArea">X</span>
                </p>
            </div>
        </div>
        <div class="condations-box">
            <div class="major-range clearfix">
                <div class="left-title">专业层次：</div>
                <div class="right-area"></div>
            </div>
            <div class="content">
                <school-range :school-range-list="$store.state.school_range_obj"></school-range>
                <school-area :school-area-list="$store.state.school_area_obj"></school-area>
            </div>
        </div>
    </div>
</template>
<script>
import school_range from '../components/school_range.vue';
import school_area from '../components/school_area.vue';
import school_college from '../components/school_college.vue';
    export default{
        data:function(){
            return {
              
            };
        },
        computed:{
            "selected_range_item":function(){
                return this.$store.getters.selected_range
            },
            "selected_area_item":function(){
                return this.$store.getters.selected_area
            },
            "selected_college":function(){
                return this.$store.getters.selected_college
            }
        },
        created:function(){
                let vm = this;
                this.$http.get('/src/server/schoolRange.json').then(function(res){
                    let range_data =  res.data.list.map((value,index)=>{
                        return index==0?{value:value,selected:true}:{value:value,selected:false}
                    })
                    vm.$store.commit('update_school_range',range_data)
                });
                this.$http.get('src/server/schoolArea.json').then(function(res){
                    let area_data = res.data.list.map((value,index)=>{
                        return index==0?{value:value,selected:true}:{value:value,selected:false}
                    })
                    vm.$store.commit('update_school_area',area_data)
                });
            },
        methods:{
            clearRange:function(){
                this.$store.commit('clear_range')
            },
            clearArea:function(){
                this.$store.commit('clear_area')
            }
        },
        components:{
            "school-range":school_range,
            "school-area":school_area,
            "scholl-college":school_college
        },
        updated:function(){
            // console.log(this.$store.getters)
        }
    }
</script>
<style scoped>
    .filter-box{
        width: 100%;
        margin-top: 10px;
        clear:both;
    }
    .left-title,.right-area{
        float: left;
        box-sizing: border-box;
    }
    .left-title{
        width: 90px;
        text-align:center;
        padding: 5px 0;
        clear:both;
    }
    .clear-selected{
        color:red;
    }
    .right-area{
        width: 85%;
        float: left;
    }
    .filter-item{
        padding: 5px 8px;
        cursor: pointer;
    }
    .selected-item{
        float: left;
        width: 150px;
        line-height: 35px;
    }
    .selected-condations{
        padding: 10px;
        line-height: 35px;
    }
    .condations-box{
        line-height: 30px;
        width: 100%;
        height: 30px;
        border-bottom: 1px solid #ccc;
    }
    .content{
        width: 100%;
        height:200px;
        border:1px solid #ccc;
    }
    .filter-item.selected{
        background: rgba(0, 160, 92, 1);
        color: #fff;
    }
    .right-area{
        float:left;
        margin-top:5px;
        font-size:15px;
        line-height:30px;
    }
    
</style>

