
import Modal from "../../classess/modal";
import {toursDataArray} from "../../index";

export function openModal(type: string, i: number): void {
    if (type === "order") {
        openTourModal(i);
    }
}

function openTourModal(tourIndx: number) {
    const data = toursDataArray[tourIndx];
    const tourId = data?.id || 0;
    const modalBody = `
                <div> 
                  <p>${data.name}</p>
                  <p>${data.description}</p>
                  <div data-tour-id=${tourId} class="ticket-submit">
                    <a href="./ticket.html?id=${tourId}">Купить билет</a>
                  </div>
                </div>`;

    ModalService.open('tour-modal-' + tourId, modalBody)
}


export class ModalService {
    private static modals: Modal[] = [];

    static open(id: string, template: string): void {

        this.modals.forEach((modal) => modal.close());

        const modal = this.findModalById(id);

        if (modal) {
            modal.open();
        } else {
            const newModal = new Modal(id);
            this.modals.push(newModal);
            newModal.createModal(template);
            newModal.open();
        }
    }

    static remove(id: string): void {
        const modal = this.findModalById(id);
        if (modal) {
            modal.close();
            this.modals = this.modals.filter((m) => m !== modal);
        }
    }

    private static findModalById(id: string): Modal | undefined {
        return this.modals.find((modal) => modal.id === id);
    }
}