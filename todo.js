const title=document.querySelector("#title")
const description=document.querySelector("#description")
const form= document.querySelector("form")
const container= document.querySelector(".container")

let tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]
showAllTasks()
 
function showAllTasks() {
    tasks.forEach((value,index)=>{
        const div= document.createElement("div");
        div.setAttribute("class","task");

        const innerDiv= document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerHTML = value.title;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerText=value.description;
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class","btnDelete");
        btn.innerHTML = "-";

        btn.addEventListener("click",()=>{
            removeTasks()
            localStorage.setItem("tasks",JSON.stringify(tasks))

            tasks.splice(index,1)
            //console.log(tasks)
            showAllTasks()
        })

        div.append(btn);
        container.append(div);
 
    })
}

function removeTasks(){
    tasks.forEach(()=>{
        const div = document.querySelector(".task")
        div.remove()
    })
    
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    removeTasks()
    tasks.push({
        title:title.value,
        description:description.value,
    })

    localStorage.setItem("tasks",JSON.stringify(tasks))
    showAllTasks()

    title.value="",
    description.value=""
    //console.log(tasks)
})