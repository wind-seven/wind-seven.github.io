/*fetch('js/head.html').then(response=>response.text()).then(data=>{document.head.innerHTML+=data;});*/

fetch('js/head.html').then(response=>response.text()).then(data=>{
  const container=document.createElement("div");
  container.innerHTML=data;
  Array.from(container.children).forEach(node=>{
    if (node.tagName==="SCRIPT"){
      const script=document.createElement("script");
      Array.from(node.attributes).forEach(attr=>script.setAttribute(attr.name, attr.value));
      if (node.textContent) script.textContent=node.textContent;
      document.head.appendChild(script);}
    else {document.head.appendChild(node);}});});