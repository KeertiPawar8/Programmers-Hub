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

    