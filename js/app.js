'use strict';

let pat= document.getElementById('pat');
let hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

let tableElement=document.createElement('table');
pat.append(tableElement);

function tableHead(){
  let tr1 =document.createElement('tr');
  tableElement.append(tr1);
  let th1=document.createElement('th');
  tr1.append(th1);
  th1.textContent='locations';
  for (let i=0;i<hours.length;i++){
    let th1=document.createElement('th');
    tr1.append(th1);
    th1.textContent=hours[i];
  }
  let th2=document.createElement('th');
  tr1.append(th2);
  th2.textContent='Daily Location Total';
}

function tableFooter(){
  let sumTotal=0;
  let tr1 =document.createElement('tr');
  tableElement.append(tr1);
  let th1=document.createElement('th');
  tr1.append(th1);
  th1.textContent='Totals';
  for (let i=0;i<hours.length;i++){
    let th1=document.createElement('th');
    tr1.append(th1);
    for (let x=0;x<locations.length;x++){
      th1.textContent=Number(th1.textContent)+ Number(locations[x].cookiesPerHour[i]);
    }
    sumTotal=sumTotal+Number(th1.textContent);
  }
  let th2=document.createElement('th');
  tr1.append(th2);
  th2.textContent=sumTotal;
}

function Locations (location,minCustomers,maxCustomers,avgCookies) {
  this.location= location;
  this.minCustomers= minCustomers;
  this.maxCustomers=maxCustomers;
  this.avgCookies= avgCookies;
  this.cookiesPerHour=[];
}

Locations.prototype.getCookiePerHour=function(){
  for (let i=0;i<hours.length;i++){
    this.cookiesPerHour[i] =Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)*Math.round(this.avgCookies);
  }
  return this.cookiesPerHour;};
Locations.prototype.render=function(){
  let tr1=document.createElement('tr');
  tableElement.append(tr1);
  let td1=document.createElement('td');
  tr1.append(td1);
  td1.textContent=this.location;

  let dailyLocationTotal=0;
  for(let i=0;i<hours.length;i++){

    let td1=document.createElement('td');
    tr1.append(td1);
    td1.textContent=this.cookiesPerHour[i];
    dailyLocationTotal=dailyLocationTotal+Number(td1.textContent);
  }
  let td2=document.createElement('td');
  tr1.append(td2);
  td2.textContent=dailyLocationTotal;
};

tableHead();

let seattle= new Locations ('Seatle',23,65,6.3);
seattle.getCookiePerHour();
seattle.render();

let tokyo= new Locations ('Tokyo',3,24,1.2);
tokyo.getCookiePerHour();
tokyo.render();

let dubai= new Locations ('Dubai',11,38,3.7);
dubai.getCookiePerHour();
dubai.render();

let paris= new Locations ('Paris',20,38,2.3);
paris.getCookiePerHour();
paris.render();

let lima= new Locations ('Lima',2,16,4.6);
lima.getCookiePerHour();
lima.render();

let locations = [seattle,tokyo,paris,dubai,lima];

tableFooter();
