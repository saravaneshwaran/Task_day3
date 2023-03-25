
//for.. of

var student='{"name":"John doe","age":23, "year":2013,"address":"san fransico"}';
let obj=JSON.parse(student);
for(let values of Object.values(obj)){
console.log(values)
} 

//for..in
 var student='{"name":"John doe","age":23, "year":2013,"address":"san fransico"}';
 let obj=JSON.parse(student);
 for(let values in obj){
 console.log(obj[values])
 } 
 
 //forEach
var student='{"name":"John doe","age":23, "year":2013,"address":"san fransico"}';
 let Obj=JSON.parse(student);
 let value=Object.values(Obj)
 value.forEach((n)=>  {console.log(n)}) 

 //for
 const student = '{"name":"John doe","age":23,"year":2013,"address":"san fransico"}';
 const obj = JSON.parse(student);
 const values = Object.values(obj);
 console.log(values)
 
 for (let i = 0; i < values.length; i++) {
   console.log(values[i]);
 }
 var resume={
    "Details":{
        "a_Personal Info":{
    "Name":"Saravaneshwaran",
    "Father name":"Govindharaj",
    "Date of birth":"22-05-1998",
    "Gender":"Male",
    "Nationality":"Indian",
    "Marital Status":"Single",
    "Address":"No 77 Kottaimedu main street,Thottiyam,Trichy 621215",
    "Mobile No":"8526886646",
    "city":"Trichy",
    "state":"Tamilnadu"
    },
    "b_Skill set":{
        "Skill":"Javascript,nodeJS,ReactJS",
    
    },

   "c_Education Qualification":{
    "10th percentage ":"92%",
    "12th percentage ":"91%",
    "UG CGPA":"7.8",
    "Max Education Qualification":"B.E Degree"
    
   },
   "d_work experince":{
    "Year of experince":"1",
    "company":"xxyyzz",
    "postion":"Frontend Developer",
    "start date":"26/12/2022"
   }


    }
};
for(var a in resume){
    console.log(resume[a])
}

//2.RESUME
var resume={
    "Details":{
        "a_Personal_Info":{
    "Name":"Saravaneshwaran",
    "Father name":"Govindharaj",
    "Date of birth":"22-05-1998",
    "Gender":"Male",
    "Nationality":"Indian",
    "Marital Status":"Single",
    "Address":"No 77 Kottaimedu main street,Thottiyam,Trichy 621215",
    "Mobile No":"8526886646",
    "city":"Trichy",
    "state":"Tamilnadu"
    },
    "b_Skill set":{
        "Skill":"Javascript,nodeJS,ReactJS",
    
    },

   "c_Education Qualification":{
    "10th percentage ":"92%",
    "12th percentage ":"91%",
    "UG CGPA":"7.8",
    "Max Education Qualification":"B.E Degree"
    
   },
   "d_work experince":{
    "Year of experince":"1",
    "company":"xxyyzz",
    "postion":"Frontend Developer",
    "start date":"26/12/2022"
   }


    }
};
for(var a in resume){
    console.log(Object.values(resume[a].a_Personal_Info))
}
