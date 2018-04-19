const url = 'core.php';


export const getQuestion = (order_id, question_id, answer_id) => {

    let data =  'topic_id='+topic+
              '&action=getQuestion'+
              '&order='+order_id+
              '&question_id='+question_id+
              '&answer_id='+answer_id;

    let getQuestion = fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        },
        body: data
    })
    .then(res => res.json())
    .then(result => result);

    return  ({
      type : 'GET_QUESTION',
      payload : getQuestion
    });
}


export const addQuestion = (question, answers, correct_answer, order_id=1) => {

    let data =  'topic_id='+topic+
                '&action=addQuestion'+
                '&order='+order_id+
                '&question='+question+
                '&correct_answer='+correct_answer+
                '&answers='+answers;

    let addQuestion = fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        },
        body: data
    });

    return  ({
      type : 'ADD_QUESTION',
      payload : addQuestion
    });
}
