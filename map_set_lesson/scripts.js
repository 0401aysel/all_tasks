let txt='Salam MENIM adim AYselDir, hemcinin, sinif yoldasimin adi ayseldir hemcinin qrup yoldasimin adi ayseldir .'

function cleanText(text){
    let words=text.trim().split(' ');
    
    let arr = new Set();
    for(value of Object.values(words)){
        arr.add(value.toLowerCase());
    }
    let new_sentence = `Unikal sozlerin sayi:${arr.size}` + '<br>' + [...arr].join(' ');
    document.getElementById("result1").innerHTML=new_sentence;
}

document.getElementById("task1").addEventListener("input", function(){
    cleanText(this.value);
});
