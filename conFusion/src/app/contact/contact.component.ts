import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { icon, latLng, marker, polyline, tileLayer, circleMarker, polygon, circle } from 'leaflet';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.',
      'maxlength':     'Tel number cannot be more than 11 characters long.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.',
    },
  };

  googleMaps = tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    detectRetina: true
  });
  googleHybrid = tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    detectRetina: true
  });

  spot = marker([ 29.938801, -95.340056 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: '/assets/images/markers/marker-icon-violet.png',
      shadowUrl: '/assets/images/markers/marker-shadow.png'
    })
    });

    spot2 = circleMarker([29.938801, -95.340056]);

   // route = polyline([[ 29.938801, -95.340056 ],
   
   //   [ 29.847106, -95.342239 ]]);
  
  
  layersControl = {
    baseLayers: {
      'Google Maps': this.googleMaps,
      'Google Hybrid': this.googleHybrid
    },
    overlays: {
      'Over Here': this.spot,
      //'Route': this.route
     
    }
  };
  
  
  
    constructor(private fb: FormBuilder) {
    this.createForm();
  }


  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ['', [Validators.required, Validators.pattern, Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None' ,
      message: ''
    });

    this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  
  }
  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telum:'',
      email:'',
      agree:false,
      contactType: 'None',
      message: ''

    });
  }

  ngOnInit() {
  }

  options = {
    layers: [ this.spot, this.spot2, polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]), circle([ 46.95, -122 ], { radius:10000 }),
      
      tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        detectRetina: true
        
      })
      
    ],
   
    zoom: 7,
    center: latLng([ 29.7604 , -95.3698 ])
  };

}
