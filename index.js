
let loginPass = ()=>{
    document.querySelector("#required").innerHTML="";

    let input = document.querySelector("#email").value;

    if(input == ""){

        let abc = document.querySelector("#required");

        let p = document.createElement("p");
        p.innerText = "Required";
        
        abc.append(p);


    }
}

document.querySelector("#password").addEventListener("click", loginPass);

