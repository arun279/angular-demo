import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component2.html',
  // template: `<div class="error">Error</div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}

// export class AppComponent implements OnInit {
//   showMessage = true;
//   counterInterval;
//   ngOnInit(): void {
//     let counter = 0;
//     this.counterInterval = setInterval(function() {
//       counter = counter + 1;
//       if (counter % 2 == 0) {
//         this.showMessage = true;
//       }
//       else {
//         this.showMessage = false;
//       }
//     }, 1000)
//   }

//   ngOnDestroy() {
//     clearInterval(this.counterInterval);
//   }
// }

// export class AppComponent implements OnInit {
//   // old code
//   title = 'angular-demo';
//   //model
//   name = "valar morghulis"
//   color = "black"
//   //logic
//   handleButtonClick() {
//     if(this.name == "valar morghulis") {
//       this.name = "valar dohaeris";
//     }
//     else {
//       this.name = "valar morghulis";
//     }
//   }

//   changeColor(color) {
//     this.color = color
//   }
// }