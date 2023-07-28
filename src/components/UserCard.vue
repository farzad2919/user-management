<template>
<div>
    <div class="card" >
        <!-- <router-link :to="{path:`/showUser:${user.id}`}" @click="sendData(user)" > {{ user.name }} </router-link> -->
        <p  @click="sendData(user)" > {{ user.name }} </p>
        <ul>
            <li>Username : <span>{{ user.username }}</span></li>
            <li>Email : <span>{{ user.email }}</span></li>
            <li>Phone : <span>{{ user.phone }}</span></li>
        </ul>
</div>
</div>
</template>

<script>
import { useRouter } from 'vue-router';
import { users } from "../stores/counter.js";
const usersCounter = users();


export default {
    name: "UserCard" ,
    props:[
        "user"
    ],
    setup() {
        const router = useRouter();
        async function sendData(user){
            await usersCounter.fetchOneUser(user)
            router.push(`/showUser:${user.id}`)
        }
        return{
            sendData,
            router,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
@import '../assets/scss/_Mixins.scss';
.card{
    width: 320px;
    height: 137px;
    border-radius: 5px;
    border: 2px solid rgb(172, 169, 169);
    @include flex-direction(column);
    p{
        background-color: lightgray;
        padding: 5px 12px;
        font-size: 14px;
        border-bottom: 0.5px solid gray;
        color: black;
        &:hover{
            color:$darkBlue;
            cursor: pointer;
        }
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
</style>
