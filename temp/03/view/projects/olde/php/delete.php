<?php
$task_id = $_GET["id"];
require_once "connect.php";
$sql = "DELETE FROM tasks WHERE task_id = $task_id";
$pdo->prepare($sql)->execute();
echo "The records has been changed, click <a href='home.php'><strong>here</strong></a> to go back to the page.";
?>
