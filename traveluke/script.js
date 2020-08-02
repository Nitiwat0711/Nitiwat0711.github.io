var nameDay = {"อาทิตย์": [""],
            "จันทร์": ["01418497<br>Seminar"],
            "อังคาร": ["01418442<br>Web Technology and Web Services(Lecture)", "01418442<br>Web Technology and Web Services(Lab)", 
                        "01999213<br>Environment, Technology and Life"],
            "พุธ": ["01418341<br>Intellectual Properties and Professional Ethics", "01418331 <br> Operating Systems", "01418321 <br> System Analysis and Design (Lecture)",
                    "01418321 <br> System Analysis and Design (Lab)"],
            "พฤหัสบดี" : ["01418471 <br> Introduction to Software Engineering(Lab)", "01418471 <br>Introduction to Software Engineering(Lecture)",
                    "01999213<br>Environment, Technology and Life", "01175117 <br> Meditation with Archery Activity"],
            "ศุกร์" : ["01418341<br>Intellectual Properties and Professional Ethics", "01418331 <br> Operating Systems"],
            "เสาร์" : [""]};
var subject = {"01418497<br>Seminar": ["หน่วยกิต : 1", "ผู้สอน : อ.ชาคริต วัชโรภาส, อ.ศิริกร จันทร์นวล"],
                    "01418442<br>Web Technology and Web Services(Lecture)" : ["หน่วยกิต : 2", "ผู้สอน : อ.สุขุมาล กิติสิน"],
                    "01418442<br>Web Technology and Web Services(Lab)" : ["หน่วยกิต: 1","ผู้สอน : อ.ศรชัย ลักษณะปีติ"],
                    "01999213<br>Environment, Technology and Life" : ["หน่วยกิต: 3", "อ.ผู้สอน สากล สถิตวิทยานันท์, นภสม สินเพิ่มสุขสกุล, สารัฐ รัตนะ, สรณีย์ สายศร, ฐิติมา รุ่งรัตนาอุบล, วรพจน์ สืบประเสริฐกุล"],
                    "01418341<br>Intellectual Properties and Professional Ethics" : ["หน่วยกิต : 3", "อ.ผู้สอน นวลวรรณ สุนทรภิษัช"],
                    "01418331 <br> Operating Systems" : ["หน่วยกิต : 4", "อ.ผู้สอน ศิริกร จันทร์นวล"],
                    "01418321 <br> System Analysis and Design (Lecture)" : ["หน่วยกิต: 2", "อ.ผู้สอน สมโชค เรืองอิทธินันท์"],
                    "01418321 <br> System Analysis and Design (Lab)" : ["หน่วยกิต: 1", "อ.ผู้สอน สมโชค เรืองอิทธินันท์"],
                    "01418471 <br> Introduction to Software Engineering(Lab)" : ["หน่วยกิต : 1", "อ.ผู้สอน อุษา สัมมาพันธ์"],
                    "01418471 <br>Introduction to Software Engineering(Lecture)" : ["หน่วยกิต : 2", "อ.ผู้สอน อุษา สัมมาพันธ์"],
                    "01175117 <br> Meditation with Archery Activity" : ["หน่วยกิต : 1", "อ.ผู้สอน ณัฐพงศ์ สุโกมล"],
                    "" : ["ไม่มี"]};

function display(day){
    var x = nameDay[day];
    console.log(day);
    console.log(nameDay[day]);
    console.log(x);
    var y = "";
    console.log(x.length);
    for (var i=0; i<x.length; i++){
        var sub = x[i].replace("<br>", "");
        y+=sub+"<br>";
        var detail = subject[x[i]];
        //console.log(detail);
        
        for (var j=0; j<detail.length ; j++){
            y+=detail[j]+"<br>";
        }
        y+="<br>";
    }
    document.getElementById("myDisplay").innerHTML = y;
}