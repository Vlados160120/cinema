var zal=[[true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true]];
var zal_etalon=[[true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true]];
window.onload=function () {
 inizialized();
 document.getElementById("send1").onclick=function () {
     //alert("test");
     sale();
     chek();
 }
    document.getElementById("serch1").onclick=function () {
     //alert("test");
        serch();
    }


};
function inizialized() {
   //alert(zal[0].length);
    for(var r=0; r<zal.length; r++)
    {
        for(var m=0; m<zal[r].length; m++)
        {
        if(zal[r][m]==true)
        {
            document.getElementById("k"+(r+1)+(m+1)).src="images/seat_avail.png";
            document.getElementById("k"+(r+1)+(m+1)).title="Кресло свободно";
            }
        }
    }
}
function rezve(r,m) {
   // alert("test");
 if(zal_etalon[r-1][m-1]==true)
 {
     if (zal[r-1][m-1] == true) {
         document.getElementById("k" + r+m).src = "images/seat_select.png";
         document.getElementById("k" + r+m).title = "Кресло занято";
         zal[r-1][ m-1] = false;
     } else {
         document.getElementById("k" + r+m).src = "images/seat_avail.png";
         document.getElementById("k" + r+m).title = "Кресло свободно";
         zal[r-1][m-1] = true;
     }
 }
}
function sale () {
    for(var r=0; r<zal.length; r++)
    {
        for(var m=0; m<zal[r].length; m++){
        if (zal[r][m]==false)
        {
            document.getElementById("k"+(r+1)+(m+1)).src="images/seat_unavail.png";
            document.getElementById("k"+(r+1)+(m+1)).title="Кресло продано";
            zal_etalon[r][m]=zal[r][m];
            }
        }
    }
}
 function serch() {
    var namber = parseInt(document.getElementById("name1").value)
    var ansver = false;
    switch (namber) {
        case 1:
            for (var r = 0; r < zal_etalon.length; r++) {
                for (var m = 0; m < zal_etalon[r].length; m++) {
                    /*
                    if (zal_etalon[r][m] == true) {
                        var mess = "Кресло №" + (r + 1) + (m + 1) + "Свободно.Будете брать ?";
                        ansver = confirm(mess);
                        if (ansver == true) {
                            document.getElementById("k" + (r + 1) + (m + 1)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 1)).title = "Кресло продано";
                            zal_etalon[r][m] = zal[r][m] = false;
                            break;
                        }
                    }*/
                    ansver = serch1(r,m,namber);
                    if(ansver==true){
                        break;
                    }
                }
                if (ansver == true) {
                    break;
                }
            }
            break;
        case 2:
            for (var r = 0; r < zal_etalon.length; r++) {
                for (var m = 0; m < zal_etalon[r].length; m++) {
                    /*
                    if (zal_etalon[r][m] == true && zal_etalon[r][m+1] == true) {
                        var mess = "Кресло№" + (r + 1) + (m + 1) + "Свободное и кресло №" + (r + 1) + (m + 2) + "Свободно.будете брать?";
                        ansver = confirm(mess);
                        if (ansver == true) {
                            document.getElementById("k" + (r + 1) + (m + 1)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 1)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 2)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 2)).title = "Кресло продано";
                            zal_etalon[r][m] = zal[r][m] = false;
                            zal_etalon[r ][m + 1] = zal[r][m + 1] = false;
                            break;
                        }
                    }*/
                    ansver = serch1(r,m,namber);
                    if(ansver==true){
                        break;
                    }
                }
                if (ansver == true) {
                    break;
                }
            }
            break;
        case 3:
            for(var r=0; r<zal_etalon.length; r++)
            {
                for(var m=0; m<zal_etalon[r].length; m++){

                /*    if (zal_etalon[r][m] == true && zal_etalon[r][m+1] == true && zal_etalon[r][m+2] == true) {
                        var mess = "Кресло№" + (r + 1) + (m + 1) + "Свободное и кресло №" + (r + 1) + (m + 2) + "свободное и кресло" + (r + 1) + (m + 3) + "Свободно.будете брать?";
                        ansver = confirm(mess);
                        if (ansver == true) {
                            document.getElementById("k" + (r + 1) + (m + 1)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 1)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 2)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 2)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 3)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 3)).title = "Кресло продано";
                            zal_etalon[r][m] = zal[r][m] = false;
                            zal_etalon[r][m + 1] = zal[r][m + 1] = false;
                            zal_etalon[r][m + 2] = zar[r][m + 2] = false;
                            break;
                        }
                    }*/
              ansver = serch1(r,m,namber);
              if(ansver==true){
                  break;
              }
                }

                if (ansver==true)
                {
                    break;
                }
            }
            break;
        case 4:
            for(var r=0; r<zal_etalon.length; r++)
            {
                for(var m=0; m<zal_etalon[r].length; m++) {
                    /*
                     if (zal_etalon[r][m] == true && zal_etalon[r][m+1] == true && zal_etalon[r][m+2] == true && zal_etalon[r][m+3] == true) {
                     var mess = "Кресло№" + (r + 1) + (m + 1) + "Свободное и кресло №" + (r + 1) + (m + 2) + "свободное и кресло" + (r + 1) + (m + 3) + "свободное и кресло"+(r+1)+(m+4)+"Свободно.будете брать?";
                     ansver = confirm(mess);
                     if (ansver == true) {
                     document.getElementById("k" + (r + 1) + (m + 1)).src = "images/seat_unavail.png";
                     document.getElementById("k" + (r + 1) + (m + 1)).title = "Кресло продано";
                     document.getElementById("k" + (r + 1) + (m + 2)).src = "images/seat_unavail.png";
                     document.getElementById("k" + (r + 1) + (m + 2)).title = "Кресло продано";
                     document.getElementById("k" + (r + 1) + (m + 3)).src = "images/seat_unavail.png";
                     document.getElementById("k" + (r + 1) + (m + 3)).title = "Кресло продано";
                     document.getElementById("k" + (r + 1) + (m + 4)).src = "images/seat_unavail.png";
                     document.getElementById("k" + (r + 1) + (m + 4)).title = "Кресло продано";
                     zal_etalon[r][m] = zal[r][m] = false;
                     zal_etalon[r][m + 1] = zal[r][m + 1] = false;
                     zal_etalon[r][m + 2] = zal[r][m + 2] = false;
                     zal_etalon[r][m + 3] = zal[r][m + 3] = false;
                     break;
                     }
                     }
                     }*/
                    ansver = serch2(r, m, namber);
                    if (ansver == true) {
                        break;
                    }
                }
                if (ansver==true)
                {
                    break;
                }
            }
            break;
        case 5:
            for(var r=0; r<zal_etalon.length; r++)
            {
                for(var m=0; m<zal_etalon[r].length; m++){
                    /*
                    if (zal_etalon[r][m] == true && zal_etalon[r][m+1] == true && zal_etalon[r][m+2] == true && zal_etalon[r][m+3] == true && zal_etalon[r][m+4] == true) {
                        var mess = "Кресло№" + (r + 1) + (m + 1) + "Свободное и кресло №" + (r + 1) + (m + 2) + "свободное и кресло" + (r + 1) + (m + 3) + "свободное и кресло"+(r+1)+(m+4)+"свободное и кресло"+(r+1)+(m+5)+"Свободно.будете брать?";
                        ansver = confirm(mess);
                        if (ansver == true) {
                            document.getElementById("k" + (r + 1) + (m + 1)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 1)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 2)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 2)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 3)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 3)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 4)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 4)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 5)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 5)).title = "Кресло продано";
                            zal_etalon[r][m] = zal[r][m] = false;
                            zal_etalon[r][m + 1] = zal[r][m + 1] = false;
                            zal_etalon[r][m + 2] = zal[r][m + 2] = false;
                            zal_etalon[r][m + 3] = zal[r][m + 3] = false;
                            zal_etalon[r][m + 4] = zal[r][m + 4] = false;
                            break;
                        }
                    }*/
                    ansver = serch1(r,m,namber);
                    if(ansver==true){
                        break;
                    }
                }
                if (ansver==true)
                {
                    break;
                }
            }
            break;
        case 6:
            for(var r=0; r<zal_etalon.length; r++)
            {
                for(var m=0; m<zal_etalon[r].length; m++){
                    /*
                    if (zal_etalon[r][m] == true && zal_etalon[r][m+1] == true && zal_etalon[r][m+2] == true && zal_etalon[r][m+3] == true && zal_etalon[r][m+4] == true && zal_etalon[r][m+5] == true) {
                        var mess = "Кресло№" + (r + 1) + (m + 1) + "Свободное и кресло №" + (r + 1) + (m + 2) + "свободное и кресло" + (r + 1) + (m + 3) + "свободное и кресло"+(r+1)+(m+4)+"свободное и кресло"+(r+1)+(m+5)+"свободное и кресло"+(r+1)+(m+6)+"Свободно.будете брать?";
                        ansver = confirm(mess);
                        if (ansver == true) {
                            document.getElementById("k" + (r + 1) + (m + 1)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 1)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 2)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 2)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 3)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 3)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 4)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 4)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 5)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 5)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 6)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 6)).title = "Кресло продано";
                            zal_etalon[r][m] = zal[r][m] = false;
                            zal_etalon[r][m + 1] = zal[r][m + 1] = false;
                            zal_etalon[r][m + 2] = zal[r][m + 2] = false;
                            zal_etalon[r][m + 3] = zal[r][m + 3] = false;
                            zal_etalon[r][m + 4] = zal[r][m + 4] = false;
                            zal_etalon[r][m + 5] = zal[r][m + 5] = false;
                            break;
                        }
                    }*/
                    ansver = serch1(r,m,namber);
                    if(ansver==true){
                        break;
                    }
                }
                if (ansver==true)
                {
                    break;
                }
            }
            break;
        case 7:
            for(var r=0; r<zal_etalon.length; r++)
            {
                for(var m=0; m<zal_etalon[r].length; m++){
                    /*
                    if (zal_etalon[r][m] == true && zal_etalon[r][m+1] == true && zal_etalon[r][m+2] == true && zal_etalon[r][m+3] == true && zal_etalon[r][m+4] == true && zal_etalon[r][m+5] == true && zal_etalon[r][m+6] == true) {
                        var mess = "Кресло№" + (r + 1) + (m + 1) + "Свободное и кресло №" + (r + 1) + (m + 2) + "свободное и кресло" + (r + 1) + (m + 3) + "свободное и кресло"+(r+1)+(m+4)+"свободное и кресло"+(r+1)+(m+5)+"свободное и кресло"+(r+1)+(m+6)+"свободное и кресло"+(r+1)+(m+7)+"Свободно.будете брать?";
                        ansver = confirm(mess);
                        if (ansver == true) {
                            document.getElementById("k" + (r + 1) + (m + 1)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 1)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 2)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 2)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 3)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 3)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 4)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 4)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 5)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 5)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 6)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 6)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 7)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 7)).title = "Кресло продано";
                            zal_etalon[r][m] = zal[r][m] = false;
                            zal_etalon[r][m + 1] = zal[r][m + 1] = false;
                            zal_etalon[r][m + 2] = zal[r][m + 2] = false;
                            zal_etalon[r][m + 3] = zal[r][m + 3] = false;
                            zal_etalon[r][m + 4] = zal[r][m + 4] = false;
                            zal_etalon[r][m + 5] = zal[r][m + 5] = false;
                            zal_etalon[r][m + 6] = zal[r][m + 6] = false;
                            break;
                        }
                    }*/
                    ansver = serch1(r,m,namber);
                    if(ansver==true){
                        break;
                    }
                }
                if (ansver==true)
                {
                    break;
                }
            }
            break;

        case 8:
            for(var r=0; r<zal_etalon.length; r++)
            {
                for(var m=0; m<zal_etalon[r].length; m++){
                    /*
                    if (zal_etalon[r][m] == true && zal_etalon[r][m+1] == true && zal_etalon[r][m+2] == true && zal_etalon[r][m+3] == true && zal_etalon[r][m+4] == true && zal_etalon[r][m+5] == true && zal_etalon[r][m+6] == true && zal_etalon[r][m+7] == true) {
                        var mess = "Кресло№" + (r + 1) + (m + 1) + "Свободное и кресло №" + (r + 1) + (m + 2) + "свободное и кресло" + (r + 1) + (m + 3) + "свободное и кресло"+(r+1)+(m+4)+"свободное и кресло"+(r+1)+(m+5)+"свободное и кресло"+(r+1)+(m+6)+"свободное и кресло"+(r+1)+(m+7)+"свободное и кресло"+(r+1)+(m+8)+"Свободно.будете брать?";
                        ansver = confirm(mess);
                        if (ansver == true) {
                            document.getElementById("k" + (r + 1) + (m + 1)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 1)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 2)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 2)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 3)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 3)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 4)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 4)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 5)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 5)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 6)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 6)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 7)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 7)).title = "Кресло продано";
                            document.getElementById("k" + (r + 1) + (m + 8)).src = "images/seat_unavail.png";
                            document.getElementById("k" + (r + 1) + (m + 8)).title = "Кресло продано";
                            zal_etalon[r][m] = zal[r][m] = false;
                            zal_etalon[r][m + 1] = zal[r][m + 1] = false;
                            zal_etalon[r][m + 2] = zal[r][m + 2] = false;
                            zal_etalon[r][m + 3] = zal[r][m + 3] = false;
                            zal_etalon[r][m + 4] = zal[r][m + 4] = false;
                            zal_etalon[r][m + 5] = zal[r][m + 5] = false;
                            zal_etalon[r][m + 6] = zal[r][m + 6] = false;
                            zal_etalon[r][m + 7] = zal[r][m + 7] = false;
                            break;
                        }
                    }*/
                    ansver = serch1(r,m,namber);
                    if(ansver==true){
                        break;
                    }
                }
                if (ansver==true)
                {
                    break;
                }
            }
            break;


    }
    if (ansver == false) {
        alert("Недостаточно мест");
    }
}
function serch1(r,pozition,kol_mest) {
    var status_creslo=true;
    var ansver=false;
    var namber=0;
    for(var i=pozition; i<(pozition+kol_mest); i++){
        if(zal_etalon[r][i]==true)
        {
            status_creslo=true;
            namber++;
        }
        else {
            status_creslo=false;
            namber=0;
        }
    }
    if (status_creslo==true && namber==kol_mest)
    {
        var mess="В ряду №"+(r+1)+" Место с №"+(pozition+1)+" По" +(pozition+kol_mest)+"Свободно. Будете брать?";
        ansver=confirm(mess);
        if (ansver==true)
        {
         for(var i=pozition; i<(pozition+kol_mest); i++)
         {
             document.getElementById("k"+(r+1)+(i+1)).src="images/seat_unavail.png";
             document.getElementById("k"+(r+1)+(i+1)).title="Кресло продано";
             zal_etalon[r][i]=zal[r][i]=false;
         }
        }

    }
    return ansver;
}
function serch2(r,pozition,poisc) {
    var status_creslo=true;
    var ansver=false;
    var namber=0;
    for(var i=pozition; i<(pozition+poisc); i++)
    {
        if (zal_etalon[r][i]==true)
        {
            status_creslo=true;
            namber++;
        }
        else {
            status_creslo=false;
            namber=0;
        }
    }
    if(status_creslo==true && namber==poisc)
    {
        var mess="В ряду №"+(r+1)+" Место с №"+(pozition+1)+" По" +(pozition+poisc)+"Свободно. Будете брать?";
        ansver=confirm(mess);
        if (ansver==true)
        {
            for( var i=pozition; i<(pozition+poisc); i++)
            {
                document.getElementById("k"+(r+1)+(i+1)).src="images/seat_unavail.png";
                document.getElementById("k"+(r+1)+(i+1)).title="Кресло продано";
                zal_etalon[r][i]=zal[r][i]=false;
            }
        }
    }
    return ansver;
}
function chek() {
    var total_sum=0;
    var r1_price=70;
    var r2_price=100;

    var r4_price=120;
    var r5_price=150;
    for( var r=0; r<zal_etalon.length; r++) {
        for (var m = 0; m < zal_etalon[r].length; m++) {
            if (zal_etalon[r][m] == false && r==0) {
                total_sum=total_sum+r1_price;

            }else if(zal_etalon[r][m]==false && r==1)
            {
                total_sum=total_sum+r2_price;
            }else if(zal_etalon[r][m]==false && r==2)
            {
                total_sum=total_sum+r2_price;
            }
            else if (zal_etalon[r][m]==false  && r==3){
                total_sum=total_sum+r4_price;
            }else if (zal_etalon[r][m]==false && r==4)
            {
                total_sum=total_sum+r5_price;
            }
        }
    }
    document.getElementById("chek1").innerHTML=total_sum;

}
