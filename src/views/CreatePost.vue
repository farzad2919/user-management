<template>
<div class="conteiner">
    <h2>Create post :</h2>
    <form>
        <label for="title">Title</label>
        <input type="text" id="title" v-model.lazy.trim="postTitle">
        <p class="error">{{ titleError }}</p>
        <label for="body">Post body</label>
        <textarea id="body" rows="5" v-model.lazy.trim="postBody" ></textarea>
        <p class="error">{{ bodyError }}</p>
        <button @click.prevent="createPost" :disabled="loading"> 
            <i class='bx bx-loader-alt bx-spin' v-show="loading"></i>
            Create post 
        </button>
    </form>
</div>
</template>

<script>
import { ref } from "vue";
import { users } from "../stores/counter.js";
const postCounter = users();
export default {
 
    setup(){
        const loading = ref(false)
        const postTitle = ref("")
        const postBody = ref("")
        const titleError = ref("")
        const bodyError = ref("")
        async function createPost() {
            if (!postTitle.value == "") {
                titleError.value = ""
                if (!postBody.value == "") {
                    bodyError.value = ""
                    loading.value = true
                    await postCounter.createPost([postTitle , postBody])
                    loading.value = false
                }else{
                    bodyError.value = "post body is required"
                }
            }else{
                titleError.value = "title is required"
            }
        }
        return {
            createPost ,
            postTitle ,
            postBody ,
            titleError ,
            bodyError ,
            loading ,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
@import '../assets/scss/_Mixins.scss';
.conteiner{
    @include flex-direction(column);
    justify-content: center;
    margin: 50px ;
    width: 300px;
    height: 200px;
    gap: 15px;

    form{
        @include flex-direction(column);
        input , textarea{
            border-radius: 3px;
            padding: 5px;
            margin: 2px;
            gap: 10px;
            resize: none;
            border: 1px solid gray;
        }
        button{
            padding: 8px 15px;
            margin-top: 10px;
            border-radius: 4px;
            color: white;
            background-color: black;
            width: fit-content;
        }
    }
}
.error{
    font-size: 12px;
    color: $error;
    margin-bottom: 5px;
}
</style>
