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
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    filterable:1,//是否启用分类筛选,
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
   一级:'',
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