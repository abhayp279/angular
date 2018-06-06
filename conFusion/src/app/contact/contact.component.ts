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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      telnum: [0, Validators.required],
      email: ['', Validators.required],
      agree: false,
      contacttype: 'None' ,
      message: ''
    });
  
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
