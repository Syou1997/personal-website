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
          ...mapState(indexStore, ["nowLanguage", "chinese", "japanese"]),



     },
     //方法
     methods: {
          ...mapActions(indexStore, ["toChinese", "toJapanese"])


     },
     //生命週期
     mounted() {
          this.toChinese();

     },

}



</script>

<template>
     <div class="container">
          <!-- header -->
          <header>
               <ul>
                    <li>
                         <RouterLink class="link" to="/">{{ nowLanguage.home }}</RouterLink>
                    </li>
                    <li>
                         <RouterLink class="link" to="/MyInfo">{{ nowLanguage.my }}</RouterLink>
                    </li>
                    <li>
                         <RouterLink class="link" to="/Works">{{ nowLanguage.works }}</RouterLink>
                    </li>
                    <li>
                         <RouterLink class="link" to="/Magic">{{ nowLanguage.magic }}</RouterLink>
                    </li>
               </ul>


               <!-- 切換語言的按鈕區 -->
               <div class="language_area">
                    <button @click="toChinese" type="button">中文</button>
                    <button @click="toJapanese" type="button">日本語</button>
               </div>


          </header>
          <!-- main內容 -->
          <RouterView />
          <!-- footer -->
          <footer>

               <!-- 電話區 -->
               <div class="phone_area">
                    <h4>Phone</h4>
                    <p>{{ nowLanguage.phone }}</p>

               </div>
               <!-- 信箱區 -->
               <div class="email_area">
                    <h4>Email</h4>
                    <p>{{ nowLanguage.email }}</p>
               </div>
               <!-- 連結區 -->
               <div class="follow_area">
                    <h4>Follow Me</h4>
                    <!-- icon區 -->
                    <div class="icon_area">
                         <!-- facebook -->
                         <a target="_blank" href="https://www.facebook.com/profile.php?id=100004650665762">
                              <Icon class="icon" icon="logos:facebook" />
                         </a>
                         <!-- X(twitter) -->
                         <a target="_blank" href="https://twitter.com/azwsxrfv2396187">
                              <Icon class="icon" icon="simple-icons:x" />
                         </a>
                         <!-- instagram -->
                         <a target="_blank" href="https://www.instagram.com/azwsxrfv2396187/?hl=zh-tw">
                              <Icon class="icon" icon="skill-icons:instagram" />
                         </a>
                         <!-- youtube -->
                         <a target="_blank" href="https://www.youtube.com/channel/UCWs7mmEuhyz9ze2O1QUFpiA">
                              <Icon class="icon" icon="logos:youtube-icon" />
                         </a>

                    </div>


               </div>
          </footer>
     </div>
</template>

<style lang="scss" scoped>
.container {
     overflow-x: hidden;

     header {
          background-image: url('./../../image/未命名-2.jpg');
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 1rem;
          position: sticky;   
          top: 0;
          left: 0;

          ul {
               display: flex;
               flex-wrap: wrap;
               list-style: none;

               li {
                    margin: 1rem;

                    .link {
                         border-radius: 10px;
                         text-decoration: none;
                         color: black;
                         transition: all 0.5s ease;
                         margin: 1rem;
                         padding: 1rem;
                         font-size: 2rem;
                         font-family: "M PLUS 1", sans-serif;

                         &:hover {
                              background-color: rgb(132, 239, 189);
                              box-shadow: 0.2rem 0.2rem 0.2rem rgb(54, 212, 138);
                              color: white;

                         }
                    }
               }

          }

          //切換語言的按鈕區
          .language_area {
               display: flex;
               flex-wrap: wrap;
               // flex-direction: column;


               button {
                    width: 8vw;
                    color: white;
                    background-image: linear-gradient(315deg, #89d8d3 0%, #1be479 74%);
                    font-size: 1rem;
                    font-style: italic;
                    margin: 1rem;
                    padding: 0.7rem;
                    border-radius: 5px;
                    border: none;
                    cursor: pointer;

                    &:hover {
                         transform: scale(1.1);
                    }

                    &:active {
                         transform: scale(1);
                    }


               }

          }
     }

     footer {

          padding: 1rem 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          background-color: rgb(76, 233, 131);
          width: 100vw;
          height: 18vh;

          h4 {
               font-family: "M PLUS 1", sans-serif;
               font-size: 1.5rem;
          }

          p {
               font-family: "M PLUS 1", sans-serif;
               font-size: 1rem;
          }

          .follow_area {

               .icon_area {
                    margin-top: 0.7rem;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    .icon {
                         transition: all 0.3s ease;
                         cursor: pointer;

                         &:hover {
                              transform: translate(0, -0.25rem);

                         }


                    }



               }
          }

     }
}


//響應式網站
@media screen and (max-width:900px) {
     .container {
          header {
               display: flex;
               flex-wrap: wrap;

               ul {
                    flex-direction: column;
               }

               .language_area {
                    flex-direction: column;
               }
          }

     }


}

@media screen and (max-width:500px) {
     .container {
          header {
               display: flex;
               flex-wrap: wrap;

               ul {
                    flex-direction: column;
               }

               .language_area {
                    display: block;

                    button {
                         font-weight: bold;
                         background-image: linear-gradient(315deg, #ffffff 0%, #ffffff 74%);
                         color: black;
                    }
               }
          }

     }


}
</style>

