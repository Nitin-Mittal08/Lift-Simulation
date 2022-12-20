const floors = document.querySelector("#enterFloors");
const lifts = document.querySelector("#enterLifts");
const generateBtn = document.querySelector("#generateBtn");


function clickHandler(){
    for(let i=1;i<=floors.value;i++){
        const floor = document.createElement("div");
        floor.className = "floor";

        const upButton = documnet.createElement("button");
        upButton.className = "upButton";

        const downButton = documnet.createElement("button");
        downButton.className = "downButton";

        const level = document.createElement("div");
        level.className = "level";

        level.innerText = "Floor" + i;


    }

    for(let i=0;i<lifts.value;i++){
        const lift = document.createElement("div");

        lift.className = "lift";
    }
}

generateBtn.addEventListener("click",clickHandler);
