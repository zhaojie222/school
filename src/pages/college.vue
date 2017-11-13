<template>
    <div class="content">
        <div class="vague">
            <input type="text" placeholder="请输入要搜索的专业名称" class="search">
            <button class="btn">检索</button>
        </div>
        <div class="con">
            <div class="title">选考科目分析</div>
            <hr>
            <h4 class="Tagging">科目比例：要求所选选考的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</h4>
            <ul class="lists">
                <li>选考科目</li>
                <li>专业(类)数</li>
                <li>科目比例</li>
                <li>选考科目</li>
                <li>专业(类)数</li>
                <li>科目比例</li>
                <li>选考科目</li>
                <li>专业(类)数</li>
                <li>科目比例</li>
            </ul>
        </div>
    </div>
</template>
<script>
    
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }
    .vague{
        width: 400px;
        height: 32px;
        border: 2px solid rgba(0, 160, 92, 1);
        margin-top: 10px;
    }
    .search{
        width: 350px;
        height: 28px;
        border: 0px;
        outline: 0px;
    }
    .btn{
        width: 45px;
        height: 32px;
        color: #fff;
        background: rgba(0, 160, 92, 1);
        border: 0px;
        outline: 0px;
    }
    .title{
        line-height: 35px;
        font-size: 13px;
    }
    .Tagging{
        color: #f00;
        font-size:13px;
        line-height:30px;
    }
    .lists{
        background: rgba(0, 160, 92, 1);
        color: #fff;
        height: 40px;
        display: flex;
        justify-content:space-around;
        align-items:center;
    }

</style>

