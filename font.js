class font{
  constructor(){
    this.email_content = $(".email-content");
  }
  bold(){
    this.email_content.append("<strong>&#65279;</strong>");
  }
  italicize(){
    this.email_content.append("<em>&#65279;</em>");
  }
  unbold(){
    this.email_content.append("&#65279;");
  }
  unitalicize(){
    this.email_content.append("&#65279;");
  }
  boldSelection(){
    var range = window.getSelection().getRangeAt(0);
    // console.log(range);
    var content = range.extractContents();
    console.log("content is : " , content.toString());
    var b = document.createElement("strong");
    b.appendChild(content);
    range.insertNode(b);
  }

  unboldSelection(){
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    console.log("range is: " , range);

    var selection_text = selection.toString();

    var textNode = document.createTextNode(selection_text);
    var content = range.extractContents();

    // range.deleteContents();
    var span = document.createElement("span");
    span.style.fontWeight = "normal";
    span.appendChild(content);
    // span.appendChild(textNode);

    // range.startContainer.parentElement.parentElement.insertBefore(textNode, range.startContainer.parentElement);
    // this.clearEmptyTags();

    // range.startContainer.parentElement.parentElement.insertNode(textNode);
    range.insertNode(span);

    // var whole_text = this.email_content.html();
    //
    // var range_data = this.getRange();
    // var start_point = range_data.start;
    // var end_point = range_data.end;
    //
    // var start_offset = range.startOffset;
    // var end_offset = range.endOffset;
    //
    // console.log("whole text: " , selection_text);
    // if (start_point == 0) {
    //   console.log("start_point is 0");
    //   var before_str = "";
    //   var current_str = selection_text.substring(start_offset, end_offset);
    //   var remaining_str = selection_text.substring(end_offset+1);
    // }else{
    //   console.log("start_point is not 0");
    //   var before_str = selection_text.substring(0, start_offset);
    //   var current_str = selection_text.substring(start_offset, end_offset);
    //   var remaining_str = selection_text.substring(end_offset+1);
    // }
    //
    // before_str += "</b>";
    // current_str += "<b>";
    // remaining_str+="</b>";
    //
    // console.log("before_str", before_str);
    // console.log("current_str", current_str);
    // console.log("remaining_str", remaining_str);
    // // var html_clone = this.email_content.html();
    //
    // var new_selection_text = before_str + current_str + remaining_str;
    // console.log("start point: ", start_point);
    // console.log("end point: ", end_point);
    // console.log("start_offset: ", start_offset);
    // console.log("end_offset: ", end_offset);
    // console.log("new whole text: " , new_selection_text);
    //
    // // console.log("substring(end+1): ", this.email_content.text().substring(end+1));
    // var before_html = this.email_content.html().substring(0, start_point);
    // var current_html = new_selection_text;
    // var after_html = this.email_content.html().substring(end_point+1);
    //
    // console.log("before_html: ", before_html);
    // console.log("current_html: " , current_html);
    // console.log("after_html : " , after_html);
    //
    //
    // var html = before_html + current_html + after_html;
    //
    // console.log("html: " , html);
    //
    // this.email_content.html(html);
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
    // console.log("range is: " , range);
    var selection_text = selection.toString();
    var textNode = document.createTextNode(selection_text);
    // var content = range.extractContents();
    range.deleteContents(); //delete the contents
    var span = document.createElement("span");
    // span.appendChild(content);
    span.appendChild(textNode);
    span.style.fontStyle = "normal";
    range.insertNode(span);
    // var selection_text = range.startContainer.textContent;
    // var start = range.startOffset;
    // var end = range.endOffset;
    // if (start == 0) {
    //   var before_str = "";
    //   var current_str = whole_text.substring(start, end);
    //   var remaining_str = whole_text.substring(end);
    // }else{
    //   var before_str = whole_text.substring(0, start);
    //   var current_str = whole_text.substring(start, end);
    //   var remaining_str = whole_text.substring(end);
    // }
    // before_str += "</i>";
    // current_str += "<i>";
    // remaining_str+="</i>";
    //
    // var new_whole_text = before_str + current_str + remaining_str;
    //
    // this.email_content.html(this.email_content.html().replace(whole_text, new_whole_text));

  }

  href(name, link){
    var a = document.createElement("a");
    a.href = link;
    a.innerHTML = name;
    this.email_content.append(a);
  }

  //helper function
  getRange(){
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var range_clone = range.cloneRange();
    range_clone.selectNode(document.getElementById("test"));
    range_clone.setEnd(range.startContainer, range.startOffset);
    var start = range_clone.toString().length;
    range_clone.setEnd(range.endContainer, range.endOffset);
    var end = range_clone.toString().length;
    return {
      start : start,
      end: end
    };
  }

  removeEmptyTags(){
    var spans = this.email_content.find("span");
    var strong = this.email_content.find("strong");
    var em = this.email_content.find("em");
    var b = this.email_content.find("b");
    var i = this.email_content.find("i");
    var data = {
      spans : spans,
      b : b,
      i : i,
      em : em,
      strong : strong
    };

    $.each(data, function(tag_name, arr){
      for (var i = 0; i < arr.length; i++) {
        console.log("text content: ", arr[i].textContent);
        if (arr[i].textContent == "") {
          arr[i].remove();
          console.log("removed empty tag: ", arr[i]);
        }
      }
    });

  }

}
