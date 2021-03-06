function goAnchor(selector){
    var anchor=this.$el.querySelector(selector);
    if(anchor){
        setTimeout(()=>{
            anchor.scollIntoView();
        },500);
    }
};
function GetQueryString(name){
    var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
    var r=window.location.search.substr(1).match(reg);
    if(r!=null) return unescape(r[2]);
    return null;
}
export{
    goAnchor,
    GetQueryString
}