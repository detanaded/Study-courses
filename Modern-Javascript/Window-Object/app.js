// WINDOW METHODS / OBJECTS / PROPERTIES



// Alert

// window.alert('Hello World');

// Prompt

// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//     console.log('YES')
// } else {
//     console.log('NO')
// };

let val;
// outer height and width

// val = window.outerHeight;
// val = window.outerWidth;

// Inner Height and Width

val = window.innerHeight;
val = window.innerWidth;

// Scroll Points

val = window.scrollY;
val = window.scrollX;


// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;


// Redirect
// window.location.href = 'http://google.com';
// Reload
// Window.location.reload();

// History Object

// window.history.go();
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);
