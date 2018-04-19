<?php
class AnswersControl {
    public static function get ($questionId = 0, $orderNumber = 0) {

        $answer = new Answers(
            array(
                    'questionId' => $questionId,
                    'orderNumber' => $orderNumber
                )
        );
        return $data = $answer->get();
    }

    public static function addAnswers ($topicId = 1, $answers, $questionId) {

      $answer = new Answers(
            array(
              'topicId' => $topicId,
              'answers' => $answers,
              'questionId' => $questionId
            )
      );
      return $data = $answer->insertAnswers($answers);
    }
}
?>
