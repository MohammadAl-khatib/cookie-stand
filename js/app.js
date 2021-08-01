'use strict';

let pat= document.getElementById('pat');
let hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];


// ########## Seattle ##########
const Seattle = {
  location: 'Seatle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersPerHour:[],
  cookiesPerHour:[],


  getCustomersNumber: function(min, max) {
    for (let i=0;i<14;i++){
      this.customersPerHour[i] =Math.floor(Math.random() * (max - min + 1) + min);
    }
    return this.customersPerHour;
  },
  getCookiePerHour: function() {
    for (let i=0;i<14;i++){
      this.cookiesPerHour[i] =this.customersPerHour[i]*Math.round(this.avgCookies);
    }
    return this.cookiesPerHour;
  },
  total: function(array){
    let sum =0;
    for (let i=0;i<array.length;i++ ){
      sum=sum+array[i];
    }
    return sum;

  },
  render: function(){
    let h3Element= document.createElement('h3');
    h3Element=this.location;
    pat.append(h3Element);

    let ul1Element=document.createElement('ul');
    pat.append(ul1Element);

    for (let i=0;i<this.cookiesPerHour.length;i++){
      let li1Element=document.createElement('li');
      li1Element.textContent=hours[i]+this.cookiesPerHour[i];
      ul1Element.appendChild(li1Element);

    }
    let li2Element=document.createElement('li');
    li2Element.textContent ='Total: '+ this.total(this.cookiesPerHour);
    ul1Element.appendChild(li2Element);


  }

};

console.log(Seattle.getCustomersNumber(Seattle.minCustomers,Seattle.maxCustomers));
console.log(Seattle.getCookiePerHour());
Seattle.render();
// ########## Tokyo ##########
const Tokyo = {
  location: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  customersPerHour:[],
  cookiesPerHour:[],
  getCustomersNumber: function(min, max) {
    for (let i=0;i<14;i++){
      this.customersPerHour[i] =Math.floor(Math.random() * (max - min + 1) + min);
    }
    return this.customersPerHour;
  },
  getCookiePerHour: function() {
    for (let i=0;i<14;i++){
      this.cookiesPerHour[i] =this.customersPerHour[i]*Math.round(this.avgCookies);
    }
    return this.cookiesPerHour;
  },
  total: function(array){
    let sum =0;
    for (let i=0;i<array.length;i++ ){
      sum=sum+array[i];
    }
    return sum;

  },
  render: function(){
    let h3Element= document.createElement('h3');
    h3Element=this.location;
    pat.append(h3Element);

    let ul1Element=document.createElement('ul');
    pat.append(ul1Element);

    for (let i=0;i<this.cookiesPerHour.length;i++){
      let li1Element=document.createElement('li');
      li1Element.textContent=hours[i]+this.cookiesPerHour[i];
      ul1Element.appendChild(li1Element);

    }
    let li2Element=document.createElement('li');
    li2Element.textContent ='Total: '+ this.total(this.cookiesPerHour);
    ul1Element.appendChild(li2Element);


  }

};

console.log(Tokyo.getCustomersNumber(Tokyo.minCustomers,Tokyo.maxCustomers));
console.log(Tokyo.getCookiePerHour());
Tokyo.render();

// ########## Dubai ##########
const Dubai = {
  location: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  customersPerHour:[],
  cookiesPerHour:[],
  getCustomersNumber: function(min, max) {
    for (let i=0;i<14;i++){
      this.customersPerHour[i] =Math.floor(Math.random() * (max - min + 1) + min);
    }
    return this.customersPerHour;
  },
  getCookiePerHour: function() {
    for (let i=0;i<14;i++){
      this.cookiesPerHour[i] =this.customersPerHour[i]*Math.round(this.avgCookies);
    }
    return this.cookiesPerHour;
  },
  total: function(array){
    let sum =0;
    for (let i=0;i<array.length;i++ ){
      sum=sum+array[i];
    }
    return sum;

  },
  render: function(){
    let h3Element= document.createElement('h3');
    h3Element=this.location;
    pat.append(h3Element);

    let ul1Element=document.createElement('ul');
    pat.append(ul1Element);

    for (let i=0;i<this.cookiesPerHour.length;i++){
      let li1Element=document.createElement('li');
      li1Element.textContent=hours[i]+this.cookiesPerHour[i];
      ul1Element.appendChild(li1Element);

    }
    let li2Element=document.createElement('li');
    li2Element.textContent ='Total: '+ this.total(this.cookiesPerHour);
    ul1Element.appendChild(li2Element);


  }

};

console.log(Dubai.getCustomersNumber(Dubai.minCustomers,Dubai.maxCustomers));
console.log(Dubai.getCookiePerHour());
Dubai.render();

// ########## Paris ##########
const Paris = {
  location: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  customersPerHour:[],
  cookiesPerHour:[],
  getCustomersNumber: function(min, max) {
    for (let i=0;i<14;i++){
      this.customersPerHour[i] =Math.floor(Math.random() * (max - min + 1) + min);
    }
    return this.customersPerHour;
  },
  getCookiePerHour: function() {
    for (let i=0;i<14;i++){
      this.cookiesPerHour[i] =this.customersPerHour[i]*Math.round(this.avgCookies);
    }
    return this.cookiesPerHour;
  },
  total: function(array){
    let sum =0;
    for (let i=0;i<array.length;i++ ){
      sum=sum+array[i];
    }
    return sum;

  },
  render: function(){
    let h3Element= document.createElement('h3');
    h3Element=this.location;
    pat.append(h3Element);

    let ul1Element=document.createElement('ul');
    pat.append(ul1Element);

    for (let i=0;i<this.cookiesPerHour.length;i++){
      let li1Element=document.createElement('li');
      li1Element.textContent=hours[i]+this.cookiesPerHour[i];
      ul1Element.appendChild(li1Element);

    }
    let li2Element=document.createElement('li');
    li2Element.textContent ='Total: '+ this.total(this.cookiesPerHour);
    ul1Element.appendChild(li2Element);


  }

};

console.log(Paris.getCustomersNumber(Paris.minCustomers,Paris.maxCustomers));
console.log(Paris.getCookiePerHour());
Paris.render();

// ########## Lima ##########
const Lima = {
  location: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  customersPerHour:[],
  cookiesPerHour:[],
  getCustomersNumber: function(min, max) {
    for (let i=0;i<14;i++){
      this.customersPerHour[i] =Math.floor(Math.random() * (max - min + 1) + min);
    }
    return this.customersPerHour;
  },
  getCookiePerHour: function() {
    for (let i=0;i<14;i++){
      this.cookiesPerHour[i] =this.customersPerHour[i]*Math.round(this.avgCookies);
    }
    return this.cookiesPerHour;
  },
  total: function(array){
    let sum =0;
    for (let i=0;i<array.length;i++ ){
      sum=sum+array[i];
    }
    return sum;

  },
  render: function(){
    let h3Element= document.createElement('h3');
    h3Element=this.location;
    pat.append(h3Element);

    let ul1Element=document.createElement('ul');
    pat.append(ul1Element);

    for (let i=0;i<this.cookiesPerHour.length;i++){
      let li1Element=document.createElement('li');
      li1Element.textContent=hours[i]+this.cookiesPerHour[i];
      ul1Element.appendChild(li1Element);

    }
    let li2Element=document.createElement('li');
    li2Element.textContent ='Total: '+ this.total(this.cookiesPerHour);
    ul1Element.appendChild(li2Element);


  }

};

console.log(Lima.getCustomersNumber(Lima.minCustomers,Lima.maxCustomers));
console.log(Lima.getCookiePerHour());
Lima.render();


