$(function() {
    $('#form').submit(function() {
      var selectItem = $('#select-form').val();
      var textItem = $('#text-form').val();
      if (textItem == '') {
        $('#error-message').text('理由を記入してください');
      } else {
        $('#error-message').text('');
      }
      $('#output-select').text(selectItem);
      $('#output-text').text(textItem);
      return false;
    });
  
    $('.option-btn').click(function() {
      var optionText = $(this).text();
      // 変数clickedOptionに、クリックした要素のdata-optionの値を代入してください。
      var clickedOption = $(this).attr('data-option');
      
      $('#text-form').val(optionText + 'が好きな理由は、');
      // 変数clickedOptionを用いて、「#select-form」の値を自動で入力してください。
      $('#select-form').val(clickedOption);
      
    });
  });