const baseData = [{
            "Id": "1.168新加坡美食",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["飯", "麵", "異國料理"],
            "hours": ["中", "晚"],
            "url":"./img/img1.png"
        },
        {
            "Id": "2.麵堂拉麵",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["麵", "異國料理"],
            "hours": ["中", "晚"],
            "url": "./img/img2.png"
        },
        {
            "Id": "3.茶bar",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": "飲料",
            "hours": ["中", "晚"],
            "url": "./img/img3.png"
        },
        {
            "Id": "4.Who'S CAFÉ",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["飲料", "甜點咖啡", "異國料理"],
            "hours": ["早", "中"],
            "url": "./img/img4.png"

        },
        {
            "Id": "5.福田食堂",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": ["飯", "麵"],
            "hours": ["中", "晚"],
            "url": "./img/img5.png"

        },
        {
            "Id": "6.拉亞漢堡",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["麵", "異國料理"],
            "hours": ["早"],
            "url": "./img/img6.png"

        },
        {
            "Id": "7.清美香",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": ["飯", "麵", "異國料理", "便當"],
            "hours": ["中", "晚"],
            "url": "./img/img7.png"

        },
        {
            "Id": "8.雙響丼",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["飯", "異國料理"],
            "hours": ["中", "晚"],
            "url": "./img/img8.png"
        },
        {
            "Id": "9.粥仔魚",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": ["飯", "麵"],
            "hours": ["中", "晚"],
            "url": "./img/img9.png"
        },
        {
            "Id": "10.上品精緻便當",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": "便當",
            "hours": ["中", "晚"],
            "url": "./img/img10.png"
        },
        {
            "Id": "11.瑞迪印度廚房",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["飯", "素食", "異國料理"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "12.創義食族",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["飯", "麵", "火鍋烤肉", "異國料理"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "13.瑞斯飯糰",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["飯", "麵"],
            "hours": ["早"]
        },
        {
            "Id": "14.樂活鮮瓶",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": ["飲料"],
            "hours": ["早","晚"]
        },
        {
            "Id": "15. 50嵐",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": ["飲料"],
            "hours": ["早","晚"]
        },
        {
            "Id": "16.車庫町日式咖哩丼飯",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["飯", "異國料理"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "17.奕蓁姐小吃",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["飯", "麵", "其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "18.阿寬平價快炒",
            "price": "100以內",
            "distance": "騎車10分鐘以上",
            "delivery": "X",
            "type": ["飯", "麵"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "19.雲南泰式小吃",
            "price": "100以內",
            "distance": "騎車10分鐘以上",
            "delivery": "X",
            "type": ["飯", "麵", "異國料理"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "20.六家麵店",
            "price": "100以內",
            "distance": "騎車10分鐘以上",
            "delivery": "X",
            "type": ["飯", "麵"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "21.老場所麵食館",
            "price": "100~200",
            "distance": "騎車10分鐘以上",
            "delivery": "X",
            "type": ["飯", "麵"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "22.川味茶滷(茶滷味)",
            "price": "100~200",
            "distance": "騎車10分鐘以上",
            "delivery": "X",
            "type": ["麵", "其他"],
            "hours": ["晚"]
        },
        {
            "Id": "23.21金 小火鍋",
            "price": "100~200",
            "distance": "騎車10分鐘以上",
            "delivery": "O",
            "type": ["火鍋烤肉"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "24.重慶孫子文牛肉麵",
            "price": "100以內",
            "distance": "騎車10分鐘以上",
            "delivery": "X",
            "type": ["飯", "麵", "其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "25.沅滷味",
            "price": "100~200",
            "distance": "騎車10分鐘以上",
            "delivery": "X",
            "type": ["麵", "其他"],
            "hours": ["晚"]
        },
        {
            "Id": "26.樂樂廚房",
            "price": "100以內",
            "distance": "騎車10分鐘以上",
            "delivery": "X",
            "type": ["飯", "麵", "其他"],
            "hours": "早"
        },
        {
            "Id": "27.高峰快餐",
            "price": "100以內",
            "distance": "騎車10分鐘以上",
            "delivery": "X",
            "type": ["飯", "麵", "異國料理", "便當"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "28.鼎福大碗麵",
            "price": "100以內",
            "distance": "騎車10分鐘以上",
            "delivery": "X",
            "type": ["飯", "麵", "其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "29.夏日鍋物",
            "price": "100~200",
            "distance": "騎車10分鐘以上",
            "delivery": "O",
            "type": ["火鍋烤肉"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "30.李媽媽筒仔米糕",
            "price": "100以內",
            "distance": "騎車10分鐘以上",
            "delivery": "O",
            "type": ["飯", "麵", "其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "31.肯德基",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": ["all.css異國料理"],
            "hours": ["早", "晚"]
        },
        {
            "Id": "32.三商巧福",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": ["飯", "麵"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "33.紅吱吱牛排",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["異國料理"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "34.爆Q美式炸雞",
            "price": ["100以內", "100~200"],
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": "異國料理",
            "hours": ["中", "晚"]
        },
        {
            "Id": "35.摩斯漢堡",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": "異國料理",
            "hours": ["早", "中", "晚", "宵"]
        },
        {
            "Id": "36.肉夾饃",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["異國料理"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "37.nikos_pizzaeria",
            "price": "300以上",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["異國料理"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "38.十六區壽司",
            "price": ["100~200", "200~300"],
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["異國料理"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "39.甘泉魚麵",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": "異國料理",
            "hours": ["中", "晚"]
        },
        {
            "Id": "40.老陳記麵館",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": ["麵", "其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "41..麵朝",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type":["麵"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "42.米亞達義式餐廳",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": ["異國料理"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "43.惡魔雞排",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": ["小吃"],
            "hours": ["中 ", "晚 "]
        },
        {
            "Id": "44.千上食堂",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "O",
            "type": ["異國料理"],
            "hours": ["中", "晚"]
        },
        {
                "Id": "45.林記虎咬豬",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "O",
                "type": ["飯", "其他"],
                "hours": ["中", "晚", "宵"]
            },
            {
                "Id": "46.囍混沌",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["麵", "其他"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "47.大呼過癮",
                "price": "100~200",
                "distance": "騎車10分鐘",
                "delivery": "O",
                "type": ["火鍋烤肉"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "48..SUBWAY",
                "price": "100~200",
                "distance": "騎車10分鐘",
                "delivery": "O",
                "type": ["異國料理"],
                "hours": ["早", "晚"]
            },
            {
                "Id": "49.巧捷精緻便當",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["飯", "便當"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "50.江之戶日式料理",
                "price": "100~200",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["異國料理"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "51.建新水煎包",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["小吃"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "52.味味鴨肉麵",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "O",
                "type": ["飯", "麵"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "53.蔥大爺",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "O",
                "type": "小吃",
                "hours": ["中", "晚"]
            },
            {
                "Id": "54.爆漿紅豆餅",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": "小吃",
                "hours": ["中", "晚"]
            },
            {
                "Id": "55.日荃蒸餃",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "O",
                "type": "小吃",
                "hours": ["中", "晚"]
            },
            {
                "Id": "56.六扇門",
                "price": "100~200",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["火鍋烤肉"],
                "hours": ["中", "晚", "宵"]
            },
            {
                "Id": "57.御井鍋",
                "price": "100~200",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["火鍋烤肉"],
                "hours": ["中", "晚", "宵"]
            },
            {
                "Id": "58.白鬍子牛排",
                "price": "100~200",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": "異國料理",
                "hours": ["中", "晚", "宵"]
            },
            {
                "Id": "59.原巷子",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": "麵",
                "hours": ["早", "晚"]
            },
            {
                "Id": "60.永和豆漿大王",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": "小吃",
                "hours": ["早", "宵"]
            },
            {
                "Id": "61.山東早點",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": "小吃",
                "hours": "早"
            },
            {
                "Id": "62.薯霸早餐",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": "小吃",
                "hours": "早"
            },
            {
                "Id": "63.三層山",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["甜點咖啡"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "64.Moooi tea & cafe'",
                "price": "200~300",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["甜點咖啡"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "65.Kurashi",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["小吃"],
                "hours": ["早"]
            },
            {
                "Id": "66.芭芭食堂",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["異國料理", "飯", "麵"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "67.北門室食",
                "price": "100~200",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["異國料理", "麵", "其他"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "68.做食豔",
                "price": "100以內",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["小吃"],
                "hours": ["晚", "宵"]
            },
            {
                "Id": "69.橄欖樹",
                "price": "100~200",
                "distance": "騎車10分鐘",
                "delivery": "X",
                "type": ["異國料理","飯","麵","素食"],
                "hours": ["中", "晚"]
        },
        {
            "Id": "70.米舖飯麵",
            "price": ["100~200"],
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["小吃", "飯", "麵"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "71.大書眷村牛肉麵",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["麵"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "72.泰貓了",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["異國料理", "飯", "麵", "飲料"],
            "hours": ["中", "晚", "宵"]
        },
        {
            "Id": "73.井家",
            "price": "300以上",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["異國料理", "甜點咖啡", "飲料", "飯", "素食"],
            "hours": ["早", "中", "晚"]
        },
        {
            "Id": "74.青果小商行",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["飲料"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "75.嵐沺拉麵",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["異國料理", "麵", "其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "76.家竹亭",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["異國料理", "飯", "麵"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "77.珈琲夏特",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["飲料", "甜點咖啡"],
            "hours": "晚"
        },
        {
            "Id": "78.享初",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": "小吃",
            "hours": ["中", "晚"]
        },
        {
            "Id": "79.霸道啤酒屋",
            "price": "200~300",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["飯", "麵", "火鍋燒烤", "異國料理", "其他"],
            "hours": ["晚"]
        },
        {
            "Id": "80.柴窯火腿製造所",
            "price": "200~300",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["異國料理", "其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "81.威力甜點做什麼",
            "price": ["100以內", "100~200"],
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": "甜點咖啡",
            "hours": ["早","中","晚"]
        },
        {
            "Id": "82.泰方象",
            "price": ["100以內", "100~200"],
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["異國料理", "飯", "麵", "其他"],
            "hours": "晚"
        },
        {
            "Id": "83.一百種味道",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": "飲料",
            "": "甜點咖啡",
            "hours": ["中", "晚"]
        },
        {
            "Id": "84.小阿姨滷肉飯",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["小吃", "飯"],
            "hours": ["宵"]
        },
        {
            "Id": "85.古早味燉品屋",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": "小吃",
            "hours": "晚"
        },
        {
            "Id": "86.SUPIN Aisukurimu 味覺特濃日式冰淇淋",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["小吃", "甜點咖啡"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "87.紅豆芽手作",
            "price": "100以內",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["甜點咖啡"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "88.'西市汕頭館",
            "price": "200~300",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["火鍋燒烤", "麵"],
            "hours": ["中", "晚", "宵"]
        },
        {
            "Id": "89.丸鍋昆布鍋物",
            "price": "100~200",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": "火鍋燒烤",
            "hours": ["中", "晚"]
        },
        {
            "Id": "90.貳壹村",
            "price": ["100以內", "100~200"],
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["麵"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "91.麵屋浩",
            "price": "200~300",
            "distance": "騎車10分鐘",
            "delivery": "X",
            "type": ["異國料理", "麵", "其他"],
            "hours": ["晚"]
        },
        {
            "Id": "92.麥當勞",
            "price": ["100以內", "100~200"],
            "distance": "校內",
            "delivery": "O",
            "type": ["異國料理"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "93.海盜滷味",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["麵", "其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "94.三顧茅廬",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["麵 ", "其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "95.利竫和食",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": "異國料理",
            "hours": ["中", "晚"]
        },
        {
            "Id": "96.5Pasta",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["異國料理", "麵"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "97.人口販子",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": "飯",
            "hours": ["中", "晚"]
        },
        {
            "Id": "98.丸咖",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": "異國料理",
            "hours": ["中", "晚"]
        },
        {
            "Id": "99.家味燒臘",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["飯", "便當"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "100.越好食堂",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["異國料理", "飯", "麵"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "101.墨尼捲餅",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["異國料理"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "102.珍御品廣東粥",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["麵", "其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "103.野食早午餐",
            "price": "100~200",
            "distance": "校內",
            "delivery": "X",
            "type": ["飯", "麵", "其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "104.倆小食堂",
            "price": ["100以內", "100~200"],
            "distance": "校內",
            "delivery": "O",
            "type": ["異國料理", "麵"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "105.水木自助餐",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["飯", "便當"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "106.野果蔬食",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["素食"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "107.風雲自助餐",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["飯", "便當"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "108.漢堡人",
            "price": "100~200",
            "distance": "校內",
            "delivery": "X",
            "type": ["異國料理"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "109.姊妹雞腿飯",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["飯"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "110.紅鼎香滷味攤",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["麵", "其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "111.米克Q手作調飲",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": "飲料",
            "hours": ["中", "晚"]
        },
        {
            "Id": "112.八方雲集",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["其他"],
            "hours": ["中", "晚"]
        },
        {
            "Id": "113.清大7-11",
            "price": "100以內",
            "distance": "校內",
            "delivery": "X",
            "type": ["異國料理", "便當", "飯", "麵", "其他"],
            "hours": ["早", "中", "晚", "宵"]
        },
    {
        "Id": "114.全家",
        "price": "100以內",
        "distance": "校內",
        "delivery": "X",
        "type": ["異國料理", "便當", "飯", "麵", "其他"],
        "hours": ["早", "中", "晚", "宵"],
    },
            {
                "Id": "115.交大三樓自助餐",
                "price": "100以內",
                "distance": "校內",
                "delivery": "X",
                "type": ["飯", "便當"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "116.多多 咖啡",
                "price": "100以內",
                "distance": "校內",
                "delivery": "X",
                "type": ["異國料理", "麵"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "117.漢城異國料理",
                "price": "100以內",
                "distance": "校內",
                "delivery": "X",
                "type": ["異國料理", "飯"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "118.酷雞雞排",
                "price": "100以內",
                "distance": "校內",
                "delivery": "X",
                "type": ["飯"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "119.交大二樓美食天地",
                "price": "100以內",
                "distance": "校內",
                "delivery": "X",
                "type": ["飯"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "120.交大全家",
                "price": "100以內",
                "distance": "校內",
                "delivery": "X",
                "type": ["飲料", "其他"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "121.小木屋鬆餅",
                "price": "100以內",
                "distance": "校內",
                "delivery": "X",
                "type": ["甜點咖啡", "飲料"],
                "hours": ["中", "晚"]
            },
            {
                "Id": "122.比司多",
                "price": "100以內",
                "distance": "校內",
                "delivery": "X",
                "type": ["其他", "小吃", "異國料理"],
                "hours": ["中", "晚"]
            }];

        export default baseData;
