var maxChars = 100;
var textBox = document.getElementById('text_box');
textBox.addEventListener('keydown',function(){
    var note = document.getElementById('note');      
    var text = "あと" + (maxChars - textBox.value.length) + "文字まで記入できます";
            note.textContent = text;
});