var rule = {
    title:'新视觉影院',
   // host:'https://www.wjys.cc',
    host:'https://www.6080yy3.com',
    // https://www.6080yy3.com/vod-s/%E6%88%91----------2---.html',
    //https://www.6080yy3.com/vodshow/4--------2---.html
    url:'/vodshow/fyclass--------fypage---.html',
   // filter_url:'{{fl.a}}-{{fl.b}}-{{fl.c}}-{{fl.d}}-{{fl.e}}---fypage---',
   class_name:'动漫',
    class_url:'4',
    searchUrl:'/vod-s/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    //quickSearch:1,//是否启用快速搜索,
    //filterable:1,//是否启用分类筛选,
    headers:{
        'User-Agent':'PC_UA',
    },
   
    play_parse:true,
    lazy:'',
    limit:6,
   //一级:'.module-list&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
   一级:`js:
    var d=[];
    pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
    var html=request(input);
    let list=pdfa(html,".module&&.module-list&&.module-item");
    list.forEach((it)=>{d.push({title:pdfh(it,"a&&title"),desc:pdfh(it,".module-item-text&&Text"),pic_url:pd(it,".module-item-pic&&img&&data-src"),url:pd(it,"a&&href"),})});
    setResult(d);
    `,
   二级:{
        title:'',//片名;类型
        img:'',//图片//.navbar-items li:gt(1):lt(8) 选择了.navbar-items类下(索引大于1小于8）的第 3 到第 8 个 <li> 元素（索引为 2 到 7）。
        desc:'',//主要信息;年代;地区;演员;导演
        content:'',//内容简介
        tabs:'.module-tab-items&&.module-tab-item',//播放线路//tabs:'js:TABS=["评书随身听"]',
        lists:'.scroll-content:eq(#id) a'//集数，播放地址
    //tab_text:'body&&Text',list_text:'body&&Text',list_url:'a&&href'
    }, 
    
    // 搜索可以是*,集成一级，或者跟一级一样的写法 列表;标题;图片;描述;链接;详情
    搜索:'.module-list&&.module-search-item;h3&&Text;img&&src;.video-serial&&Text;a&&href',
  // 搜索:`js:
  //  var d=[];
  //  pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
  //  var html=request(input);
  //  let list=pdfa(html,".module-list&&.module-search-item");
  //  list.forEach((it)=>{d.push({title:pdfh(it,"h3&&Text"),desc:pdfh(it,".video-serial&&Text"),pic_url:pd(it,"img&&src"),url:pd(it,"a&&href"),})});
  //  setResult(d);
  //  `,
}