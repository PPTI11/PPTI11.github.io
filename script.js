function updateTime() {
    var dateInfo = new Date();
  
    /* time */
    var hr,
      _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
      sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
      ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";
  
    // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
    if (dateInfo.getHours() == 0) {
      hr = 12;
    } else if (dateInfo.getHours() > 12) {
      hr = dateInfo.getHours() - 12;
    } else {
      hr = dateInfo.getHours();
    }
  // Add to time format
  
    var currentTime = hr + ":" + _min + ":" + sec;
  
  
  
  
    // AM/ PM options 
  
    document.getElementsByClassName("hms")[0].innerHTML = "Jam: " + currentTime +" " +ampm;
    // document.getElementsByClassName("ampm")[0].innerHTML = ampm;
  
  
  
   /* date */
   var dow = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
  ],
  month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ],
  jadwal1 = [
    "Lec Linear Algebra",
    "SL Linear Algebra",
    "Lec Basic Statistic",
    "SL Basic Statistic",
  ],
  jadwal2 = [
    "SL DM",
    "SL PDM",
    "Management",
    "Management",
  ],
  jadwal3 = [
    "Lec Entrepreneur",
    "SL Entrepreneur",
    "Lec Algo",
    "lec Algo",
  ],
  jadwal4 = [
    "Lec DM",
    "Lec DM",
    "Lec PDM",
    "SL Algo",
  ],
  jadwal5 = [
    "Lec Indonesian",
    "SL Indonesian",
    "Tut Algo - Semangat SOCSnya",
    "Lab Algo",
  ],
  
  jam = [
    "08:30 - 10:30",
    "11:00 - 12:00",
    "13:00 - 14:30",
    "15:00 - 16:30",
    "Libur"
  ],
  acara = [
    "NULL", /* 0 */
    "NULL", /* 1 */
    "NULL", /* 2 */
    "NULL", /* 3 */
    "NULL", /* 4 */
    "NULL",/* 5 */
    "NULL",/* 6 */
    "NULL",/* 7 */
    "NULL",/* 8 */
    "Quiz LA, Makrab PPTI",/* 9 */
    "NULL",/* 10 */
    "Induksi PPTI 7", /* 11 */
    "Kelas Pak ALS", /* 12*/
    "NULL", /* 13 */
    "NULL", /* 14 */
    "NULL", /* 15 */
    "NULL",/* 16 */
    "NULL",/* 17*/
    "NULL",/* 18*/
    "NULL",/* 19*/
    "NULL",/* 20*/
    "NULL",/* 21*/
    "Pra-Induksi PPTI 8",/* 22 */
    "NULL", /* 23 */
    "NULL", /* 24*/
    "Induksi PPTI 8", /* 25 */
    "NULL", /* 26 */
    "NULL", /* 27 */
    "NULL",/* 28 */
    "NULL",/* 29*/
    "NULL",/* 30*/
    "NULL",/* 31*/
  ],
  acarajam = [
    "NULL", /* 0 */
    "NULL", /* 1 */
    "NULL", /* 2 */
    "NULL", /* 3 */
    "NULL", /* 4 */
    "NULL",/* 5 */
    "NULL",/* 6 */
    "NULL",/* 7 */
    "NULL",/* 8 */
    "Sabtu, 9 Okt 2021 <br /> [08:00 (LA) || 10:00 - 12:00 (Makrab)]",/* 9 */
    "NULL",/* 10 */
    "Senin, 11 Okt 2021 [TBA]", /* 11 */
    "Selasa, 12 Okt 2021 [TBA]", /* 12*/
    "NULL", /* 13 */
    "NULL", /* 14 */
    "NULL", /* 15 */
    "NULL",/* 16 */
    "NULL",/* 17*/
    "NULL",/* 18*/
    "NULL",/* 19*/
    "NULL",/* 20*/
    "NULL",/* 21*/
    "Jumat, 22 Okt 2021 [TBA]",/* 22 */
    "NULL", /* 23 */
    "NULL", /* 24*/
    "Senin, 25 Okt 2021 [TBA]", /* 25 */
    "NULL", /* 26 */
    "NULL", /* 27 */
    "NULL",/* 28 */
    "NULL",/* 29*/
    "NULL",/* 30*/
    "NULL",/* 31*/
  ],
  day = dateInfo.getDate();

// store date
var currentHour = 0;
var dynamicDay = dateInfo.getDay();


if (hr >= 6 && hr <= 9 && ampm == "AM") {
    currentHour = 0;
}else if (hr >= 9 && hr <= 11 && ampm == "AM"){
    currentHour = 1;
}else if (hr >= 11 && hr <= 2 && (ampm == "AM" || ampm == "PM")){
    currentHour = 2;
}else if (hr >= 2 && hr <= 4 && ampm == "PM"){
    currentHour = 3;
}else if (hr >= 5 && ampm == "PM") {
    dynamicDay = dateInfo.getDay() + 1;
}

if (dateInfo.getDay() == 6 || (dateInfo.getDay() == 0 && (hr <=11 && ampm == "AM"))) {
    currentHour = 4;
}
var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day ;
var currentClass = " ";
var currentHours = jam[currentHour];
var currentLoc = " ";

if (dynamicDay == 1 || dynamicDay == 0) {
    currentClass = jadwal1[currentHour];
    currentLoc = "Teams";
}else if (dynamicDay == 2) {
    currentClass = jadwal2[currentHour];
    if (currentHour == 0 || currentHour == 1){
        currentLoc = "Teams";
    }
    else if (currentHour == 2 || currentHour == 3){
        currentLoc = "Zoom Kelas";
    }
}else if (dynamicDay == 3) {
    currentClass = jadwal3[currentHour];
    currentLoc = "Teams";
}else if (dynamicDay == 4) {
    currentClass = jadwal4[currentHour];
    currentLoc = "Teams";
}else if (dynamicDay == 5) {
    currentClass = jadwal5[currentHour];
    if (currentHour == 2 || currentHour == 3){
        currentLoc = "Teams";
    }
    else if (currentHour == 0 || currentHour == 1){
        currentLoc = "Zoom Kelas";
    }
}

var currentEvent = " ";
var currentEventDate = " ";
var currentLoc = " ";

if (day <= 1 && acara[2] != "NULL") {
    currentEvent = acara[2];
    currentEventDate = acarajam[2];
}
else if (day <= 2  && acara[3] != "NULL") {
    currentEvent = acara[3];
    currentEventDate = acarajam[3];
}
else if (day <= 3  && acara[4] != "NULL") {
    currentEvent = acara[4];
    currentEventDate = acarajam[4];
}
else if (day <= 4  && acara[5] != "NULL") {
    currentEvent = acara[5];
    currentEventDate = acarajam[5];
}
else if (day <= 5 && acara[6] != "NULL") {
    currentEvent = acara[6];
    currentEventDate = acarajam[6];
}
else if (day <= 6 && acara[7] != "NULL") {
    currentEvent = acara[7];
    currentEventDate = acarajam[7];
}
else if (day <= 7 && acara[8] != "NULL") {
    currentEvent = acara[8];
    currentEventDate = acarajam[8];
}
else if (day <= 8 && acara[9] != "NULL") {
    currentEvent = acara[9];
    currentEventDate = acarajam[9];
}
else if (day <= 9 && acara[10] != "NULL") {
    currentEvent = acara[10];
    currentEventDate = acarajam[10];
}
else if (day <= 10 && acara[11] != "NULL") {
    currentEvent = acara[11];
    currentEventDate = acarajam[11];
}
else if (day <= 11 && acara[12] != "NULL") {
    currentEvent = acara[12];
    currentEventDate = acarajam[12];
}
else if (day <= 12 && acara[13] != "NULL") {
    currentEvent = acara[13];
    currentEventDate = acarajam[13];
}
else if (day <= 13 && acara[14] != "NULL") {
    currentEvent = acara[14];
    currentEventDate = acarajam[14];
}
else if (day <= 14 && acara[15] != "NULL") {
    currentEvent = acara[15];
    currentEventDate = acarajam[15];
}
else if (day <= 15 && acara[16] != "NULL") {
    currentEvent = acara[16];
    currentEventDate = acarajam[16];
}
else if (day <= 16 && acara[17] != "NULL") {
    currentEvent = acara[17];
    currentEventDate = acarajam[17];
}
else if (day <= 17 && acara[18] != "NULL") {
    currentEvent = acara[18];
    currentEventDate = acarajam[18];
}
else if (day <= 18 && acara[19] != "NULL") {
    currentEvent = acara[19];
    currentEventDate = acarajam[19];
}
else if (day <= 19 && acara[20] != "NULL") {
    currentEvent = acara[20];
    currentEventDate = acarajam[20];
}
else if (day <= 20 && acara[21] != "NULL") {
    currentEvent = acara[21];
    currentEventDate = acarajam[21];
}
else if (day <= 21 && acara[22] != "NULL") {
    currentEvent = acara[22];
    currentEventDate = acarajam[22];
}
else if (day <= 22 && acara[23] != "NULL") {
    currentEvent = acara[23];
    currentEventDate = acarajam[23];
}
else if (day <= 23 && acara[24] != "NULL") {
    currentEvent = acara[24];
    currentEventDate = acarajam[24];
}
else if (day <= 24 && acara[25] != "NULL") {
    currentEvent = acara[25];
    currentEventDate = acarajam[25];
}
else if (day <= 25 && acara[26] != "NULL") {
    currentEvent = acara[26];
    currentEventDate = acarajam[26];
}
else if (day <= 26 && acara[27] != "NULL") {
    currentEvent = acara[27];
    currentEventDate = acarajam[27];
}
else if (day <= 27 && acara[28] != "NULL") {
    currentEvent = acara[28];
    currentEventDate = acarajam[28];
}
else if (day <= 28 && acara[29] != "NULL") {
    currentEvent = acara[29];
    currentEventDate = acarajam[29];
}
else if (day <= 29 && acara[30] != "NULL") {
    currentEvent = acara[30];
    currentEventDate = acarajam[30];
}
else if (day <= 30 && acara[31] != "NULL") {
    currentEvent = acara[31];
    currentEventDate = acarajam[31];
}
else if (day <= 31 && acara[1] != "NULL") {
    currentEvent = acara[1];
    currentEventDate = acarajam[1];
}


document.getElementsByClassName("date")[0].innerHTML = currentDate;

document.getElementsByClassName("jadwal-kelas")[0].innerHTML = currentClass;
document.getElementsByClassName("jam-kelas")[0].innerHTML = currentHours;
document.getElementsByClassName("lokasi-kelas")[0].innerHTML = currentLoc;

document.getElementsByClassName("jadwal-acara")[0].innerHTML = currentEvent;
document.getElementsByClassName("jam-acara")[0].innerHTML = currentEventDate;
document.getElementsByClassName("lokasi-acara")[0].innerHTML = currentLoc;
};
  
  
  
  // print time and date once, then update them every second
  updateTime();
  setInterval(function() {
    updateTime()
  }, 1000);

  

  

  