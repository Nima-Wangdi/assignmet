function fullname(fname,sname){
    console.log(fname,sname);
}

fullname("Tandin","Tshewang")

function fullname(fname,sname){
    console.log(fname,sname);
}

function lname(fname){
    sname="Dorji"
    fullname(fname,sname)
}

function fname(fname){
    lname(fname);
}

fname("Nhedup")


//callback
function fullname(fname,sname){
    console.log(fname,sname);
}

function name(fname,sname,complete){
    complete(fname,sname);
    //fullname("Tandin","Tshewang")
}

name("Tandin","Tshewang",fullname)