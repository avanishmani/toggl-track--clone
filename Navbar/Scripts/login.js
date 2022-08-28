let data=JSON.parse(localStorage.getItem("datas"))

let sub_btn=document.getElementById("chksubmit")
console.log("amt",sub_btn);
sub_btn.addEventListener("click",()=>{
    checkLogin()
})

function checkLogin(){
    console.log("Naaz")
    let email1=document.getElementById("chkemail").value ;
    let pass1=document.getElementById("chkpass").value;
    let flag=0;
    data.forEach((el)=>{

        if(el.email==email1 && el.pass==pass1){
            alert("Login Sucessfully");
            flag=1;
            chlochle();
            // window.location.replace("../../index.html");
            // return 
        }
    })
    if(flag==0){
        alert("Invalid Crendentials")

    }
    
}
function chlochle(){
    console.log("amt");
    window.location.replace("../../index.html");
}