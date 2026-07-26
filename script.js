const noOfSub = document.getElementById("noofsub");
const subjectsDiv = document.getElementById("subjects");
let result = document.getElementById("results");
noOfSub.addEventListener("input", function () {
    subjectsDiv.innerHTML = ""; // Clear previous inputs
    result.innerHTML="";
    let n = parseInt(this.value);
    if (!isNaN(n) && n > 0) {
        for (let i = 1; i <= n; i++) {
            const div = document.createElement("div");
            div.innerHTML = `
                <label>Subject ${i}: </label>
                <input type="text" placeholder="Enter subject name" id="subject${i}"> 
                <input type="number" placeholder="Enter marks" id="marks${i}">
                <input type="number" placeholder="Enter max marks" id="maxmarks${i}">`;
            subjectsDiv.appendChild(div);
        }
        const div = document.createElement("div");
        div.innerHTML = ` <input type="button" value="Calculate Grade" id="gradeBtn">`
        subjectsDiv.appendChild(div);
        const gradeBtn = document.getElementById("gradeBtn");
        gradeBtn.addEventListener("click", calculateGrade);
       
    }
    else {
        subjectsDiv.innerHTML = "<p>Please enter a valid number of subjects.</p>";
    }
});

function calculateGrade(){
    let totalMarks = 0;
    let totalMaxMarks = 0;
    let n = parseInt(noOfSub.value);
    let buf=document.createElement("div");
    let m,mm;
    buf.innerHTML="<p>Results</p>";
    let X=true;
    for(let i=1;i<=n;i++){
        m=parseInt(document.getElementById(`marks${i}`).value);
        mm=parseInt(document.getElementById(`maxmarks${i}`).value);
        if(m>mm){
            X=false;
            break;
        }
    }
    if(X===true){
        for(let i=1;i<=n;i++){
            m=parseInt(document.getElementById(`marks${i}`).value);
            mm=parseInt(document.getElementById(`maxmarks${i}`).value);
            totalMarks+=m
            totalMaxMarks+=mm
            buf.innerHTML+=`<p>percentage in ${document.getElementById(`subject${i}`).value}: ${(m*100/mm).toFixed(2)}%</p>`;
        }
        let persentage=(totalMarks*100/totalMaxMarks).toFixed(2)
        let grade="F";
        if (persentage>=90){grade="A+";}
        else if(persentage>=80){grade="A";}
        else if(persentage>=70){grade="B";}
        else if(persentage>=60){grade="C";}
        else if(persentage>=50){grade="A";}
        buf.innerHTML+=`<p>total marks: ${totalMarks} out of ${totalMaxMarks}</p>`;
        if (grade=="F"){buf.innerHTML+=`<p>You are Fail.</p>`;}
        else buf.innerHTML+=`<p>total percentage: ${persentage}%</p>`;
        result.innerHTML="";
        result.appendChild(buf);
    }
    else{
        result.innerHTML="<p>Marks obtained cannot be greater than maximum marks.</p>";
    }
    
};