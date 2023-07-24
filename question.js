let token = JSON.parse(localStorage.getItem("token")) || null;
console.log(token);

let send_data = async () => {
  let topic = document.querySelector(".topic").value;
  let question = document.querySelector(".question").value;
  if (topic == "" || question == "") {
    alert("please fill all the fields");
    return;
  }
  // else {
  let obj = {
    topic,
    question,
  };
  try {
    let data = await fetch(
      "https://cheerful-earmuffs-newt.cyclic.app/createquestion",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(obj),
      }
    );
    data = await data.json();
    console.log(data);
    alert(data.msg);
    window.location.href = "./ask_page/ask.html"
  } catch (error) {
    console.log(error);
  }
  // }
};

let btn1 = document.getElementById("btn1");
btn1.onclick = (e) => {
  e.preventDefault();
  send_data();
};

let more = document.querySelector(".more");
more.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "./index.html";
});
