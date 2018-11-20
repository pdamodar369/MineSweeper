function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.setAttribute('id', 'myTable')
    var tbdy = document.createElement('tbody');
    var mine =1;
    for (var i = 0; i < 10; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 10; j++) {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode(mine))
          tr.appendChild(td)
          mine++
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }
  tableCreate();

//   document.addEventListener("click", tableCreate());

function clickCell() {
    var row = document.getElementById('myTable').rows;
     for (var i = 0; i < row.length; i++) {
        for (var j = 0; j < row[i].cells.length; j++ ) {
            row[i].cells[j].onclick = function(e) {
                var zem = e.target.parentElement.parentElement;
                var some = [];
                for(var l=1; l<=100;l++) {
                    if(l%parseInt(e.target.innerText)==0)
                        some.push(l);
                }
                
                    // console.log(some[z]);
               
                for(var g=0; g<zem.childNodes.length; g++) {
                    for(var y=0; y<zem.childNodes[g].childNodes.length; y++) {
                        for(var ab=parseInt(zem.childNodes[g].childNodes[y].innerText);ab>0; ab--) {
                            for(var z=0; z<some.length; z++) {
                            if(parseInt(zem.childNodes[g].childNodes[y].innerText)==some[z]) {
                                zem.childNodes[g].childNodes[y].innerText = "*";
                            }
                        }
                        }
                    }
                }
                
            }
            
        }
    }
}
clickCell();

