$ = document.querySelector.bind(document)
const listTodo = $('.list-todo')
const job = $('input')
const listJobs =  JSON.parse(localStorage.getItem('job')) ?? []


function addJob(){
    let add = $('button')
    add.addEventListener("click", function(){
        itm = job.value
        listJobs.push(itm)
        localStorage.setItem('job', JSON.stringify(listJobs))
        console.log(renderJobs()); 
    });
}

function renderJobs(){
    htmls = listJobs.map(job =>{
        return `<li>${job}</li>`
    })
    return listTodo.innerHTML = htmls.join('') 
}


(function start(){
    document.title = "Hello "
    renderJobs()
    addJob()
    
})()
