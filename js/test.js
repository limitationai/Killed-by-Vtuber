
//json文件路径
var url = "./json/main.json"
//创建一个名为request的XMLHttpRequest对象用于数据交互
var request = new XMLHttpRequest();
//打开文件
request.open("get", url);
//空值
request.send(null);
//创建事件（加载完后发生）
request.onload = function () {
    //如果网络数据为200执行下面语句 
    // if (request.status == 200) {};
    var json = JSON.parse(request.responseText);
    var main = document.getElementById("content");
    var as = json.person;
    for (var i = 0; i < as.length; i++) {
        main.innerHTML += `<a href="${as[i].url}"><div class="col-xs-6 col-sm-4 text-center content_custom"> <div class="row text-center"> <div class=" custom col-xs-6 col-sm-4"> <img src="/image/logo-top_png.png" class="img-responsive" alt="Responsive image"> <img id="setimg" src="${as[i].imageurl}" class="img-responsive center-block img-circle img_custom" alt="Responsive image"> <p class="p_custom">${as[i].time}</p></div> <div class="col-xs-6"><h3 id="setname" class="h3_custom">${as[i].getname}</h3><p id="setcont">${as[i].con}</p></div></div></div></div></a>`
    };
    var ass = as[i].getname;
    console.log(ass);
    var ss = document.getElementById("setbot");
    var txt = document.getElementById("settxt").value;
    ss.onclick = function () {
        if (txt == null || txt == " " || txt == "") {
            alert("不能输入空值请重新输入")
        };
        if (txt == ass) {
            alert("不能")
        };
    };
    window.onload=request;
};

 //点击事件
/*      getbot.onclick = function () {
          //获取输入值
          var getext = document.getElementById("set_txt").value;
          //判断是否为空值
          if (getext == null || getext == " " || getext == "") {
              alert("不能输入空值请重新输入")
          } else {
              switch (getext) {
                  case "Clinyo":
                      alert("已收录");
                      break;
                      涼川越Etsuko
                      洛丽璐莉RoriRuri
                      寿寿歌_suzuka
                      莺可Inko
                      小毛拔了个火罐
                      安魂殿里的R93
                      山河sanka
                      小熊蜜蜜冬眠中
                      物部千翼Chihiro
                      夕雨铃yuri
                      
                  default:
                      alert("未收录");
              };
          };
      };
  };*/

/*   json.person.map(person => {
var main = document.getElementById("content");
main.innerHTML += `<a href="${person.url}"><div class="col-xs-6 col-sm-4 text-center content_custom"> <div class="row text-center"> <div class=" custom col-xs-6 col-sm-4"> <img src="/image/logo-top_png.png" class="img-responsive" alt="Responsive image"> <img id="setimg" src="${person.imageurl}" class="img-responsive center-block img-circle img_custom" alt="Responsive image"> <p class="p_custom">${person.time}</p></div> <div class="col-xs-6"><h3 id="setname" class="h3_custom">${person.getname}</h3><p id="setcont">${person.con}</p></div></div></div></div></a>`
//点击事件
getbot.onclick = function () {
//获取输入值
var getext = document.getElementById("set_txt").value;
//判断是否为空值
if (getext == null || getext == " " || getext == "") {
alert("不能输入空值请重新输入")
} else {
if (getext == person.getname) {
alert("已收录")
} else {
alert("未收录")
};
};
console.log(person.getname);
}
 
})*/




