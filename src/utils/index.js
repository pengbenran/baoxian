/**
 * 生成随机数
 */
 function random_No (J) {
    var random_no ='';
    for(var i = 0; i < J; i++){
        random_no += Math.floor(Math.random()*10)
    }
    random_no = new Date().getTime() + random_no
    return random_no;
  }
  
  export default {
    random_No
  }