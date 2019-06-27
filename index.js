class Course
{
    constructor(course_code="ABC123",course_unit=0,course_title="Untitled",score=0)
    {
      
        this.code = course_code;
        this.title = course_title;
        this.unit=course_unit;
        this.score=score;
        this.assignGrade(score);
        
    }

    assignGrade(grade) 
    {       
            if(grade >=70)
                this.grade="A" ;
            else if(grade >=60)
                this.grade="B"; 
            else if(grade >=50)
                this.grade="C"; 
            else if(grade >=45)
                this.grade="D"; 
            else if(grade >=40)
                this.grade="E";
            else
                this.grade="F";   
        this.assignPoints(this.grade);        
    }

    assignPoints(grade) 
    {       
            if(grade == "A")
                this.points=5 ;
            else if(grade == "B")
                this.points=4 ; 
            else if(grade == "C")
                this.points=3 ;
            else if(grade == "D")
                this.points=2 ;
            else if(grade == "E")
                this.points=1 ;
            else
                this.grade="F";   
    }



}

const message = document.getElementById('message');
const courselist = [];
const courselistDiv = document.getElementById('course-list');
let totalunits = 0;
let totalscore = 0;
const form = document.getElementById('details');
const addCourseBtn = document.getElementById('addcourse');

function addCourse(e)
{
    e.preventDefault();
    const score = Number(form['score'].value);
    const code = form['code'].value;
    const title = form['title'].value;
    const unit = Number(form['unit'].value);   
    const letters = /^[A-Za-z]+$/;
    const alphaNumeric = /^[A-Za-z0-9]+$/; 
    
    if (score >=0 && score <= 100){

        if (unit > 0 && unit <= 6){

            if (title.match(letters)){

                if (code.match(alphaNumeric)){


                    const course = new Course(code,unit,title,score);
                    totalunits +=unit;
                    courselist.push(course);

                    let mode = 'light';

                    if(courselist.length%2==0)
                    {
                        mode = 'dark'
                    }

                    appendCourse(course,mode);

                } else {
                    message.textContent = 'Error! Code can only contain letters and numbers';

                }


            } else{
                message.textContent = 'Error! Title should only contain letters';
            }

        } else {
            message.textContent = 'Error! Unit can only be between 1 and 6';
        }

        
    } else{
        message.textContent = 'Error! Score can only be between 0 and 100';
    }


    console.log(courselist);

    form['score'].value="";
    form['code'].value="";
    form['title'].value="";
    form['unit'].value=""; 

}


function appendCourse(course,mode)
{
    
    //         <button class="modify button" data-code='ABC123'>Modify</button>
    //         <button class="delete button" data-code='ABC123'>Delete</button>

    const courseRow = createElement('div');
    courseRow.classList.add(mode);
    const details =  Object.keys(course).filter( el => el!='points' && el!='title' );
    

    for(let i =0 ; i < details.length; i++)
    {
         courseRow.appendChild(createElement('p',course[details[i]]));
    }

    courselistDiv.appendChild(courseRow)
   

}

function createElement(el,content="")
{
    const element = document.createElement(el);
    if(content)
    {
        element.appendChild(document.createTextNode(content)) ;
    }
    return element;
}


//  ASSIGNMENT
//   Using event listeners add form validation in the ffg
//  -let course score lie b/w 0 and 100
//  -let unit lie b/w 1 and 6
//  -let course title contain only letters
//  -let course code contain only letters and numbers

addCourseBtn.addEventListener('click',addCourse);

function calculateGP()
{

}