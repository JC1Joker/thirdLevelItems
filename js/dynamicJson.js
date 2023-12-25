let url = "http://rap2api.taobao.org/app/mock/316321/djc/dynamicjson";
var dynamic = document.getElementById("dynamic_main");

 fetch(url, {
   method: "GET",
   headers: {
     "Content-Type": "application/json",
   },
 })
   .then((response) => response.json())
   .then((data) => {
     // 在这里处理接口返回的数据
     // console.log(data);
     for (var v of data) {
       /* 创建一个新的div元素 */
       var newDiv = document.createElement("div");
       newDiv.className = v.class;

       newDiv.innerHTML = `
    
          <div class="text">
            <p>${v.title}</p>
            <p>${v.author} ${v.time}</p>
          </div>
          <img src="${v.path}" alt="">
        
    `;
       /* 将新创建的div添加到容器中 */
       dynamic.appendChild(newDiv);
     }
   })
   .catch((error) => {
     // 在这里处理错误
     console.error("Error:", error);
   });
