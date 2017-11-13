<template>
    <div class="school-area ks-clear">
        <div class="left-title">高校地区：</div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolAreaList" :catagory="'高校地区'" :index="index" :key="index" :range-object="value"></filter-item>
        </div>    
    </div>
</template>
<script>
import filter_item from './filter_item.vue'
export default {
  props: {
    schoolAreaList: {
      required: true,
      type: Array
    }
  },
  components:{
      "filter-item":filter_item
  }
};
</script>
<style scoped>
 .left-title{
    clear: both;
    float:left;
    margin-left: 4px;
}
.right-area{
    width: 90%;
    float: left;
}
.filter-item{
    padding: 0px 10px;
}
</style>