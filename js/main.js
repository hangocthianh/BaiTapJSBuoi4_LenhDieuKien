// 1. Viết chương trình xuất 3 số theo thứ tự tăng dần.
// Mô hình 3 khối
// Khối 1: Có 3 số num1, num2, num3
// Khối 2:
// - Bước 1: lấy giá trị của 3 số từ form người dùng nhập
// - Bước 2: Nếu num1 lớn nhất: so sánh num2 và num3: 
// nếu num2>num3 thì thứ tự (tt) là num3, num2, num1
// nếu num2<num3 thì thứ tự (tt) là num2, num3, num1
// - Bước 3: Nếu num2 lớn nhất: so sanh num1 và num3
// nếu num1>num3 thì thứ tự (tt) là num3, num1, num2
// nếu num1<num3 thì thứ tự (tt) là num1, num3, num2
// - Bước 4: Nếu num3 lớn nhất: so sánh num1 và num2
// nếu num2>num1 thì thứ tự (tt) là num1, num2, num3
// nếu num2<num1 thì thứ tự (tt) là num2, num1, num3
// hiện ra thứ tự các số
// Khối 3: 3 số theo thứ tự tăng dần

function sapXep(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    var tt = "";

    if(num1 >= num2 && num1 >= num3){
        if(num2>num3){
            tt = num3 + ', ' + num2 +', '+ num1;
        } else {
            tt = num2+', '+ num3 + ', '+ num1;
        }
    } else if(num2 >= num1 && num2 >= num3){
        if(num1>num3){
            tt = num3 +', '+ num1 + ', '+ num2;
        } else {
            tt = num1 +', '+ num3 + ', '+ num2;
        }
    } else if (num3 >= num2 && num3 >= num1){
        if(num1>num2){
            tt = num2 +', '+ num1 + ', '+ num3;
        } else {
            tt = num1 +', '+ num2 + ', '+ num3;
        } 
    }      
    document.getElementById("sapXep").innerHTML = tt ;
}
document.getElementById("btnsapXep").onclick = sapXep;


// 2. Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm.
//Mô hình 3 khối:
// Khối 1: Gia đình có 4 thành viên: Bố (B), mẹ (M), anh trai (A), em gái (E).
// Khối 2:
// - Bước 1: lấy giá trị người dùng chọn ở form.
// - Bước 2: kiểm tra là thành viên nào: 
// Nếu là bố (B) thì in ra Chào Bố!
// Nếu là mẹ (M) thì in ra Chào mẹ!
// Nếu là anh trai (A) thì in ra Chào anh trai!
// Nếu là em gái (E) thì in ra Chào em gái!
// Khối 3: lời chào với đúng thành viên

function hello(){
    var member = document.getElementById("member").value;
    switch (member){
        case 'B':
            greeting ="Xin chào Bố!";
            break;
        case 'M':
            greeting ="Xin chào Mẹ!";
            break;
        case 'A':
            greeting ="Xin chào Anh Trai!";
            break;
        case 'E':
            greeting ="Xin chào Em Gái!";
            break;
    }
    document.getElementById("greeting").innerHTML = greeting;
}
document.getElementById("btnHello").onclick = hello;


// 3. Xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn
// Mô hình 3 khối
// Khối 1: có 3 số nguyên: number1, number2, number3
// Khối 2:
// - Bước 1: lấy giá trị của 3 số từ form người dùng nhập;
// số lượng số lẻ odd
// số lượng số chẵn even
// - Bước 2: kiểm tra các số có chia hết cho 2 không
// Nếu Number1 % 2 == 0 thì even++; ngươc lại odd++;
// Nếu Number2 % 2 == 0 thì even++; ngươc lại odd++;
// Nếu Number3 % 2 == 0 thì even++; ngươc lại odd++;
// in ra số odd và even
// Khối 3: số lượng số lẻ và số lượng số chẵn

function oddEven(){
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    var number3 = Number(document.getElementById("number3").value);
    var odd = 0;
    var even = 0;

    if(number1%2 == 0){
        even++;
    } else { odd++;
    }
    if(number2%2 == 0){
        even++;
    } else { odd++;
    }
    if(number3%2 == 0){
        even++;
    } else { odd++;
    }
    document.getElementById("oddEven").innerHTML = "Có " + odd + " số lẻ và " + even +  " số chẵn";
}
document.getElementById("btnOddEven").onclick = oddEven;

// 4. Hãy cho biết đó là tam giác gì?
// Khối 1:
// 3 cạnh tam giác: edge1, edge2, edge3
// - loại tam giá (tri)
// Khối 2:
// - Bước 1: lấy giá trị 3 cạnh tam giác từ form người dùng nhập
// - Bước 2: So sánh các cạnh:
// Nếu các cạnh bằng nhau (edge1 == edge2 == edge3) thì in ra đây là tam giác đều
// Nếu có 2 cạnh bằng nhau (edge1 == edge2) or (edge1 == edge3) or (edge2 == edge3) thì in ra đây là tam giác cân
// - Bước 3: Các cạnh khác nhau thì kiêm tra các cạnh có thỏa biểu thức pytago a2 + b2 = c2 không?
// - Bước 4: in ra kết qủa loại tam giác
// Khối 3: Kết quả tam giác cân hay đều hay vuông

function triangleType(){
    var edge1 = Number(document.getElementById("edge1").value);
    var edge2 = Number(document.getElementById("edge2").value);
    var edge3 = Number(document.getElementById("edge3").value);
    var tri = 0;

    if ((edge1 == edge2) && (edge2 == edge3)){
        tri = "Đây là tam giác đều";
    } else if ((edge1 == edge2) || (edge1 == edge3) || (edge2 == edge3)){
        tri = "Đây là tam giác cân";
    } else if ((Math.pow(edge1,2) + Math.pow(edge2,2) == Math.pow(edge3,2)) || (Math.pow(edge2,2) + Math.pow(edge3,2) == Math.pow(edge1,2)) || (Math.pow(edge1,2) + Math.pow(edge3,2) == Math.pow(edge2,2))){
        tri = "Đây là tam giác vuông";
    } else {
        tri = "Đây là một loại tam giác nào đó";
    }
    
    document.getElementById("triangle").innerHTML = tri;
}
document.getElementById("btnTriangle").onclick = triangleType;



// Viết chương trình tìm ngày, tháng, năm của ngày tiếp theo và ngày trước đó.
function dayBefore(){
    var day = Number(document.getElementById("day").value);
    var month = Number(document.getElementById("month").value);
    var year = Number(document.getElementById("year").value);

    if(month == 1){
        if(day == 1){
            day = 31;
            month = 12;
            year = year - 1;
        } else if (day == 31){
            day = day - 1;
            month = month;
            year = year;
        } else if (day > 1 && day < 31){
            day= day - 1;
            month= month;
            year = year;
        } else {
            day = "Ngày không đúng";
        }
    }else if(month == 2){
        if(day == 1){
            day= 31;
            month = month -1;
            year = year;
        }
        else if( day == 28){
            day = day -1;
            month = month;
            year = year;
        }
        else if(day>1 && day <28){
            day = day - 1;
            month = month;
            year= year;
        }else {
            day = "Ngày không đúng";
        }
    }else if (month == 12){
        if(day ==1){
            day= 30;
            month = month -1;
            year = year;
        }else if (day == 31){
            day = day - 1;
            month = month;
            year = year;
        }else if (day > 1 && day < 31){
            day = day - 1;
            month = month;
            year = year;
        }else {
            day = "Ngày không đúng";
        }
    }else if (month == 4 || month == 6 || month == 9 ||month == 11){
        if(day ==1){
            day = 31;
            month = month - 1;
            year = year;
        }else if(day == 30){
            day = day - 1;
            month = month;
            year = year;
        }else if(day > 1 && day < 30){
            day = day - 1;
            month = month;
            year = year;
        }else {
            day = "Ngày không đúng";
        }            
    } else if (month== 5 || month == 10 || month == 7){
        if(day ==1){
            day = 30;
            month = month - 1;
            year = year;
        }else if(day == 31){
            day = day - 1;
            month = month;
            year = year;
        }else if(day > 1 && day < 31){
            day = day - 1;
            month = month;
            year = year;
        }else {
            day = "Ngày không đúng";
        }
    } else if (month == 3){
        if(day ==1){
            day = 28;
            month = month - 1;
            year = year;
        }else if(day == 31){
            day = day - 1;
            month = month;
            year = year;
        }else if(day > 1 && day < 31){
            day = day - 1;
            month = month;
            year = year;
        }else {
            day = "Ngày không đúng";
        }
    } else if(month ==8){
        if(day ==1){
            day = 31;
            month = month - 1;
            year = year;
        }else if(day == 31){
            day = day - 1;
            month = month;
            year = year;
        }else if(day > 1 && day < 31){
            day = day - 1;
            month = month;
            year = year;
        }else {
            day = "Ngày không đúng";
        }
    } else {
        month = "Tháng không đúng!";
    }
    document.getElementById("before").style.display = "inline";
    document.getElementById("after").style.display = "none";
    document.getElementById("before").innerHTML = "Ngày hôm qua là: " + day + "/"+ month+ "/"+ year;
}
document.getElementById("btnBefore").onclick = dayBefore;

function dayAfter(){
    var day = Number(document.getElementById("day").value);
    var month = Number(document.getElementById("month").value);
    var year = Number(document.getElementById("year").value);

    if(month == 1){
        if(day == 1){
            dayBefore = 31;
            monthBefore = 12;
            yearBefore = year - 1;
            dayAfter = day + 1;
            monthAfter = month;
            yearAfter = year;
        } else if (day == 31){
            dayBefore = day - 1;
            monthBefore = month;
            yearBefore = year;
            dayAfter = 1;
            monthAfter = month + 1;
            yearAfter = year;
        } else if (day > 1 && day < 31){
            dayBefore = day - 1;
            monthBefore = month;
            yearBefore = year;
            dayAfter = day + 1;
            monthAfter = month;
            yearAfter = year;
        } else {
            day = "Ngày không đúng";
        }
    }else if(month == 2){
        if(day == 1){
            day = day + 1;
            month = month;
            year = year;
        }
        else if( day == 28){
            day = 1;
            month = month+1;
            year = year;
        }
        else if(day>1 && day <28){
            day = day + 1;
            month = month;
            year = year;
        }else {
            day = "Ngày không đúng";
        }
        
    }else if (month == 12){
        if(day ==1){
            day = day + 1;
            month = month;
            year = year;
        }else if (day == 31){
            day = 1;
            month = 1;
            year = year + 1;
        }else if (day > 1 && day < 31){
            day = day + 1;
            month = month;
            year = year;
        }else {
            day = "Ngày không đúng";
        }
    }else if (month == 4 || month == 6 || month == 9 ||month == 11){
        if(day ==1){
            day = day + 1;
            month = month ;
            year = year;
        }else if(day == 30){
            day = 1;
            month = month +1;
            year = year;
        }else if(day > 1 && day < 30){
            day = day + 1;
            month = month;
            year = year;
        }else {
            day = "Ngày không đúng";
        }            
    } else if (month== 5 || month == 10 || month == 7){
        if(day ==1){
            day = day + 1;
            month = month ;
            year = year;
        }else if(day == 31){
            day = 1;
            month = month +1;
            year = year;
        }else if(day > 1 && day < 31){
            day = day + 1;
            month = month;
            year = year;
        }else {
            day = "Ngày không đúng";
        }
    } else if (month == 3){
        if(day ==1){
            day = day + 1;
            month = month ;
            year = year;
        }else if(day == 31){
            day = 1;
            month = month +1;
            year = year;
        }else if(day > 1 && day < 31){
            day = day + 1;
            month = month;
            year = year;
        }else {
            day = "Ngày không đúng";
        }
    } else if(month ==8){
        if(day ==1){
            day = day + 1;
            month = month ;
            year = year;
        }else if(day == 31){
            day = 1;
            month = month +1;
            year = year;
        }else if(day > 1 && day < 31){
            day = day + 1;
            month = month;
            year = year;
        }else {
            day = "Ngày không đúng";
        }
    } else {
        var month = "Tháng không đúng!";
    }
    document.getElementById("after").style.display = "inline"
    document.getElementById("before").style.display = "none";
    document.getElementById("after").innerHTML = "Ngày mai là: " + day + "/"+ month + "/"+ year;
}
document.getElementById("btnAfter").onclick = dayAfter;



