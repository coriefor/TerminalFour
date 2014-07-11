//script to pull in faculty directory content from biography pages
//TODO: Sort by position and split name to first and last to sort by last name

<script language="javascript" >

   document.writeln("<div class='container'>");
   document.writeln("<dl class='accordion' data-accordion>");

var directory = { "Faculty" : [

  {"Position" : "input here", "Link" : "links to bio page" , "first_name" : "replace this with 2 entries", "email" : "email@work.com", "phone" : "999-999-9999", "Office" : "room #", "Photo" : "link to media file" }
  ]
  
  //make sure your variable names in the json match below.... your json file will be t4 tags using the same elements from your original content type
    
}


var i = 0

//this add the content into an accordian in foundation 5
{
	document.writeln("<div class='row'>");
    document.writeln("<dd><a href='#panel1'>Faculty <i class='fa fa-caret-down'></i></a><div id='panel1' class='content active'>")

	for(i=0;i<directory.Faculty.length;i++)
	{	

   	document.writeln("<div class='boxy'><ul class='listing'>");
   	document.writeln("<li><img src='" + directory.Faculty[i].Photo+"'/></li>");
	document.writeln("<li><a href='" + directory.Faculty[i].Link+"'>"+ directory.Faculty[i].first_name +"</a></li>");
    document.writeln("<li><a href='mailto:"+directory.Faculty[i].email +"'>"+ directory.Faculty[i].email +"</a></li>");
    document.writeln("<li>" + directory.Faculty[i].phone +"</li>");
    document.writeln("<li>" + directory.Faculty[i].office +"</li>");
    document.writeln("</ul></div>");
	}

	document.writeln("</dd>");
	document.writeln("</div>");

}

document.writeln("</dl></div>");

</script>
