<?php
ini_set('display_errors', 'Off');
session_start();

$act = $_POST['act'];
if (!$act) {
	$act = $_GET['act'];
}
$act = strtolower($act);
$retval = '';
switch($act) {
	case 'systemsetting' :
		$retval = '';
		break;
    default :
		$retval = config();
		break;
    }       
echo $retval;        

function config() {
    $arr['appid'] =1;
    $arr['systemid'] =1;
    return  urldecode(json_encode($arr));
}

?>
