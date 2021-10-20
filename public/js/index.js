$(function() {
    var pageNum = $('#pageNum').val();
    // console.log(pageNum)
    var htmlLet = "";
    for (var i = 1; i <= pageNum; i++) {
        htmlLet += "<a class='active' role='button' href='/news?page=" + i + "'>" + i + "</a>";
    }
    $('#pageList').html(htmlLet)

})