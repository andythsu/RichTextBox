class font{
  constructor(){
    this.email_content = $(".email-content");
  }
  bold(){
    this.email_content.append("<b>text</b>");
  }
  italicize(){
    this.email_content.append("<i>text</i>");
  }
  unbold(){
    this.email_content.append("text");
  }
  unitalicize(){
    this.email_content.append("text");
  }
  boldSelection(){
    var selection = window.getSelection().getRangeAt(0);
    var content = selection.extractContents();
    var b = document.createElement("b");
    b.appendChild(content);
    selection.insertNode(b);
  }
  italicizeSelection(){
    var selection = window.getSelection().getRangeAt(0);
    var content = selection.extractContents();
    var i = document.createElement("i");
    i.appendChild(content);
    selection.insertNode(i);
  }
  href(name, link){
    var a = document.createElement("a");
    a.href = link;
    a.innerHTML = name;
    this.email_content.append(a);
  }
}
