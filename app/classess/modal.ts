export default class Modal {
    public readonly id: string;
    private modalElement: null | HTMLElement;
    private isOpened: boolean = false;

    constructor(id: string) {
        this.id = id;
    }

    open(): void {
        if (this.isOpened) {
            return;
        }
        document.body.appendChild(this.modalElement);
        this.isOpened = true;
    }

    private getCloseButton() {
        const closeButton = document.createElement('button');
        closeButton.id = 'close_'+this.id;
        closeButton.type = 'brn';
        closeButton.innerHTML = 'X';
        closeButton.className = 'close-modal';
        closeButton.setAttribute('data-modal-id', 'tour-modal');
        closeButton.onclick = () => this.close();
        return closeButton;
    }

    public createModal(template: string): void {
        const modalElement = document.createElement("div");
        modalElement.id = this.id;
        modalElement.setAttribute('modal_id', this.id);
        modalElement.setAttribute('z-index', '100');
        modalElement.className = 'modal-element';
        modalElement.innerHTML = template;
        modalElement.append(this.getCloseButton());

        const closeBtn = modalElement.querySelector(".close-modal");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                this.close();
            });
        }

        this.modalElement = modalElement;
    }

    close(): void {
        if (this.isOpened) {
            document.getElementById(this.id).remove();
            this.isOpened = false;
        }
    }
}
