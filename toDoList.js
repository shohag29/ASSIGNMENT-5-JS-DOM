const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.onclick = () => {
    window.location = "index.html";
};

const what = document.getElementById("what");
const when = document.getElementById("when");
const duration = document.getElementById("duration");
const addBtn = document.getElementById("addBtn");

let toDoList = [];

addBtn.onclick = () => {
    const input1 = what.value;
    const input2 = when.value;
    const input3 = duration.value;

    if (input1 !== "" &&
        input2 !== "" &&
        input3 !== "") {
        const toDoListNew = {
            what: input1,
            when: input2,
            duration: input3
        };
        toDoList.push(toDoListNew);
        what.value = "";
        when.value = "";
        duration.value = "";

        const back = document.getElementById("back")
        back.innerHTML = ""
        for (const toDoListOne of toDoList) {
            const unordeList = document.createElement("ul");
            back.appendChild(unordeList);
            const list1 = document.createElement("li");
            unordeList.appendChild(list1);
            list1.innerText = `${toDoListOne.what} - ${toDoListOne.when} - ${toDoListOne.duration}`;
            list1.style.boxShadow = "0px 0px 10px #0a4641";
            list1.style.listStyle = "none";
            list1.style.padding = "10px 10px";
            list1.style.borderRadius = "10px";
            list1.style.margin = "10px";
        }
    }
};