<template>
    <div class="conteiner">
        <Header class="conteiner__header"></Header>
        <div class="conteiner__card-conteiner">
            <div class="conteiner__card">
                <div class="card" >
                    <p> {{ user.name }} </p>
                    <ul>
                        <li>Username : <span> {{ user.username }}</span></li>
                        <li>Email : <span> {{ user.email }} </span></li>
                        <li>Phone : <span> {{ user.phone }} </span></li>
                        <li>website : <span> {{ user.website }} </span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import Header from "../components/Header.vue";
import { users } from "../stores/counter.js";
const usersCounter = users();

export default {
    name : 'ShowUser' ,
    components : {
        Header ,
    },
    setup(){
        const user = computed(()=>usersCounter.allUsersGettersCounter)
        return{
            user ,
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
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 200px;
    }
    &__card{
        width: 350px;
        height: 175px;
        border-radius: 5px;
        border: 2px solid rgb(172, 169, 169);
        @include flex-direction(column);
        p{
            background-color: lightgray;
            padding: 5px 12px;
            font-size: 14px;
            border-bottom: 0.5px solid gray;
            color: black;
        }
        ul li {
            padding: 5px 10px;
            border-bottom: 0.5px solid gray;
            font-size: 14px;
        }
        :last-child{
            border: none
        }
    }
}
</style>
