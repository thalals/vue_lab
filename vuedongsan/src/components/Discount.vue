<template>
  <div class="discount">
    <h4>지금 결제하면 {{ salePercent }}% 할인</h4>
  </div>
</template>

<script>
export default {
  // vue 파일의 name
  name: 'Discount',

  data() {
    return {
      salePercent: 20,
    }
  },
  //라이브사이클 hook (mount 후에)
  mounted() {
    setInterval(() => {
      if (this.salePercent > 0) {
        this.salePercent -= 1
      }
    }, 2000);
  },
}

</script>

<style>
.discount {
  background: lightgrey;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>