const container = document.querySelector(".container")
const checkboxes = document.querySelectorAll("input")
const ballen = document.querySelectorAll(".ball")
console.log(ballen)

function getalignSelf(){
    const aliself = document.getElementsByName('aliself');

    for(let i=0; i<aliself.length; i++){
        if (aliself[i].checked){
            return aliself[i].value;
        }
    }
    return false;
}

ballen.forEach((bal) => {
    bal.addEventListener("click", () =>{
        bal.style.alignSelf = getalignSelf()
        console.log(getalignSelf())
        // bal.classList.toggle("select")
    })
})

checkboxes.forEach((checkbox => {
    checkbox.addEventListener("click", getValues)
}))

function getValues(){
    valueDisplay = checkboxes[0].checked ? "flex" : "block";
    valueDirection = checkboxes[1].checked ? "column" : "row";
    valueWrap = checkboxes[2].checked ? "wrap" : "nowrap";

    valueShrink = checkboxes[3].checked ? 1 : 0;
    valueGrow = checkboxes[4].checked ? 1 : 0;

    valueJustify = getJustify();
    valueAlign = getAlign();

    updateFlex()
}

function getJustify(){
    const justify = document.getElementsByName('justify');

    for(let i=0; i<justify.length; i++){
        if (justify[i].checked){
            return justify[i].value;
        }
    }
    return "Niet gevonden";
}

function getAlign(){
    const align = document.getElementsByName('align');

    for(let i=0; i<align.length; i++){
        if (align[i].checked){
            return align[i].value;
        }
    }
    return "Niet gevonden";
}

function updateFlex(){
    container.style.display = valueDisplay;
    container.style.flexDirection = valueDirection;
    container.style.flexWrap = valueWrap;
    container.style.justifyContent = valueJustify;
    container.style.alignItems = valueAlign;



    let ballen = container.children;
    ballen = [...ballen]

    ballen.forEach((bal) => {
        if(valueAlign == "stretch"){
            bal.style.height = "unset"
        } else{
            bal.style.height = "50px"
        }
        bal.style.flexShrink = valueShrink
        bal.style.flexGrow = valueGrow
    })
}