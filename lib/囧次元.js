var rule = {
    title:'万佳影视',
   // host:'https://www.wjys.cc',
    //模板:'mxpro',
    host:'https://www.wjys.cc',
    // https://www.wjys.cc/vodsearch/page/1/wd/%E6%88%91.html',
    filterable:1,//是否启用分类筛选,
   // filter_url:'{{fl.a}}-{{fl.b}}-{{fl.c}}-{{fl.d}}-{{fl.e}}---fypage---',
   //class_name:'TV动画&剧场版&真人版',
    //class_url:'Animation&Theatre&CosPlay',
    searchUrl:'/vodsearch/page/fypage/wd/**.html',
    //searchable:2,//是否启用全局搜索,
    //quickSearch:1,//是否启用快速搜索,
    filterable:1,//是否启用分类筛选,
    filter: {
"Animation":[
{
"key":"c",
"name":"剧情",
"value":[
{"n":"全部","v":""},
{"n":"Netflix","v":"Netflix"},
{"n":"科幻","v":"科幻"},
{"n":"剧情","v":"剧情"},
{"n":"喜剧","v":"喜剧"},
{"n":"动作","v":"动作"},
{"n":"动画","v":"动画"},
{"n":"奇幻","v":"奇幻"},
{"n":"冒险","v":"冒险"},
{"n":"犯罪","v":"犯罪"},
{"n":"悬疑","v":"悬疑"},
{"n":"灾难","v":"灾难"},
{"n":"恐怖","v":"恐怖"},
{"n":"惊悚","v":"惊悚"},
{"n":"奇幻","v":"奇幻"},
{"n":"战争","v":"战争"},
{"n":"爱情","v":"爱情"},
{"n":"短片","v":"短片"},
{"n":"歌舞","v":"歌舞"},
{"n":"音乐","v":"音乐"}
]
},
{
"key":"a",
"name":"地区",
"value":[
{"n":"全部","v":""},
{"n":"中国大陆","v":"中国大陆"},
{"n":"中国台湾","v":"中国台湾"},
{"n":"中国香港","v":"中国香港"},
{"n":"日本","v":"日本"},
{"n":"美国","v":"美国"},
{"n":"英国","v":"英国"},
{"n":"韩国","v":"韩国"},
{"n":"法国","v":"法国"},
{"n":"科幻","v":"科幻"},
{"n":"西班牙","v":"西班牙"},
{"n":"加拿大","v":"加拿大"},
{"n":"智利","v":"智利"},
{"n":"俄罗斯","v":"俄罗斯"},
{"n":"马来西亚","v":"马来西亚"},
{"n":"希腊","v":"希腊"},
{"n":"泰国","v":"泰国"},
{"n":"匈牙利","v":"匈牙利"},
{"n":"其它","v":"其它"}
]
},
{
"key":"d",
"name":"语言",
"value":[
{"n":"全部","v":""},
{"n":"普通话","v":"普通话"},
{"n":"日语","v":"日语"},
{"n":"粤语","v":"粤语"},
{"n":"英语","v":"英语"},
{"n":"韩语","v":"韩语"},
{"n":"方言","v":"方言"}
]
},
{
"key":"b",
"name":"排序",
"value":[
{"n":"全部","v":""},
{"n":"时间排序","v":"time"},
{"n":"人气排序","v":"hits"},
{"n":"评分排序","v":"score"}
]
}
],
"Theatre":[
{
"key":"c",
"name":"剧情",
"value":[
{"n":"全部","v":""},
{"n":"Netflix","v":"Netflix"},
{"n":"科幻","v":"科幻"},
{"n":"剧情","v":"剧情"},
{"n":"喜剧","v":"喜剧"},
{"n":"动作","v":"动作"},
{"n":"动画","v":"动画"},
{"n":"奇幻","v":"奇幻"},
{"n":"冒险","v":"冒险"},
{"n":"犯罪","v":"犯罪"},
{"n":"悬疑","v":"悬疑"},
{"n":"灾难","v":"灾难"},
{"n":"恐怖","v":"恐怖"},
{"n":"惊悚","v":"惊悚"},
{"n":"奇幻","v":"奇幻"},
{"n":"战争","v":"战争"},
{"n":"爱情","v":"爱情"},
{"n":"短片","v":"短片"},
{"n":"歌舞","v":"歌舞"},
{"n":"音乐","v":"音乐"}
]
},
{
"key":"a",
"name":"地区",
"value":[
{"n":"全部","v":""},
{"n":"中国大陆","v":"中国大陆"},
{"n":"中国台湾","v":"中国台湾"},
{"n":"中国香港","v":"中国香港"},
{"n":"日本","v":"日本"},
{"n":"美国","v":"美国"},
{"n":"英国","v":"英国"},
{"n":"韩国","v":"韩国"}
]
},
{
"key":"d",
"name":"语言",
"value":[
{"n":"全部","v":""},
{"n":"普通话","v":"普通话"},
{"n":"日语","v":"日语"},
{"n":"粤语","v":"粤语"},
{"n":"英语","v":"英语"},
{"n":"韩语","v":"韩语"},
{"n":"方言","v":"方言"}
]
},
{
"key":"b",
"name":"排序",
"value":[
{"n":"全部","v":""},
{"n":"时间排序","v":"time"},
{"n":"人气排序","v":"hits"},
{"n":"评分排序","v":"score"}
]
}
]
},
filter_def:{
    Animation:{cateId:'Animation'},   
	Theatre:{cateId:'Theatre'},
	CosPlay:{cateId:'CosPlay'}
		
	},
       headers:{
        'User-Agent':'PC_UA',
    },
    //class_parse:'.secNacUl li;a&&Text;a&&href;.*/(\\d+)-1.html',
   
    play_parse:true,
     lazy:`js:
     var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
     var url = html.url;
     if (html.encrypt == '1') {
         url = unescape(url)
     } else if (html.encrypt == '2') {
         url = unescape(base64Decode(url))
     }
     if (/m3u8|mp4/.test(url)) {
         input = url
     } else {
         input
     }
 `,
    limit:6,
   二级:{
        title:'',//片名;类型
        img:'',//图片//.navbar-items li:gt(1):lt(8) 选择了.navbar-items类下(索引大于1小于8）的第 3 到第 8 个 <li> 元素（索引为 2 到 7）。
        desc:'',//主要信息;年代;地区;演员;导演
        content:'',//内容简介
        tabs:'.module-tab-content&&a',//播放线路//tabs:'js:TABS=["评书随身听"]',
        lists:'#sort-item-4:eq(#id) a'//集数，播放地址
    //tab_text:'body&&Text',list_text:'body&&Text',list_url:'a&&href'
    }, 
    
    // 搜索可以是*,集成一级，或者跟一级一样的写法 列表;标题;图片;描述;链接;详情
    搜索:'.module-items&&.module-search-item;.video-cover&&img&&alt;.video-cover&&img&&src;.video-info&&.video-serial&&Text;.video-cover&&a&&href',

}