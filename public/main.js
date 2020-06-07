let ajax = new XMLHttpRequest()

getCssFun.onclick = ()=>{
    ajax.open('get','./style.css')
    ajax.onreadystatechange = ()=>{
        if(ajax.readyState === 4 && ajax.status === 200){
            let res = ajax.response;
            let css = document.createElement("style");
            css.innerHTML = res
            document.head.appendChild(css)
        }
    }
    ajax.send()
}

getXmlFun.onclick = ()=>{
    ajax.open('get','./xml.xml')
    ajax.onreadystatechange = ()=>{
        if(ajax.readyState === 4 && ajax.status === 200){
            let res = ajax.responseXML;
            let data = res.getElementsByTagName("warning")[0].textContent.trim()
            let xmlDom = document.createElement("div")
            xmlDom.innerHTML = data;
            document.body.appendChild(xmlDom)
        }
    }
    ajax.send()
}

getJsonFun.onclick = ()=>{
    ajax.open('get','./data.json')
    ajax.onreadystatechange = ()=>{
        if(ajax.readyState === 4 && ajax.status === 200){
            let res = JSON.parse(ajax.response);
            let JSONDom = document.createElement("div")
            let HTMLData = ``;
            console.log(res)
            res.data.forEach((item,index)=>{
                let data = `<div>姓名：${item.name} 年龄： ${item.age}</div>`;
                HTMLData += data
            })
            JSONDom.innerHTML = HTMLData
            document.body.appendChild(JSONDom)
        }
    }
    ajax.send()
}

getJsonFun.onclick = ()=>{
    ajax.open('get','./data.json')
    ajax.onreadystatechange = ()=>{
        if(ajax.readyState === 4 && ajax.status === 200){
            let res = JSON.parse(ajax.response);
            let JSONDom = document.createElement("div")
            let HTMLData = ``;
            console.log(res)
            res.data.forEach((item,index)=>{
                let data = `<div>姓名：${item.name} 年龄： ${item.age}</div>`;
                HTMLData += data
            })
            JSONDom.innerHTML = HTMLData
            document.body.appendChild(JSONDom)
        }
    }
    ajax.send()
}

getJsFun.onclick = ()=>{
    ajax.open('get','./2.js')
    ajax.onreadystatechange = ()=>{
        if(ajax.readyState === 4 && ajax.status === 200){
            let res = ajax.response;
            console.log(res)
            let jsDom = document.createElement("script")
            jsDom.innerHTML = res
            document.body.appendChild(jsDom)
        }
    }
    ajax.send()
}

getHtmlFun.onclick = ()=>{
    ajax.open("get","/2.html");
    ajax.onreadystatechange = ()=>{
        if(ajax.readyState === 4 && ajax.status === 200){
            let res = ajax.response;
            console.log(res)
            let HtmlDom = document.createElement("div")
            HtmlDom.innerHTML = res
            document.body.appendChild(HtmlDom)
        }
    }
    ajax.send()
}

let pagingNum = 2;
pagingFun.onclick = ()=>{
    if(pagingNum <= 3){
        ajax.open("get",`/${pagingNum}.json`);
        ajax.onreadystatechange = ()=>{
            if(ajax.readyState === 4 && ajax.status === 200){
                let res = JSON.parse(ajax.response);
                res.data.forEach((item,index)=>{
                    const li = document.createElement("li")
                    li.textContent = item.name;
                    pageul.appendChild(li)
                })
            }
        }
        ajax.send()
        pagingNum ++
    }else{
        alert("木有数据啦")
    }
   
}