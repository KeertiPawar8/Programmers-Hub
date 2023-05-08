let data = [
    {
      "_id": "6458981c91c6cbabdb2b247f",
      "topic": "DSA",
      "question": "stack and queue",
      "userID": "6453ae4a9428e33e4a65c0be",
      "name": "keerti",
      "answer": [
        {
          "name": "keerti",
          "answer": "abcd",
          "userID": "6453ae4a9428e33e4a65c0be",
          "time": "2023-05-08T12:20:27.920Z"
        },
        {
          "name": "keerti",
          "answer": "efgh",
          "userID": "6453ae4a9428e33e4a65c0be",
          "time": "2023-05-08T12:20:46.282Z"
        },
        {
          "name": "keerti",
          "answer": "don't know",
          "userID": "6453ae4a9428e33e4a65c0be",
          "time": "2023-05-08T12:20:57.292Z"
        },
        {
          "name": "keerti",
          "answer": "get to know",
          "userID": "6453ae4a9428e33e4a65c0be",
          "time": "2023-05-08T12:21:08.295Z"
        }
      ],
      "posted": "2023-05-08T06:35:08.733Z",
      "__v": 0
    }
  ]


  
append(data)


async function append(data){
  
let topic = data[0].topic;
let question = data[0].question
console.log(question)
console.log(data)

document.querySelector("#topic").innerText = `Topic : ${topic}`
document.querySelector("#newq").innerText = `Question : ${question}`



let name = data[0].name;


document.querySelector("#name").innerText =`Asked By : ${name}` ;

let timestamp = data[0].posted

const dateObj = new Date(timestamp);

// Get the date components
const year = dateObj.getUTCFullYear();
const month = dateObj.getUTCMonth() + 1; // add 1 to get month in range of 1-12
const day = dateObj.getUTCDate();

// Get the time components
const hours = dateObj.getUTCHours();
const minutes = dateObj.getUTCMinutes();

  document.querySelector("#time").innerText =  ` Asked on : ${day}-${month}-${year} , ${hours}:${minutes}`;

document.querySelector("#totalanswers").innerText = `${data[0].answer.length} Answers`

let answerdata = data[0].answer;
appendanswer(answerdata)

}


async function appendanswer(data){

document.querySelector("#main-container").innerHTML = null;

data.forEach((el) => {

let timestamp = el.time;


const dateObj = new Date(timestamp);

// Get the date components
const year = dateObj.getUTCFullYear();
const month = dateObj.getUTCMonth() + 1; // add 1 to get month in range of 1-12
const day = dateObj.getUTCDate();

// Get the time components
const hours = dateObj.getUTCHours();
const minutes = dateObj.getUTCMinutes();





    let div  = document.createElement("div")
    let divasked = document.createElement("div")
    divasked.setAttribute("id","askedbyanswer")
    let divauthor  = document.createElement("div")
    let head = document.createElement("h4")
    head.setAttribute("id","name")
    head.innerText = `Answered By : ${el.name}`
    divauthor.append(head)
    let divdate  = document.createElement("div")
    let head2 = document.createElement("h4")
    head2.setAttribute("id","time")
    head2.innerText =  ` Answered on : ${day}-${month}-${year} , ${hours}:${minutes}`;
    divdate.append(head2)
    divasked.append(divauthor,divdate)
     let line = document.createElement("hr")
     line.setAttribute("id","line")
     
     let answer = document.createElement("h3")
     answer.innerText = `Ans : ${el.answer}`
     answer.setAttribute("id","answer")
     
     let line2 = document.createElement("hr")
     line2.setAttribute("id","line2")
    document.querySelector("#main-container").append(divasked,line,answer,line2)



});

}