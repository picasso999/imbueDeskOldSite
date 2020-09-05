/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1uz96kfApQmoTMjYIes5w61EoCMG1RjLxhClCE6loV5Q/edit?usp=sharing');
    query.setQuery('SELECT A, B, C, D, E, F label A "Email Address of the Employee", B "Full Name", C "Joining Date", D "Employement End Term Date", E "Designation In The Company", F "Contact Number" ');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
