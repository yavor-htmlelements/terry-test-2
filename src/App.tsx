import * as React from 'react';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
class App extends React.PureComponent<{}, IGridProps> {
  
 generatedata(rowscount:any, hasNullValues:any) {
  // prepare the data
  var data = new Array();
  if (rowscount == undefined) rowscount = 100;
  var firstNames =
  [
      "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
  ];

  var lastNames =
  [
      "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
  ];

  var productNames =
  [
      "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
  ];

  var priceValues =
  [
       "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
  ];

  for (var i = 0; i < rowscount; i++) {
      var row:any = {};
      var productindex = Math.floor(Math.random() * productNames.length);
      var price = parseFloat(priceValues[productindex]);
      var quantity = 1 + Math.round(Math.random() * 10);

      row["id"] = i;
      row["available"] = productindex % 2 == 0;
      if (hasNullValues == true) {
          if (productindex % 2 != 0) {
              var random = Math.floor(Math.random() * rowscount);
              row["available"] = i % random == 0 ? null : false;
          }
      }
      row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
      row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
      row["name"] = row["firstname"] + " " + row["lastname"]; 
      row["productname"] = productNames[productindex];
      row["price"] = price;
      row["quantity"] = quantity;
      row["total"] = price * quantity;

      var date = new Date();
      date.setFullYear(date.getFullYear(), Math.floor(Math.random() * 12), Math.floor(Math.random() * 27));
      date.setHours(0, 0, 0, 0);
      const date3 = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
      var date2 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
      row["date"] =date2;
      row["1"] = row["firstname"] + " " + row["lastname"]; 
      row["2"] = row["firstname"] + " " + row["lastname"]; 
      row["3"] = row["firstname"] + " " + row["lastname"]; 
      row["4"] = row["firstname"] + " " + row["lastname"]; 
      row["5"] = row["firstname"] + " " + row["lastname"];
      row["6"] = row["firstname"] + " " + row["lastname"]; 
      row["7"] = row["firstname"] + " " + row["lastname"]; 
      row["8"] = row["firstname"] + " " + row["lastname"]; 
      row["9"] =quantity;
      row["10"] =quantity;
      row["11"] =quantity;
      row["12"] =quantity;
      row["13"] =quantity;
      row["14"] =quantity;
      row["15"] =quantity;
      row["16"] =quantity;
      row["17"] =quantity;
      row["18"] =quantity;
      row["19"] =quantity;
      row["20"] =quantity;
      row["22"] =quantity;
      row["21"] =quantity;
      row["23"] =quantity;
      row["24"] =quantity;
      row["25"] =quantity;
      row["26"] =quantity;
     
      data[i] = row;
  }

  return data;
}


    constructor(props: {}) {
        super(props);
        const source: any = {
          datafields: [
              { name: 'name', type: 'string' },
              { name: 'productname', type: 'string' },
              { name: 'available', type: 'bool' },
              { name: 'date', type: 'date' },
              { name: 'quantity', type: 'number' }
          ],
          datatype: 'array',
          localdata: this.generatedata(500, false)
      };
      this.state = {
          columns: [
              { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
              { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
              { text: 'Available', datafield: 'available', columntype: 'checkbox', filtertype: 'bool', width: 67 },
              { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
              { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right',cellsformat: 'N'  }
          ],
          source: new jqx.dataAdapter(source)
      }
    }
    public render() {
        return (
            <JqxGrid
                // @ts-ignore
                theme={'bootstrap'}
                filterable={true} sortable={true} 
                autoshowfiltericon={true}  
                enabletooltips={true}
                filtermode= {'excel'}
                width={800} source={this.state.source} columns={this.state.columns}
                columnsresize={true} />
        );
    }
}
export default App;