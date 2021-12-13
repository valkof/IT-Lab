function test() {
  //Ввод строки, содержащей 0 и 1
  var modal = SpreadsheetApp.getUi();
  var stroka = '';
  do {
    var zeroone = false;
    var otvet = modal.prompt('Введите строку', 'Строка содержит 9 символов из "0" и "1".', modal.ButtonSet.OK_CANCEL);
    stroka = otvet.getResponseText();
    var uslovie = otvet.getSelectedButton() == modal.Button.OK && stroka.length == 9;
    if (uslovie) {
      for (var i = 0; i < stroka.length; i++) {
        if (!(stroka[i] in ['0','1'])) {
          zeroone = true;
          modal.alert('Ошибка', 'Неверная строка. Повторите ввод.',modal.ButtonSet.OK);
          break;
        }; 
      };
    };
  } while (!uslovie || zeroone);
  
  //Ввод массиса, содержащего 9 элементов String
  var beg_mas = [];
  for (var i = 0; i < 9; i++) {
    do {
      var otvet = modal.prompt('Введите строку ' + (i + 1) + ' из 9', 'Строка содержит любые символы.', modal.ButtonSet.OK_CANCEL);
      var text = otvet.getResponseText();
      var uslovie = otvet.getSelectedButton() == modal.Button.OK && stroka.length > 0;
      if (uslovie) {beg_mas.push(text)};
      
    } while (!uslovie);
  }; 
  
  //Формирование выходного массива
  var mas_new = beg_mas.filter(function(element, nomer) {
    return stroka[nomer] == '1';
  });
 
  //Выыод рерультатов на лист
  var ss = SpreadsheetApp.getActiveSheet();
  ss.getRange(1, 1).setValue(stroka);
  beg_mas.forEach(function(element, nomer) {
    ss.getRange(nomer + 1, 2).setValue(element);
  });
  mas_new.forEach(function(element, nomer) {
    ss.getRange(nomer + 1, 3).setValue(element);
  });                   
}
