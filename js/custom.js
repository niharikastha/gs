(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy +1,
      dayMonth = "11/15/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
      //   if (distance < 0) {
      //     document.getElementById("headline").innerText = "It's my birthday!";
      //     document.getElementById("countdown").style.display = "none";
      //     document.getElementById("content").style.display = "block";
      //     clearInterval(x);
      //   }
        //seconds
      }, 0)
  }());

// Format SatSchedule
class scheduleEvent {
  constructor(title, start, end, track) {
      this.title = title;
      this.startTime = start;
      
      if (track == undefined){
        this.end = null
        this.track = end;
      }
      else{
        this.endTime = end;
        this.track = track;
      }
      
  }

}

var saturday = [];
var sunday = [];

// track = {main, ws} where ws is workshop
saturday.push(new scheduleEvent("Welcome", "7:00", "main"));
saturday.push(new scheduleEvent("About Girlscript Rourkela", "7:10", "main"));
saturday.push(new scheduleEvent("About Girlscript Surat", "7:15", "main"));
saturday.push(new scheduleEvent("About Google Crowdsource", "7:15", "7:35", "ws"));
saturday.push(new scheduleEvent("Break", "7:35", "main"));
saturday.push(new scheduleEvent("# TIYL Contest Rules", "7:40", "7:50", "ws"));
saturday.push(new scheduleEvent("Contest contributions ", "8:00", "8:30", "ws"));
saturday.push(new scheduleEvent("Contest submission", "8:35", "8:45", "ws"));
saturday.push(new scheduleEvent("Doubts and Feedbacks", "8:45", "main"));
saturday.push(new scheduleEvent("Winner announcements", "9:00", "9:15", "ws"));

// sunday.push(new scheduleEvent("No workshops today", "00:00", "17:00", "ws"));

saturday.sort((a,b) => (a.startTime >= b.startTime) ? 1: -1);
sunday.sort((a,b) => (a.startTime >= b.startTime) ? 1 : -1 );

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th><th></th><th>Workshops</th></tr>';
saturday.forEach(function(ev, index){
if (index ==0  || saturday[index-1].startTime != ev.startTime){     
  str += '<tr>';
  if (ev.track == 'ws'){

      str += '<th></th>';
      str += '<td></td>';
  }

str += '<th>';

str += ev.startTime 
if (ev.endTime){
  str+='<br />|<br />' + ev.endTime;
}
str += '</th>';
str += '<td>';
str += ev.title + '';
str += '</td>';

if (ev.track == 'main'){
    if(index != saturday.length-1 && ev.startTime == saturday[index+1].startTime){
      str += '<th>';
      str+=saturday[index+1].startTime
      if(saturday[index+1].endTime){
      str +=  '<br />|<br />' + saturday[index+1].endTime;
    }
  
str += '</th>';
str += '<td>' + saturday[index+1].title+ '</td>';
  }
else{
str +='<th></th>';
str += '<td></td>';
}}

str += '</tr>';

}

});
str += '</tbody>';
window.document.getElementById("saturdayContainer").innerHTML = str;

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th><th></th><th>Workshops</th></tr>';
sunday.forEach(function(ev, index){
if (index ==0  || (sunday[index-1].startTime != ev.startTime || sunday[index-1].track == ev.track) ){     
  str += '<tr>';
  if (ev.track == 'ws'){

      str += '<th></th>';
      str += '<td></td>';
  }
  
  

str += '<th>';

str += ev.startTime 
if (ev.endTime){
  str+='<br />|<br />' + ev.endTime;
}
str += '</th>';
str += '<td>';
str += ev.title + '';
str += '</td>';

if (ev.track == 'main'){
  if (index != sunday.length-1 && ev.startTime == sunday[index+1].startTime && ev.track != sunday[index+1].track){
      str += '<th>';
      str+=sunday[index+1].startTime
      if(sunday[index+1].endTime){
      str +=  '<br />|<br />' + sunday[index+1].endTime;
    }
  
str += '</th>';
str += '<td>' + sunday[index+1].title+ '</td>';
  
}
else{
str +='<th></th>';
str += '<td></td>';
}}

str += '</tr>';

}

});
str += '</tbody>';


// Timer

