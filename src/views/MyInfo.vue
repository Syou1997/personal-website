<script>
import { RouterLink, RouterView } from 'vue-router'
//Pinia 方法
import { mapState, mapActions } from 'pinia';
//自己的資料庫
import indexStore from '../store/indexStore';
export default {
     data() {
          return {

          }
     },
     computed: {
          //兩個參數:1.資料庫 2.要取用的(state/getter)
          ...mapState(indexStore, ["nowLanguage", "chinese", "japanese"])

     },
     //方法
     methods: {



     },

}

</script>

<template>
     <div class="container">
          <!-- <h1>{{ nowLanguage.myH1 }}</h1> -->
          <!-- resume 履歷-->
          <section class="resume">
               <table class="table">
                    <tr>
                         <td class="title">{{ nowLanguage.myInfo }}</td>
                         <td>{{ nowLanguage.myInfo2 }}</td>


                    </tr>
                    <tr>
                         <td class="title">{{ nowLanguage.education }}</td>
                         <td>{{ nowLanguage.education2 }}</td>
                    </tr>
                    <tr>
                         <td class="title">{{ nowLanguage.experience }}</td>
                         <td>
                              <ul>
                                   <li>{{ nowLanguage.experience2 }}</li>
                                   <li>{{ nowLanguage.experience3 }}</li>
                                   <li>{{ nowLanguage.experience4 }}</li>
                                   <li>{{ nowLanguage.experience5 }}</li>
                              </ul>
                         </td>
                    </tr>
                    <tr>
                         <td class="title">{{ nowLanguage.language }}</td>
                         <td>
                              <ul>
                                   <li>{{ nowLanguage.language2 }}</li>
                                   <li>{{ nowLanguage.language3 }}</li>
                              </ul>
                         </td>
                    </tr>
                    <tr>
                         <td class="title">{{ nowLanguage.certificate }}</td>
                         <td>
                              <ul>
                                   <li>{{ nowLanguage.certificate2 }}</li>
                                   <li>{{ nowLanguage.certificate3 }}</li>
                              </ul>
                         </td>
                    </tr>
                    <tr>
                         <td class="title">{{ nowLanguage.skill }}</td>
                         <td>
                              <img src="./../../image/ICONS/icons8-html-5.svg" alt="html-5">
                              <img src="./../../image/ICONS/icons8-css3.svg" alt="css3">
                              <img src="./../../image/ICONS/icons8-javascript.svg" alt="javascript">
                              <img src="./../../image/ICONS/icons8-vue.ico" alt="vue">
                              <img src="./../../image/ICONS/icons8-java.svg" alt="java">
                              <img src="./../../image/ICONS/icons8-spring-boot.svg" alt="springBoot">
                              <img src="./../../image/ICONS/icons8-mysql.svg" alt="MySQL">
                         <ul>
                              <li>{{ nowLanguage.skill2 }}</li>
                              <li>{{ nowLanguage.skill3 }}</li>
                         </ul>
                         </td>

                    </tr>
                    <tr>
                         <td class="title">{{ nowLanguage.interest }}</td>
                         <td>
                              <ul>
                                   <li>{{ nowLanguage.interest2 }}</li>
                                   <li>{{ nowLanguage.interest3 }}</li>
                                   <li>{{ nowLanguage.interest4 }}</li>
                                   <li>{{ nowLanguage.interest5 }}</li>
                              </ul>
                         </td>
                    </tr>
               </table>



               <section class="picture">
                    <img src="./../../image/個人照片2.jpg" alt="個人照片">
               </section>
          </section>
     </div>
</template>

<style lang="scss" scoped>
h1 {
     margin-left: 2vw;
     margin-top: 2vw;
}

//resume 履歷
.container{
     section.resume {
     // height: 100vh;
     display: flex;
     flex-wrap: wrap;
     padding: 2rem;

     table {
          flex: 5 0 500px;
          padding: 2rem;
          border-collapse: collapse;

          tr {

               td {
                    padding: 1.5rem;
                    border: 1px solid black;
                    font-family: "myFont1", sans-serif;

                    ul {
                         li {
                              font-family: "myFont1", sans-serif;
                         }
                    }




               }

               .title {
                    text-align: center;
                    font-weight: bold;
                    background-color: rgb(102, 249, 180);
                    table-layout: fixed;
                    width: 10vw;
                    font-size: 1.5rem;
                    font-family: "myFont1", sans-serif;

               }
          }
     }

     section.picture {
          flex: 1 1 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          img {
               border-radius: 5px;
               width: 60%;
          }

     }
}
}

</style>