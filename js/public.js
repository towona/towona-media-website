var genMenu = function(){
  var str = "<ul class=\"nav navbar-nav navbar-right\">";

  for (var i = 0; i < menu.length; i++) {
      
      if(menu[i].data.length > 0){
        str += "<li class=\"dropdown\">";
        str += "<a href=\""+menu[i].url+"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">"+menu[i].value+"<b class=\"caret\"></b></a>"
        str += "<ul class=\"dropdown-menu\">";
        for (var j = 0; j < menu[i].data.length; j++) {
          
          str += "<li><a href=\""+menu[i].data[j].url+"\">"+menu[i].data[j].value+"</a></li>"

        };


        str += "</ul></li>";
      }
      else{
        str += "<li><a href=\""+menu[i].url+"\">"+menu[i].value+"</a></li>";
      }
  };

   str += "</ul>";

  document.getElementById("mainmenubar_div").innerHTML = str;
}
var listnewsfeed = function(data,ele){
  var ele = document.getElementById(ele);


  var genStr = function(images,title,source,postdate,body,url){
    var newStr="";
      newStr += "<div class=\"row\">";



      if(images.length == 0){
         newStr += "<div class=\"col-md-12\">";
      }
      else if(images.length == 1 || images.length == 2){
        newStr += "<div class=\"col-md-6\">";

        for (var i = 0; i < images.length; i++) {
          newStr += "<img onclick=\"LightBox.Image('"+images[i]+"','')\" src=\""+images[i]+"\" class=\"img-responsive img-thumbnail\">";
        };
        

        newStr += "<\/div>";
        newStr += "<div class=\"col-md-6\">";
      }
      else{
        newStr += "<div class=\"col-md-6\">";
        newStr += "<div class=\"row\">"
        for (var i = 0; i < images.length; i++) {

          newStr += "<div class=\"col-md-6\">"

          newStr += "<img onclick=\"LightBox.Image('"+images[i]+"','')\" src=\""+images[i]+"\" class=\"img-responsive img-thumbnail\">";

          newStr += "<\/div>";
        };
        

        newStr += "<\/div>";
        newStr += "<\/div>";
        newStr += "<div class=\"col-md-6\">";
      } 
      newStr += "<h3><a href=\""+url+"\">"+title+"<\/a><\/h3>";
      newStr += "<p>文章来源："+source+" 发表时间："+postdate+"<\/p>";
      newStr += "<p>"+body;
      newStr += "<\/p>";
      newStr += "<\/div>";
      newStr += "<\/div>";
      newStr += "<hr>";

    return newStr;
  }

  var str = "";

  for (var i = 0; i < data.length; i++) {
    str += genStr(data[i].image,data[i].title,data[i].source,data[i].postdate,data[i].body,data[i].url);
  };

  ele.innerHTML = str;

}
var Request = {
    Querystring: function (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null)
            return "";
        else
            return results[1];
    },
    Hash: function (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.hash);
        if (results == null)
            return "";
        else
            return results[1];
    }
}


var updateVideoInfo = function(data) {

  var id = Request.Querystring("id");
  var videoid = Request.Querystring("videoid");
  var obj = null;
  var videoUrl = null;
  var subVideoList_str = "";
  var videotitle = "";

  for (var i = 0; i < data.length; i++) {
    if(data[i].id == id)
    {
      obj = data[i];
      for (var i = 0; i < obj.videos.length; i++) {
        if(obj.videos[i].videoid == videoid){

          videoUrl = obj.videos[i].videoUrl;
          videotitle = obj.videos[i].videoid + "-" + obj.videos[i].videoTitle;
          

        }
        subVideoList_str += "<a href=\"videoplayer.html?id="+id+"&videoid="+obj.videos[i].videoid+"\" class=\"btn btn-default btn-lg\" role=\"button\">"+obj.videos[i].videoid+"</a>&nbsp;";
      };
      break;
    }
  };
  
  var videotitle_li = document.getElementById("videotitle_li");
  var videoPlayer_iframe = document.getElementById("videoPlayer_iframe");
  var videotitle_h3 = document.getElementById("videotitle_h3");
  var videodesc_p = document.getElementById("videodesc_p");
  var sub_videolist_div = document.getElementById("sub_videolist_div");
  var videotitle_p = document.getElementById("videotitle_p");

  videotitle_li.innerHTML = obj.title;
  videoPlayer_iframe.src = videoUrl;
  videotitle_h3.innerHTML = obj.title;
  videodesc_p.innerHTML = obj.desc;
  sub_videolist_div.innerHTML = subVideoList_str;
  videotitle_p.innerHTML = videotitle;

};



var listAllShows = function(data){

  var count = 4;
  
  var str = "<div class=\"row\">";

  for (var i = 0; i < data.length; i++) {
    if(i % count == 0){
      str += "</div><div class=\"row\">"
    }

    str += "<div class=\"col-sm-3\"><a href=\"videoplayer.html?id="+data[i].id+"&videoid="+data[i].videos[0].videoid+"\"><h4>"+data[i].title+"</h4><img class=\"img-responsive img-thumbnail\" src=\""+data[i].image+"\"></a></div>"
    

  };

  document.getElementById("videolist_div").innerHTML = str;
};

var genJoinUs = function(){
    var menuStr = "";
    var titleStr = "";



    for (var i = 0; i < joinus.length; i++) {
        menuStr += "<li><a href=\""+joinus[i].url+"\">"+joinus[i].branch+"</a></li>" 

        titleStr += "<div id=\""+joinus[i].url.substring(1,joinus[i].url.length)+"\" class=\"row\"><div class=\"col-lg-12\"><br><br><h1 class=\"page-header\">"+joinus[i].branch+" </h1></div></div>"

        for (var j = 0; j < joinus[i].data.length; j++) {
              titleStr += "<div class=\"row\">";
              titleStr += "<div class=\"panel panel-info\">";
              titleStr += "<div class=\"panel-heading\">";
              titleStr += "<h3 class=\"panel-title\">"+joinus[i].data[j].position+"<\/h3>";
              titleStr += "<\/div>";
              titleStr += "<div class=\"panel-body\">";
              titleStr += "<h5>"+joinus[i].data[j].duty.title+"</h5>";
              titleStr += "<ul>";
              for (var k = 0; k < joinus[i].data[j].duty.desc.length; k++) {
                  titleStr += "<li><small>"+joinus[i].data[j].duty.desc[k]+"</small></li>"
              };
              titleStr += "</ul>";
              titleStr += "<h5>"+joinus[i].data[j].req.title+"</h5>";
              titleStr += "<ul>";
              for (var k = 0; k < joinus[i].data[j].req.desc.length; k++) {
                  titleStr += "<li><small>"+joinus[i].data[j].req.desc[k]+"</small></li>"
              };
              titleStr += "</ul>";
              titleStr += "<h5>"+joinus[i].data[j].contact.title+"</h5>"
              titleStr += "<small>联系人 : "+joinus[i].data[j].contact.person+"</small><br>"
              titleStr += "<small>邮箱 : "+joinus[i].data[j].contact.email+"</small>"
              titleStr += "<\/div>";
              titleStr += "<\/div>";
              titleStr += "<\/div>";

        };




    };



    document.getElementById("joinus_body_div").innerHTML = titleStr;


    document.getElementById("sidemenubar_ul").innerHTML = menuStr;
}

var listnewsfeed_index = function() {
    
    var str = ""
    for (var i = 0; i < newsData.length; i++) {
          str += "<li>"+ newsData[i].postdate + " " + newsData[i].title +"</li>"
          if(i == 4){
            break;
          }
    };

    document.getElementById("newsfeed_ul").innerHTML = str;
}