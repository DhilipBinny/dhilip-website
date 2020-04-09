import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  showProjectComponent;
  ngOnInit() {
    this.showProjectComponent = true;
  }


  cards = {
    "Quick Draw - Keras": {
      "desc": "..",
      "src": "assets/images/quickdraw.png",
      "giturl":"https://github.com/DhilipBinny/QuickDraw-CNN",
      "url":"",
    },
    "Gate Analysis - NetworkX": {
      "desc": "..",
      "src": "assets/images/networkx.png",
      "giturl":"https://github.com/DhilipBinny/NetworkX-GateAnalysis",
      "url":"",
    },
    "Tic Tac Toe ": {
      "desc": "..",
      "src": "assets/images/tictactoe.png",
      "liveurl":"http://ec2-13-59-166-73.us-east-2.compute.amazonaws.com:5003/",
      "giturl":"https://github.com/DhilipBinny/_TicTacToe-PYTHON",
    },
    "Sg-Bus Telegram Bot": {
      "desc": "..",
      "src": "assets/images/telegram.png",
      "liveurl":"https://t.me/Find_My_Bus_Leh_bot",
      "giturl":"https://github.com/DhilipBinny/_TelegramBot-Sg-Bus-Timing-BOTOGRAM",
    },
    "Sg-Bus Web App": {
      "desc": "..",
      "src": "assets/images/sgbus.png",
      "liveurl":"https://sg-bus.dhilip2k17.now.sh/",
      "giturl":"https://github.com/DhilipBinny/SgBuses-ANGULAR",
      "giturl2":"https://github.com/DhilipBinny/SgBusses-Python"
    },
    "Task List":{
      "desc": "..",
      "src": "assets/images/tasklist.png",
      "liveurl":"http://134.209.105.222:9081/",
      "giturl":"https://github.com/DhilipBinny/TaskList-Angulatr-Node-Mongo",
    },
    "Name Card Scanner":{
      "desc": "..",
      "src": "assets/images/namecardscanner.png",
      "liveurl":"https://ocr.dhilip2k17.now.sh/",
      "giturl":"https://github.com/DhilipBinny/_NameCardReader_backend-SPACY-TESSARACT",
    },
    "Vanila To Do List ": {
      "desc": "..",
      "src": "assets/images/todolist.png",
      "liveurl":"assets/2/index.html",
      "giturl":"https://github.com/DhilipBinny/_Todolist-PYTHON-POSTGRESS",
    },
    "Bulb SwitchOn/Off Iot": {
      "desc": "..",
      "src": "assets/images/bulb.png",
      "liveurl":"assets/1/index.html",
      "giturl":"https://github.com/DhilipBinny/_SwithBulbs-iot-PYTHON-DIALOGFLOW-FIREBASE",
    },
  }

  openNewTab(url){
    window.open(url,"_blank")
  }

}
