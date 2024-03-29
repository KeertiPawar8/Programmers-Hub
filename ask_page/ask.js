let token = JSON.parse(localStorage.getItem("token")) || null;
console.log(token);

let forSearch = JSON.parse(localStorage.getItem("search")) || null;
if(!forSearch){
  window.addEventListener("load",()=>{
    get_data("")
  })
}
else{

  window.addEventListener("load",()=>{
    get_data(forSearch)
  })
}


let allData = document.querySelector("#all")

allData.addEventListener("click",()=>{
    get_data("")
})

let search = document.querySelector("#search")

search.addEventListener("click",searchFunc);
function searchFunc(){
  localStorage.removeItem("search");
  let searchbar = document.querySelector("#inp").value;
     get_data(searchbar)
}


let get_data = async (searchbar) => {
  try {
    let data = await fetch(`https://cheerful-earmuffs-newt.cyclic.app/allquestions?titl=${searchbar}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    data = await data.json();
    console.log(data);
    append_data(data);
  } catch (error) {
    console.log(error);
  }
};



let append_data = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach((el) => {
    let answer_div = document.createElement("div");
    answer_div.setAttribute("class", "ans_div");
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.setAttribute("class", "ans_h1");
    h1.innerText = "Topic : " + el.topic;

    let ans = document.createElement("div");
    ans.innerText = el.answer.length + " " + "Answers";

    h1.addEventListener("click", (e) => {
      e.preventDefault();
      myfun(el);
    });

    let h2 = document.createElement("h3");
    h2.innerText = "Question : " + el.question;
    let name = document.createElement("p");
    name.setAttribute("class", "name");
    name.innerText = "asked by" + " " + el.name;
    let p = document.createElement("p");
    let timestamp = el.posted;

    const dateObj = new Date(timestamp);

    // Get the date components
    const year = dateObj.getUTCFullYear();
    const month = dateObj.getUTCMonth() + 1; // add 1 to get month in range of 1-12
    const day = dateObj.getUTCDate();

    // Get the time components
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();

    // Log the date and time components separately
    console.log(`Date: ${day}-${month}-${year}`);
    console.log(`Time: ${hours}:${minutes}`);
    p.innerText =
      `Date: ${day}-${month}-${year}` + " " + `Time: ${hours}:${minutes}`;
    div.append(h1, h2, name, p);

    answer_div.append(ans, div);
    container.append(answer_div);
  });
};

// get_data();

let myfun = (data) => {
  console.log(data._id);
  localStorage.setItem("question_id", JSON.stringify(data._id));
  window.location.href = "./afterquestion.html";
};

let redirect = document.querySelector("#ask");
redirect.addEventListener("click", () => {
  window.location.href = "../question.html";
});

let indexa = document.querySelector(".loga");
indexa.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "../index.html";
});
