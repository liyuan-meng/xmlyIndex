var bookTypeData = [
    {
        type: "热门",
        include: []
    },
    {
        type: "有声书",
        include: [
            "言情","悬疑","都市","幻想","武侠","文学","历史","官场商战","经管","社科","推理","女生最爱","男生最爱","QQ阅读",
            "读客图书","果麦文化","中信出版","博集天卷","磨铁阅读","蓝狮子","速播专区"
        ]
    },
    {
        type: "儿童",
        include: [
            "绘本","儿歌","小学教材","幻想","科普","英语","国学","家教","故事","卡通","名著"
        ]
    },
    {
        type: "相声评书",
        include: [
            "单田芳","郭德纲","热门相声","单口相声","名家评书","新锐笑将","相声江湖","青曲茶馆","刘兰芳"
        ]
    },
    {
        type: "音乐",
        include: [
            "老歌","纯音乐","影视","欧美","古风","古典","民谣","翻唱","催眠","动漫游戏","日韩","电子","铃声","音乐小讲堂",
            "创作达人"
        ]
    },
    {
        type: "历史",
        include: [
            "世界史","百家讲坛","中国史","名人传","春秋战国","秦汉","三国","魏晋","隋唐","宋元","明清","民国","侃野史"
        ]
    },
    {
        type: "情感生活",
        include: [
            "睡前夜话","恋爱技巧","情绪压力","婚姻家庭","职场人际","个人成长","心里健康","魅力养成","品质生活","亲子感情"
        ]
    },
    {
        type: "人文",
        include: [
            "经典名著","佛学心灵","读书会","诗词歌赋","纪实档案","名家讲座","艺术修养","诗人电台"
        ]
    },
    {
        type: "脱口秀",
        include: [
            "干货铺子","情怀江湖","奇葩绽放","财声话痨","深情无忌","歪果仁说"
        ]
    },
    {
        type: "娱乐",
        include: [
            "段子笑话","脱口秀","热门综艺","明星电台","鬼故事","八卦精选","星座运势","方言秀"
        ]
    },
    {
        type: "英语",
        include: [
            "口语","少儿","教材","词汇","职场","考试","入门","美文","脱口秀","名著","演讲","影视","旅游","精品"
        ]
    },
    {
        type: "教育培训",
        include: [
            "人际沟通","心理调节","中小学","高效管理","当众演讲","职业技能","大学生","女性励志","名企大咖","行业新知"
        ]
    },
    {
        type: "小语种",
        include: [
            "日语","法语","韩语","德语","法语","俄语","西班牙语","意大利语","泰语","其他语言"
        ]
    },
    {
        type: "商业财经",
        include: [
            "泛财经","股评","理财","创业","管理"
        ]
    },
    {
        type: "健康养生",
        include: [
            "中医养生","健身减肥","知识大讲堂","美丽女人经","护肝养肾","食疗课堂","儿童健康管理"
        ]
    },
    {
        type: "3D体验馆",
        include: [
            "奇妙听觉","迷幻电子","ASMR","轻松睡眠","清新自然","恐怖惊悚"
        ]
    },
    {
        type: "头条",
        include: [
            "环球视野","体育娱乐","财经科技","文化百态"
        ]
    },
    {
        type: "广播剧",
        include: [
            "现代言情","现代纯爱","古代言情","古代纯爱","全年龄","剧情歌","百合","CV访谈与活动"
        ]
    },
    {
        type: "戏曲",
        include: [
            "戏曲大全","华美京剧","温婉越剧","明快黄梅","多彩沪剧","典雅昆曲","嬉笑怒骂二人转"
        ]
    },
    {
        type: "电台",
        include: [
            "文艺台","音乐台","校园台","故事台","都市台","交通台","心里健康","魅力养成","品质生活","亲子感情","明清","民国","侃野史","音乐小讲堂",
            "创作达人","果麦文化","中信出版","博集天卷","磨铁阅读","蓝狮子","速播专区"
        ]
    },
    {
        type: "IT科技",
        include: [
            "科普","互联网","数码","智能","大数据","创客"
        ]
    },
    {
        type: "旅游",
        include: [
            "环球风物","走遍中国","游记攻略","语音导游","旅游玩家"
        ]
    },
    {
        type: "汽车",
        include: [
            "购车选车","玩车","热点汇","汽车脱口秀","摩托车"
        ]
    },
    {
        type: "动漫游戏",
        include: [
            "ACG脱口秀","二次元大本营","ACG广播","美女主播","ACG音乐","英雄联盟","ACG咨询","有声轻小说","魔兽世界","睡前","古风","CV配音","鬼畜娱乐","实况解说"
        ]
    },
    {
        type: "名校公开课",
        include: [
            "学堂在线","Coursera","万门大学","台湾名校公开课","国际名校公开课","好大学在线"
        ]
    },
    {
        type: "党团课",
        include: [
            "十九大",'学"习"',"党课随身听","征程","榜样","团团"
        ]
    },
    {
        type: "影视",
        include: [
            "影评地带","原声记忆","大话影人","电影资讯","必听影单"
        ]
    },
    {
        type: "时尚生活",
        include: [
            "美食","生活家","美容","时尚","运动","萌宠","精品推荐"
        ]
    },
    {
        type: "诗歌",
        include: [
            "古诗词","诗歌词赋","现代诗","诗人电台","首席朗诵","启蒙","评赏"
        ]
    }
];
var bookData = [
    {
        name: "表演者言",
        playCount: 66381458,
        intro: "17.蒋雯丽(上）：一生之戏在于脸，一脸之戏在于眼",
        imgUrl: "http://imagev2.xmcdn.com/group35/M06/B8/13/wKgJnFoNAWyQul7tAADoWCDjLdc475_web_large.jpg!op_type=5&upload_type=album&device_type=ios&name=web_large&magick=jpg&strip=1&quality=7",
        type: [
            {
                main: "时尚生活",
                junior: ["生活家","美容"]
            },
            {
                main: "诗歌",
                junior: ["诗歌词赋","现代诗"]
            }
        ]

    },
    {
        name: "“大力”史",
        playCount: 72008984,
        intro: "《国家宝藏》拾遗！",
        imgUrl: "http://imagev2.xmcdn.com/group7/M07/25/0F/wKgDWlbqSHqxxq9SAAGMkU_hutg684_web_large.jpg!op_type=5&upload_type=album&device_type=ios&name=web_large&magick=jpg&strip=1&quality=7",
        type: [
            {
                main: "时尚生活",
                junior: ["生活家","美容"]
            },
            {
                main: "诗歌",
                junior: ["诗歌词赋","现代诗"]
            }
        ]

    },
    {
        name: "红楼梦-原文朗读-【四大名著】",
        playCount: 26061637,
        intro: "红楼梦[庚辰本]002-贾夫人仙逝扬州府 冷子兴演说荣国府",
        imgUrl: "http://imagev2.xmcdn.com/group30/M0A/BD/AE/wKgJXll9BXnyygWEAAeJks6oSxg731_web_large.jpg!op_type=5&upload_type=album&device_type=ios&name=web_large&magick=jpg&strip=1&quality=7",
        type: [
            {
                main: "时尚生活",
                junior: ["生活家","美容"]
            },
            {
                main: "诗歌",
                junior: ["诗歌词赋","现代诗"]
            }
        ]

    },
    {
        name: "超品相师",
        playCount: 26061637,
        intro: "超品相师1705(请去主页帮丸子投上宝贵的票票)",
        imgUrl: "http://imagev2.xmcdn.com/group31/M0B/32/99/wKgJSVmsrCriVU1JAAGXUWKbBUM350_web_large.jpg!op_type=5&upload_type=album&device_type=ios&name=web_large&magick=jpg&strip=1&quality=7",
        type: [
            {
                main: "时尚生活",
                junior: ["生活家","美容"]
            },
            {
                main: "诗歌",
                junior: ["诗歌词赋","现代诗"]
            }
        ]

    },
    {
        name: "晚安妈妈睡前故事",
        playCount: 184187912,
        intro: "黑猪与减肥霜（法米拉小朋友作品） 晚安妈妈",
        imgUrl: "http://imagev2.xmcdn.com/group4/M05/9F/82/wKgDs1PeOaLRV-XVAAcOTv16ohg714_web_large.jpg!op_type=5&upload_type=album&device_type=ios&name=web_large&magick=jpg&strip=1&quality=7",
        type: [
            {
                main: "时尚生活",
                junior: ["生活家","美容"]
            },
            {
                main: "诗歌",
                junior: ["诗歌词赋","现代诗"]
            }
        ]

    },
    {
        name: "小道士笔记【年度评选投票谢谢】",
        playCount: 295915787,
        intro: "【小道士笔记】第1140集-人面蜘蛛二（不好意思，我蒙圈了）",
        imgUrl: "http://imagev2.xmcdn.com/group21/M00/BF/FB/wKgJLVi0zsPAXfWaAAHiCvr7gN4343_web_large.jpg!op_type=5&upload_type=album&device_type=ios&name=web_large&magick=jpg&strip=1&quality=7",
        type: [
            {
                main: "时尚生活",
                junior: ["生活家","美容"]
            },
            {
                main: "诗歌",
                junior: ["诗歌词赋","现代诗"]
            }
        ]

    },
    {
        name: "修真界败类「玄幻」",
        playCount: 389326001,
        intro: "第1188章 灭顶之灾",
        imgUrl: "http://imagev2.xmcdn.com/group8/M08/9D/81/wKgDYFZHgdST9Fh5AAGLkQHxmHQ915_web_large.jpg!op_type=5&upload_type=album&device_type=ios&name=web_large&magick=jpg&strip=1&quality=7",
        type: [
            {
                main: "时尚生活",
                junior: ["生活家","美容"]
            },
            {
                main: "诗歌",
                junior: ["诗歌词赋","现代诗"]
            }
        ]

    },
    {
        name: "山村风流小子",
        playCount: 163588455,
        intro: "1165不知道所发生的事情",
        imgUrl: "http://imagev2.xmcdn.com/group28/M05/67/81/wKgJSFk0s_DiZVyVAAC4xnQ_na499_web_large.jpeg!op_type=5&upload_type=album&device_type=ios&name=web_large&magick=jpg&strip=1&quality=7",
        type: [
            {
                main: "时尚生活",
                junior: ["生活家","美容"]
            },
            {
                main: "诗歌",
                junior: ["诗歌词赋","现代诗"]
            }
        ]

    },
    {
        name: "昏婚欲睡（多人小说剧）",
        playCount: 14914182,
        intro: "昏婚欲睡：119 考虑考虑",
        imgUrl: "http://imagev2.xmcdn.com/group33/M04/0A/E2/wKgJUVof-T3h3PZsAAGDKccTSPI802_web_large.jpg!op_type=5&upload_type=album&device_type=ios&name=web_large&magick=jpg&strip=1&quality=7",
        type: [
            {
                main: "时尚生活",
                junior: ["生活家","美容"]
            },
            {
                main: "诗歌",
                junior: ["诗歌词赋","现代诗"]
            }
        ]

    },
    {
        name: "读者",
        playCount: 46172983,
        intro: "主播潇君：你可能还不知道，你的孩子有多爱你",
        imgUrl: "http://imagev2.xmcdn.com/group22/M09/6B/A8/wKgJLliagvPyLrETAACjg6xWPdo046_web_large.jpg!op_type=5&upload_type=album&device_type=ios&name=web_large&magick=jpg&strip=1&quality=7",
        type: [
            {
                main: "时尚生活",
                junior: ["生活家","美容"]
            },
            {
                main: "诗歌",
                junior: ["诗歌词赋","现代诗"]
            }
        ]

    },
    {
        name: "齐俊杰看财经",
        playCount: 43346974,
        intro: "2018年的楼市调控重点！ 昨天确定了",
        imgUrl: "http://imagev2.xmcdn.com/group9/M03/90/CA/wKgDYldeh4GDEsZUAADAjTJ1hQA920_web_large.jpg!op_type=5&upload_type=album&device_type=ios&name=web_large&magick=jpg&strip=1&quality=7",
        type: [
            {
                main: "时尚生活",
                junior: ["生活家","美容"]
            },
            {
                main: "诗歌",
                junior: ["诗歌词赋","现代诗"]
            }
        ]

    },
    {
        name: "重生斗穿越 嫡女医妃【免费】",
        playCount: 43346974,
        intro: "第875章 脱险 感谢亲们投票支持！！",
        imgUrl: "http://imagev2.xmcdn.com/group25/M04/C5/9B/wKgJMViCGuWAW7GxAAGJNc62chc149_web_large.png!op_type=5&upload_type=album&device_type=ios&name=web_large&magick=jpg&strip=1&quality=7",
        type: [
            {
                main: "时尚生活",
                junior: ["生活家","美容"]
            },
            {
                main: "诗歌",
                junior: ["诗歌词赋","现代诗"]
            }
        ]

    },

];