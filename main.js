// Bài tập 1

document.getElementById("ngayhomqua").onclick = function(){
    var ngay = document.getElementById("ngay").value * 1 
    var thang = document.getElementById("thang").value * 1 
    var nam = document.getElementById("nam").value * 1
    var thoigian = "";
    if (nam % 4 && nam / 100 !== 0 || nam % 400 && nam > 1920){
        if (ngay == 31 && thang == 5 ||ngay ==31 && thang == 7 ||ngay ==31 && thang == 10 ||ngay ==31 && thang == 12 ||ngay ==31 && thang == 1||ngay ==31 && thang == 3 ||ngay ==31 && thang ==8){
            ngay = ngay - 1;
            thang = thang
            nam = nam
        }
        else if (thang == 2 && ngay == 29){
            ngay = 29 - 1;
        }else if(thang == 4 || thang == 6 || thang == 9 || thang == 11){
            // ngay = ngay - 1;
            thang = thang;
        }
        if(ngay == 1 && thang == 1){
            ngay = 31;
            thang = 12;
            nam = nam -1;
        }
        if(ngay == 1 && thang == 1 && nam == nam ||ngay == 1 && thang == 3 ||ngay == 1 && thang == 5||ngay == 1 && thang ==7 ||ngay == 1 && thang == 8 ||ngay == 1 &&thang == 10 ||ngay == 1 && thang == 12){
            ngay = 30
            thang = thang -1
        }else if(ngay == 1 && thang == 2){
            thang = 1;
            ngay = 31;
        }else if(ngay !== 1 && ngay == ngay){
            ngay = ngay -1;
        }
    }
    thoigian = document.getElementById("infotinh").innerHTML= "<p>"+ngay +"/ "+thang+ "/ "+nam+"</p>"
}
document.getElementById("ngaymai").onclick = function(){
    var ngay = document.getElementById("ngay").value * 1 
    var thang = document.getElementById("thang").value * 1 
    var nam = document.getElementById("nam").value * 1
    var thoigian = "";
    if (nam % 4 && nam / 100 !== 0 || nam % 400 && nam > 1920){
        if(ngay == 31 && thang == 12){
            ngay = 1;
            thang = 1;
            nam = nam + 1;
        }else if(ngay == 28 && thang == 2){
            ngay = 1;
            thang = thang + 1
        }
        else if (thang == 3 && ngay == 30||thang == 6 && ngay == 30||
            thang == 9 && ngay ==30|| thang ==11 && ngay == 30 ||
            thang == 2 && ngay == 29|| ngay == 31 && thang == 5 ||
            ngay ==31 && thang == 7 ||ngay ==31 && thang == 10 ||
            ngay ==31 && thang == 1||ngay ==31 && thang == 3 ||ngay ==31 && thang ==8){
            ngay = 1;
            thang = thang +1
            nam = nam
        }else if(ngay < 31){
            ngay = ngay + 1;
        }
    }
    thoigian = document.getElementById("infotinh").innerHTML= "<p>"+ngay +"/ "+thang+ "/ "+nam+"</p>"
}



// bài tập 2


document.getElementById("thangnam").onclick = function(){
    var thangs = document.getElementById("thangs").value * 1 ;
    var nams = document.getElementById("nams").value * 1;
    var Thang = ""
    if (nams % 4 == 0 && nams / 100 !== 0 || nams % 400 == 0){
        if(thangs == 4 || thangs == 6 || thangs == 9 || thangs == 11){
            Thang = 30;
        }else if(thangs == 2){
            Thang = 29;
        }else{
            Thang = 31;
        }
    }
    if(nams % 4 !== 0){
        if(thangs == 2){
            Thang = 28
        }else if(thangs == 4 || thangs == 6 || thangs == 9 || thangs == 11){
            Thang = 30;
        }else{
            Thang = 31;
        }
    }
    document.getElementById("infothangnam").innerHTML = "<p>Tháng này có: "+Thang+" ngày</p>";
    
}


// bài tập 3:
document.getElementById("doc").onclick = function(){
    var so = document.getElementById("3so").value *1;
    
    var hangtram = Math.floor(so / 100)
    var hangchuc = Math.floor(so % 100)
    var hangdonvi = Math.floor(so % 10)

    var demhangtram = ""
    var demhangchuc = ""
    var demhangdonvi = ""
    switch (hangtram) {
        case 1:
            demhangtram = "Một trăm"
            break;
        case 2:
            demhangtram = "Hai trăm"
            break;
        case 3:
            demhangtram = "Ba trăm"
            break;
        case 4:
            demhangtram = "Bốn trăm"
            break;
        case 5:
            demhangtram = "Năm trăm"
            break;
        case 6:
            demhangtram = "Sáu trăm"
            break;
        case 7:
            demhangtram = "Bảy trăm"
            break;
        case 8:
            demhangtram = "Tám trăm"
            break;
        case 9:
            demhangtram = "Chín trăm"
            break;
    }
    if(hangchuc >= 10 && hangchuc < 20){
        demhangchuc = "mười"
    } else if(hangchuc >= 20 && hangchuc <30){
        demhangchuc = "hai mươi"
    }
    else if(hangchuc >= 30 && hangchuc < 40){
        demhangchuc = "ba mươi"
    }
    else if(hangchuc >= 40 && hangchuc < 50){
        demhangchuc = "bốn mươi"
    }
    else if(hangchuc >= 50 && hangchuc < 60){
        demhangchuc = "năm mươi"
    }
    else if(hangchuc >= 60 && hangchuc < 70){
        demhangchuc = "sáu mươi"
    }
    else if(hangchuc >= 70 && hangchuc < 80){
        demhangchuc = "bảy mươi"
    } else if(hangchuc >= 80 && hangchuc < 90){
        demhangchuc = "tám mươi"
    }
    else if(hangchuc >= 90 && hangchuc < 100){
        demhangchuc = "chín mươi"
    }else if(hangchuc === 0){
        demhangchuc = ""
    }
    else {
        demhangchuc = "lẻ"
    }

    switch (hangdonvi) {
        case 0:
            demhangdonvi = "";
        break;
        case 1:
            demhangdonvi = "một"
        break;
        case 2:
            demhangdonvi = "hai"
        break;
        case 3:
            demhangdonvi = "ba"
        break;
        case 4:
            demhangdonvi = "bốn"
        break;
        case 5:
            demhangdonvi = "năm"
        break;
        case 6:
            demhangdonvi = "sáu"
        break;
        case 7:
            demhangdonvi = "bảy"
        break;
        case 8:
            demhangdonvi = "tám"
        break;
        case 9:
            demhangdonvi = "chín"
        break;
    }
    document.getElementById("infodoc").innerHTML = "<p>"+ demhangtram +" "+ demhangchuc+" "+ demhangdonvi +"</p>"
}


// Bài tập 4: 