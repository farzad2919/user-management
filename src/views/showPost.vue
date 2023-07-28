<template>
    <div class="conteiner">
        <Header class="conteiner__header"></Header>
        <div class="conteiner__card-conteiner">
            <div class="conteiner__card">
                <div class="card" >
                    <p> {{ post.title }} </p>
                    <ul>
                        <li> {{ post.body }} </li>
                    </ul>
                    <div>
                        <button @click="deletePost(post)"> delete </button>
                        <button @click="editPost(post)"> edit </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import Header from "../components/Header.vue";
import { users } from "../stores/counter.js";
const postCounter = users();

export default {
    name : 'ShowPost' ,
    components : {
        Header ,
    },
    setup(){
        const post = computed(()=>postCounter.allPostsGettersCounter)
        async function deletePost(post){
            await postCounter.deletePost(post)
        }
        async function editPost(post){
            await postCounter.editPost(post)
        }
        return{
            deletePost ,
            editPost ,
            post ,
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
        width: 420px;
        height: 200px;
        border-radius: 5px;
        border: 2px solid rgb(172, 169, 169);
        @include flex-direction(column);
        p{
            background-color: $darkCream;
            padding: 5px 12px;
            font-size: 14px;
            border-bottom: 0.5px solid lightgray;
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
        div:not([class]){
            gap: 5px;
            margin-top: 5px;
            :first-child{
                background-color: darkred;
            }
            :nth-child(2){
                background-color: darkslategray;
            }
            button{
                padding: 5px 10px;
                margin: 5px;
                border-radius: 5px;
                &:hover{
                    cursor: pointer;
                }
            }

        }
    }
}
</style>
