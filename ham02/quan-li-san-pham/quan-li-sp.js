let array = ['Sony xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi note 4', 'Apple iphone 6s', 'Apple Mi 5s Plus', 'Apple iphone 6s', 'Xiaomi Mi 5s Plus', 'Apple iphone 8 Plus']
let inHang = ''
let len = array.length;
let i,j,k;
for (i = 0; i < len; i++) {
    taoHang(i);
}
document.getElementById('section').innerHTML = inHang
document.getElementById('demo').innerHTML = array.length + ' products';


function taoHang(i) {
    inHang += '<div class="row" id = "row"><div class="col-8">' + array[i] 
    + '</div><div class = "col-2" ><button id = suachua onclick="editt(' + i + ')">Edit</button></div><div class = "col-2"><button id = xoa onclick="deletee(' + i + ')">Delete</button></div></div><br> '
}


function addProduct() {
    let addtensp = document.getElementById('new').value;
    inHang = ''
    array.push(addtensp);
    len++;
    
    for (i = 0; i < len; i++) {
        taoHang(i);
    }
    document.getElementById('section').innerHTML = inHang;
    document.getElementById('demo').innerHTML = array.length + ' products';



}
 function editt(i){
     inHang = ''
     let y = prompt('NHập vào thứ muốn sửa');
     if (y === '' || y === null)
     return; 
     array[i] = y;
     for (k = 0; k < array.length; k++) {
        taoHang(k);
    }
     
    document.getElementById('section').innerHTML = inHang
    document.getElementById('demo').innerHTML = array.length + ' products';

}




function deletee(i){
    let a = confirm('Bạn có muốn xóa không');
    if(a === true){
        array.splice(i,1);
        inHang='';
        for (j = 0; j < array.length; j++) {
            taoHang(j);
        }
        document.getElementById('section').innerHTML = inHang
        document.getElementById('demo').innerHTML = array.length + ' products';

    }
    else{
        return'cancel';
    }
    
}
    // inHang = '';
    // array1 = [];
    // for (k = 0; k <len; k++){
    //     if ( k === i){
    //         continue;
    //     }
    //     array1.push(array[k])
    //     taoHang(array[k])
    // }
    //   array = array1
//     for (m = len; m > i; m--)
//     for (j = 0; j < array.length; j++){
//         taoHang(array[j]);
//     }
//     document.getElementById('section').innerHTML = inHang;
//     for(k = i+1; k < len ; k++){
//         taoHang(array[k]);
//     }
//     document.getElementById('section').innerHTML = inHang;
//     len--;
//     console.log(array.length);
// }


