import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
hbspt: any;  

riseUpData = [
  {
    title:'Resilience',
    description: 'Our passion for our core purpose gives us the courage to reach beyond our comfort zone to try innovative and unconventional ideas. We view honest failure as a learning opportunity for the future.'    
  },
  {
    title:'Integrity',
    description: 'We make every decision, action, and belief through honest effort, good intentions, and high moral and ethical standards. You can trust us to do what we say we will do. Always'    
  },
  {
    title:'Swift',
    description: 'Agility and the ability to anticipate client needs are key to UpAdapt. As your structures and procedures continue to change, we will also quickly adapt our services.'    
  },
  {
    title:'Excellence',
    description: 'The pursuit of excellence is the defining characteristic of our company and of our people and we are committed to creating and sustaining a working environment that breeds excellence.'    
  },
  {
    title:'Unity',
    description: 'Unity celebrates diversity. Synergizing the collective experiences, varied skills, and unique talents of every team member builds unstoppable momentum and drives unimaginable achievements. '    
  },
  {
    title:'Passionate',
    description: 'We are passionate about our business and our roles, showing enthusiasm, energy and taking pleasure in what we do. Having a joy not just for the work itself but also the people around us, so that everyone can be bold, innovative, and creative.'    
  },
]
recrutSteps = [
  {
    step_no: '01',
    step_title: 'Recruitment Plan',
    step_desc: 'If the opening has been newly formed or vacated recently, It is important to find out what the position and eventually your organization need in a candidate who will assume the position.'
  },
  {
    step_no: '02',
    step_title: 'Talent Search',
    step_desc: 'Finding the best source of recruitment, Identifying the right talent, attracting and motivating them to apply for the job help you bring in a fresh perspective to your organization'
  },
  {
    step_no: '03',
    step_title: 'Screening and Shortlisting',
    step_desc: 'In order to zero-in on the right candidate for the job and move along with the recruitment process, it is important to effectively screen your candidates.'
  },
  {
    step_no: '04',
    step_title: 'Interview',
    step_desc: 'Shortlisted candidates will move to the interview process after which will determine whether the candidate to be offered the job or rejected.'
  },
  {
    step_no: '05',
    step_title: 'Evaluation & Employment Offers',
    step_desc: 'Once you have screened throughout the potential candidates, you will have to offer the position to the mist deserving one who will be evaluated or the credibility prior to the offer'
  },

]
  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.hbspt.forms.create({
      region: "eu1",
      portalId: "26280739",
      formId: "0f9dd4ac-455a-4962-b3d3-83ac17db4130"
    });  
  }

}
