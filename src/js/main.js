const floors = document.querySelector("#enterFloors");
const lifts = document.querySelector("#enterLifts");
const generateBtn = document.querySelector("#generateBtn");
const inputSection = document.querySelector("#inputSection");
const floor_section = document.querySelector(".floor_section")

function clickHandler(){
    inputSection.style.display = "none";
    for(let i=floors.value;i>=1;i--){

        const btn = document.createElement("div");
        btn.setAttribute("class","btn");
        floor_section.appendChild(btn);
        
        if(i>1){
        const upButton = document.createElement("button");
        upButton.setAttribute("class","upButton");
        upButton.innerText = "UP";
        floor_section.appendChild(upButton);
        btn.appendChild(upButton);
        

        const downButton = document.createElement("button");
        downButton.setAttribute("class","downButton");
        downButton.innerText = "DOWN";
        floor_section.appendChild(downButton);
        btn.appendChild(downButton);

        }else{
        const upButton = document.createElement("button");
        upButton.setAttribute("class","upButton");
        upButton.innerText = "UP";
        floor_section.appendChild(upButton);
        btn.appendChild(upButton);

        }

        


        const level = document.createElement("div");
        level.setAttribute("class","level");
        floor_section.appendChild(level);
        level.innerText = "Floor" + i;

        const floor = document.createElement("div");
        floor.setAttribute("class","floor");
        floor_section.appendChild(floor);


    }

    for(let i=0;i<lifts.value;i++){
        const lift = document.createElement("div");
        floor_section.appendChild(lift);
        lift.setAttribute("class","lift");
    }


}

generateBtn.addEventListener("click",clickHandler);
