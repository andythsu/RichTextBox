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
    var range = window.getSelection().getRangeAt(0);
    var content = range.extractContents();
    var b = document.createElement("b");
    b.appendChild(content);
    range.insertNode(b);
  }

  unboldSelection(){
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    console.log("range is: " , range);
    var whole_text = range.startContainer.textContent;
    var start = range.startOffset;
    var end = range.endOffset;
    if (start == 0) {
      var before_str = "";
      var current_str = whole_text.substring(start, end);
      var remaining_str = whole_text.substring(end);
    }else{
      var before_str = whole_text.substring(0, start);
      var current_str = whole_text.substring(start, end);
      var remaining_str = whole_text.substring(end);
    }
    before_str += "</b>";
    current_str += "<b>";
    remaining_str+="</b>";

    var new_whole_text = before_str + current_str + remaining_str;

    this.email_content.html(this.email_content.html().replace(whole_text, new_whole_text));
  }

  italicizeSelection(){
    var range = window.getSelection().getRangeAt(0);
    var content = range.extractContents();
    var i = document.createElement("i");
    i.appendChild(content);
    range.insertNode(i);
  }

  unitalicizeSelection(){
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    console.log("range is: " , range);
    var whole_text = range.startContainer.textContent;
    var start = range.startOffset;
    var end = range.endOffset;
    if (start == 0) {
      var before_str = "";
      var current_str = whole_text.substring(start, end);
      var remaining_str = whole_text.substring(end);
    }else{
      var before_str = whole_text.substring(0, start);
      var current_str = whole_text.substring(start, end);
      var remaining_str = whole_text.substring(end);
    }
    before_str += "</i>";
    current_str += "<i>";
    remaining_str+="</i>";

    var new_whole_text = before_str + current_str + remaining_str;

    this.email_content.html(this.email_content.html().replace(whole_text, new_whole_text));

  }

  href(name, link){
    var a = document.createElement("a");
    a.href = link;
    a.innerHTML = name;
    this.email_content.append(a);
  }
}
