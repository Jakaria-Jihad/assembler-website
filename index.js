let opcode = ["add", "sub", "addi", "subi", "and", "or", "xor"]
let opcode_binary = ["0000", "0001", "0010", "0011", "0100", "0101", "0110"]
let opcode_map = new Map([
    ["add", "0000"],
    ["sub", "0001"],
    ["addi", "0010"],
    ["subi", "0011"],
    ["and", "0100"],
    ["or", "0101"],
    ["xor", "0110"]
])
let register_map = new Map(
    [
        ["$r1", "00"],
        ["$r2", "01"],
        ["$r3", "10"],
        ["$r4", "11"],
    ]
)
function single_opcode_binary_return(com){
    let opcode_register = com.split(' ')
    let register = opcode_register[1].split(',')
    let str = opcode_map.get(opcode_register[0]) + register_map.get(register[0]) + register_map.get(register[1]) + register_map.get(register[2])
    return str
}
function saveDynamicDataToFile(store) {
    let fileName = "output.txt";
    let fileContent = store;
    let myFile = new Blob([fileContent], {type: 'text/plain'});

    window.URL = window.URL || window.webkitURL;
    let dlBtn = document.getElementById("download");

    dlBtn.setAttribute("href", window.URL.createObjectURL(myFile));
    dlBtn.setAttribute("download", fileName);
}
let html_element_input = document.getElementById("opcode_text")
let html_element_button = document.getElementById("convert_button")
html_element_button.addEventListener("click", ()=>{
    let output = "";
    let store = "";
    let lines = html_element_input.value.split('\n')
    let h3 = document.createElement("h3");
    h3.innerHTML = "new";
    document.body.appendChild(h3);
    for (let i = 0; i < lines.length; i++){
        let btn = document.createElement("p");
        output = single_opcode_binary_return(lines[i])+"\n"
        store += output;
        btn.innerHTML = output;
        document.body.appendChild(btn);
    }
    console.log(output)

    saveDynamicDataToFile(store);
})

// add $r2,$r3,$r1
//add $r2,$r3,$r1
// subi $r2,$r3,$r1
// add $r2,$r3,$r1