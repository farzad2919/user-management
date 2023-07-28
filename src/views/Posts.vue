<template>
    <div>
        <router-link to="/createPost" class="router"> create Post </router-link>
        <i class='bx bx-loader-alt bx-spin loading' v-show="loading"></i>
        <div class="conteiner">
            <Header class="conteiner__header"></Header>
            <div class="conteiner__card-conteiner">
                <div class="conteiner__card" v-for="post of allPosts" :key="post.id">
                    <PostCard :post = "post" ></PostCard>
                </div>
            </div>
    </div>
    </div>
    </template>
    
    <script>
    import { RouterLink } from "vue-router";
    import { computed, ref } from "vue";
    import Header from "../components/Header.vue";
    import PostCard from "../components/PostCard.vue"
    import { users } from "../stores/counter.js";
    const PostsCounter = users();
    
    export default {
        name : 'Home' ,
        components : {
            Header ,
            PostCard ,
        },
        setup(){
            const loading = ref(false)
            const allPosts = computed(()=>PostsCounter.allPostsGettersCounter)
            async function getAllPosts() {
                loading.value = true
                await PostsCounter.fetchAllPosts()
                loading.value = false
            }
            getAllPosts()
    
            return{
                getAllPosts ,
                allPosts ,
                loading,
                
            }
        }
    }
    </script>
        
    <style lang="scss" scoped>
    @import '../assets/scss/_vars.scss';
    @import '../assets/scss/_Mixins.scss';
    .router{
        background-color: $darkBlue;
        position: absolute;
        margin: 80px 15px 0px;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
    }
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
            gap: 10px;
            margin-top: 120px;
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
    