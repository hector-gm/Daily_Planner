// Code to determine how time blocks get css colour displayed
var timeNow= new Date().getHours();

if (timeNow > 8) {
    $("#note1").addClass("past");
	}	
    else if (timeNow >= 8 && timeNow < 9) {
        $("#note0").addClass("present");
	}
    else if (timeNow < 8) {
        $("#note0").addClass("future");
    }

if (timeNow > 9) {
    $("#note1").addClass("past");
	}	
    else if (timeNow >= 9 && timeNow < 10) {
        $("#note1").addClass("present");
	}
    else if (timeNow < 9) {
        $("#note1").addClass("future");
	}

if (timeNow > 10) {
    $("#note2").addClass("past");
	}
    else if (timeNow >= 10 && timeNow < 11) {
        $("#note2").addClass("present");
	}
    else if (timeNow < 10) {
        $("#note2").addClass("future");
	}

if (timeNow > 11) {
    $("#note3").addClass("past");
	}
    else if (timeNow >= 11 && timeNow < 12) {
        $("#note3").addClass("present");
	}
    else if (timeNow < 11) {
        $("#note3").addClass("future");
	}

if (timeNow > 12) {
    $("#note4").addClass("past");
	}
    else if (timeNow >= 12 && timeNow < 13) {
        $("#note4").addClass("present");
	}
    else if (timeNow < 12) {
        $("#note4").addClass("future");
	}

if (timeNow > 13) {
    $("#note5").addClass("past");
    }
    else if (timeNow >= 13 && timeNow < 14) {
        $("#note5").addClass("present");
    }
    else if (timeNow < 13) {
        $("#note5").addClass("future");
    }

if (timeNow > 14) {
    $("#note6").addClass("past");
    }
    else if (timeNow >= 14 && timeNow < 15) {
        $("#note6").addClass("present");
    }
    else if (timeNow < 14) {
        $("#note6").addClass("future");
    }

if (timeNow > 15) {
    $("#note7").addClass("past");
	}
    else if (timeNow >= 15 && timeNow < 16) {
        $("#note7").addClass("present");
	}
    else if (timeNow < 15) {
        $("#note7").addClass("future");
	}

if (timeNow > 16) {
    $("#note8").addClass("past");
	}
    else if (timeNow >= 16 && timeNow < 17) {
        $("#note8").addClass("present");
	}
    else if (timeNow < 16) {
        $("#note8").addClass("future");
	}

if (timeNow > 17) {
    $("#note9").addClass("past");
	}
    else if (timeNow >= 17 && timeNow < 18) {
        $("#note9").addClass("present");
	}
    else if (timeNow < 17) {
        $("#note9").addClass("future");
    }
if (timeNow > 18) {
    $("#note10").addClass("past");
    }
    else if (timeNow >= 18 && timeNow < 19){
        $("#note10").addClass("present");
    }
    else if (timeNow < 18) {
        $("#note10").addClass("future");
    }


    // 8AM Task code to commit to local storage and retrieve value
    var input_textarea0 = document.getElementById('note0');
    var save_button0 = document.querySelector('#save8am');

    input_textarea0.value = localStorage.getItem('content0');

    save8am.addEventListener('click', updateOutput0);

    function updateOutput0() {
    localStorage.setItem('content0', input_textarea0.value);
    };

    //9AM Task code to commit to local storage and retrieve value
    var input_textarea1 = document.querySelector('#note1');
    var save_button1 = document.querySelector('#save9am');

    input_textarea1.value = localStorage.getItem('content1');

    save9am.addEventListener('click', updateOutput1);

    function updateOutput1() {
    localStorage.setItem('content1', input_textarea1.value);
    };

    //10AM Task code to commit to local storage and retrieve value
    var input_textarea2 = document.querySelector('#note2');
    var save_button2 = document.querySelector('#save10am');

    input_textarea2.value = localStorage.getItem('content2');

    save10am.addEventListener('click', updateOutput2);

    function updateOutput2() {
	localStorage.setItem('content2', input_textarea2.value);
    };

    //11AM Task code to commit to local storage and retrieve value
    var input_textarea3 = document.querySelector('#note3');
    var save_button3 = document.querySelector('#save11am');

    input_textarea3.value = localStorage.getItem('content3');

    save11am.addEventListener('click', updateOutput3);

    function updateOutput3() {
	localStorage.setItem('content3', input_textarea3.value);
    };

    //12PM Task code to commit to local storage and retrieve value
    var input_textarea4 = document.querySelector('#note4');
    var save_button4 = document.querySelector('#save12pm');

    input_textarea4.value = localStorage.getItem('content4');

    save12pm.addEventListener('click', updateOutput4);

    function updateOutput4() {
	localStorage.setItem('content4', input_textarea4.value);
    };

    //1PM Task code to commit to local storage and retrieve value
    var input_textarea5 = document.querySelector('#note5');
    var save_button5 = document.querySelector('#save1pm');

    input_textarea5.value = localStorage.getItem('content5');

    save1pm.addEventListener('click', updateOutput5);

    function updateOutput5() {
	localStorage.setItem('content5', input_textarea5.value);
    };  

    //2PM Task code to commit to local storage and retrieve value
    var input_textarea6 = document.querySelector('#note6');
    var save_button6 = document.querySelector('#save2pm');

    input_textarea6.value = localStorage.getItem('content6');

    save2pm.addEventListener('click', updateOutput6);

    function updateOutput6() {
	localStorage.setItem('content6', input_textarea6.value);
    };

    //3PM Task code to commit to local storage and retrieve value
    var input_textarea7 = document.querySelector('#note7');
    var save_button7 = document.querySelector('#save3pm');

    input_textarea7.value = localStorage.getItem('content7');

    save3pm.addEventListener('click', updateOutput7);

    function updateOutput7() {
	localStorage.setItem('content7', input_textarea7.value);
    };

    //4PM Task code to commit to local storage and retrieve value
    var input_textarea8 = document.querySelector('#note8');
    var save_button8 = document.querySelector('#save4pm');

    input_textarea8.value = localStorage.getItem('content8');

    save4pm.addEventListener('click', updateOutput8);

    function updateOutput8() {
	localStorage.setItem('content8', input_textarea8.value);
    };

    //5PM Task code to commit to local storage and retrieve value
    var input_textarea9 = document.querySelector('#note9');
    var save_button9 = document.querySelector('#save5pm');

    input_textarea9.value = localStorage.getItem('content9');

    save5pm.addEventListener('click', updateOutput9);

    function updateOutput9() {
	localStorage.setItem('content9', input_textarea9.value);
    };

    //6M Task code to commit to local storage and retrieve value
    var input_textarea10 = document.querySelector('#note10');
    var save_button10 = document.querySelector('#save6pm');

    input_textarea10.value = localStorage.getItem('content10');

    save6pm.addEventListener('click', updateOutput10);

    function updateOutput10() {
	localStorage.setItem('content10', input_textarea10.value);
    };