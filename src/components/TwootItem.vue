<template>
<div class="twoot-item"> <!--定义右边评论区的id-->
  <div class="user-profile_twoot">
    <div class="twoot-item_user">
      @{{username}}                   <!--加入评论者名字-->
    </div>
    <div class="twoot-item_content">   <!--评论内容-->
      {{twoot.content}}
    </div>
  </div>
  </div>
</template>

<script>
export default {
name: "TwootItem",
  props:{
  username: {                    /*定义评论者名字的属性为String,并且永远保持为真*/
    type: String,
    required: true
  },
    twoot: {                     /*定义评论者评论内容属性为Object,并且永远保持为真*/
      type: Object,
      required: true
    }
  },
  methods:{                     /*定义点击评论时，console会出现id编码*/
  favouriteTwoot(id){
    this.$emit('favourite',id)
   }
 }
};
</script>

<style lang="scss" scoped>
.twoot-item { /*修饰右边评论区的内容*/
  padding: 20px;
  background-color: white;
  border-redius: 5px;
  border: 1px solid #DFE3E8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }

    .twoot-item_user {
      font-weight: bold;
    }
}

</style>