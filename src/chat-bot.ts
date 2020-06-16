import { LitElement, customElement, html, property } from '@polymer/lit-element';
import scss from './chat-bot.scss';

@customElement(ChatBot.is)
export class ChatBot extends LitElement {

    static get is(): any { return 'chat-bot' }; 
    
    @property()
    variable: any;

    name: String;

    static get properties(){
        return{
            name:{ type: String }
        }
      }

    constructor() {
        super();
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    render() {
        return html`
        <style>${scss.toString()}</style>
        <h1>Hi i'm <span>${this.name}</span> a Web Developer</h1>`;
    }
}