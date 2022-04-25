<template>

  <v-container class="mt-10 pt-10">
  <!-- 꾸빼 설명 -->
  <v-row class="ma-0 pa-0" id="mainArea" align="center" justify="center">  
    <v-col cols="12" lg="6" class="text-right pr-10">
      <img src="@/assets/images/metakongz.png" alt="kongz" />
    </v-col>
    <v-col cols="12" lg="6" class="pl-10">
      <div class="content">
      정신과의사 <strong>"꾸빼"</strong>씨는<br>
      힘들어하는 콩즈들을 상담하던 중 문득 "진짜 행복이란 무엇일까 ??"<br>
      라는 물음을 갖게되었고, 진짜 행복을 찾아 여행을 떠나게 된다.<br>
      <br>
      여행 도중 <strong>버니랜드</strong>를 발견하게 된다.<br>
      버니랜드 안에 메타버니들은 세상 밖으로 나가고 싶어하였고,<br>
      메타버니와 브포로스트 밖으로 나가 새로운 경험을 함께 시작한다.<br>
      </div>
    </v-col>
  </v-row>

  <!-- 메타버니 설명 -->
  <v-row class="ma-0 pa-0 mt-10" align="center" justify="center">
    <v-col cols="12" lg="6" class="text-right pr-10">
      <div class="content" style="margin-left: auto">
      안정화된 시스템으로 정해진 규칙이 강요되는 <strong>버니랜드</strong>에서 살고 있는 메타 버니<br>
      아무것도 할 수 없는 버니랜드가 답답하고 무료한 <strong>메타버니</strong> 하지만,<br>
      비포로스트를 벗어나는것이 두려워 매번 포기하게 된다.<br>
      <br>
      하루는 버니랜드로 여행한 꾸빼씨를 통해 버니랜드 밖<br>
      세상의 이야기를 듣게되고 용기를 내어본다.<br>
      <br>
      마침내 메타버니는 꾸빼씨와 함께 비포로스트를 건너 행복찾기 여행을 시작한다.<br>
      </div>
    </v-col>
    <v-col cols="12" lg="6" class="pl-10">
      <img src="@/assets/images/mainBunny.png" alt="kongz" />
    </v-col>
  </v-row>

</v-container>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  border-radius: 20px;
  width: 300px;
}
.content {
  background-color: rgba(0,0,0,0.1);
  border-radius: 20px;
  width: 600px;
  padding: 20px;
  font-family:cursive;
  line-height: 20px;
}
</style>
