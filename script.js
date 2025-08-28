// Heart Count
const hearts = document.getElementsByClassName('fa-heart');

for (let heart of hearts){
    heart.addEventListener('click',function(){
        let heartValue = parseInt(document.getElementById('heart-count').innerText);
        let finalHeartValue = heartValue + 1;
        document.getElementById('heart-count').innerText = finalHeartValue;
    })
}


