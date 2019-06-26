class Course
{
    constructor(course_name="ABC123",course_unit=0,course_title="Untitled",score=0)
    {
        this.name = course_name;
        this.title = course_title;
        this.unit=course_unit;
        this.score=score;
    }

    assignGrade(score)
    {
        switch (score) {
            case score >=70:
                this.grade="A"                
                break;
            case score >=60:
                this.grade="B"                
                break; 
            case score >=50:
                this.grade="C"                
                break; 
            case score >=45:
                this.grade="D"                
                break; 
            case score >=40:
                this.grade="E"                
                break;
            default:
                this.grade="F"                
                break;
        }
    }


}

const courselist = [];
let totalunits = 0;
const form = document.getElementById('details');
const addCourseBtn = document.getElementById('addcourse');

function addCourse()
{
    const score = form['score'].value;
    const code = form['code'].value;
    const title = form['title'].value;
    const unit = form['unit'].value;
}