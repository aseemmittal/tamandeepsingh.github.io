$(document).on("click", '.download_pdf', function(event) {
  
  var page_type = $('#page_type').val();
  var view_type = $('#view_type').val();
  
  if (page_type == 0) {
    alert('Please select page type');
  }
  else if (view_type == 0) {
    alert('Please select view type');
  }
  
  else {
    var canvas = document.getElementById(view_type);
    var pdf = new jsPDF('p','mm',page_type);
    
    var imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, 'PNG', 10, 10);
    // pdf.save("View.pdf");
    var blob = pdf.output("blob");
    window.open(URL.createObjectURL(blob));
  }
  
});