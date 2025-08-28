// Heart Count
const hearts = document.getElementsByClassName('fa-heart');

for (let heart of hearts){
    heart.addEventListener('click',function(){
        let heartValue = parseInt(document.getElementById('heart-count').innerText);
        let finalHeartValue = heartValue + 1;
        document.getElementById('heart-count').innerText = finalHeartValue;
    })
}


// Call Functionality + History
let coin = parseInt(document.getElementById('coin-count').innerText);

let calls = document.querySelectorAll('.call');
let titles = document.querySelectorAll('.title');
let numbers = document.querySelectorAll('.number');

let i = 0;
for ( let call of calls){
    let title = titles[i];
    let number = numbers[i];

    if( call && title && number)
    {
        call.addEventListener('click',function(){
            let name = title.innerText;
            let num = number.innerText;

            if( coin >= 20 ){
                alert("📞 Calling " + name +" : " + num)

                coin = coin - 20;
                document.getElementById('coin-count').innerText = coin;

                //--------------------------------- Adding History -------------------------------
                let entry = document.createElement("div");
                let callTime = new Date().toLocaleTimeString();
                entry.className = "call-entry flex flex-row justify-between items-center mt-4 p-3 bg-gray-50 rounded-lg"
                entry.innerHTML = `
                <div><span class="font-bold text-lg">${name}</span><br/>
                    <span class="text-left text-gray-500">${num}</span>
                </div>
                <div class="text-gray-700">
                    ${callTime}
                </div>
                `;

                document.getElementById("history").appendChild(entry);

                

            }

            else{
                alert("❌ Not enough coins. You need at least 20 coins to make a call.")
            }

            //-------------------------------- Clear History --------------------------------
            document.getElementById("btn-clear").addEventListener("click", function () {
            document.getElementById("history").innerHTML = ""})
        })

    }
    
    i++;

}


// Copy Functionality
function copy(id) {
    let text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    alert("Copied " + text);
    let copyCount = parseInt(document.getElementById("copy-count").innerText);
    document.getElementById("copy-count").innerText = copyCount + 1;
}


