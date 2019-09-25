document.getElementById("submit_action").disable=true
function validate_login_info(){
    var ll = ['username','email','phone']
    var login_type = ""
    var login_type = document.getElementsByName("login_type")
    for( var i=0;i<login_type.length;i++){
        if(login_type[i].checked){
            console.log(ll[i])
            login_type=ll[i]
            break
         }  
    }

    var field = document.getElementById("login_id")
    var username = field.value
    var pwd = document.getElementById("login_password")
    if(login_type=="username"){
        var status = validateUsername(field)
        document.getElementById("submit_action").disable=false
    } else if (login_type=='phone'){
        var status = validatePhone(field)
    } else {
        var status = validateEmail(field)
    }

    var status_pwd = validatePassword(pwd)

    if(status && status_pwd){
        console.log( {"login_type":login_type,"login_id":username,"password":pwd.value} )
    } else{
        console.log("Login Fault")
    }
}

function validatePassword(fld){
    var pwd_value = fld.value
    if(pwd_value.length < 8){
        fld.style.background = 'Yellow';
        error = "You didn't enter a correct password.\n";
        alert(error);
        return false;
    }
    return true
}

function validateUsername(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a username.\n";
        alert(error);
        return false;
 
    } else if ((fld.value.length < 5) || (fld.value.length > 15)) {
        fld.style.background = 'Yellow';
        error = "The username is the wrong length.\n";
		alert(error);
		return false;
 
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow';
        error = "The username contains illegal characters.\n";
		alert(error);
		return false;
 
    } else {
        fld.style.background = 'White';
    }
    return true;
}

function validateEmail(fld){

    if(fld.value.includes("@") && fld.value.includes(".")){
        return true
    }
    error = "You didn't enter an email.\n";
    fld.style.background = 'Yellow';
    alert(error);
	return false;
}

function validatePhone(fld) {
    var error = "";
    var stripped = fld.value.replace(/[\(\)\.\-\ ]/g, '')
    String.prototype.isNumber = function(){return /^\d+$/.test(this);}
    console.log(stripped.slice(1).isNumber())
    if(stripped.includes("+") && stripped.length<14){
        error = "You didn't enter a valid phone number.\n";
        fld.style.background = 'Yellow';
        alert(error);
	    return false;
    } else if(stripped.length<12){
        error = "You didn't enter a valid phone number.\n";
        fld.style.background = 'Yellow';
        alert(error);
	    return false;
    }
    return true
}

window.validate_login_info = validate_login_info