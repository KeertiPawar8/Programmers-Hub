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
    h1.onclick = (el) => {
      localStorage.setItem("question_id", JSON.stringify(el._id));
      window.location.href = "./afterquestion.html";
    };
    let h2 = document.createElement("h2");
    h2.innerText = el.question;
    let name = document.createElement("p");
    name.innerText = el.name;
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

    container.append(div);
  });
};

// get_data();
