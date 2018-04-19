<?php
$mpdf = "mpdf";
require_once($mpdf."/config.php");
if(get_magic_quotes_gpc()){

	// If magic quotes is enabled, strip the extra slashes
	array_walk_recursive($_GET,create_function('&$v,$k','$v = stripslashes($v);'));
	array_walk_recursive($_POST,create_function('&$v,$k','$v = stripslashes($v);'));
}

try{

	$response = array();
	$topicId = $_POST['topic_id'];
	$orderNumber = $_POST['order'];
	$answer_id = isset($_POST['answer_id'])?$_POST['answer_id']:0;
	$question_id = isset($_POST['question_id'])?$_POST['question_id']:0;
	// Handling the supported actions:

	switch($_POST['action']){

		case 'getQuestion':
                        if(!isset($_SESSION['answer'])) {
                            $_SESSION['answer'] = array();
                        }
                        array_push($_SESSION['answer'], array(
                            "topic_id"=>$topicId,
                            "question_id"=> $question_id,
                            "answer_id"=>$answer_id
                                )
                        );

                        $question = QuestionsControl::get($topicId, $orderNumber);
												// calculate the score if user reach the end the questions.
                        if (count($question) == 0) {
                            $score = QuestionsControl::checkAnswer($_SESSION['answer']);
                            $response = array("question"=> [], "answers"=> [],"score"=> $score);
                        } else {
                            $answer = AnswersControl::get($question->id);
                            $response = array("question"=> $question, "answers"=> $answer);
                        }
						break;

		case 'addQuestion':
						$question = $_POST['question'];
						$answers = $_POST['answers'];
						$correct_answer = $_POST['correct_answer'];
						$question_id = QuestionsControl::addQuestion($topicId, $orderNumber, $question, $correct_answer);
						$answer = AnswersControl::addAnswers($topicId, $answers, $question_id);
						break;

		default:
						throw new Exception('Wrong action');
	}

	echo json_encode($response);
}
catch(Exception $e){
	die(json_encode(array('error' => $e->getMessage())));
}

?>
