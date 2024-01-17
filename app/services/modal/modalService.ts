
import Modal from "../../classess/modal";
import {toursDataArray} from "../../index";

// Определить типы для метода (возвращающие и для переменных в теле функции)

export function openModal(type: string, i: number): void {

    const data = toursDataArray[i];
    const tourId = data[i]?.id;

    let modalInfo = {};
    switch (type) {
        case "order":

            const modalTemplate = `
                <div> 
                  <p>${data.name}</p>
                  <p>${data.description}</p>
                  <div data-tour-id=${tourId} class="ticket-submit">
                    <a href="/ticket.html">Купить билет</a>
                  </div>
                </div>`;

        ModalService.open('tour-modal-'+i, modalTemplate)
        break;
    }
}


export class ModalService {
    private static modals: Modal[] = [];

    static open(id: string, template: string): void {
        const modal = this.findModalById(id);

        if (modal) {
            modal.open(template);
        } else {
            const newModal = new Modal(id);
            newModal.open(template);
            this.modals.push(newModal);
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