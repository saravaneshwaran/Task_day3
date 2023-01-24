
//1.for a given JSON iterate loop(for in)
var student={
    "name":"John doe",
    "age":23,
    "year":2013,
    "address":"san fransico"
    };

for (let i in student){
    console.log(student[i])
};

//2. create your own resume data in JSON format

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