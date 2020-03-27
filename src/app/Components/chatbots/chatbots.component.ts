import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbots',
  templateUrl: './chatbots.component.html',
  styleUrls: ['./chatbots.component.css']
})
export class ChatbotsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bots = {
    "HEALTH CHECK (Google Assistant)":{
      "desc":"Dialogflow agent for general health check (Infermedica Api)",
      "url":"https://www.youtube.com/embed/Do97F1bOu3Q",
      "giturl":"https://github.com/DhilipBinny/_Health-check-v1"
    },
    "SG BUS (Telegram)":{
      "desc":"Telegram Chatbot (using Botogram) to get the SG Bus Timings",
      "url":"https://www.youtube.com/embed/6DBSEdOVnBU",
      "giturl":"https://github.com/DhilipBinny/_TelegramBot-Sg-Bus-Timing-BOTOGRAM",
      "liveurl":"https://t.me/Find_My_Bus_Leh_bot"
    },
    "HEALTH CHECK (Whatsapp)":{
      "desc":"Whatsapp integrated Dialogflow agent for general health check (Infermedica Api)",
      "url":"https://www.youtube.com/embed/JZwTjJQTgW8",
      "giturl":"https://github.com/DhilipBinny/_Health-check-v1"
    },
    "SG BUS (Google Assistant)":{
      "desc":"Google Assistant voice agent to get the SG Bus Timings (using DataMall Api)",
      "url":"https://www.youtube.com/embed/kNdEQ4vlUEQ",
      "giturl":"https://github.com/DhilipBinny/_Sg-Bus-Timing-Voice-bot-PYTHON-DIALOGFLOW",
    },
    "BULB SWICH (ON/OFF)":{
      "desc":"Google Assistant voice agent to control the Raspberry Pi IoT LEDS through Voice as well as chat",
      "url":"https://www.youtube.com/embed/7NzN4Q2c3Do",
      "giturl":"https://github.com/DhilipBinny/_SwithBulbs-iot-PYTHON-DIALOGFLOW-FIREBASE"
    }
  }

  openNewTab(url){
    window.open(url, '_blank');
  }
  no_of_bots = Object.keys(this.bots).length

}
