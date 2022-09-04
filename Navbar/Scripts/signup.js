let nzdata = JSON.parse(localStorage.getItem("ds")) || []

// let submit=document.getElementById("nzsubmit").addEventListener("click",()=>{
//     nzsubmits();
// }
   
// );


function nzsubmits(){
    let email=document.getElementById("nzsemail").value ;
    let pass=document.getElementById("nzspassword").value;
   
    let obj={
        email,
        pass
    }
    nzdata.push(obj)
    localStorage.setItem("datas",JSON.stringify(nzdata))
    console.log(nzdata)
    alert("SignUp Sucessfully")
    window.location.href="./login.html"

    email=document.getElementById("email").value="" ;
    pass=document.getElementById("password").value="";
}