<script>
import { RouterLink, RouterView } from 'vue-router'
//Pinia 方法
import { mapState, mapActions } from 'pinia';
//figma icon
import { Icon } from '@iconify/vue';
//自己的資料庫
import indexStore from '../store/indexStore';
export default {
     data() {
          return {

          }
     },
     components: {
          Icon,
     },
     computed: {
          //兩個參數:1.資料庫 2.要取用的(state/getter)
          ...mapState(indexStore, ["nowLanguage", "chinese", "japanese", "homeViewH1", "homeViewH2"])

     },
     //方法
     methods: {



     },

}

</script>

<template>
     <!-- Pure CSS Animated Bubbles -->
     <div id="background-wrap">
          <div class="bubble x1"></div>
          <div class="bubble x2"></div>
          <div class="bubble x3"></div>
          <div class="bubble x4"></div>
          <div class="bubble x5"></div>
          <div class="bubble x6"></div>
          <div class="bubble x7"></div>
          <div class="bubble x8"></div>
          <div class="bubble x9"></div>
          <div class="bubble x10"></div>
     </div>
     <!-- main-area -->
     <main>
          <section class="main-area">
               <div class="info">
                    <h1>{{ nowLanguage.homeViewH1 }}
                         <!-- 幸運草icon -->
                         <Icon class=" clover_icon" icon="fluent-emoji:four-leaf-clover" />
                    </h1>
                    <h2>{{ nowLanguage.homeViewH2 }}</h2>
                    <div class="link_area">
                         <RouterLink class="link" to="/MyInfo">了解更多</RouterLink>
                    </div>

               </div>
               <div class="img-area">
                    <img src="./../../image/Group 1.png" alt="個人照片">
               </div>
               <div class="text_area">
                    <p>{{ nowLanguage.homeViewP2 }}</p>
                    <p>{{ nowLanguage.homeViewP1 }}</p>
                    
               </div>

          </section>

     </main>
</template>

<style lang="scss" scoped>
//main
main {

     // main-area
     section.main-area {
          min-height: 70vh;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;

          div.info {
               margin-left: 10vw;
               position: relative;
               flex-basis: 450px;
               padding: 1rem;
               z-index: 1;


               h1 {
                    position: relative;
                    font-size: 3.5rem;


                    .clover_icon {
                         position: absolute;
                         top: -10vw;
                         left: -12vw;
                         width: 20vw;
                         height: 50vh;
                         opacity: 0.7;
                         z-index: -1;

                    }
               }

               h2 {
                    font-size: 1rem;
               }

               .link_area {
                    display: flex;
                    justify-content: center;

                    .link {
                         color: white;
                         background-color: rgb(54, 212, 138);
                         padding: 0.25rem 0.5rem;
                         font-size: 1.5rem;
                         border-radius: 20px;
                         text-decoration: none;
                         display: inline-block;
                         margin-top: 2rem;
                         transition: all 0.2s ease;

                         &:hover {
                              transform: scale(1.2);
                         }
                    }
               }



          }

          div.img-area {
               flex-basis: 450px;

               img {
                    width: 100%;

               }
          }

          .text_area {
               display: flex;
               flex-direction: row-reverse;
               justify-content: center;
               align-items: flex-start;
               margin-top: 2.8125vw;


               p {
                    background-color: rgb(54, 212, 138);
                    background-color: (54, 212, 138);
                    font-size: 2vw;
                    padding: 0.625vw 0.1875vw;
                    -ms-writing-mode: tb-rl;
                    writing-mode: vertical-rl;
                    text-orientation: upright;
                    border-radius: 0.25vw;
                    border-radius: 0.25vw;
                    color: white;
                    letter-spacing: .1em;
                    margin: 0 1vw;


               }


          }

     }
}




//響應式網站
@media screen and (max-width:500px) {
     main {
          section.main-area {

               div.info {
                    h1 {
                         .clover_icon {
                              display: none;
                         }
                    }
               }

          }
     }
}
</style>

