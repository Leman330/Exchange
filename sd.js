
let sat = [{ "currency":"USD",
            "money": 1.6970}, 
            
            {"currency":"RUB",
            "money":0.0214}, 
            
            {"currency":"EUR",
            "money":1.8585} , 
            
            {"currency":"AZN",
            "money":1.000}];
            
let al = [{ "currency":"USD",
            "money": 1.7020}, 
            
            {"currency":"RUB",
            "money":0.0258}, 
            
            {"currency":"EUR",
            "money":1.9830} , 
            
            {"currency":"AZN",
            "money":1.000}];


const a = document.getElementById("a");
const b = document.getElementById("b");
let zone = document.getElementById("zone");
let stwo = document.getElementById("stwo");


function currenttotal() {
    answer = a.value;


    for (i = 0; i<al.length;i++) {
        if (zone.value == al[i].currency) {
            answer*=al[i].money;
        }
        else if (stwo.value == al[i].currency) {
            if (stwo.value == 'AZN'){
                answer*=al[i].money;
            }
            else{
                answer/=al[i].money
            }
        }
    }
    b.innerHTML = answer.toLocaleString(undefined, {maximumFractionDigits:2});
    document.getElementById("jjss").innerHTML += search()
}

function search () {
    return`
    <tr >
    <td><img src="img/${zone.value}.png" alt = "flag_photo" class="flag"></td>
    <td class="somele">${a.value}</td>
    <td><img src="img/${stwo.value}.png" alt = "flag_photo" class="flag"></td>
    <td class="somele">${b.innerHTML}</td>
    </tr>`;
}