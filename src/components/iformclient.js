
var swal = document.createElement("script");
swal.src = "/BorrowerPortalOTP_qa/resources/scripts/sweetalert2.all.min.js";
document.head.appendChild(swal);
 var imported = document.createElement('script');
imported.src = '/BorrowerPortalOTP_qa/jquery.preloaders.js';
document.head.appendChild(imported);
function customValidation(op){
     switch (op) {
        case 'S':
            
            break;
        case 'I':
            
            break;
        case 'D':
           
            break;
        default:
            break;
    }
    
    return true;
}

function formLoad(){
    try{
        document.getElementById('finalSubmitBtn').style.visibility = 'hidden';
    }catch(e){
    }
    onLoadNewRequest();
	onLoadResumePendingRequest();
	
	if(window.formName=='Login1'){
		document.getElementById("oforms_iform").style.backgroundImage = "url('resources/images/Landingpage2.jpg')";
		document.getElementById("headerframe1").style.width = "0px";
		document.getElementById("headerframe1").style.padding = "0px !important";
		
		const label = document.getElementById('tnc_check_label');

/*if (label) {
  label.innerHTML = `
    I agree <a href="#" id="privacyLink" style="text-decoration: underline; color: #00704A;">Privacy Policy</a>,
    <a href="#" id="termsLink" style="text-decoration: underline; color: #00704A;">Terms and Conditions</a>
    proposed by SIDF KSA. I authorize SIDF to contact me.
  `;
 // Give your PDF URLs here:
  const privacyPDF = "https://closdemonew.newgensoftware.net/BorrowerPortalOTP_qa/components/viewer/resources/SIDFTNC.pdf";
  const termsPDF   = "https://closdemonew.newgensoftware.net/BorrowerPortalOTP_qa/components/viewer/resources/SIDFTNC.pdf";

  document.getElementById('privacyLink').addEventListener('click', function (e) {
    e.preventDefault();
    downloadPDF(privacyPDF, "PrivacyPolicy.pdf");
  });

  document.getElementById('termsLink').addEventListener('click', function (e) {
    e.preventDefault();
    downloadPDF(termsPDF, "TermsAndConditions.pdf");
  });
}*/
	}
	if(window.formName=='Login_GB'){
		sessionStorage.setItem("formName",'Login_GB')
		localStorage.setItem("formName",'Login_GB')
			document.getElementById("oforms_iform").style.backgroundImage = "url('resources/images/GBK_bg.png')";
		document.getElementById("headerframe1").style.width = "0px";
		document.getElementById("headerframe1").style.padding = "0px !important";
	}
	if(window.formName=='LandingPage' && sessionStorage.getItem("formName")=='Login_GB'){
		const fragmentContainer = document.getElementById("fragmentContainer");

if (fragmentContainer) {
  fragmentContainer.style.backgroundImage = "url('resources/images/GBK_bg.png')";
}
	
	}
	else if(window.formName=='LandingPage'){
	const fragmentContainer = document.getElementById("fragmentContainer");

if (fragmentContainer) {
  fragmentContainer.style.backgroundImage = "url('resources/images/SIDF1.png')";
}
	}
	
}

function downloadPDF(pdfUrl, filename) {
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function onRowClick(tableId,rowIndex){
    return true;
}

function customListViewValidation(controlId,flag){
    return true;
}   

function listViewLoad(controlId,action){
    
}

function clickLabelLink(labelId){
    if(labelId=="createnewapplication"){
        var ScreenHeight=screen.height;
        var ScreenWidth=screen.width;
        var windowH=600;
        var windowW=1300;
        var WindowHeight=windowH-100;
        var WindowWidth=windowW;
        var WindowLeft=parseInt(ScreenWidth/2)-parseInt(WindowWidth/2);
        var WindowTop=parseInt(ScreenHeight/2)-parseInt(WindowHeight/2)-50;
        var wiWindowRef = window.open("../viewer/portal/initializePortal.jsp?NewApplication=Y&pid="+encode_utf8(pid)+"&wid="+encode_utf8(wid)+"&tid="+encode_utf8(tid)+"&fid="+encode_utf8(fid), 'NewApplication', 'scrollbars=yes,left='+WindowLeft+',top='+WindowTop+',height='+windowH+',width='+windowW+',resizable=yes')
    }
}
function allowPrecisionInText(){
    return 2;
}

function maxCharacterLimitForRichText(id){
    
    // return no of characters allowed as per condition based on id of the field
    return -1;
}
function showCustomErrorMessage(controlId,errorMsg){
    return errorMsg;
}

function resizeSubForm(buttonId){
    return {
        "Height":450,
        "Width":950
    };
}

function selectFeatureToBeIncludedInRichText(){
    return {
        'bold' :true,
        'italic':true,
        'underline':true,
        'strikeThrough':true,
        'subscript':true,
        'superscript':true,
        'fontFamily':true,
        'fontSize':true,
        'color':true,
        'inlineStyle':false,
        'inlineClass':false,
        'clearFormatting':true,
        'emoticons':false,
        'fontAwesome':false,
        'specialCharacters':false,
        'paragraphFormat':true,
        'lineHeight':true,
        'paragraphStyle':true,
        'align':true,
        'formatOL':false,
        'formatUL':false,
        'outdent':false,
        'indent':false,
        'quote':false,
        'insertLink':false,
        'insertImage':false,
        'insertVideo':false,
        'insertFile':false,
        'insertTable':true,
        'insertHR':true,
        'selectAll':true,
        'getPDF':false,
        'print':false,
        'help':false,
        'html':false,
        'fullscreen':false,
        'undo':true,
        'redo':true
        
    }
}

function allowDuplicateInDropDown(comboName){
    return false;
}

function postChangeEventHandler(controlId, responseData)
{
    
}
function isSectionWiseJSRequired()
{
    
  return false;  
}
function onLoadNewRequest(){
    var param=getWorkItemData('sessionid');
    executeServerEvent("onLoadNewRequest", "onLoad", param, true);
}

function onLoadCompletedRequest(){
        var param=getWorkItemData('sessionid');
        executeServerEvent("onLoadCompletedRequest", "onLoad", param, true);
}

function onLoadPendingRequest(){
        var param=getWorkItemData('sessionid');
        executeServerEvent("onLoadPendingRequest", "onLoad", param, true);
}
function onLoadResumePendingRequest(){
    var param=getWorkItemData('sessionid');
    executeServerEvent("onLoadResumePendingRequest", "onLoad", param, true);
    setColumnDisable('resumeTable',4,false,true);
	
	try{
    var count= getGridRowCount('resumeTable');
	for(var i=0;i<count;i++){
		var submissionStatus= getValueFromTableCell('resumeTable',i,2);
		if(submissionStatus=="Pending For Submission" || submissionStatus=="Under Process"){
            document.getElementById('resumeTable').querySelectorAll('tr')[i+1].querySelectorAll('td')[5].querySelector('a').style.color = 'blue'
        }
        else{
            setCellDisabled('resumeTable',i,4,true);
        }
	}
	}catch(error){
		 console.error('Error in setting reusmetable:', error);
	}
    try {
    setStyle('navContinueBtn', 'visible', 'false');
    } catch (error) {
    console.error('Error in setting navContinueBtn:', error);
    }

try {
setStyle('navigationBackBtn', 'visible', 'false');
} catch (error) {
console.error('Error in setting navigationBackBtn:', error);
}

try {
setStyle('navigationNextBtn', 'visible', 'false');
} catch (error) {
console.error('Error in setting navigationNextBtn:', error);
}

try {
    setStyle('navSelection', 'visible', 'false');
} catch (error) {
    console.error('Error in setting navSelection:', error);
}

}

function onClickSearchN(){
    var param=getWorkItemData('sessionid');
        executeServerEvent("NewSearch", "onClick", param, true);
}
function openBAMWindow(){
    var sessionId=getWorkItemData("sessionid");
    /*var URL="http://192.168.158.104:8080/bam/login/ExtendSession.app?CalledFrom=EXT&UserId="+getWorkItemData('userinfo').username+"&UserIndex="+getWorkItemData('userinfo').userindex+"&SessionId="+sessionId+"&CabinetName="+cabinetName+"&LaunchClient=RI&ReportIndex=36&AjaxRequest=Y&OAPDomHost=192.168.158.104:8080&CalledAs=MS&OAPDomPrt=http:";
    */
	/* userIndex
     * userName
     * cabinetName
     * sessionid--getWorkItemData("sessionid")
    */
    window.open(URL);
}


function restrictMultipleDocUpload(){
    return true;
}
function onClickSearchP(){
    var param=getWorkItemData('sessionid');
        executeServerEvent("PendingSearch", "onClick", param, true);
}

function onClickSearchC(){
    var param=getWorkItemData('sessionid');
        executeServerEvent("CompletedSearch", "onClick", param, true);
}

function openRequest(selectedTableName,selectedRowIndex){
    if(formName=='LandingPage'){
        if(selectedRowIndex!=undefined || selectedRowIndex!=''){
            var url;
            var param=selectedTableName+'~'+selectedRowIndex+'~'+getWorkItemData('sessionid');
            url=executeServerEvent("openRequest", "onClick", param, true);
			window.open(url,"iBPS",'height=800,width=600,directories=no,titlebar=no,toolbar=no,status=no,menubar=no,addressbar=no');
        }else{
            showMessage("","Please select a request.",true);
        }
    }
}

 function openNewWI() {
    // Ensure the formName variable is properly defined and checked
    // if (typeof formName !== "undefined" && formName === "LandingPage") {
        console.log("Inside openNewWI");
		
var img = `
<html>
<head>
<link rel='stylesheet' href='/BorrowerPortalOTP_qa/loader.css'/>

<style>
    * {
        box-sizing: border-box;
    }

    .modal-content{
        min-width: 518px;
		    min-height: 402px;
    }

    .dialog-box {
        width: 100%;
        min-width: 420px;
        padding: 10px;
        margin: 0 auto;
        overflow: hidden;
        text-align: center;
        height:392px !important
        background-color: #fff;
    }

    #heading {
        font-weight: bolder;
        font-size: larger;
        color: #ed7d31;
        margin-bottom: 15px;
        margin-top: -12px;
    }

    /* MAIN ROW */
    .content-row {
        display: flex;
        flex-direction: row;
        gap: 25px;
        margin-top: 20px;
        align-items: flex-start;
    }

    /* LEFT COLUMN */
    .left-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
    }

    /* TOP IMAGE */
    #top-image {
            width: 140px;
    height: auto;
    margin-bottom: -4px;
    margin-top: 81px;
    z-index: 1000;
    margin-left: 30px;
    }

    /* LOADER */
   .loader-img img {
    width: 264px;
    height: 253px;
    position: absolute;
    top: 25%;
    left: 0%;
}

    /* NAV MENU */
    .navmenu {
        padding: 0;
        text-align: left !important;
        margin-top:159px !important;
		    margin-left: 205px;
        width: 260px;
    }

    .navmenu ul {
        list-style: none;
        margin: 0 !important;
        padding: 0 !important;
        width: 100%;
    }

    .navmenu ul li {
        margin: 6px 0;
        padding: 0;
        width: 100%;
    }

    .navmenu ul li a {
        display: block;
        width: 100%;
        padding: 10px 12px;
        background: #f3f3f3;
        border-radius: 6px;
        font-size: 15px;
        text-decoration: none;
        color: #333;
        word-break: break-word;
    }

    /* ACTIVE + TICK */
    .navmenu ul li a.active {
        background-color: #ed7d31;
        color: white;
        font-weight: bold;
        padding-left: 32px;
        position: relative;
    }

    .navmenu ul li a.active::before {
        content: "✔";
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: #28a745;
    }
</style>

</head>

<body>
<div class='dialog-box' id='dialog'>

    <p id="heading">Verifying...</p>

    <div class="content-row">

        <!-- LEFT -->
        <div class="left-panel">
            <img id="top-image" src="/BorrowerPortalOTP_qa/Dedupe.png">

            <div class="loader-img">
                <img src='/BorrowerPortalOTP_qa/Spinning Circle.gif'>
            </div>
        </div>

        <!-- RIGHT -->
        <nav class='navmenu'>
            <ul id='checks'>
                <li><a href='#'>Company Details</a></li>
                <li><a href='#'>Shareholder Details</a></li>
                <li><a href='#'>Beneficial Owner Details</a></li>
                <li><a href='#'>Signatory Details</a></li>
                <li><a href='#'>Contact Details</a></li>
                <li><a href='#'>CINET Data</a></li>
            </ul>
        </nav>

    </div>

</div>
</body>
</html>`;




			
				
				
		
        // Ensure url and param are properly defined
      
		//url = url
  //.replace(/WDDomHost=[^&]+/, "WDDomHost=closdemonew.newgensoftware.net:443")
  //.replace(/OAPDomHost=[^&]+/, "OAPDomHost=closdemonew.newgensoftware.net:443");

//console.log(url);
 
        // Open the new window and assign it to subWindow
	if(sessionStorage.getItem('formName')=='Login_GB'){
			  box = bootbox.dialog({
						message: img,
						closeButton: true,
						size: "small"
					});
					let currentIndex=0;
					function clickon() {
						if (currentIndex >= 6) {
						clearInterval(intervalID);
						box.modal('hide');
						  var url;
        var param = getWorkItemData("sessionid");
        url = executeServerEvent("openNewRequestWI", "onClick", param, true);
						const subWindow = window.open(
            url,
            "iBPS",
            "height=800,width=1500,directories=no,titlebar=no,toolbar=no,status=no,menubar=no,addressbar=no"
        );
					}
					  if(currentIndex < 6){
					  const liElement = document.querySelectorAll('.navmenu ul li a')[currentIndex];
					  liElement.classList.add("active");
					  }
					  currentIndex++;
					}
					const intervalID = setInterval(clickon,2000);
	}
	else{
	
				  var url;
        var param = getWorkItemData("sessionid");
        url = executeServerEvent("openNewRequestWI", "onClick", param, true);
						const subWindow = window.open(
            url,
            "iBPS",
            "height=800,width=1500,directories=no,titlebar=no,toolbar=no,status=no,menubar=no,addressbar=no"
        );
	}
 
        // Poll to check if the window is closed
        const checkWindowClosed = setInterval(function () {
            if (subWindow && subWindow.closed) {
                clearInterval(checkWindowClosed);
                console.log("Window closed");
				onLoadResumePendingRequest();
                // Uncomment the following lines if these functions are defined and required
                // setStyle('Lead_gen_button1', 'disable', 'false');
                // refreshList();
            }
        }, 1000);
    // } else {
    //     showMessage("", "Please select a request.", true);
    // }
}

function resumeApplication(controlId, rowIndex) {
    

    // if(formName=='LandingPage'){
        if(rowIndex!=undefined || rowIndex!=''){
            var url;
            var param=controlId+'~'+rowIndex+'~'+getWorkItemData('sessionid');
			var wiName= getValueFromTableCell('resumeTable',rowIndex,0);
			var urlData=location.hostname+':'+'443';
            url=executeServerEvent("resumeApplication", "onClick", param, true);
			if(url=="Error"||url==""){
		     url = "/webdesktop/login/loginapp.app?WDDomHost="+urlData+"&WDDomPrt=http&CalledFrom=OPENWI&CabinetName=clos&SessionId="+getWorkItemData('sessionid')+"&UserName="+userName+"&UserIndex="+userIndex+"&pid="+wiName+"&wid=1&OAPDomHost="+urlData+"&OAPDomPrt=https:";

			}
			const subWindow = window.open(
                url,
                "iBPS",
                "height=800,width=1500,directories=no,titlebar=no,toolbar=no,status=no,menubar=no,addressbar=no"
            );
     
            // Poll to check if the window is closed
            const checkWindowClosed = setInterval(function () {
                if (subWindow && subWindow.closed) {
                    clearInterval(checkWindowClosed);
                    console.log("Window closed");
                    onLoadResumePendingRequest();
                    // Uncomment the following lines if these functions are defined and required
                    // setStyle('Lead_gen_button1', 'disable', 'false');
                    // refreshList();
                }
            }, 1000);
        // } else {
        //     showMessage("", "Please select a request.", true);
        // }
    
    }
}


function enableNavigationStepClickHook(){
	return true;
}

function Onclick_SendOTP(){
    setStyle('Portal_L_Varification', 'visible', 'true');
    setStyle('Portal_L_OTP_info', 'visible', 'true');
    setStyle('Portal_L_Expires', 'visible', 'true');
    setStyle('Portal_L_Time_Stamp', 'visible', 'true');
    setStyle('Portal_B_ResendOTP', 'visible', 'true');
    setStyle('Portal_B_SubmitOTP', 'visible', 'true');
    setStyle('checkbox_authorisation', 'visible', 'false');
	setValue('checkbox_authorisation', 'true');
    setStyle('sendOTP_button', 'visible', 'false');
    setStyle('labelhide2', 'visible', 'false');
    setStyle('labelhide5', 'visible', 'false');
    setStyle('labelhide6', 'visible', 'false');

    setStyle('Portal_T_EnterOTP', 'disable', 'false');

    setStyle('checkbox_authorisation', 'mandatory', 'true');
    setStyle('Portal_T_EnterOTP', 'mandatory', 'true');
}

function LOS_executeMethod(pId, pEvent) {
    

     var resp= executeServerEvent("OnClickSendOTP","onClick","",true);
	if(resp!=""){
		if(window.formName=='Login_new'){
			setStyle('Portal_B_SubmitOTP', 'visible', 'true');
			setStyle('sendOTP_button', 'disable', 'true');
			setStyle('Portal_T_EnterOTP', 'disable', 'false');
			setStyle("checkbox_authorisation","visible","true")
		}
	else{
		var retValFromParse = parseReturnVal(resp);
	}
	}
	else{
		Onclick_SendOTP();
		
		OTPtimmer();
		
	}
	// Onclick_SendOTP();
    }
	
function routeToNextPage(pId, pEvent){
	
	var resp= executeServerEvent("onValidateOTP","onClick","",true);
	if(resp!=""){
	var retValFromParse = parseReturnVal(resp);
	}
}

function routeToNextPage1(pId, pEvent){
	if(formName=='Login_GB'){
		var resp='{"routeToNavigation":{"control":"proceed_to_nafath","DecisionField":"Login1_decisionfield","FormName":"LandingPage"}}'
	var retValFromParse = parseReturnVal(resp);
	return;
	}
	//var resp= executeServerEvent("onValidateOTP","onClick","",true);
	showNafathPopup()
//var resp='{"routeToNavigation":{"control":"proceed_to_nafath","DecisionField":"Login1_decisionfield","FormName":"LandingPage"}}'
	//var retValFromParse = parseReturnVal(resp);
	
}
 
function parseReturnVal(retStr) {
	var retStrJSON = JSON.parse(retStr);
	 console.log("retStrJSON :: " + retStrJSON);
	var keys = Object.keys(retStrJSON);
	for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
   if (key == "routeToNavigation") {
      var key1 = retStrJSON["routeToNavigation"];
      saveForm("SB", true);
      let e = document.getElementById(key1.control);
      routeToNavigation(e, key1);
   }
   else if (key == "showMessage") {
      showMessageFromJSON(retStrJSON.showMessage);
	}
	}
}


function showMessageFromJSON(messageArr) {
    showMessage(
      messageArr.controlId,
      messageArr.message,
      messageArr.type,
      true
    );
}
 
 function OTPtimmer() {
    setStyle("Portal_B_ResendOTP", "disable", "true");
    setStyle("Portal_B_SubmitOTP", "disable", "false");

    var fixedMinute = 2; // Change to 2 for 2 minutes
    var time = fixedMinute * 60;
    var intervalId = setInterval(updateCountDown, 1000);

    function updateCountDown() {
        var minutes = Math.floor(time / 60);
        var stringMinute = minutes.toString();
        var seconds = time % 60;
        var stringSeconds = seconds.toString();
        var secondMinute = '0' + stringMinute + ':' + (seconds < 10 ? '0' : '') + stringSeconds;

        if (secondMinute === '00:00') {
            clearInterval(intervalId); // Stop the timer
            setValues({ "Portal_L_Time_Stamp": '00:00' }, true);
            setStyle("Portal_B_ResendOTP", "disable", "false");
            setStyle("Portal_B_SubmitOTP", "disable", "true");
            setValues({ "Portal_T_EnterOTP": "" }, true);
        } else if (time >= 0) {
            setValues({ "Portal_L_Time_Stamp": secondMinute }, true);
            time--;
        } else {
            clearInterval(intervalId); // Stop the timer
            setStyle("Portal_B_ResendOTP", "disable", "false");
            setStyle("Portal_B_SubmitOTP", "disable", "true");
            setValues({ "Portal_T_EnterOTP": "" }, true);
        }
    }
}

function OnClick_logOut(){
    showMessage('BorrowerPortalOTPLogOut_Button',"Are you sure you want to log out", 'confirm');
}

function okOperation(pComp) {
	var funcReturnType = impl_okOperation(pComp);
	if (funcReturnType.executeAccelerator){
        if (pComp == 'BorrowerPortalOTPLogOut_Button') {
            navigationSelection(this);
           }
	}
}

// function cancelOperation(pComp) {
// 	var funcReturnType = impl_cancelOperation(pComp);
// 	if (funcReturnType.executeAccelerator){
// 		LOS_cancelOperation(pComp);
// 	}
// }

function impl_okOperation(pComp) {
	var resp = new Object();
	resp.isSuccess = true;
	resp.executeAccelerator = true;
	return resp;
}

// function impl_cancelOperation(pComp) {
// 	var resp = new Object();
// 	resp.isSuccess = true;
// 	resp.executeAccelerator = true;
// 	return resp;
// }

 


 

 

 
function onchangeofCRNumber(){
	if(formName=='Login_GB'){
		showAlertDialog("a. Fetching registered mobile number via Integration <br> b. Please enter the OTP sent to your registered mobile number",false,2000)
		setStyle("otp_number",'disable','false')
		 setStyle("verify_otp_login1",'disable','false')
		return;
	}
 CreateIndicator('CR Number');
 
 var unn_no=getValue("unn_number")
 if(unn_no!='') {
	 setStyle("id_number","disable","false")
	
 }
 setTimeout(()=>{
	  RemoveIndicator('CR Number');
 },2000)
 
 
}	

function onchangeOTP(){
setStyle("verify_otp_login1",'disable','false')
}
function onchangeOfIdnumber(){
	var id_no=getValue("id_number")
	if(id_no!=''){
		
		$.preloader.start({
 
                    modal: true,
 
                     src : '/BorrowerPortalOTP_qa/GreenLoader.gif'
 
        });
 
	setTimeout(function(){
 
			$.preloader.stop();
	
			}, 3000);	
			
	//	showAlertDialog("Please wait, fetching Wathiq information",false,2000)
		if(window.formName=='Login1'){
		setValue("mobile_number","+966 501278900")
		}
		else{
		setValue("mobile_number","8080808080")
		}
		setStyle("send_OTP_login1",'disable','false')
	}
}
 
function onclickofSendOtplogin1(){
document.getElementById("send_OTP_login1").textContent='Resend OTP'
setStyle("Login1_Expires",'visible','true')
setStyle("Login1_time_stamp",'visible','true')
setStyle("otp_number",'disable','false')
OTPtimmer1();
}

 function OTPtimmer1() {
    setStyle("send_OTP_login1", "disable", "true");
    setStyle("verify_otp_login1", "disable", "false");

    var fixedMinute = 2; // Change to 2 for 2 minutes
    var time = fixedMinute * 60;
    var intervalId = setInterval(updateCountDown, 1000);

    function updateCountDown() {
        var minutes = Math.floor(time / 60);
        var stringMinute = minutes.toString();
        var seconds = time % 60;
        var stringSeconds = seconds.toString();
        var secondMinute = '0' + stringMinute + ':' + (seconds < 10 ? '0' : '') + stringSeconds;

        if (secondMinute === '00:00') {
            clearInterval(intervalId); // Stop the timer
            setValues({ "Login1_time_stamp": '00:00' }, true);
            setStyle("send_OTP_login1", "disable", "false");
            setStyle("verify_otp_login1", "disable", "true");
            setValues({ "otp_number": "" }, true);
        } else if (time >= 0) {
            setValues({ "Login1_time_stamp": secondMinute }, true);
            time--;
        } else {
            clearInterval(intervalId); // Stop the timer
            setStyle("send_OTP_login1", "disable", "false");
            setStyle("verify_otp_login1", "disable", "true");
            setValues({ "otp_number": "" }, true);
        }
    }
}

function onclickofVerifyOtplogin1(){
	var otp=document.getElementById("otp_number").value
	var mobile_number=getValue("mobile_number")
if(otp.length<6){
	showAlertDialog('OTP should have 6 digits. Please enter a valid OTP.',false,2000)
	setStyle("send_OTP_login1",'disable','false')
	}
	
	setStyle("Login1_Expires",'visible','false')
setStyle("Login1_time_stamp",'visible','false')
	if(window.formName=='Login1'){
	var resp= executeServerEvent("onClickValidateOTPLogin1","501278900","",true);
	
	}
	else{
		var resp= executeServerEvent("onClickValidateOTPLogin1","8080808080","",true);
		const target = document.getElementById("verify_otp_login1");

if (target && target.parentNode) {
    const tick = document.createElement("span");
	tick.style.color = "#28a745 !important";
    tick.innerHTML = "&#10003;";
       // green
    tick.style.fontSize = "18px";
    tick.style.marginRight = "8px";
	tick.style.marginTop = "5%";
	tick.style.marginLeft = "-8%";
    tick.style.fontWeight = "bold";
	target.parentElement.style.display = "inline-flex";
    target.parentElement.style.alignItems = "center";
    target.parentNode.insertBefore(tick, target);
}
	}
	setStyle("verify_otp_login1",'disable','true')
}

function onClickofAuthoriseCheck(){
	var tnc=getValue("tnc_check")
	var auth=getValue("authorise_check")
	var fin=getValue("finance_check")
	if(tnc && auth && fin){
		setStyle("proceed_to_nafath", "disable", "false");
	}
}	

 function showNafathPopup() {
      let timer = 10;
      Swal.fire({
        title:'', //'<strong style="font-size: 22px; color: #00704a;">نفاذ</strong>',
        html: `

<html>
<head>
 
  <style>
   
	#swal2-html-container{
	background: transparent !important;
	
	}
	body > div.swal2-container.swal2-center.swal2-backdrop-show > div{
		background: transparent !important;
	}
   
   

    /* Popup box */
    .popup {
       background: #fff !important;
      border-radius: 10px;
      width: 380px;
      text-align: center;
      padding: 30px 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    .popup h2 {
      color: #0FA958; /* Nafath green */
      font-size: 28px;
      margin-bottom: 10px;
    }

    .popup h3 {
      margin: 10px 0;
      font-size: 18px;
      color: #222;
    }

    .popup p {
      font-size: 14px;
      color: #555;
      margin-bottom: 20px;
    }

    .phone {
      border: 2px solid #0FA958;
      border-radius: 10px;
      width: 60px;
      height: 90px;
      margin: 0 auto;
      position: relative;
    }

    .phone::before {
      content: "";
      position: absolute;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 5px;
      background: #0FA958;
      border-radius: 3px;
    }

    .phone span {
      display: block;
      font-size: 22px;
      color: #0FA958;
      line-height: 90px;
      font-weight: bold;
    }

    .timer {
      margin-top: 15px;
      font-size: 18px;
      font-weight: bold;
      color: #0FA958;
    }

    .info {
      background: #f0f8ff;
      font-size: 12px;
      color: #333;
      padding: 10px;
      border-radius: 6px;
      margin-top: 20px;
    }

    .btn {
      margin-top: 20px;
      background: #0FA958;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    .btn:hover {
      background: #0d8a4d;
    }
  </style>
</head>
<body>

  <!-- Overlay and Popup -->
 <!-- <div class="overlay" id="popupOverlay">-->
   <div class="popup"> 
      <h2>نفاذ</h2>
      <h3>Push notification sent</h3>
      <p>Please open Nafath mobile app and approve the request by selecting the number below</p>

      <div class="phone">
        <span>76</span>
      </div>

      <div class="timer" id="timer">180</div>

      <div class="info">
        If you don’t have the Nafath app installed, download it on
        <a href="#">Google Play</a> or <a href="#">App Store</a>.
        You won’t be able to complete your application without verifying your details.
      </div>

      <button class="btn" onclick="closePopup()">Close</button>
   </div>
  <!--</div>-->

  <script>
    // Timer countdown
    let count =10;
    const timerElement = document.getElementById('timer');
    const interval = setInterval(() => {
      count--;
      //timerElement.textContent = count;
      if (count <= 0) clearInterval(interval);
    }, 1000);

    // Close popup
    function closePopup() {
      document.getElementById('popupOverlay').style.display = 'none';
    }
  </script>

</body>
</html>

        `,
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: () => {
		  let uiTimer = 180; 
          const timerEl = Swal.getHtmlContainer().querySelector('#timer');
          const interval = setInterval(() => {
            timer--;
			uiTimer--; 
            timerEl.textContent = uiTimer;
            if (timer <= 0) {
              clearInterval(interval);
              Swal.close();
             
            }
          }, 1000);
        }
      })
	  .then((result) => {
 
  var resp='{"routeToNavigation":{"control":"proceed_to_nafath","DecisionField":"Login1_decisionfield","FormName":"LandingPage"}}'
	var retValFromParse = parseReturnVal(resp);
})
    }