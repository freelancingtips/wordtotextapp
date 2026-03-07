const fileInput = document.getElementById("fileInput");
const output = document.getElementById("output");
const dropArea = document.getElementById("dropArea");

async function convert(file){
const buffer = await file.arrayBuffer();
const result = await mammoth.extractRawText({arrayBuffer:buffer});
output.value = result.value;
}

fileInput.addEventListener("change",e=>{
convert(e.target.files[0]);
});

dropArea.addEventListener("dragover",e=>{
e.preventDefault();
});

dropArea.addEventListener("drop",e=>{
e.preventDefault();
const file=e.dataTransfer.files[0];
convert(file);
});

document.getElementById("copyBtn").onclick=()=>{
navigator.clipboard.writeText(output.value);
};

document.getElementById("downloadBtn").onclick=()=>{
const blob=new Blob([output.value],{type:"text/plain"});
const link=document.createElement("a");
link.href=URL.createObjectURL(blob);
link.download="text.txt";
link.click();
};
