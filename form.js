$(document).ready(function () {
    let departments = [];
    $("#empform").on("submit", function (event) {
      event.preventDefault();
      let name = $(".text-input1").val();
      let pic = $('input[name="radio"]:checked').val();
      console.log(pic);
      let Gender=$('input[name="radio-gender"]:checked').val();
      // let Gender = $("input[name='male']:checked").val();
     
    
      $("input[type='checkbox']:checked").each(function () {
        departments.push($(this).val());
  
        console.log($(this).val());

      });
      let salary= $("select[name='salary']").val();
      let startdate = $("select[name='start-date']").val();
      let startmonth = $("select[name='start-month']").val();
      let startyear = $("select[name='start-year']").val();
      let desc = $(".notes").val();
  let employeeObj = {
        id: Math.random(),
        name: name,
        pic: pic,
        Gender: Gender,
        salary:salary,
        departments: JSON.stringify(departments),
        desc: desc,
        date: startdate + " " + startmonth + " " + startyear,
      };
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/employees",
        data: employeeObj,
        success: function (days) {
          alert("data succesfully");
        },
        error: function () {
          alert("error in posting");
        },
      });
      return false;
    });
  });