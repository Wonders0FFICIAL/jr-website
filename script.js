var i = 0;
var int = 1;
var texth = document.getElementById("texth");
var email = document.getElementById("email")
const password = document.getElementById("password");
var confpassword = document.getElementById("conf-password");
var email = document.getElementById("email");
var warning = document.getElementById("warning");
var nextbutton = document.getElementById("next-b");
var underwrap = document.getElementById("under-wrap");
var tickr = document.getElementById("tker");
var user = document.getElementById("username");
var display = document.getElementById("displayname");
user.style.display = 'none';
display.style.display = 'none';
var passwordval;
console.log('strt -script main');
var confpasswordval;
var emailval;
var test3 = false;
var test2 = false;
var test1 = false;
function test()
{
    // remove prexisting items
    email.style.display = 'none';
    password.style.display = 'none';
    confpassword.style.display = 'none';
    nextbutton.style.display = 'none';
    warning.style.display = 'none';
    tickr.style.display = 'none';
    // add new items
    user.style.display = 'block';
    display.style.display = 'block';
    texth.textContent = 'Please select a username';
    
}
email.addEventListener("input", function() {
    emailval = String(email.value);
    var emailpatg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailpatg.test(emailval)) { 
        console.log('Test 1 Passed')
        test1 = true;
    } else {
        test1 = false;
    }
    enableNextButton();
});
password.addEventListener("input", function() {
    passwordval = String(password.value);
    if (passwordval.length < 4 && passwordval.length > 0) {
        warning.style.display = 'block';
        warning.textContent = 'Password must be at least 4 characters long';
        warning.style.width = '390px';
        test2 = false;
    } else if (passwordval.length == 0) {
        test2 = false;
        console.log('Test 2 Passedd');
        warning.style.display = 'none';
    } else {
        warning.style.display = 'none';
        console.log('Test 2 Passed');
        test2 = true;
    }
    enableNextButton();
});

confpassword.addEventListener("input", function() {
    confpasswordval = String(confpassword.value);
    if (confpasswordval !== passwordval) {
        warning.style.display = 'block';
        warning.textContent = 'Passwords do not match';
        warning.style.width = '230px';
        test3 = false;
    } else {
        warning.style.display = 'none';
        console.log('Test 3 Passed');
        test3 = true;
    }
    enableNextButton();
});
function enableNextButton() {
    if (test1 && test2 && test3) {
        nextbutton.style.backgroundColor = '#fe6e04';
        nextbutton.style.color = 'white';
        nextbutton.disabled = false;
        console.log('next true');
    } else {
        nextbutton.style.backgroundColor = '';
        nextbutton.style.color = 'white';
        nextbutton.disabled = true;
        console.log('next false');
    }
}

function disableCopy(event) 
{
    event.preventDefault();  
}

function ticker() {
    if (int % 2 !== 0) 
    {
        var tick = document.getElementById("img-tickd");
        var password = document.getElementById("password");
        var confpassword = document.getElementById("conf-password");
        password.type = 'text';
        confpassword.type = 'text';
        tick.src = 'tick.webp';
        console.log('test ticker eventId: ' + int)
    } else if (int == 100) 
    {
        alert("You have shaken the key of eternal knowledge from its case to your hands.");
        alert("You have passed the test of resilience by clicking this button 139 times");
    } else 
    {
        console.log('test ticker eventId: ' + int)
        var tick = document.getElementById("img-tickd");
        var password = document.getElementById("password");
        var confpassword = document.getElementById("conf-password");
        password.type = 'password';
        confpassword.type = 'password';
        tick.src = 'blankjr.webp';
    }
    int++;
}

function changeBackground(checkbox) 
{
    
    var navigation = document.getElementById("nav");
    var element = document.getElementById("background");
    var imageMoon = document.getElementById("imgMoon");
    var imageSun = document.getElementById("imgSun");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confpassword = document.getElementById("conf-password");
    var passtext = document.getElementById("pass-text");
    console.log('test changeBackground check id: ' + int)
    int++;

    if (checkbox.checked) 
    {
        passtext.style.color = '#333333';
        navigation.style.backgroundColor = '#f9f9f9';
        element.style.backgroundColor = '#ffffff';
        texth.style.color = '#000000';
        email.style.borderColor = '#333333';
        email.style.backgroundColor = '#f9f9f9';
        email.style.color = '#333333';
        password.style.borderColor = '#333333';
        password.style.backgroundColor = '#f9f9f9';
        password.style.color = '#333333';
        confpassword.style.borderColor = '#333333';
        confpassword.style.backgroundColor = '#f9f9f9';
        confpassword.style.color = '#333333';
        imageSun.src = 'sun2.webp';
        imageMoon.src = 'moon.webp';
        i++;

        if (i == 7) 
        {
            alert("Toggling the switch like a maniac won't summon a coding genie. Please refrain from casting spells; our servers are allergic to hocus pocus.");
        } else if (i == 14) 
        {
            alert("Rapid theme-switching detected! You're not summoning Batman. Please take a breather; our servers are feeling dizzy from the strobe light effect.");
        } else if (i == 21) 
        {
            alert("Hey there, switch-speedster! Toggling won't give you a turbo boost or make your code zoom. Ease off the pedal; our servers prefer a leisurely stroll over a Formula 1 race.");
        } else if (i == 28) 
        {
            alert("Oi, switch-flipper! Our servers aren't disco balls, and this isn't a rave. Keep toggling, and you might summon the wrath of the coding gods.");
        } else if (i == 35) 
        {
            alert("Last chance! Keep toggling like this, and you'll awaken the server gremlins. Don't say I didn't warn you; those gremlins are known to be mischievous to coders.");
        }
    } else 
    {
        console.log('test changeBackground check id: ' + int)
        int++;
        passtext.style.color = '#f5f5f5';
        element.style.backgroundColor = '#1f1f1f';
        navigation.style.backgroundColor = '#333333';
        texth.style.color = '#ffffff';
        email.style.borderColor = '#f9f9f9';
        email.style.backgroundColor = '#333333';
        email.style.color = '#f5f5f5';
        password.style.borderColor = '#f9f9f9';
        password.style.backgroundColor = '#333333';
        password.style.color = '#f5f5f5';
        confpassword.style.borderColor = '#f9f9f9';
        confpassword.style.backgroundColor = '#333333';
        confpassword.style.color = '#f5f5f5';
        imageSun.src = 'sun.webp';
        imageMoon.src = 'moon2.webp';
        i++;

        if (i == 7) 
        {
            alert("Toggling the switch like a maniac won't summon a coding genie. Please refrain from casting spells; our servers are allergic to hocus pocus.");
        } else if (i == 14) 
        {
            alert("Rapid theme-switching detected! You're not summoning Batman. Please take a breather; our servers are feeling dizzy from the strobe light effect.");
        } else if (i == 21) 
        {
            alert("Hey there, switch-speedster! Toggling won't give you a turbo boost or make your code zoom. Ease off the pedal; our servers prefer a leisurely stroll over a Formula 1 race.");
        } else if (i == 28) 
        {
            alert("Oi, switch-flipper! Our servers aren't disco balls, and this isn't a rave. Keep toggling, and you might summon the wrath of the coding gods.");
        } else if (i == 35) 
        {
            alert("Last chance! Keep toggling like this, and you'll awaken the server gremlins. Don't say I didn't warn you; those gremlins are known to be mischievous to coders.");
        }
    }
}
