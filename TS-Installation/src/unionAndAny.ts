let subs = 10; //correct
let subs2 = "10K"; //incorrect way to write

// Now it will accept both
let subs3: number | string = 10; //correct
subs3 = "10K"; //also correct

// How it works on production
let apiRequestStatus: 'pending' | 'success' | 'failed' = 'pending';
apiRequestStatus = 'success'; //correct

//  apiRequestStatus = 'Mahim'; //incorrect

let footballClub: 'Real Madrid' | 'Barcelona' | 'Atletico Madrid' = "Real Madrid"