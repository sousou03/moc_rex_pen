//--------------------------------------------------
//
//  Google Analytics sss
//
//--------------------------------------------------

export default class GA {

  constructor(param){

    this.setup();

  }

  setup(param) {

    // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    // })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    // ga('create', 'UA-83208835-1', 'auto');
    // ga('send', 'pageview');

  }

  emit(page) {

    // log(page);

    // _gaq.push(['_trackPageview','/fashion/sp/michaelkors/1609/index.php#'+page]);
    // s=s_gi('hfmellegirljp');
    // var s2 = {pageName : 'girl:mini:fashion:michaelkors:1609:'+page};
    // s.t(s2);

    log('top');

    _gaq.push(['_trackPageview','/fashion/sp/michaelkors/1609/index.php#top']);
    s=s_gi('hfmellegirljp');
    var s2 = {pageName : 'girl:mini:fashion:michaelkors:1609:top'};
    s.t(s2);

  }

  setEvents() {

  }

}