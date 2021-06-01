$(document).ready(function(){
    loop();
})

function loop(){
    function firstAnim(){
        $('#waterlogo').addClass('animate_textLeftToRight');
        $('#logo1').addClass('animate_textRightToLeft');
        $('#text').addClass('animate_bigToSmall');
    }
    
    function fdelay(){
        setTimeout(function (){
            $('#fbg').fadeOut();
        },3000)
    }
    
    function secondAnim(){
        setTimeout(function () {
            $('#logo2').addClass('animate_textRightToLeft');
            $('#text2').addClass('animate_textLeftToRight');
            $('#sakib').addClass('animate_sakibLeftToRight');
        },3000);
    }

    firstAnim();
    fdelay();
    secondAnim();
}

document.getElementById('fbg').ondragstart = function() { return false; };
document.getElementById('text').ondragstart = function() { return false; };


