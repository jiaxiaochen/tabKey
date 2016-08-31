$(document).ready(function () {
    $(function(){
        tab("#tab_demo .tabBar span","#tab_demo .tabCon","current");
    });
    function tab(tabBar,tabCon,className){
        var $tab_menu=$(tabBar);
        console.log($tab_menu);
        $tab_menu.removeClass(className);
        $tab_menu.eq(0).addClass(className);
        $(tabCon).hide();
        $(tabCon).eq(0).show();
        //给选项卡添加点击事件
        $tab_menu.click(function(){
            $tab_menu.removeClass(className);
            $(this).addClass(className);
            var index= $tab_menu.index(this);
            $(tabCon).hide();
            $(tabCon).eq(index).show();
        });
    }

})
