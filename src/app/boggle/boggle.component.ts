import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boggle',
  templateUrl: './boggle.component.html',
  styleUrls: ['./boggle.component.css']
})
export class BoggleComponent implements OnInit {
  dice: string[][] = [['A', 'E', 'A', 'N', 'E', 'G'],
                      ['A', 'H', 'S', 'P', 'C', 'O'],
                      ['A', 'S', 'P', 'F', 'F', 'K'],
                      ['O', 'B', 'J', 'O', 'A', 'B'],
                      ['I', 'O', 'T', 'M', 'U', 'C'],
                      ['R', 'Y', 'V', 'D', 'E', 'L'],
                      ['L', 'R', 'E', 'I', 'X', 'D'],
                      ['E', 'I', 'U', 'N', 'E', 'S'],
                      ['W', 'N', 'G', 'E', 'E', 'H'],
                      ['L', 'N', 'H', 'N', 'R', 'Z'],
                      ['T', 'S', 'T', 'I', 'Y', 'D'],
                      ['O', 'W', 'T', 'O', 'A', 'T'],
                      ['E', 'R', 'T', 'T', 'Y', 'L'],
                      ['T', 'O', 'E', 'S', 'S', 'I'],
                      ['T', 'E', 'R', 'W', 'H', 'V'],
                      ['N', 'U', 'I', 'H', 'M', 'Qu']]

  shake: string[][] = []
  board: string[] = []

  timer(): void {
    var number: number = 300;
    var minute: number = Math.floor(number / 60) - 1;
    var seconds: number = 60;
    var counter: number = 0;
    setInterval(function(): void {
      if(number > 0) {
        number -= 1;
        seconds -= 1;
      }
      if(counter == 60){
        minute -= 1;
        counter = 0;
        seconds = 60;
      }
      counter += 1;
      console.log(minute);
      console.log(seconds);
      document.getElementById("timer").innerHTML = minute + ":" + seconds + ""
    }, 1000);
  }

  shake_board(): void {
    for(var i=0; i<this.dice.length; i++){
      var currentIndex: number = i
      var randomIndex: number = Math.floor(Math.random() * this.dice.length)
      var currentValue: string[] = this.dice[currentIndex]
      var randomValue: string[] = this.dice[randomIndex]
      this.dice[currentIndex] = randomValue
      this.dice[randomIndex] = currentValue
    }
  }

  create_board(): void {
    for(var i=0; i<this.dice.length; i++){
      this.board.push(this.dice[i][Math.floor(Math.random() * this.dice[i].length)])
    }
  }

  constructor() { }

  ngOnInit() {
    this.shake_board();
    this.create_board();
    this.timer()
    console.log(Math.floor(299/60))
  }
}
