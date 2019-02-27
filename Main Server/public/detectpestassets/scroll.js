
    function toggle_form_element(select) {
        console.log(select.value);
        if(select.value == 'rabi') {
            document.getElementById('sel4').style.display = 'block';
            document.getElementById('sel5').style.display = 'none';
            document.getElementById('sel6').style.display = 'none';
        }  
         else if (select.value == 'kharif') {
            document.getElementById('sel4').style.display = 'none';
            document.getElementById('sel5').style.display = 'block';
            document.getElementById('sel6').style.display = 'none';
        }
        else if (select.value == 'zaid') {
            document.getElementById('sel4').style.display = 'none';
            document.getElementById('sel5').style.display = 'none';
            document.getElementById('sel6').style.display = 'block';
        }
    }
