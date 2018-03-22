var zal=new Array(true,true,true,true,true,true,true,true);
var zal_etalon=new Array(true,true,true,true,true,true,true,true);
window.onload=function () {
    inizialized();
   document.getElementById("send1").onclick=function () {
       sale();
   }
   document.getElementById("serch1").onclick=function () {
       serch();
   }
};
function inizialized() {
    for(var i=0; i<zal.length; i++)
    {
        if(zal[i]==true)
        {
            document.getElementById("k"+(i+1)).src="images/seat_avail.png";
            document.getElementById("k"+(i+1)).title="Кресло свободно";
        }
    }
}
/////////////////////
function rezve(kreslo) {
if (zal_etalon[kreslo-1]==true) {


    if (zal[kreslo - 1] == true) {
        document.getElementById("k" + kreslo).src = "images/seat_select.png";
        document.getElementById("k" + kreslo).title = "Кресло занято";
        zal[kreslo - 1] = false;
    } else {
        document.getElementById("k" + kreslo).src = "images/seat_avail.png";
        document.getElementById("k" + kreslo).title = "Кресло свободно";
        zal[kreslo - 1] = true;
    }
}

}
function sale() {
    for(var i=0; i<zal.length; i++)
    {
        if (zal[i]==false)
        {
            document.getElementById("k"+(i+1)).src="images/seat_unavail.png";
            document.getElementById("k"+(i+1)).title="Кресло продано";
            zal_etalon[i]=zal[i];
        }
    }
}
function serch() {

    var namber = parseInt(document.getElementById("name1").value);
    // alert(namber);
    var ansver = false;
    switch (namber) {
        case 1:
            for (var i = 0; i < zal_etalon.length; i++) {
                if (zal_etalon[i] == true) {
                    var mess = "Кресло №" + (i + 1) + "Свободно.Будете брать ?";
                    ansver = confirm(mess);
                    if (ansver == true) {
                        document.getElementById("k" + (i + 1)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 1)).title = "Кресло продано";
                        zal_etalon[i] = zal[i] = false;
                        break;
                    }
                }
            }
            break;

        case 2:
            for (var i = 0; i < zal_etalon.length; i++) {
                if (zal_etalon[i] == true && zal_etalon[i + 1] == true) {
                    var mess = "Кресло №" + (i + 1) + "Свободное и кресло №" + (i + 2) + "Свободно.будете брать?";
                    ansver = confirm(mess);
                    if (ansver == true) {
                        document.getElementById("k" + (i + 1)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 1)).title = "Кресло продано";
                        document.getElementById("k" + (i + 2)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 2)).title = "Кресло продано";
                        zal_etalon[i] = zal[i] = false;
                        zal_etalon[i + 1] = zal[+1] = false;
                        break;
                    }
                }
            }
            break;
        case 3:
            for (var i = 0; i < zal_etalon.length; i++) {
                if (zal_etalon[i] == true && zal_etalon[i + 1] == true && zal_etalon[i + 2] == true) {
                    var mess = "Кресло №" + (i + 1) + " свободное и кресло №" + (i + 2) + " свободное и кресло №" + (i + 3) + " свободно.Будете брать?";
                    ansver = confirm(mess);
                    if (ansver == true) {
                        document.getElementById("k" + (i + 1)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 1)).title = "Кресло продано";
                        document.getElementById("k" + (i + 2)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 2)).title = "Кресло продано";
                        document.getElementById("k" + (i + 3)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 3)).title = "Кресло продано";
                        zal_etalon[i] = zal[i] = false;
                        zal_etalon[i + 1] = zal[i + 1] = false;
                        zal_etalon[i + 2] = zal[i + 2] = false;
                        break;
                    }

                }
            }
            break;
        case 4:
            for (var i = 0; i < zal_etalon.length; i++) {
                if (zal_etalon[i] == true && zal_etalon[i + 1] == true && zal_etalon[i + 2] == true && zal_etalon[i + 3] == true) {
                    var mess = "Кресло №" + (i + 1) + " свободное и кресло №" + (i + 2) + " свободное и кресло №" + (i + 3) + "Кресло №" + (i + 4) + " свободно.Будете брать?";
                    ansver = confirm(mess);
                    if (ansver == true) {
                        document.getElementById("k" + (i + 1)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 1)).title = "Кресло продано";
                        document.getElementById("k" + (i + 2)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 2)).title = "Кресло продано";
                        document.getElementById("k" + (i + 3)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 3)).title = "Кресло продано";
                        document.getElementById("k" + (i + 4)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 4)).title = "Кресло продано";
                        zal_etalon[i] = zal[i] = false;
                        zal_etalon[i + 1] = zal[i + 1] = false;
                        zal_etalon[i + 2] = zal[i + 2] = false;
                        zal_etalon[i + 3] = zal[i + 3] = false;
                        break;
                    }
                }
            }
            break;
        case 5:
            for (var i = 0; i < zal_etalon.length; i++) {
                if (zal_etalon[i] == true && zal_etalon[i + 1] == true && zal_etalon[i + 2] == true && zal_etalon[i + 3] == true && zal_etalon[i + 4] == true) {
                    var mess = "Кресло №" + (i + 1) + " свободное и кресло №" + (i + 2) + " свободное и кресло №" + (i + 3) + "Кресло №" + (i + 4) + "свободно и кресло №" + (i + 5) + " свободно.Будете брать?";
                    ansver = confirm(mess);
                    if (ansver == true) {
                        document.getElementById("k" + (i + 1)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 1)).title = "Кресло продано";
                        document.getElementById("k" + (i + 2)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 2)).title = "Кресло продано";
                        document.getElementById("k" + (i + 3)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 3)).title = "Кресло продано";
                        document.getElementById("k" + (i + 4)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 4)).title = "Кресло продано";
                        document.getElementById("k" + (i + 5)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 5)).title = "Кресло продано";
                        zal_etalon[i] = zal[i] = false;
                        zal_etalon[i + 1] = zal[i + 1] = false;
                        zal_etalon[i + 2] = zal[i + 2] = false;
                        zal_etalon[i + 3] = zal[i + 3] = false;
                        zal_etalon[i + 4] = zal[i + 4] = false;
                        break;
                    }
                }
            }
            break;
        case 6:
            for (var i = 0; i < zal_etalon.length; i++) {
                if (zal_etalon[i] == true && zal_etalon[i + 1] == true && zal_etalon[i + 2] == true && zal_etalon[i + 3] == true && zal_etalon[i + 4] == true && zal_etalon[i + 5] == true) {
                    var mess = "Кресло №" + (i + 1) + " свободное и кресло №" + (i + 2) + " свободное и кресло №" + (i + 3) + "Кресло №" + (i + 4) + "свободно и кресло №" + (i + 5) + "свободно и кресло №" + (i + 6) + " свободно.Будете брать?";
                    ansver = confirm(mess);
                    if (ansver == true) {
                        document.getElementById("k" + (i + 1)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 1)).title = "Кресло продано";
                        document.getElementById("k" + (i + 2)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 2)).title = "Кресло продано";
                        document.getElementById("k" + (i + 3)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 3)).title = "Кресло продано";
                        document.getElementById("k" + (i + 4)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 4)).title = "Кресло продано";
                        document.getElementById("k" + (i + 5)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 5)).title = "Кресло продано";
                        document.getElementById("k" + (i + 6)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 6)).title = "Кресло продано";
                        zal_etalon[i] = zal[i] = false;
                        zal_etalon[i + 1] = zal[i + 1] = false;
                        zal_etalon[i + 2] = zal[i + 2] = false;
                        zal_etalon[i + 3] = zal[i + 3] = false;
                        zal_etalon[i + 4] = zal[i + 4] = false;
                        zal_etalon[i + 5] = zal[i + 5] = false;
                        break;
                    }
                }
            }
            break;
        case 7:
            for (var i = 0; i < zal_etalon.length; i++) {
                if (zal_etalon[i] == true && zal_etalon[i + 1] == true && zal_etalon[i + 2] == true && zal_etalon[i + 3] == true && zal_etalon[i + 4] == true && zal_etalon[i + 5] == true && zal_etalon[i + 6] == true) {
                    var mess = "Кресло №" + (i + 1) + " свободное и кресло №" + (i + 2) + " свободное и кресло №" + (i + 3) + "Кресло №" + (i + 4) + "свободно и кресло №" + (i + 5) + "свободно и кресло №" + (i + 6) + "свободно и кресло" + (i + 7) + " свободно.Будете брать?";
                    ansver = confirm(mess);
                    if (ansver == true) {
                        document.getElementById("k" + (i + 1)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 1)).title = "Кресло продано";
                        document.getElementById("k" + (i + 2)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 2)).title = "Кресло продано";
                        document.getElementById("k" + (i + 3)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 3)).title = "Кресло продано";
                        document.getElementById("k" + (i + 4)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 4)).title = "Кресло продано";
                        document.getElementById("k" + (i + 5)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 5)).title = "Кресло продано";
                        document.getElementById("k" + (i + 6)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 6)).title = "Кресло продано";
                        document.getElementById("k" + (i + 7)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 7)).title = "Кресло продано";
                        zal_etalon[i] = zal[i] = false;
                        zal_etalon[i + 1] = zal[i + 1] = false;
                        zal_etalon[i + 2] = zal[i + 2] = false;
                        zal_etalon[i + 3] = zal[i + 3] = false;
                        zal_etalon[i + 4] = zal[i + 4] = false;
                        zal_etalon[i + 5] = zal[i + 5] = false;
                        zal_etalon[i + 6] = zal[i + 6] = false;
                        break;
                    }
                }
            }
            break;
        case 8:
            for (var i = 0; i < zal_etalon.length; i++) {
                if (zal_etalon[i] == true && zal_etalon[i + 1] == true && zal_etalon[i + 2] == true && zal_etalon[i + 3] == true && zal_etalon[i + 4] == true && zal_etalon[i + 5] == true && zal_etalon[i + 6] == true && zal_etalon[i + 7] == true) {
                    var mess = "Кресло №" + (i + 1) + " свободное и кресло №" + (i + 2) + " свободное и кресло №" + (i + 3) + "Кресло №" + (i + 4) + "свободно и кресло №" + (i + 5) + "свободно и кресло №" + (i + 6) + "свободно и кресло №" + (i + 7) + "свободно и кресло №" + (i + 8) + " свободно.Будете брать?";
                    ansver = confirm(mess);
                    if (ansver == true) {
                        document.getElementById("k" + (i + 1)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 1)).title = "Кресло продано";
                        document.getElementById("k" + (i + 2)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 2)).title = "Кресло продано";
                        document.getElementById("k" + (i + 3)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 3)).title = "Кресло продано";
                        document.getElementById("k" + (i + 4)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 4)).title = "Кресло продано";
                        document.getElementById("k" + (i + 5)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 5)).title = "Кресло продано";
                        document.getElementById("k" + (i + 6)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 6)).title = "Кресло продано";
                        document.getElementById("k" + (i + 7)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 7)).title = "Кресло продано";
                        document.getElementById("k" + (i + 8)).src = "images/seat_unavail.png";
                        document.getElementById("k" + (i + 8)).title = "Кресло продано";
                        zal_etalon[i] = zal[i] = false;
                        zal_etalon[i + 1] = zal[i + 1] = false;
                        zal_etalon[i + 2] = zal[i + 2] = false;
                        zal_etalon[i + 3] = zal[i + 3] = false;
                        zal_etalon[i + 4] = zal[i + 4] = false;
                        zal_etalon[i + 5] = zal[i + 5] = false;
                        zal_etalon[i + 6] = zal[i + 6] = false;
                        zal_etalon[i + 7] = zal[i + 7] = false;
                        break;
                    }
                }
            }
            break;
    }

    if (ansver == false) {
        alert("Недостаточно мест");
    }
}