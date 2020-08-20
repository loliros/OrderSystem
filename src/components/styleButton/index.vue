<template>
    <!-- <el-button type="primary" plain>{{title}}</el-button> -->
    <button class="button">
        <div class="bg">
            <span>{{title}}</span>
        </div>
    </button>
</template>

<script>
export default {
    name : 'button',
    props : {
                title : {
                    type : String,
                    default : '主要按钮',
                }
            },
    data(){
        return{
            
        }
    }
}
</script>

<style scope>
.button{
    width: 100%;
    height: 100%;
    border: transparent;
    outline: none;
    border-radius: 20px;
    position: relative;
    background: #2ed573;
    cursor: pointer;
    overflow: hidden;
}
.button .bg{
    height: 95%;
    width: 100%;
    background: #ecf0f1;
    margin: 5% 0 0 0;
    border-radius: 30px 30px 20px 20px;
    line-height: 65px;
    cursor: pointer;
    z-index: 1;
}

.button:hover{
    background: #7bed9f;
    transition: all 0.001s ease 0.3s;
}
.button::after{
    content: '';
    width: 100%;
    height: 100%;
    border: 0px solid transparent;
    border-radius: 30px 30px 20px 20px;
    transition: all 0.25s ease;
}
.button:hover::after{
    border-width: 200px;
    border-left-color: #7bed9f;
    color: white;
    transition: border-width 0.3s ease, border-left-color 0.3s ease, color 0.5s ease;
}

.button .bg > span {
    z-index: 1000;
    height: 100%;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
}
</style>