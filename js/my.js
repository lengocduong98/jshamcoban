//mảng
// let nV1 = {
//     ten :"duong",
//     luong: 1000

// }
// let nV2 = {
//     ten : "duy",
//     luong : 1000
// }
// let nV3 = {
//     ten : "huy",
//     luong : 500
// }
// let sum = 0;
// for(let i=0;i<arrs.length;i++){
//    sum = arrs[i].luong + sum; 
// }
// alert(sum);

// let nV1 = {};
// prompt=("moi nhap ten",ten.nV1);
// ten.nV1=("");
// luong.nV1=(5000);
// let nV2 = {};
// ten.nV2=("duy");
// luong.nV2=(2000);
// let nV3 = {};
// ten.nV3=("huy");
// luong.nV3=(1000);



// function deleteObj(arrs){
    
//     let  choose =prompt("xoa o vi tri nao ?",);
//         for ( let i=0;i<=length;i++){
//             if(i=choose){
            
//             console.log(arrs.splice(i,1));
//         }
//             else 
//             console.log(arrs.splice(i,1));
//         }

        
// }

// deleteObj(arrs);



// let salaries = {
//     John: 10,
//     Ann: 16,
//     Pete: 13
//   };
//   let sum=0;
// function isEmpty(obj) {
//     for (let key in obj) {   
//       return false;
//     }
//     return true;
//   }
// if(isEmpty(salaries)){
//    alert(`kq ${sum}`);
// }else {
//     for(let luong in salaries){
//         sum=sum+salaries[luong];
//     }
//     alert(`kq ${sum}`);
// }
//----Bài 2----
// let menu = {
//     width: 20,
//     height: 30,
//     title: "My menu"
//   };
// function multiplyNumeric(object) {
//     for(let type in object){
//         if(typeof object[type]=='number'){
//             object[type]=object[type]*2;
//             alert(object[type]);
//         }else {
//         alert(object[type]);
//         }
//     }
// }
// multiplyNumeric(menu);
  


//--------x mũ n-----------
    // hàm
        // function so_mu(x,n){
        //     alert('x mũ n bằng: '+(x**n));           //document.write('Mũ là ' + (x**n));
        // }
        // let so1=prompt("mời nhập hệ số ");
        // let so2=prompt("mời nhập số mũ");
        // so_mu(so1,so2) 
    //k hàm
        // let a=prompt("mời nhập hệ số ");
        // let x=prompt("mời nhập số mũ");
        // c=a**x;
        // alert(c);

// ---yesno question----
    // let ask=(question, yes, no) => {
    //     if (confirm(question)) yes()
    //     else no();
    //   }	
    
    //   ask(
    //     "Do you agree?",
    //     function() { alert("You agreed."); },
    //     function() { alert("You canceled the execution."); }
    //   );



//   ----change for to while----
//   let i=0;
//   while (i<5){
//     alert( `number ${i}!` );
//     i++;
//   }
 


//---------min của 2 số---------
    //hàm
        // function min2so(a,b){
        //     if (a>b)
        //     alert('min của 2 số là: '+(b));
        //     else
        //     alert ('min của 2 số là: '+(a));
        // }
        // let soa=prompt("mời nhập số a");
        // let sob=prompt("mời nhập số b");
        // min2so(soa,sob);
    //k hàm    
        // let a=prompt("mời nhập số a");
        // let b=prompt("mời nhập số b");
        // if (a>b)
        //     alert('min của 2 số là: '+ b);
        // else (a<b)
        //     alert('min của 2 số là: '+ a);

//--------liệt kê các số chia hết cho 2--------------
    // let a=prompt("mời nhập số");
    // i=1;
    // for(i;i<=a;i++)
    // {
    //     if (i%2==0)
    //      alert(i);
    // }

//---------kiểm tra một số có chia hết cho 2 không-------------
    // let a =prompt("mời nhập số");
    // while (a<0)
    // {
    //     a =prompt("mời nhập số",a);}
    // if (kt=a%2==0) 
    //     alert(kt);
    // else
    //     alert(kt);
