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
if (timeNow > 18 {
    $("#note10").addClass("past");
    }
    else if (timeNow >= 18 && timeNow < 19){
        $("#note10").addClass("present");
    }
    else if (timeNow < 18) {
        $("#note10").addClass("future");
    }
    
    var input_textarea1 = document.querySelector('#note1');
    var save_button1 = document.querySelector('#saveNote1');

    input_textarea1.value = localStorage.getItem('content1');

    saveNote1.addEventListener('click', updateOutput1);

    function updateOutput1() {
    localStorage.setItem('content1', input_textarea1.value);
    };

    var input_textarea2 = document.querySelector('#note2');
    var save_button2 = document.querySelector('#saveNote2');

    input_textarea2.value = localStorage.getItem('content2');
//when the Save button is clicked, store the input of the textarea
    saveNote2.addEventListener('click', updateOutput2);
//sets the input of text area into local storage
    function updateOutput2() {
	localStorage.setItem('content2', input_textarea2.value);
    };

    var input_textarea3 = document.querySelector('#note3');
    var save_button3 = document.querySelector('#saveNote3');
//retrieves previously save text to display
    input_textarea3.value = localStorage.getItem('content3');
//when the Save button is clicked, store the input of the textarea
    saveNote3.addEventListener('click', updateOutput3);
//sets the input of text area into local storage
    function updateOutput3() {
	localStorage.setItem('content3', input_textarea3.value);
    };

    var input_textarea4 = document.querySelector('#note4');
    var save_button4 = document.querySelector('#saveNote4');
//retrieves previously save text to display
    input_textarea4.value = localStorage.getItem('content4');
//when the Save button is clicked, store the input of the textarea
    saveNote4.addEventListener('click', updateOutput4);
//sets the input of text area into local storage
    function updateOutput4() {
	localStorage.setItem('content4', input_textarea4.value);
    };

    var input_textarea5 = document.querySelector('#note5');
    var save_button5 = document.querySelector('#saveNote5');
//retrieves previously save text to display
    input_textarea5.value = localStorage.getItem('content5');
//when the Save button is clicked, store the input of the textarea
    saveNote5.addEventListener('click', updateOutput5);
//sets the input of text area into local storage
    function updateOutput5() {
	localStorage.setItem('content5', input_textarea5.value);
    };  

    var input_textarea6 = document.querySelector('#note6');
    var save_button6 = document.querySelector('#saveNote6');
//retrieves previously save text to display
    input_textarea6.value = localStorage.getItem('content6');
//when the Save button is clicked, store the input of the textarea
    saveNote6.addEventListener('click', updateOutput6);
//sets the input of text area into local storage
    function updateOutput6() {
	localStorage.setItem('content6', input_textarea6.value);
    };

    var input_textarea7 = document.querySelector('#note7');
    var save_button7 = document.querySelector('#saveNote7');
//retrieves previously save text to display
    input_textarea7.value = localStorage.getItem('content7');
//when the Save button is clicked, store the input of the textarea
    saveNote7.addEventListener('click', updateOutput7);
//sets the input of text area into local storage
    function updateOutput7() {
	localStorage.setItem('content7', input_textarea7.value);
    };

    var input_textarea8 = document.querySelector('#note8');
    var save_button8 = document.querySelector('#saveNote8');
//retrieves previously save text to display
    input_textarea8.value = localStorage.getItem('content8');
//when the Save button is clicked, store the input of the textarea
    saveNote8.addEventListener('click', updateOutput8);
//sets the input of text area into local storage
    function updateOutput8() {
	localStorage.setItem('content8', input_textarea8.value);
    };

    var input_textarea9 = document.querySelector('#note9');
    var save_button9 = document.querySelector('#saveNote9');
//retrieves previously save text to display
    input_textarea9.value = localStorage.getItem('content9');
//when the Save button is clicked, store the input of the textarea
    saveNote9.addEventListener('click', updateOutput9);
//sets the input of text area into local storage
    function updateOutput9() {
	localStorage.setItem('content9', input_textarea9.value);
    };
