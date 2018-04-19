<?php
class QuestionsControl {
    public static function get ($topicId = 0, $orderNumber = 0) {
        $questions = new Questions(
            array(
                    'topicId' => $topicId,
                    'orderNumber' => $orderNumber
                )
        );
        return $data = $questions->get();
    }
    public static function checkAnswer($answerArray = null) {
        $score = 0;
        foreach ($answerArray as $c_answer) {
            $questions = new Questions(
                 array(
                     'topicId' => $c_answer['topic_id'],

                     'questionId'  => $c_answer['question_id'],
                     'anwserId' => $c_answer['answer_id']
                     )
             );
            $pass = $questions->checkAnswer();
            if (count($pass) > 0) {
                $score += 1;
            }
        }
        $score = $score / count($answerArray) * 100;
        return $score;

    }

    public static function addQuestion ($topicId = 0, $orderNumber = 0, $questionTitle, $correct_answer) {

        $questions = new Questions(
              array(
                      'topicId' => $topicId,
                      'orderNumber' => $orderNumber,
                      'questionTitle' => $questionTitle,
                      'correct_answer' => $correct_answer
              )
        );

        return $data = $questions->addQuestion();
    }
}
?>
