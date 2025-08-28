// Heart Count
const hearts = document.getElementsByClassName('fa-heart');

for (let heart of hearts){
    heart.addEventListener('click',function(){
        let heartValue = parseInt(document.getElementById('heart-count').innerText);
        let finalHeartValue = heartValue + 1;
        document.getElementById('heart-count').innerText = finalHeartValue;
    })
}

// Call Functionality
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
                alert("Calling" + name +":" + num)

                coin = coin - 20;
                document.getElementById('coin-count').innerText = coin;

            }

            else{
                alert("Not enough coins. You need at least 20 coins to make a call.")
            }
        })

        
    }

    i++;

}


