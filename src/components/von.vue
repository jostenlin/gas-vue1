<template>
  <div>
    <p>問題：橋仔頭糖廠製糖的起始年份和結束年份各自為何？</p>
    <p v-if="showAnswer">答案：橋仔頭糖廠自1901年開始製糖，至1999年結束。</p>
    <button @click="showAnswer=!showAnswer">{{showAnswer?"隱藏":"顯示"}}答案</button>
  </div>
</template>

<script>
export default {
    name: 'von',
    data() {
        return {
            showAnswer:true
        }        
    }

}
</script>

<style>

</style>