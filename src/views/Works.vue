<script>
import { RouterLink, RouterView } from 'vue-router'
//Pinia 方法
import { mapState, mapActions } from 'pinia';
//自己的資料庫
import indexStore from '../store/indexStore';

export default {
     data() {
          return {
               isLink: "",
               isImgLink: "",

          }
     },
     computed: {
          //兩個參數:1.資料庫 2.要取用的(state/getter)
          ...mapState(indexStore, ["nowLanguage", "chinese", "japanese"])

     },
     //方法
     methods: {
          // 傳入index參數
          inIsLink(index) {
               // 使用index獲取相應的項目鏈接和圖片鏈接
               this.isLink = this.nowLanguage.worksList[index].projectLink;
               this.isImgLink = this.nowLanguage.worksList[index].projectImgLink;
          },

          // 在模板中呼叫這兩個新方法，傳入對應的index
          getProjectLink(index) {
               this.inIsLink(index);
               return this.isLink;
          },

          getProjectImgLink(index) {
               this.inIsLink(index);
               return this.isImgLink;
          },



     },
     mounted() {

     },

}

</script>

<template>
     <button class="back_to_top" type="button"><a href="#header">Top</a></button>
     <div id="header" class="container">
          <!-- <h1>{{ nowLanguage.worksH1 }}</h1> -->
     </div>
     <table>
          <thead>
               <tr>
                    <td class="titie">作品名稱</td>
                    <td>內容介紹</td>
               </tr>
          </thead>
          <tbody>
               <tr v-for="(item, index) in nowLanguage.worksList" :key="index">
                    <td class="titie_sub"><a target="_blank" :href="getProjectLink(index)">{{ item.projectName }}</a></td>
                    <td>{{ item.projectInfo }}
                         <div class="img_frame">
                              <img :src="getProjectImgLink(index)" alt="project picture">
                         </div>
                    </td>
               </tr>

          </tbody>

     </table>
     <br>
</template>

<style lang="scss" scoped>
.back_to_top {
     position: fixed;
     right: 0;
     bottom: 0;
     width: 5vw;
     display: block;
     background-image: linear-gradient(to top, rgb(250, 250, 250), rgb(146, 239, 196),rgb(110, 243, 181),rgb(45, 243, 150));
     border-radius: 1px;
     border: 1px solid gray;
     cursor: pointer;
     transition: 0.2s;
     

     &:hover {
          scale: 1.05;
     }

     &:active {
          scale: 0.95;
     }
     a{
          text-decoration: none;
          color: white;
          font-size: 1vw;
     }

}

.container {


     h1 {
          margin-left: 2vw;
          margin-top: 2vw;
     }


     table {
          margin: 0 auto;
          margin-top: 3vw;
          border-collapse: collapse;
          width: 70vw;

          // background-color: rgba(97, 255, 142, 0.995);

          thead {
               tr {
                    td {
                         text-align: center;
                         border: 2px solid black;
                         background-color: rgb(102, 249, 180);
                         font-family: "M PLUS 1", sans-serif;

                    }

                    .titie {
                         width: 20%;

                    }
               }
          }

          tbody {
               tr {
                    td {
                         padding: 1rem;
                         border: 2px solid black;
                         white-space:pre-wrap;

                         .img_frame {
                              display: flex;
                              margin: 0 auto;
                              margin-top: 2vw;
                              width: 40%;

                              img {
                                   width: 100%;
                                   height: 100%;
                                   // object-fit: contain;
                              }
                         }

                    }

                    .titie_sub {
                         text-align: center;

                         a {
                              text-decoration: none;
                              font-size: larger;
                              font-weight: bolder;
                              color: black;
                              cursor: pointer;
                              transition: all 0.2s ease;

                              &:hover {
                                   color: rgba(34, 0, 255, 0.784)
                              }

                              &:active {
                                   scale: 0.95s;
                              }
                         }
                    }

               }
          }

     }
}
</style>