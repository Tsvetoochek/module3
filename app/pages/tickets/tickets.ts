import {getTicketById} from "@rest/tickets";
import '@myCss'; // добавлена новая ссылка - ссылка ведет на один файл
import '@assets/styles/tickets.scss'
import {IVipTicket, TicketType} from "../../models/ticket/ticket";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";
import {initTicketInfo, registerConfirmButton} from "@services/tickets/ticket";


let ticketInstance: TicketType ;

function initApp(ticketId: string): void {
    const ticketData: Promise<IVipTicket[]> = getTicketById<IVipTicket>(ticketId);
    console.log('ticketData', ticketData);
    ticketData.then((data): void => {
        ticketInstance = data[0];
        const ticketName = typeof ticketInstance?.name === "string" ? ticketInstance?.name : '';
        initHeaderTitle(ticketName, 'h3');
        initFooterTitle('Туры по всему миру', 'h2');
        initTicketInfo(ticketInstance);
    });
    registerConfirmButton();
}

function getParameterByName(name: string, url: string = window.location.href): string | null {
    name = name.replace(/[[]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const idFromQueryString = getParameterByName("id");

initApp(idFromQueryString);

