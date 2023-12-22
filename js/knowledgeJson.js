let url1 = "http://rap2api.taobao.org/app/mock/316321/djc/knowledgejson";
var dynamic1 = document.getElementById("knowledge_main");

fetch(url1)
  .then((response) => response.json())
  .then((data1) => {
    // 在这里处理接口返回的数据
    // console.log(data);
    for (var v of data1) {
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
      dynamic1.appendChild(newDiv);
    }
  })
  .catch((error) => {
    // 在这里处理错误
    console.error("Error:", error);
  });
