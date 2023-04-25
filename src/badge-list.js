import { LitElement, html, css } from 'lit';
import "./event-badge";


export class MyBadgeList extends LitElement{

    static get tag() {
        return 'mybadge-list';
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
            overflow: auto;
            height: 500px;
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
                <event-badge name="${badge.name}" line2="${badge.line2}" line3="${badge.line3}" media="${badge.media}" mainimage="${badge.mainimage}" secimage="${badge.secimage}" sepia="${this.sepia}" bw="${this.bw}"></event-badge>
            </div>
            `)}
        </div>
        `;
    }
    
}

customElements.define(MyBadgeList.tag, MyBadgeList);