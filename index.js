let imageTag = document.querySelector("#uv");
    let currentIndex = 0;
    let imageArr = [
      "https://cdn.sstatic.net/Img/product/teams/logos/verizon-media-alt.svg?v=f335b20096b2",
      "https://cdn.sstatic.net/Img/product/teams/logos/microsoft-alt.svg?v=e57319450314",
      "https://cdn.sstatic.net/Img/product/teams/logos/instacart-alt.svg?v=15bd0b39b197",
    "https://cdn.sstatic.net/Img/product/teams/logos/philips-alt.svg?v=7fc60c993103",

    "https://cdn.sstatic.net/Img/product/teams/logos/logitech-alt.svg?v=a99c74b88566",
    "https://cdn.sstatic.net/Img/product/teams/logos/intercom-alt.svg?v=3eda71aed47c",

];
      function myslide(){
        document.getElementById("uv").src=imageArr[currentIndex];
        if(currentIndex < imageArr.length-1){
            currentIndex++;
        }
        else{
            currentIndex=0;
        }
        setTimeout("myslide()",1500);
      }
      window.onload=myslide;

    

   let signup = document.querySelector("#signupme")
   signup.addEventListener("click",myfuncsignup)

   let logout = document.querySelector("#logoutme")
   logout.addEventListener("click",myfunclogout)


   async function myfuncsignup(e){
  e.preventDefault()
   window.location.href = "./log.html"
   }



   
   async function myfunclogout(e){
    e.preventDefault()



   

    console.log(token)
   
    try {
      let data = await fetch("http://localhost:8080/logout", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      data = await data.json();
      console.log(data)
      alert(data.msg)
      if(data.msg =="logout successfull"){
        localStorage.removeItem("token")
        let logouthide = document.querySelector("#logoutme")
       
        logouthide.style.display = "none"   
      }
    } catch (error) {
      console.log(error);
    }

 

     }



     let token =  JSON.parse(localStorage.getItem("token")) || null;
     let logouthide = document.querySelector("#logoutme")
if(!token){

  logouthide.style.display = "none"
}
else{
  logouthide.style.display ="block"
}



let ask = document.querySelector("#askquestionme")
ask.addEventListener("click",(e)=>{
  e.preventDefault()
  if(!token){
     alert("please login first")
  }
  else{

    window.location.href = "./question.html"
  }
})


let allques= document.querySelector("#allques")
allques.addEventListener("click",(e)=>{
  e.preventDefault()
  
  if(!token){
    alert("please login first")
 }
 else{

   window.location.href = "./ask_page/afterquestion.html"

 }
})