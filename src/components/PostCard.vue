<template>
<div>
    <div class="card" >
        <p  @click="sendData(post)" > {{ post.title }} </p>
        <ul>
            <li>{{ post.body }}</li>
        </ul>
</div>
</div>
</template>

<script>
import { useRouter } from 'vue-router';
import { users } from "../stores/counter.js";
const postCounter = users();


export default {
    name: "UserCard" ,
    props:[
        "post"
    ],
    setup() {
        const router = useRouter();
        async function sendData(post){
            await postCounter.fetchOnePost(post)
            router.push(`/showPost:${post.id}`)
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
    width: 400px;
    height: 160px;
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
