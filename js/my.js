//--------x mũ n-----------
    // hàm
        function so_mu(x,n){
            alert('x mũ n bằng: '+(x**n));           //document.write('Mũ là ' + (x**n));
        }
        let so1=prompt("mời nhập hệ số ");
        let so2=prompt("mời nhập số mũ");
        so_mu(so1,so2)
    //k hàm
        // let a=prompt("mời nhập hệ số ");
        // let x=prompt("mời nhập số mũ");
        // c=a**x;
        // alert(c);

//---------min của 2 số---------
    //hàm
        function min2so(a,b){
            if (a>b)
            alert('min của 2 số là: '+(b));
            else
            alert ('min của 2 số là: '+(a));
        }
        let soa=prompt("mời nhập số a");
        let sob=prompt("mời nhập số b");
        min2so(soa,sob);
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
