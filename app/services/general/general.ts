
/* Общие методы используются для вставки текста в header   footer*/

export function initHeaderTitle(ticketName: string, selector: string): void {
    const headerElement: HTMLElement = document.querySelector('header');
    const targetItem: HTMLElement = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}

export function initFooterTitle(ticketName: string, selector: string): void {
    const headerElement: HTMLElement = document.querySelector('footer');
    const targetItem: HTMLElement = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}