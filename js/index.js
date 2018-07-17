const cssStyles=[
    // 'layout.css',  //这里会隐藏颜色区块！。
    'ad1.css',
    'ad2.css',
    'bar.css',
    'dailyPay.css',
    'discount.css',
    'lifeService.css',
    'mainPortal.css',
    'search.css',
    'subPortal.css'
]

let headEle = document.getElementsByTagName('head')[0];

if(headEle){
    console.log('exists');
    cssStyles.forEach(cssUrl => {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = `./css/${cssUrl}`;
        headEle.appendChild(link);
    })
}
