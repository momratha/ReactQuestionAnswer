<?php
class Questions extends ConstructBase {

	protected $topicId = 0, $orderNumber= 0, $questionId =0, $anwserId=0, $questionTitle="sample", $correct_answer = 1;
	public function get() {
		$sql ="SELECT `id`,
				`question`,
				`type`,
				`topic_id`,
				`order_number`
				FROM `tbl_questions` WHERE
					topic_id = ".DB::esc($this->topicId)." AND
					order_number = ".DB::esc($this->orderNumber);
		$db = DB::query($sql);
		//echo $sql;
		// Returns the MySQLi object of the DB class

		return $db->fetch_object();
	}
  public function checkAnswer() {
      $sql ="SELECT * FROM `tbl_questions` WHERE"
              . " `topic_id`=".DB::esc($this->topicId)." AND"
              . "`id` = ".DB::esc($this->questionId)." AND"
              . "`c_answer` =".DB::esc($this->anwserId);
      $db = DB::query($sql);
      return $db->fetch_object();
  }

	public function addQuestion() {

			$orderNumber = DB::query("select count(order_number) as Max from tbl_questions where
										 topic_id = ".$this->topicId."  order by order_number DESC")->fetch_object()->Max;

			$sql ="INSERT INTO `tbl_questions` VALUES (0, '"
							.DB::esc($this->questionTitle)."' , 1, "
							.DB::esc($this->topicId).", "
							.DB::esc($orderNumber+1).", "
							.DB::esc($this->correct_answer).")";

			$db = DB::query($sql);
			$last_id = DB::lastQueryId($db);

			return $last_id;


	}
}
?>
