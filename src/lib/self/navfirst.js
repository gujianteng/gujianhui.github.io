var navf = function () {
    getnavfirst()
    function getnavfirst() {
        $.ajax({
            url: '../lib/navfirst.json',
            dataType: 'json',
            success: function (res) {
                // console.log(res);
                var str=''
                res.forEach(item => {
                    str += `<li>${ item.name }</li>`
                  })
                  console.log(str);
                  $('.gu').html(str)

            }
        })
    }
}
export default {
    navf
}