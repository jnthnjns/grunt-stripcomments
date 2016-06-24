<?php
echo "Something doesn't make sense here // comment characters in a string. /** and here is some more */. /* and again */";

/*
 * A multiline comment
 * Spanning multiple lines
 */
$date = date('M DD YY', strtotime('2015-21-10'));

function goBack () {
}

/**
  * A summary informing the user what the associated element does.
  *
  * A *description*, that can span multiple lines, to go _in-depth_ into the details of this element
  * and to provide some background information or textual references.
  *
  * @param string $myArgument With a *description* of this argument, these may also
  *    span multiple lines.
  *
  * @return void
  */
class BTTF {
  private
    $_date;

  public function __construct($date) {
    $this->_date = $date;
  }
}

?>