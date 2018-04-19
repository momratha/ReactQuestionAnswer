<?php
class Answers extends ConstructBase {

	protected $questionId = 0, $orderNumber= 0;
	public function get() {
		$sql ="SELECT `id`,
				`answer`,
				`type`,
				`question_id`,
				`order_number`
				FROM `tbl_answers` WHERE
					question_id = ".DB::esc($this->questionId)."
					ORDER BY order_number";
		$db = DB::query($sql);
		//var_dump($db->fetch_all());
		// Returns the MySQLi object of the DB class

		return $db->fetch_all(MYSQLI_ASSOC);
	}

	public function insertAnswers($answers) {
		$answersToArray = explode(',', $answers);

		$answerArray = [];
		foreach ($answersToArray as $key => $value) {
			echo "key=".$key."value=".$value;
			array_push($answerArray, "('" . $value . "', 2, '" . $this->questionId . "',".($key+1).")");
		}

		$query = DB::query('INSERT INTO tbl_answers (answer, type, question_id, order_number) VALUES' . implode(',', $answerArray));
	}
}
?>
