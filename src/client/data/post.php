<?php
    $fp = fopen('rsvp.json', 'w');
    $data = json_decode(file_get_contents("php://input"), true);
    $attendees = $data['attendees'];
    fwrite($fp, json_encode($attendees));
    fclose($fp);
?>