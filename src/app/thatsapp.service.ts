import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThatsappService {
  chatList: IChat[];

constructor() {     let mama: IChat = {
  picture: "a",
  name: "Mama",
  messages: [
    { name: "Mama", message: "Hallo,ich bin jetzt schon zu Hause. Bist du heute im Büro?" },
    { name: "Mama", message: "Ich würde jetzt Einkaufen fahren. Brauchst du was?" },
    { name: "Ich", message: "Hey, ja bin ich." },
    { name: "Ich", message: "Ja, warte ich schicke dir eine Liste." },
    { name: "Ich", message: "1.Skyr 2.Blaubeeren 3.Himbeeren 4.Feta 5.Edamame 6.Redbull Danke das wars" },
    { name: "Mama", message: "Okay, wann kommst du nach Hause?" },
    { name: "Ich", message: "Arbeite heute bis 15 Uhr, dann bin ich so um 15.45Uhr spätestens zu Hause." },
    { name: "Mama", message: "Okay, bis später." },
  ]
}
let martin: IChat = {
  picture: "a",
  name: "Martin",
  messages: [
    { name: "Ich", message: "Guten Morgen." },
    { name: "Ich", message: "Ich bin meiner Aufgabe schon fertig. Könnest du mir eine neue Aufgabe?" },
    { name: "Martin", message: "Moin, ja warte einen Moment." },
    { name: "Martin", message: "Aufgabe...." },
    { name: "Ich", message: "Danke." },
    { name: "Martin", message: "Falls du fragen hast immer raus damit." },
    { name: "Ich", message: "Jo" },
    { name: "Martin", message: " Und wie kommst du voran?" },
  ]
}
let alexandra: IChat = {
  picture: "a",
  name: "Alexandra",
  messages: [
    { name: "Alexandra", message: "HELLLLO" },
    { name: "Ich", message: "Hey" },
    { name: "Alexandra", message: "Wie gehts dir so? Was gibt es so neues bei dir?" },
    { name: "Ich", message: "Mir geht es ganz gut und dir? Nichts XD Corona ist blöd und bei dir?" },
    { name: "Alexandra", message: "Mir geht es sehr gut und ich soll dich von Sophia grüßen. HAHAHAHA ja ich weiß was du meinst. Ja die Ausbildung macht Spaß aber ich muss extrem viel lernen." },
    { name: "Ich", message: "Danke, schöne Grüße zurück. Ja ich weiß, Leonie muss auch viel lernen. Echt krass bei euch. Bei mir ist es etwas entspannter." },
    { name: "Alexandra", message: "Ja es ist echt eine mege, hätte nie gedacht das es soviel ist. Wie läuft bei dir die Ausbildung so?" },
    { name: "Ich", message: "Ganz gut. Bin nur 1x im Monat im Büro, wenn es hoch kommt XD. Aber ich würde echt gerne wieder in die Schule - Home Schooling ist blöd..." },
  ]
}
let leonie: IChat = {
  picture: "a",
  name: "Leonie",
  messages: [
    { name: "leonie", message: "Hey hast du heute Zeit" },
    { name: "Ich", message: "Heyo" },
    { name: "Ich", message: "Hmmm, heute ist schwer." },
    { name: "Ich", message: "Wie sieht es mit morgen Abend aus?" },
    { name: "Ich", message: "Wollen wir uns dann in der Oase treffen?" },
    { name: "leonie", message: "Ja geht klar." },
    { name: "Ich", message: "Super." },
    { name: "Ich", message: "Die Uhrzeit würde ich dir dann morgen schicken. Weiß noch nicht wie lange ich arbeite und wann ich fertig bin mit meinem Training." },
    { name: "leonie", message: "Alles klar, dann schreib mir einfach. Bis Morgen." },
  ]
}
this.chatList = [mama, martin, alexandra, leonie];
console.log(this.chatList);
}

}

export interface IChat {
picture: string;
name: string;
messages: IMessage[];
}
export interface IMessage {
name: string;
message: string;
}
