$(function(){

    var pdf = new jsPDF('p','pt','a4');

    

    pdf.addHTML($("#pdf"),function() {

        var yazdir = pdf.output('datauristring');

        $('#onizleme').attr("src",yazdir);

        

        $("#indir").click(function(){

            pdf.save("hakkimda.pdf");

        })

    });

    

})