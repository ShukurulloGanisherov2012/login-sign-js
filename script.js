function error(){
    let a = document.getElementById("demo").innerHTML;
    let b = document.getElementById("input").value;
    let c = document.getElementById("password").value;
    
    if(b != "shukurulloganisherov5@gmail.com" || c != "shukurullo2012"){
        document.getElementById("demo").innerHTML = "❌ Error email or password incorrect";
        document.querySelector("a").href = "#";
    }else{
        document.getElementById("demo").innerHTML = "✅ Login Successfully";
        document.querySelector("#a").href = "./main.html";
    }
}