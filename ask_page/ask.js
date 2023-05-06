let get_data = async () => {
  try {
    let data = await fetch("http://localhost:8080/allquestions");
    data = data.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

get_data();
