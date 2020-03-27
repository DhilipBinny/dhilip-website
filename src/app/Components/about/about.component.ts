import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  features_list = [
    "ML Model Building",
    "Data Engineering",
    "Data Analytics",
    "Data Visualization",
    "Interactive Plotly Dashboards",
    "Chat Bots & Voice Bots",
    "Web Design",
  ]

  features_list2 ={
    "AWS":{
      "img_src":"assets/icons2/aws.png",
      'desc':"EC2 Instance and Deployment",
    },
    "AZURE":{
      "img_src":"assets/icons2/azure.png",
      'desc':"Azure Web App Services",
    },
    "CHATBOT":{
      "img_src":"assets/icons2/bot.png",
      'desc':"Dialogflow (Google Assisant) Voice agent, Botogram (Telegram Bot)",
    },
    // "CLOUD":{
    //   "img_src":"assets/icons2/cloud.png",
    //   'desc':"",
    // },
    "DOCKER":{
      "img_src":"assets/icons2/docker.png",
      'desc':"Dockerizing Applications with adopted 12 factor principles ",
    },
    "HEROKU":{
      "img_src":"assets/icons2/heroku.png",
      'desc':"Heroku App Deployment",
    },
    "MACHINE LEARNING":{
      "img_src":"assets/icons2/ml.png",
      'desc':"Supervised and Unsupervised model building - Scikit-learn | Keras",
    },
    "REST API":{
      "img_src":"assets/icons2/restapi.png",
      'desc':"Rest Api Service - Flask, NodeJs",
    },
    "AWS S3":{
      "img_src":"assets/icons2/s3.png",
      'desc':"S3 Bucket | Athena",
    },
    "DATA SCRAPING":{
      "img_src":"assets/icons2/selenium.png",
      'desc':"Selinium | BeautifulSoup",
    },
    "DATABASES":{
      "img_src":"assets/icons2/stack.png",
      'desc':"MsSql, MySql, MongoDb, S3, Firebase..",
    },
    "DATA VISUALISATION":{
      "img_src":"assets/icons2/chart.png",
      'desc':"Plotly, Seaborn, Matplotlib",
    },

    
  }

}
