<?php

// TODO: make sense
echo "Something doesn't make sense here // comment characters in a string. /** and here is some more */. /* and again */";
$date = date('M DD YY', strtotime('2015-21-10'));

// a single line comment

function goBack () {
  // to the future
}
class BTTF {
  private
    $_date;

  public function __construct($date) {
    $this->_date = $date;
  }
}

?>