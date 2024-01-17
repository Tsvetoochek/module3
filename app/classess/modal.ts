export default class Modal {
    public readonly id: string;
    private modalElement: null | HTMLElement;

    constructor(id: string) {
        this.id = id;
    }

    open(template: string): void {
        if (this.modalElement) {
            this.modalElement.style.display = 'block';
        } else {
            this.createModal(template);
        }
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

    private createModal(template: string): void {
        const modalElement = document.createElement("div");
        modalElement.id = this.id;
        modalElement.setAttribute('modal_id', this.id);
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

        document.body.appendChild(this.modalElement);
    }

    close(): void {
        if (this.modalElement) {
            this.modalElement.style.display = 'none';
        }
    }
}
