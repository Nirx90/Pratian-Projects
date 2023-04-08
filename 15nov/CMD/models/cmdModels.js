//Write your classes here

class Patient {
    constructor( ) {
    	// this.PatientID= 'PT202200001';
		// this.PatientName='Sakshi';
		// this.Gender='Female';
		// this.MobileNo= '9757676686';
		// this.IsRegistered= 'true';
		// this.RegisteredDate= '4/5/18';

		this.PatientID= '';
		this.PatientName='';
		this.Gender='';
		this.MobileNo= '';
		this.IsRegistered= 'true';
		this.RegisteredDate= '';
	
    }

}
let Patient1= new Patient();
let Patient2= new Patient();

		Patient1.PatientID= 'PT202200001';
		Patient1.PatientName='Nirav';
		Patient1.Gender='Female';
		Patient1.MobileNo= '9586837258';
		// Patient1.IsRegistered= 'true';
		Patient1.RegisteredDate= "4/5/18";
		console.log(Patient1);

		Patient2.PatientID= 'PT202200002';
		Patient2.PatientName='Nimesh';
		Patient2.Gender='Male';
		Patient2.MobileNo= '9757676686';
		// Patient2.IsRegistered= 'true';
		Patient2.RegisteredDate= "24/12/18";
		console.log(Patient2);

// Exports
// export { Patient };
// export { Doctor };
// export { Appointment };


class Address {
    constructor(ZipCode,Latitude,Longitude ) {

		this.StreetAddress='xyz.12 ncsljdnldsvn.road';
		this.City='Bronx';
		this.State='New York';
		this.Country='Us';
		this.ZipCode=ZipCode;
		this.Latitude=Latitude;
		this.Longitude=Longitude;
         

    }

}
let Address1= new Address('6368689','34','56');
console.log(Address1);
let Address2= new Address('638hd','56','43');
console.log(Address2);

		



		
		