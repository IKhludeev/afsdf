jQuery(function($) {
var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";
function NumPressed (Num) {
        if (FlagNewNum)
        {
            $('#line').val(Num);
            FlagNewNum = false;
        }  
        else
        {
            if ($('#line').val() == "0")
                $('#line').val(Num);
            else{
                Fcalc.line.value += Num;
				}
        }
}
function Operation (Op) {
        var line = $('#line').val();
        if (FlagNewNum && PendingOp != "=")
        {
            $('#line').val(Currents);
        }
        else
        {
            FlagNewNum = true;
            if ( '+' == PendingOp )
                Currents += parseFloat(line);
            else if ( '-' == PendingOp )
                Currents -= parseFloat(line);
            else if ( '/' == PendingOp )
                Currents /= parseFloat(line);
            else if ( '*' == PendingOp )
                Currents *= parseFloat(line);
            else
                Currents = parseFloat(line);
            $('#line').val(Currents);
            PendingOp = Op;
        }      
}
function Clear () {
        $('#line').val('');
        FlagNewNum = true;
}
function Point () {
        var curline = $('#line').val();
        if (FlagNewNum)
        {
            curline = "0.";
            FlagNewNum = false;
        }
        else
        {
            if (curline.indexOf(".") == -1)
                curline += ".";
        }
       $('#line').val(curline);
}
function Neg () {
        $('#line').val() =
        parseFloat($('#line').val()) * -1;
}
function addNumber (number) {
    var inp = $('#line').attr("id");
    inp.val() = inp.val() + number;
}

	$('#b1').on('click', function(){NumPressed(1);}); 
	$('#b2').on('click', function(){NumPressed(2);}); 
	$('#b3').on('click', function(){NumPressed(3);}); 
	$('#b4').on('click', function(){NumPressed(4);}); 
	$('#b5').on('click', function(){NumPressed(5);}); 
	$('#b6').on('click', function(){NumPressed(6);}); 
	$('#b7').on('click', function(){NumPressed(7);}); 
	$('#b8').on('click', function(){NumPressed(8);}); 
	$('#b9').on('click', function(){NumPressed(9);}); 
	$('#b0').on('click', function(){NumPressed(0);}); 
	$('#rav').on('click', function () {Operation('=');}); 
	$('#plus').on('click', function () {Operation('+');}); 
	$('#minus').on('click', function () {Operation('-');}); 
	$('#umnozh').on('click', function () {Operation('*');}); 
	$('#podel').on('click', function () {Operation('/');}); 
	$('#Decimal').on('click', function () {Point();}); 
	$('#plmn').on('click', function () {Neg();}); 
	$('#fulldelete').on('click', function () {Clear();});
	
  
});