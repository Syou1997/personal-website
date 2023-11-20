//狀態資料庫
import { defineStore } from "pinia";

//兩個參數 1.資料庫名稱 2.資料庫內容
//自己定義名稱
export default defineStore("indexStatus", {
    state: () => ({
        nowLanguage: {},
        //中文
        chinese: {
            //header
            home: "首頁",
            my: "我的介紹",
            works: "作品集",
            magic: "魔術",
            //homeView
            homeViewH1: "Hi,我是張瑞升",
            homeViewH2: "歡迎來到我的個人網站",
            homeViewP1: "除了變化",
            homeViewP2: "沒有什麼是永恆的",
            //MyInfo
            myH1: "我的介紹",
            myInfo: "自我簡介",
            myInfo2: "畢業於明道大學 應用日語系學系。2023年開始學習網頁設計。",
            education: "學歷",
            education2: "明道大學 應用日語系學系",
            experience: "經歷",
            experience2: "2017年~2018年 日本北海道釧路公立大學交換留學生",
            experience3: "2018年 2月 標茶車站的觀光導覽員(「SL冬季濕原號」運行期間的打工)",
            experience4: "2019年 韓國濟州觀光大學交換留學生",
            experience5: "2020年~2023年 台灣Allion  擔任測試工程師",
            language: "語言",
            language2: "中文:精通",
            language3: "日文:精通",
            certificate: "證照",
            certificate2: "JLPT 日本語能力試驗 N1",
            certificate3: "BJT 商務日語能力檢定 J2",
            certificate4: "J.TEST 實用日本語檢定 A級",
            skill: "技能",
            skill2: "日語教學",
            skill3: "魔術(近景)",
            interest: "愛好",
            interest2: "魔術",
            interest3: "花式撲克牌",
            interest4: "聽音樂(VOCALOID)",
            interest5: "料理",
            //Works
            worksH1: "作品集",
            worksList:
                [
                    {
                        projectName: "猜數字",
                        projectInfo: "猜數字遊戲。每次會從範圍1~100產生一個答案。",
                        projectLink: "https://syou1997.github.io/Bulls-and-Cows/",
                        projectImgLink: "../../image/猜數字.png",

                    },
                    {
                        projectName: "匯率轉換器",
                        projectInfo: "轉換匯率用的網站，使用方法請看網站內部的說明。",
                        projectLink: "https://exchange-rate3.netlify.app/",
                        projectImgLink: "../../image/匯率轉換器.png",

                    },
                    {
                        projectName: "記帳網站",
                        projectInfo: "計算收支。\n注意事項:\n1.要申請帳號否則無法使用。\n2.收入是正數，支出請填入負數。",
                        projectLink: "https://income-and-expense2.netlify.app/",
                        projectImgLink: "../../image/記帳軟體.png",

                    },
                    {
                        projectName: "圍棋資訊網",
                        projectInfo: "圍棋的基本介紹及韓國、日本、中國、台灣的圍棋文化介紹。",
                        projectLink: "https://syou1997.github.io/Go_info/",
                        projectImgLink: "../../image/圍棋資訊網.png",

                    },
                    {
                        projectName: "日本旅遊網站首頁",
                        projectInfo: "日本旅遊景點的推薦網站。",
                        projectLink: "https://syou1997.github.io/Japan-travel-website/",
                        projectImgLink: "../../image/日本旅遊網站.png",

                    },
                    {
                        projectName: "人員抽籤系統",
                        projectInfo: "可以隨機抽出一位人員，且能夠指定勾選條件做篩選。",
                        projectLink: "https://syou1997.github.io/ottery-system/",
                        projectImgLink: "../../image/人員抽籤系統.png",

                    },
                ],
            //Magic
            magicH1: "世界上最美好的體驗.就是未知的神秘 - 阿爾伯特·愛因斯坦 (1879-1955)",
            magicH2_1: "魔術",
            magicH3_1: "我從15歲開始自學魔術到現在已經有10年以上的時間。最擅長與人互動的近距離魔術，特別是撲克牌魔術。大學二年級擔任魔術社社長，在此期間不管是在校內還是校外都有豐富的表演經驗。例如:園遊會、聖誕晚會、國小、公司尾牙。出社會後也不停地在學習新的魔術，我覺得這是我會持續一輩子的興趣。",
            magicH2_2: "花式切牌",
            magicH3_2: "2021年在網路上看到了Tobias Levin的影片後，從此就愛上了北歐風格的花切，尤其是Combo。之後學習的招式大多也都是Tobias的招式。花式切牌與魔術不同的是著重於操縱撲克牌的技術，我覺得是非常帥氣的一項雜技。喜歡的招式有:Flip Phone、Barolo2、Legolove、Bloom、Mantra、Skirt、Fairfax。",
            magicH4_1: "演出相片",
            //影片區
            magicH4_2: "表演影片",
            //footer
            phone: "0968961867",
            email: "azwsxrfv2396187@gmail.com",
        },
        //日文
        japanese: {
            //header
            home: "ホーム",
            my: "私について",
            works: "作品集",
            magic: "手品",
            //homeView
            homeViewH1: "Hi,張瑞升です",
            homeViewH2: "ようこそ　私の個人サイト",
            homeViewP1: "変化以外に",
            homeViewP2: "永久のものはない",
            //MyInfo
            myH1: "私について",
            myInfo: "自己紹介",
            myInfo2: "台湾明道大学 応用日本語学科を卒業し。2023年からWeb制作を勉強し始めた。",
            education: "学歴",
            education2: "台湾明道大学 応用日本語学科学士",
            experience: "経歴",
            experience2: "2017年~2018年 日本釧路公立大学へ留学（交換留学生）",
            experience3: "2018年 2月 JR 標茶駅周辺における、外国人旅行者への観光案内業務に従事(SL 冬の湿原号運行期間のアルバイト)",
            experience4: "2019年 韓国済州観光大学へ留学（交換留学生）",
            experience5: "2020年~2023年 台湾アリオン  テストエンジニア（正社員）",
            language: "語学力",
            language2: "中国語:ネイティブレベル",
            language3: "日本語:ビジネスレベル",
            certificate: "資格",
            certificate2: " JLPT 日本語能力試験 N1",
            certificate3: "BJT ビジネス日本語能力テスト J2",
            certificate4: "J.TEST 実用日本語検定 A級",
            skill: "スキル",
            skill2: "日本語の先生",
            skill3: "手品(close-up magic)",
            interest: "趣味",
            interest2: "手品",
            interest3: "カード・フラリッシュ(Cardistry)",
            interest4: "聽音樂(Vocaloid)",
            interest5: "料理",
            //Works
            worksH1: "作品集",
            worksList:
                [
                    {
                        projectName: "数字当てゲーム",
                        projectInfo: "範囲は1から100まで。また、答えは毎回ランダムに生成される。",
                        projectLink: "https://syou1997.github.io/Bulls-and-Cows/",
                        projectImgLink: "../../image/猜數字.png",

                    },
                    {
                        projectName: "為替レートサイト",
                        projectInfo: "為替レート計算ができるサイト。使い方はサイトページに表示されている。",
                        projectLink: "https://exchange-rate3.netlify.app/",
                        projectImgLink: "../../image/匯率轉換器.png",

                    },
                    {
                        projectName: "家計簿サイト",
                        projectInfo: "収支の現状を把握するサイト。\n注意点1.アカウントを作らないとご利用できない。\n注意点2.収入は金額がプラスに対して支出は金額がマイナス。",
                        projectLink: "https://income-and-expense2.netlify.app/",
                        projectImgLink: "../../image/記帳軟體.png",

                    },
                    {
                        projectName: "碁の紹介サイト",
                        projectInfo: "碁の紹介と韓国、日本、中国、台湾の業界の紹介。",
                        projectLink: "https://syou1997.github.io/Go_info/",
                        projectImgLink: "../../image/圍棋資訊網.png",

                    },
                    {
                        projectName: "日本の旅行サイトのホームページ",
                        projectInfo: "日本旅行のおすすめ。",
                        projectLink: "https://syou1997.github.io/Japan-travel-website/",
                        projectImgLink: "../../image/日本旅遊網站.png",

                    },
                    {
                        projectName: "メンバーの抽選ツール",
                        projectInfo: "ランダムに一名のメンバーが抽選される。チェックボックスによる条件付きの抽選も可能。",
                        projectLink: "https://syou1997.github.io/ottery-system/",
                        projectImgLink: "../../image/人員抽籤系統.png",

                    },
                ],
            //Magic
            magicH1: "私たちが経験できる最も美しいものは神秘である - アルベルト・アインシュタイン (1879-1955)",
            magicH2_1: "手品",
            magicH3_1: "15歳から独学で手品を学び始め、今まで10年以上経ちました。観客とコミュニケーションを取る近距離マジック(close-up magic)が一番得意で特にトランプマジックです。大学二年生の時、部長を担当し、その期間に校内みならず、外でも多くのところで実演しました。例えば：学園祭、クリスマスパーティー、小学校、忘年会。社会に出てもスキルを磨き続いております。一生やり続ける趣味です。",
            magicH2_2: "カード・フラリッシュ",
            magicH3_2: "2021年にネットで見たTobias Levinの動画がきっかけに、北欧スタイルのカード・フラリッシュにハマりました。特にCombo。その後Tobiasの技をはじめとして学び始めた。これは手品と違って、トランプを操る技術を重視されていて、すごくかっこいいジャグリングだと思います。好きな技は:Flip Phone、Barolo2、Legolove、Bloom、Mantra、Skirt、Fairfax。",
            magicH4_1: "実演写真",
            //影片區
            magicH4_2: "実演動画",
            //footer
            phone: "+886 968961867",
            email: "azwsxrfv2396187@gmail.com",

        }
    }),
    //computed
    //沒有this
    getters: {

    },
    //methods
    //有this
    actions: {
        //切換中文
        toChinese() {
            this.nowLanguage = this.chinese;
        },
        //切換日文
        toJapanese() {
            this.nowLanguage = this.japanese;
        }

    }

});