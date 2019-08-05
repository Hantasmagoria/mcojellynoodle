//Initialize global variables.
var x;
var y = [];
var z = [];
var q;
var cal = [];
var state;

//Initialize current date.
var date = new Date().toLocaleDateString();
var st = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

//Initialize method for selecting the date.
function reinitializedate() {
  x = document.getElementsByClassName("order-booking");
  date = prompt("Date(DD/MM/YYYY):");
  if (date == null){
    alert("no date selected.");
    return;
  }
  if (date.includes('/')){
    date = (date.split("/")[1] + "/" + date.split("/")[0] + "/" + date.split("/")[2]);
  }else if (date.includes(' ')){
    date = (date.split(" ")[0] + " " + date.split(" ")[1] + " " + date.split(" ")[2]);
  }
  
  st = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  var lookatTimeOfWeek =  document.getElementById("txtdatetimeshow").textContent.split(" - ");
  var firstday = parseInt(lookatTimeOfWeek[0][0] + lookatTimeOfWeek[0][1]);
  var lastday = parseInt(lookatTimeOfWeek[1][0] + lookatTimeOfWeek[1][1]);
  var currentday = parseInt(st[0] + st[1]);

  if (lastday > firstday){
    if (currentday > lastday  || currentday < firstday){
     alert("date selected not within the current week.")
     return;
    }
  }
  if (firstday > lastday){
    if (currentday > firstday  || currentday < lastday){
     alert("date selected not within the current week.")
     return;
    }
  }
}

//Initialize method for displaying the data.
function reformatdisplay() {
  if (document.getElementsByClassName('calendar-week-view').length == 0 && document.getElementsByClassName('BookingCard').length > 0){
    q=true;
  }
  if(document.getElementsByClassName('calendar-week-view').length > 0){
    q=false;
  }
  if (!q){
    cal = document.getElementsByClassName("calendar")[0].innerHTML;
    x = document.getElementsByClassName("order-booking");
    var timings = 0;
    if (date == null){
     alert("no date selected.");
      return;
    }
    for (i = 0; i < x.length; i++) {
      if (x[i].title.includes(st)){
        y.push(x[i].title);
        timings ++;
      }
    }
    if (timings == 0 && q == false){
      alert('No bookings for the date selected.');
      return;
    }
    for (i = 0; i < y.length; i++) {
      if (y[i].includes("Subject:")) {
        y[i] = y[i].split("Subject:")[0];
      }
      if (y[i].includes("Status: Auto approved")) {
       y[i] = y[i].split("Status: Auto approved")[0] + y[i].split("Status: Auto approved")[1];
      }
    }
    for (i = 0; i < y.length; i++) {
      y[i] = st + " " + y[i].split(st)[1];
      z[0] = document.createElement('div');
      z[0].setAttribute('class', "BookingCard");
      z[0].setAttribute('style', "max-width:80%;height:auto;margin:20px auto; background: cyan; padding: 20px; overflow: hidden; border-radius: 8px; box-shadow: 5px 10px; transition: 0.6s; background-image: linear-gradient(to right, #FFFFFF, #0652DD, #12CBC4);");
      z[1] = document.createElement('h1');
      z[1].setAttribute('style', "margin:0 0; padding: 0;");
      z[1].textContent = y[i].split(st)[1].split("Remark: ")[0];
      z[2] = document.createElement('h3');
      z[2].setAttribute('style', "margin:0 0; padding: 0;");
      z[2].textContent = "Remark: " + y[i].split("Remark: ")[1];
      z[0].appendChild(z[1]);
      z[0].appendChild(z[2]);
      z[0].append(st);
      y[i] = z[0];
      z = [];
    }
    var rewrite = document.getElementsByClassName("calendar");
    rewrite[0].innerHTML = "";
    for (i = 0; i < y.length; i++){
      rewrite[0].appendChild(y[i]);
    }
    rewrite = [], y = [], z = [], timings = 0;
    q=true;
    }
    else if (q){
      document.getElementsByClassName("calendar")[0].innerHTML = cal;
      q=false;
    }
}

//Create a new element to contain the buttons.
var cheytan = document.createElement('div');
cheytan.setAttribute('style', "float:right;width: 50%;height:35px;margin-top: 0;")

//Button Creation: Date Select.
var rdb = document.createElement('div');
rdb.setAttribute('class', "fbutton");

var rid = document.createElement('button');
rid.setAttribute('class', "button2 btn");
rid.setAttribute('onclick', "reinitializedate()");
rid.innerHTML = "Pick a Date";

rdb.appendChild(rid);


//Button Creation: Data Display.
var srb = document.createElement('div');
srb.setAttribute('class', "fbutton");

var rfd = document.createElement('button');
rfd.setAttribute('class', "button2 btn");
rfd.setAttribute('onclick', "reformatdisplay()");
rfd.innerHTML = "Bookings";

srb.appendChild(rfd);


//Insert buttons to container created at the start(after initialization).
cheytan.appendChild(rdb);
cheytan.appendChild(srb);
//TODO: Debug css (positioning)

//Add the whole thing to the website live, conditionally.
if(state == null || state == 0){document.getElementById("caltoolbar").querySelector('.clear').parentNode.insertBefore(cheytan, document.getElementById("caltoolbar").firstElementChild.lastElementChild);
state = 1;}
