import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    (function(d, m){
      var kommunicateSettings = 
          {"appId":"27e039289de696453cfa7eff94587bf0a","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      (<any>window).kommunicate = m;
      m._globals = kommunicateSettings;
  })(document, (<any>window).kommunicate || {});
  }

}
