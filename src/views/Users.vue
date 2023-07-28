<template>
<div>
    <i class='bx bx-loader-alt bx-spin loading' v-show="loading"></i>
    <div class="conteiner">
        <Header class="conteiner__header"></Header>
        <div class="conteiner__card-conteiner">
            <div class="conteiner__card" v-for="user of allUsers" :key="user.id">
                <UserCard :user = "user" ></UserCard>
            </div>
        </div>
</div>
</div>
</template>

<script>
import { computed, ref } from "vue";
import Header from "../components/Header.vue";
import UserCard from "../components/UserCard.vue"
import { users } from "../stores/counter.js";
const usersCounter = users();

export default {
    name : 'Home' ,
    components : {
        Header ,
        UserCard ,
    },
    setup(){
        const loading = ref(false)
        const allUsers = computed(()=>usersCounter.allUsersGettersCounter)
        async function getAllUsers() {
            loading.value = true
            await usersCounter.fetchAllUsers()
            loading.value = false
        }
        getAllUsers()

        return{
            getAllUsers ,
            allUsers ,
            loading,
            
        }
    }
}
</script>
    
<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
@import '../assets/scss/_Mixins.scss';
.conteiner{
    // position: absolute;
    // top: 80px;
    background-color:$lightCream;
    width: 100%;
    height: fit-content;

    &__header{
    position: fixed;
    top: 0px;
    }
    &__card-conteiner{
        @include flex-direction();
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 100px;
    }
    &__card{
        @include flex-direction();
        padding: 15px;
    }
}
.loading{
    font-size: 60px;
    align-self: center;
    position: absolute;
    top: 40vh;
    left: 50vw;
}
</style>
