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
          <h1>{{ nowLanguage.magicH1 }}</h1>
          <!-- 主影片區域 -->
          <div class="main_vedio_area">
               <iframe class="vedio" src="https://www.youtube.com/embed/6DWqVwbCSzA?autoplay=1" frameborder="0"
                    allowfullscreen></iframe>
          </div>

          <!-- 區域1 -->
          <div class="area1">
               <div class="info_area">
                    <div class="img_area">
                         <img src="./../../image/魔術_介紹.JPG" alt="表演照片">
                    </div>
                    <div class="info">
                         <div class="text">
                              <h2>{{ nowLanguage.magicH2_1 }}</h2>
                              <h3>{{ nowLanguage.magicH3_1 }}</h3>

                         </div>
                    </div>



               </div>



          </div>

          <!-- 區域2 -->
          <div class="area2">
               <div class="info_area">
                    <div class="info">
                         <div class="text">
                              <h2>{{ nowLanguage.magicH2_2 }}</h2>
                              <h3>{{ nowLanguage.magicH3_2 }}
                              </h3>

                         </div>
                    </div>
                    <div class="img_area">
                         <div class="img1">
                              <img src="./../../image/Mantra.jpg" alt="表演照片">

                         </div>
                         <div class="img2">

                         </div>
                         <div class="img3">

                         </div>

                    </div>

               </div>



          </div>
          <!-- 區域3 -->
          <h4>{{nowLanguage.magicH4_1}} </h4>
          <div class="area3">

               <div class="pic_area">
                    <div class="img_area">
                         <img src="./../../image/魔術_行銷系.jpg" alt="聖誕節晚會">
                    </div>


               </div>
               <div class="pic_area">

                    <div class="img_area">
                         <img src="./../../image/魔術_園遊會.JPEG" alt="聖誕節晚會">
                    </div>
               </div>

               <div class="pic_area">

                    <div class="img_area">
                         <img src="./../../image/魔術_可樂.JPG" alt="聖誕節晚會">
                    </div>
               </div>




          </div>
          <h4>{{nowLanguage.magicH4_2}} </h4>
          <!-- 其它影片 -->
          <div class="other_vedio_area">
               <iframe class="vedio" src="https://www.youtube.com/embed/7O-ekYafQcY?autoplay=1" frameborder="0"
                    allowfullscreen></iframe>

               <iframe class="vedio" src="https://www.youtube.com/embed/8gyXsRfCkFQ?autoplay=1" frameborder="0"
                    allowfullscreen></iframe>

               <iframe class="vedio" src="https://www.youtube.com/embed/kDbrkZdu_yQ?autoplay=1" frameborder="0"
                    allowfullscreen></iframe>

               <iframe class="vedio" src="https://www.youtube.com/embed/5-6GbbPdSCM?autoplay=1" frameborder="0"
                    allowfullscreen></iframe>


          </div>
          <br>
     </div>
</template>

<style lang="scss" scoped>
.container {
     background-color: gainsboro;

     //主影片區
     .main_vedio_area {
          width: 100vw;
          height: 60vh;
          display: flex;
          justify-content: center;
          margin-bottom: 5vw;

          .vedio {
               width: 50vw;
          }
     }


     //名言
     h1 {
          text-align: center;
          font-weight: bolder;
          margin: 1vw 0;
     }

     //區域1
     .area1 {
          // border: 2px solid red;
          width: 100vw;

          .info_area {
               width: 50%;
               display: flex;
               // flex-wrap: wrap;
               margin-left: 5vw;

               .info {
                    width: 50%;
                    padding: 1rem;
                    // border: 2px solid blue;

                    .text {
                         h2 {
                              font-family: "M PLUS 1", sans-serif;
                              font-weight: bold;
                         }

                         h3 {
                              font-family: "M PLUS 1", sans-serif;
                              white-space:pre-wrap;
                         }
                    }


               }

               .img_area {
                    width: 50%;

                    img {
                         width: 100%;
                         height: 100%;
                         object-fit: contain;
                    }
               }
          }


     }

     //區域2
     .area2 {
          width: 100vw;
          display: flex;
          justify-content: end;

          .info_area {
               width: 50%;
               display: flex;
               // flex-wrap: wrap;
               margin-right: 5vw;

               .info {
                    width: 50%;
                    padding: 1rem;

                    .text {
                         h2 {
                              font-family: "M PLUS 1", sans-serif;
                              font-weight: bold;
                         }

                         h3 {
                              font-family: "M PLUS 1", sans-serif;
                              white-space:pre-wrap;
                         }
                    }


               }

               .img_area {
                    margin-top: 2rem;
                    width: 50%;

                    img {
                         width: 100%;
                         height: 100%;
                         object-fit: contain;
                    }
               }
          }


     }


     //區域3
     h4 {
          text-align: center;
          margin-top: 2vw;
          font-size: 2rem;
          font-family: "M PLUS 1", sans-serif;
     }

     .area3 {
          // border: 2px solid red;
          margin-top: 2vw;
          width: 100vw;
          max-height: 80vh;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;



          .pic_area {
               // border: 2px solid blue;
               width: 30%;
               height: 90%;



               .img_area {

                    width: 100%;
                    height: 90%;
                    transition: all 0.2s ease;
                    cursor: pointer;
                    &:hover{
                         // border: 2px solid red;
                         transform: scale(1.1);
                    }
                    img {
                         width: 100%;
                         height: 100%;
                         object-fit: contain;

                    }
               }
          }



     }

     .other_vedio_area {
          margin-top: 2vw;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;

          .vedio {

          }

     }




}
</style>