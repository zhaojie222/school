<template>
    <div class="school-range ks-clear">
        <div class="left-title">高校层次：</div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolRangeList" :key="index" :index="index" :range-object="value" :catagory="'高校层次'"></filter-item>
        </div>
    </div>
</template>
<script>
import filter_item from './filter_item.vue'
export default {
  props: {
    schoolRangeList: {
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
  float: left;
}
.filter-item{
  padding: 0px 10px;
}
</style>