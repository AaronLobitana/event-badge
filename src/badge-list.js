import { LitElement, html, css } from 'lit';
import "./event-badge";


export class BadgeList extends LitElement{

    static get tag() {
        return 'badge-list';
    }

    static get properties() {
        return {
            badges: { type: Array },
        }

    }

    constructor() {
        super();
        this.badges = [];
        this.updateBadges();
    }



    updateBadges() {
        const address = '../api/badgearray';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
        });
    }

   


    static get styles(){
        return css`
        
        
        .box {
            width: 100%;
            border: 2px solid lightgray;
            display: block;
        }
        .item {
            display: inline-flex;
        }
    `;
    }
    

    render() {
        return html`
        <div class="box">
            
            
            ${this.badges.map(badge => html`
            <div class="item">
                <event-badge 
                name="${badge.name}" 
                line2="${badge.line2}" 
                line3="${badge.line3}" 
                media="${badge.media}" 
                mainimage="${badge.mainimage}" 
                secimage="${badge.secimage}" 
                ?sepia="${badge.sepia}" 
                ?bw="${badge.bw}" 
                tvcolor="${badge.tvcolor}" 
                topcolor1="${badge.topcolor1}" 
                topcolor2="${badge.topcolor2}" 
                topcolor3="${badge.topcolor3}" 
                topcolor4="${badge.topcolor4}" 
                topcolor5="${badge.topcolor5}" 
                topcolor6="${badge.topcolor6}" 
                topcolor7="${badge.topcolor7}" 
                bottomcolor1="${badge.bottomcolor1}" 
                bottomcolor2="${badge.bottomcolor2}" 
                bottomcolor3="${badge.bottomcolor3}" 
                bottomcolor4="${badge.bottomcolor4}" 
                bottomcolor5="${badge.bottomcolor5}" 
                bottomcolor6="${badge.bottomcolor6}" 
                bottomcolor7="${badge.bottomcolor7}" 
                backgroundcolor="${badge.backgroundcolor}" 
                knobscolor="${badge.knobscolor}" 
                fontcolor="${badge.fontcolor}"></event-badge>
            </div>
            `)}
        </div>
        `;
    }
    
}

customElements.define(BadgeList.tag, BadgeList);