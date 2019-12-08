$('form').submit((e)=>{

    e.preventDefault();
    pridejTask($("#input").val())
});
    /**
     *pridani tasku po zmacknuti ADD 
     * 1. jako parametr dostane text
     * 2. vytvori task s zadanym textem
     * 3. vytvoreny task zaradi mezi ostatni
     */
function pridejTask(text) {
    $('.tasksList').append(vytvorPolozkuSeznamu(text))
}

function vytvorPolozkuSeznamu(text) {
    var polozka = document.createElement('li');
    var span = document.createElement('span');
    span.className = "delete";
    var spanText = document.createTextNode("x");
    var input = document.createElement('input');
    input.type = 'checkbox';
    var label = document.createElement('label');
    var labelText = document.createTextNode(text);
    label.appendChild(labelText);

    span.appendChild(spanText);

    polozka.appendChild(span);
    polozka.appendChild(input);
    polozka.appendChild(label);

    return polozka;
}

$(".delete").click((e)=> {
    $(e.target.parentElement).remove()
})

function removeTask() {

}