
      $(document).ready(function () {
        $.get("http://localhost:3000/employees", function (data) {
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            console.log("hello");
            let departments = JSON.parse(data[i].departments);
            let cost = `<tr>
            
            <td>${data[i].name} </td>
            <td>${data[i].Gender} </td>
           
            <td>
              ${departments.map(department => {
                return `<span style="background-color:rgb(62, 121, 4); color: black; border-radius: 5px;"> ${department}</span>`;
              })}
            </td>;
            <td>${data[i].salary} </td>
           
            <td>${data[i].date} </td>
          <td> <span><img src="edit.png" alt="" width="30px">
           </span><span><img src="delete.png" alt="" width="30px"></span></td>
             
            </tr>`;
            $(".tablebody").append(cost);
          }
        });
      });

        
    
        
      
   
  
    