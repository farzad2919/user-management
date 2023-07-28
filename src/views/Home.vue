<template>
<div class="conteiner">
    <Header class="header"></Header>
    <h2>Home Page</h2>
</div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
    name : 'Home' ,
    components : {
        Header ,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
.conteiner{
//   position: absolute;
//   top: 80px;
  background-color:$lightCream;
  width: 100%;
  min-height: 100vh;

  &__header{
    position: fixed;
    top: 0px;
  }
}

</style>
