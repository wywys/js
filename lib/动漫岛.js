var rule = {
    title: '六月听书',
    host: 'http://www.6yueting.com',
    url: '/ys/fyclass/o1/pfypage',
    searchUrl: '/search/index/search?content=**&type=1&pageNum=fypage&pageSize=40',
    searchable: 2,
    quickSearch: 0,
    filterable:0,//是否启用分类筛选,
    headers:{'User-Agent':'PC_UA'},
    class_name:'全部分类&玄幻奇幻&修真武侠&恐怖灵异&古今言情&都市言情&穿越重生&粤语古仔&网游小说&通俗文学&历史纪实&军事&悬疑推理&ebc5系列&官场商战&儿童读物&广播剧&外文原版&评书大全&相声小品&百家讲坛&健康养生&教材&期刊头条&戏曲&脱口秀',
    class_url:'t0&t1&t2&t3&t4&t28&t5&t6&t7&t11&t12&t13&t14&t18&t15&t16&t17&t22&t8&t9&t10&t20&t21&t23&t24&t27',
    play_parse:true,
    lazy:'',
    limit:6,
   // 图片来源:'@Referer=http://m.6yueting.com/@User-Agent=MOBILE_UA',
    推荐:'*',
    //一级: '.album-list&&li;img&&alt;img&&src;.book-item-status&&Text;a&&href',
    一级:`js:
    var d=[];
    pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
    var html=request(input);
    let list=pdfa(html,".album-list&&li");
    list.forEach((it)=>{d.push({title:pdfh(it,"img&&alt"),desc:pdfh(it,".book-item-status&&Text").replace(/状态：/g,"",pic_url:pd(it,"img&&src"),url:pd(it,"a&&href"),})});
    setResult(d);
    `,
    二级:{
        "title":".book-title&&Text;.text:eq(0)&&Text",
        "img":".img&&src",
        "desc":".text:eq(3)&&Text;;;.text:eq(1)&&Text;.text:eq(2)&&Text",
        "content":".book-intro&&Text",
        "tabs":".operate-bar&&.total-num",
        "lists":".book-list:eq(#id)&&.list-item"
    },
    搜索:'js:let d=[];let MY_HOME="http://m.6yueting.com";let html=request(input);html=JSON.parse(html);let list=html.data.content;list.forEach(function(it){d.push({title:it.name.replace(/<.*?>/g,""),img:"http://img.6yueting.com:20001/"+it.coverUrlLocal,url:MY_HOME+"/list/"+it.code,desc:it.cdate,content:it.descXx.replace(/&nbsp;/g,"")})});setResult(d);',
}