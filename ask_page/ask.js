let token = JSON.parse(localStorage.getItem("token")) || null;
console.log(token);

let get_data = async () => {
  try {
    let data = await fetch("http://localhost:8080/allquestions", {
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

get_data();

let append_data = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerText = el.topic;
    let h2 = document.createElement("h2");
    h2.innerText = el.question;

    div.append(h1, h2);

    container.append(div);
  });
};

// get_data();
