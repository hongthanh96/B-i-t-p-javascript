let year = parseInt(prompt("Nhập năm"));
if ( year % 4 == 0){ 
    if (year % 100 == 0){
        if ( year % 400 ==0){
            alert ('Là năm nhuận');
        }
        else{
            alert ('Không phải là năm nhuận');
        }
    }
    else {
        alert ('Là năm nhuận');
    }
}
else {
    alert('Không phải là năm nhuận')
}