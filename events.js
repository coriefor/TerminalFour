

//Script for pulling in events and adding to calendar-->

<script language="javascript">
  
  document.writeln("<div class='container'>");
  document.writeln("<h1 class='page_title'>Upcoming Events</h1>");
  
  var events = [{"Date" : 2014-01-01, "Printdate" : "2014-01-01", "Title" : "Put in a title here", "Description" : "this is a description and a description and add something here and here and here and here and here", "Contact " : "corie ", "image" : "/biology/events/calendar/new-event/vcu_biotech.gif", "Email" : "work@vcu.edu", "Dateshow" : "Fri, 11 Jul 2014 12:11:00 EDT", "Link" : "/biology/events/calendar/new-event/", "Date2" : "2014-01-01"}
    ];
//the json data is pulled through an alternate content type that uses the same elements from your original content type
      

    // ascending order
    function SortByDate(x,y) {
      return x.Date - y.Date; 
    }


    function SortByName(x,y) {
      return ((x.Name == y.Name) ? 0 : ((x.Name > y.Name) ? 1 : -1 ));
    }

    // Call Sort By Name
    events.sort(SortByDate);

  
    for(var n=0;n<events.length;n++)
    {
    document.writeln("<div class='gradient-bone'>");
    document.write("<h2 class='events_title'><a href='"+ events[n].Link +"'>" + events[n].Title + "</a></h2>");
    document.writeln("<ul class='events'>");
    document.writeln("<li>" + events[n].Dateshow +" <img class='events' src='" + events[n].image +"'/></li>");
    document.writeln("<li>" + events[n].Contact +"</li>");
    document.writeln("<li><a href='mailto:"+events[n].Email  +"'>"+ events[n].Email  +"</a></li>");
    document.writeln("<li>" + events[n].Description +"</li>");
    document.writeln("<li><a href='" + events[n].Link +"'>Learn More</a></li>");
    document.writeln("</ul>");
    document.writeln("<hr>");
	  document.writeln("</div>");
    }
    
    document.writeln("</div>");
	
	</script>
